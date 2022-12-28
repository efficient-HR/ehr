import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-default-header-layout',
  templateUrl: './default-header-layout.component.html',
  styleUrls: ['./default-header-layout.component.scss'],
})
export class DefaultHeaderLayoutComponent {
  constructor(private layoutService: LayoutService) {}

  toggle() {
    this.layoutService.toggleMenu();
  }
}
