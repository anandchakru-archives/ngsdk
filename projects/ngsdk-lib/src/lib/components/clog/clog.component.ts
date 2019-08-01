import { Component, OnInit, HostListener } from '@angular/core';
import { ClogService } from '../../services/clog.service';

@Component({
  selector: 'n3-clog',
  templateUrl: './clog.component.html',
  styleUrls: ['./clog.component.scss']
})
export class ClogComponent implements OnInit {
  fs = false;  // fullscreen - WIP
  constructor(public clog: ClogService) { }

  ngOnInit() { }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    this.clog.hide();
  }
}
