import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDto } from 'src/app/api/notification/models';
import { EmailService } from 'src/app/api/notification/services';

@Component({
  selector: 'app-email.shell',
  templateUrl: './email.shell.component.html',
  styleUrls: ['./email.shell.component.scss'],
})
export class EmailShellComponent implements OnInit {
  emails!: Observable<EmailDto[]>;
  constructor(private emailService: EmailService) {}
  async ngOnInit() {
    this.emails = this.emailService.all();
  }
}
