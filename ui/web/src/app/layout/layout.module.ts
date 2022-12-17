import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHeaderLayoutComponent } from './default-header-layout/default-header-layout.component';
import { DefaultFooterLayoutComponent } from './default-footer-layout/default-footer-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { RouterModule } from '@angular/router';
import { DefaultMenuLayoutComponent } from './default-menu-layout/default-menu-layout.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DefaultHeaderLayoutComponent,
    DefaultFooterLayoutComponent,
    DefaultMenuLayoutComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
