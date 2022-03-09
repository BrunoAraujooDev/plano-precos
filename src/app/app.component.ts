import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardPrecos';
  constructor(private _snackBar: MatSnackBar) {}

  lista1: string[] = ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"];
  lista2: string[] = ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"];
  lista3: string[] = ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"];

  
  openSnackBar(){
    this._snackBar.open("Pacote Comprado", "X")
  }
  
}
