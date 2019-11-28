import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "quakeLogParser";

  fileLines: string[];

  readFile($event): void {
    this.readThis($event.target);
  }

  readThis(valueInput: any): void {
    var file: File = valueInput.files[0];
    var reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = e => {
      this.logResult(reader.result);
      // console.log(reader.result);
    };
  }

  logResult(log) {
    console.log("Testando: ", log);
  }
}
