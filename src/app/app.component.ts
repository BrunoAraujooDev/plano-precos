import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardPrecos';

  lista1: string[] = ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"];
  lista2: string[] = ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"];
  lista3: string[] = ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"];

  alertaCompra():void{
    alert("Pacote comprado!");
  }
}
