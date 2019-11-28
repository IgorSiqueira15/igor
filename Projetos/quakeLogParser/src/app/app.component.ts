import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "quakeLogParser";

  fileLines: string[];
  games: number = -1;
  deaths: number = 0;
  numberLines: number = 0;

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
    this.fileLines = log.split(/[0-9]?[0-9]?[0-9]:[0-9][0-9]/);
    // console.log("Testando: \n" + this.fileLines);
    let a = [];
    let count = 0;
    this.fileLines.forEach(line => {
      this.numberLines++;
      if (line.includes(" InitGame:")) {
        this.games++;
        count = 0;
      }
      if (line.includes("Kill")) {
        count++;
        a[this.games] = count;
      }

      if (this.numberLines >= 675 && this.numberLines <= 815) {
        this.deaths++;
      }
    });
    console.log("Quantidade de Mortos: " + this.deaths);
    // console.log("Quantidade de Jogos: " + this.games);
    // console.log("Numero de Linhas: " + this.numberLines);
    console.log(a);
  }
}
