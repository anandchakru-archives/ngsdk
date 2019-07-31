import { Component, Renderer2, OnInit } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'n3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fireconfig = environment.firebase;

  loadInviteData(invite: any) {
    console.log('invite:: ' + (invite ? JSON.stringify(invite) : invite));
  }
  loadUserData(user: any) {
    console.log('user:' + (user ? JSON.stringify(user) : user));
  }
  loadGuestData(guest: any) {
    console.log('guest:' + (guest ? JSON.stringify(guest) : guest));
  }
}
