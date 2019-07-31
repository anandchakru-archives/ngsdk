import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { UtilService } from './services/util.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Invite, Guest } from './util/nivite3-model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'n3-ngsdk-lib',
  templateUrl: './ngsdk-lib.component.html',
  styleUrls: ['./ngsdk-lib.component.scss']
})
export class NgsdkLibComponent implements OnInit, OnDestroy {
  private uns = new Subject();
  @Input() fireconfig: any/* gapi.client.firebase.WebAppConfig */;
  @Output() invite = new EventEmitter<Invite>();
  @Output() login = new EventEmitter<firebase.User>();
  @Output() guest = new EventEmitter<Guest>();
  constructor(private util: UtilService, private title: Title) {
    title.setTitle('Nivite - Loading');
    this.util.userSub.pipe(takeUntil(this.uns)).subscribe((user: firebase.User) => {
      this.login.emit(user);
    });
    this.util.inviteSub.pipe(takeUntil(this.uns)).subscribe((invite: Invite) => {
      this.invite.emit(invite);
      title.setTitle('Nivite - ' + invite ? invite.hostName : ' Oops!');
    });
    this.util.guestSub.pipe(takeUntil(this.uns)).subscribe((guest: Guest) => {
      this.guest.emit(guest);
    });
  }

  ngOnInit() {
    this.util.initializeFirestore(this.fireconfig);
  }
  ngOnDestroy() {
    this.uns.next();
    this.uns.complete();
  }

}
