import { Component, OnInit } from "@angular/core";
import { Dashboard } from "./dashboard";
import { CoreService } from "../core.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "src/app/modal/modal.component";
import { Panel } from "primeng/panel";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  items: Dashboard[];
  panels: Panel[];

  constructor(private coreService: CoreService, protected modal: NgbModal) {}

  ngOnInit() {}

  onModalItem() {
    const modal = this.modal.open(ModalComponent, { size: "lg" });
    modal.result.then(confirmado => {});
  }
}
