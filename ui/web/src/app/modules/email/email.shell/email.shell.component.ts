import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email.shell',
  templateUrl: './email.shell.component.html',
  styleUrls: ['./email.shell.component.scss'],
})
export class EmailShellComponent implements OnInit {
  emails: any;
  constructor(private emailService: EmailService) {}
  async ngOnInit() {
    this.emails = this.emailService.getEmails();
  }
}
