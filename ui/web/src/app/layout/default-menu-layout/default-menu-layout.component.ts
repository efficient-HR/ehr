import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-default-menu-layout',
  templateUrl: './default-menu-layout.component.html',
  styleUrls: ['./default-menu-layout.component.scss'],
})
export class DefaultMenuLayoutComponent implements OnInit {
  show: boolean;
  constructor(private layoutService: LayoutService) {
    this.show = this.layoutService.show();
  }
  ngOnInit(): void {}
}
