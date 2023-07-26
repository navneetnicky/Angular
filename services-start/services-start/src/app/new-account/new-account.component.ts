import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent {

  constructor ( private loggingService: LoggingService, private accountServices: AccountsService )
  {
    this.accountServices.statusUpdated.subscribe((status:string)=> alert('new status' + status))
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountServices.addAccount(accountName,accountStatus)
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus)
  }
}
