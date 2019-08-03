import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, Renderer2 } from '@angular/core';
import { UtilService } from './services/util.service';
import { takeUntil, take, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Invite, Guest, Growl } from './util/nivite3-model';
import { Title } from '@angular/platform-browser';
import { ClogService } from './services/clog.service';

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
  constructor(private util: UtilService, private title: Title, private clog: ClogService, private renderer: Renderer2) {
    title.setTitle('Nivite - Loading');
    this.util.userSub.pipe(take(1)).subscribe((user: firebase.User) => {  // One time - invitalize firestore config
      this.util.initializeFirestore(this.fireconfig);
      if (this.util.customerFirestore) {
        this.util.setupInvite();
      } else {
        this.missingFirebaseConfig();
      }
    });
    this.util.guestSub.pipe(takeUntil(this.uns)).subscribe((guest: Guest) => { // On everytime guest is loaded
      this.guest.emit(guest);
    });
    this.util.inviteSub.pipe(takeUntil(this.uns)).subscribe((invite: Invite) => { // On everytime invite is loaded
      this.invite.emit(invite);
      title.setTitle('Nivite - ' + (invite ? invite.hostName : ' Oops!'));
    });
    this.util.userSub.pipe(takeUntil(this.uns)).subscribe((user: firebase.User) => {  // On every login/logout
      if (this.util.customerFirestore) {
        this.util.setupGuest(user);
        this.login.emit(user);
      } else {
        this.missingFirebaseConfig();
      }
    });
  }

  private missingFirebaseConfig() {
    if (this.util.inviteId) {
      this.util.growlSub.next(new Growl('ERROR: Firebase config missing or invalid'
        , 'Please update environment.ts and environment.prod.ts with valid firebase config.', 'danger'));
    } else {
      this.util.growlSub.next(new Growl('WARN: Preview mode'
        , 'Prevew mode - using sample data. Firebase config missing.', 'warning'));
      this.util.sampleInvite();
      this.util.sampleGuest();
    }
  }

  ngOnInit() {
    // If you are changing the margin values - dont forget .growls {top: 70px;}
    this.renderer.setStyle(document.body, 'margin-top', '60px');
    this.renderer.setStyle(document.body, 'margin-bottom', '60px');
  }
  ngOnDestroy() {
    this.uns.next();
    this.uns.complete();
  }

}
