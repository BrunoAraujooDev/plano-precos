import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input()
  altura: string = "550px";
  @Input()
  titulo: string = "Titulo";
  @Input()
  preco: string = "";
  @Input()
  conteudos: string[] = [];
  @Input()
  fundo: string = "#fff";
  @Input()
  corLetra: string = "rgb(79 80 88)";
  @Input()
  corLetraBotao: string = "#7E7BCE";
  @Input()
  fundoBotao: string = "#fff";


  @Output()
  btnClick: EventEmitter<any> = new EventEmitter<any>();

  emitirClick(): void{
    this.btnClick.emit();
  }

}
