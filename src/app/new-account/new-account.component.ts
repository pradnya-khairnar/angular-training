import { Component } from "@angular/core";
// import { LogService } from "../log.service";
import { AccountService } from "../accounts.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"]
  // providers: [LogService]
})
export class NewAccountComponent {
  constructor(
    // private logginService: LogService,
    private accountsService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
