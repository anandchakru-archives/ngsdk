import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Subject, timer, interval } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { KeyValue } from '@angular/common';
import { Growl } from '../../util/nivite3-model';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'n3-growls',
  templateUrl: './growls.component.html',
  styleUrls: ['./growls.component.scss']
})
export class GrowlsComponent implements OnInit, OnDestroy {
  uns = new Subject();
  growls: { [id: string]: Growl } = {};
  constructor(private zone: NgZone, private util: UtilService) {
    this.util.growlSub.pipe(takeUntil(this.uns)).subscribe((growl: Growl) => {
      const gid = this.rnd();
      if (growl.autoclose) {
        const startTime = new Date();
        const countr = timer(0, 500).pipe(takeUntil(this.uns), takeUntil(interval(growl.timeout)), takeUntil(growl.close))
          .subscribe((t: number) => {
            const countdown = this.timeleft(growl.timeout, startTime) - 1000;
            growl.percent = Math.round(100 - (countdown * 100 / growl.timeout));
          }, err => { }, () => {
            this.close(gid);
            growl.after();
          });
        setTimeout(() => {
          countr.unsubscribe();
        }, growl.timeout);
      }
      this.growl(gid, growl);
    });
  }
  ngOnInit() { }
  ngOnDestroy() {
    this.uns.next();
    this.uns.complete();
  }
  rnd(): string {
    return Math.random().toString(36).substr(2, 7);
  }
  timeleft(timeoutms: number, startTime: Date): number {
    return timeoutms - Math.abs(+(startTime) - +(new Date()));
  }
  ids(): string[] {
    return Object.keys(this.growls);
  }
  growl(gid: string, growl: Growl) {
    const ids = this.ids();
    if (ids.length >= this.util.growlMax) {
      this.close(ids[0]);
    }
    this.zone.run(() => {
      this.growls[gid] = growl;
    });
  }
  close(id: string) {
    const g = this.growls[id];
    g.close.next();
    g.close.complete();
    this.zone.run(() => {
      delete this.growls[id];
    });
  }
  descOrder = (a: KeyValue<string, Growl>, b: KeyValue<string, Growl>): number => {
    return a.value.id > b.value.id ? 1 : b.value.id > a.value.id ? -1 : 0;
  }
}
