import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { EmailShellComponent } from './email.shell/email.shell.component';
import { EmailService } from './email.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EmailShellComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [EmailComponent, EmailShellComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [EmailShellComponent, EmailComponent, RouterModule],
})
export class EmailModule {}
