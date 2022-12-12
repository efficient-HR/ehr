import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EmailDto } from 'src/app/api/notification/models';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.emails);
  }
  @Input() emails: EmailDto[] | null | undefined;
}
