import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "quakeLogParser";


  fileLines: string[];
  count: number = 0;
  
  //Atributos do jogo
  games: number = 0;
  kills = [];
  players = [];
  linePlayers: string[];

  readFile($event): void {
    this.readThis($event.target);
  }

  readThis(valueInput: any): void {
    var file: File = valueInput.files[0];
    var reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = e => {
      this.logResult(reader.result);
    };
  }

  logResult(log) {
    this.fileLines = log.split(/[0-9]?[0-9]?[0-9]:[0-9][0-9]/);

    this.fileLines.forEach(line => {
      //Busca a quantidade de jogos
      if (line.includes(" InitGame:")) {
        this.games++;
        this.count = 0;
      }
      //Busca a quantidade total de kill em cada partida
      if (line.includes("Kill: ")) {
        this.count++;
        if(this.count === undefined){
          return this.count = 0;
        }
        this.kills[this.games] = this.count;
      }        
    });
    console.log("Quantidade de Jogos: " + this.games);
    console.log("Morte de Cada Jogo: " + this.kills);
  }
}
