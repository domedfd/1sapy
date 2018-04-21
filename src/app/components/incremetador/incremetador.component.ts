import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-incremetador',
  templateUrl: './incremetador.component.html',
  styles: []
})
export class IncremetadorComponent implements OnInit {

  @ViewChild('txtprogress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
  onChange( newValue: number){

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log( this.txtProgress );

    if ( newValue >= 100 ){
      this.progreso = 100;
    }else if ( newValue <= 0 ){
      this.progreso = 0;
    }else{
    this.progreso = newValue;
    }

    // elemHTML.value = this.progreso ;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

    
  }
  cambiarvalor( valor: number ) {

    if ( this.progreso + valor > 100 ) {
      return;
      }
      if ( this.progreso + valor < 0 ) {
      return;
      }
      this.progreso = this.progreso + valor;

      this.cambioValor.emit(this.progreso);

      this.txtProgress.nativeElement.focus();

      }

}
