import { Component, OnInit, ElementRef, ViewChild, HostListener, Renderer2 } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { ModalMsg } from '../../util/nivite3-model';
import { AtcService } from '../../services/atc.service';

@Component({
  selector: 'n3-atc',
  templateUrl: './atc.component.html',
  styleUrls: ['./atc.component.scss']
})
export class AtcComponent implements OnInit {
  @ViewChild('atcModal', { static: false }) atcModal: ElementRef;

  constructor(private renderer: Renderer2, private util: UtilService, public atc: AtcService) {
    this.util.showModalSub.subscribe((modalMsg: ModalMsg) => {
      if (modalMsg && modalMsg.id === 'atc') {
        if (modalMsg.show) {
          this.showAtcModal();
        } else {
          this.hideAtcModal();
        }
      }
    });
  }

  ngOnInit() {
  }


  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    this.hideAtcModal();
  }

  hideAtcModal(event?: Event) {
    if (!event || (event.target as Element).classList.contains('modal')) {
      this.renderer.setStyle(this.atcModal.nativeElement, 'display', 'none');
      this.renderer.removeClass(this.atcModal.nativeElement, 'show');
    }
  }
  showAtcModal() {
    this.renderer.setStyle(this.atcModal.nativeElement, 'display', 'block');
    this.renderer.addClass(this.atcModal.nativeElement, 'show');
  }
}
