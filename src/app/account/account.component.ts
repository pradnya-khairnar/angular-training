import { Component, Input } from "@angular/core";
// import { LogService } from "../log.service";
import { AccountService } from "../accounts.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
  // providers: [LogService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    // private loggingService: LogService,
    private acountsService: AccountService
  ) {}

  onSetTo(status: string) {
    this.acountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  }
}
