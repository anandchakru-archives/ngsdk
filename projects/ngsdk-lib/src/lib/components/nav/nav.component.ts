import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { ClogService } from '../../services/clog.service';
import { BUILDINFO } from '../../buildinfo';

@Component({
  selector: 'n3-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  buildinfo = BUILDINFO;
  constructor(public util: UtilService, public clog: ClogService) { }

  ngOnInit() {
  }

  login() {
    this.util.google(() => { });
    return false;
  }



}
