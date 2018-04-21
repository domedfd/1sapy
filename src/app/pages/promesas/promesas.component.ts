import { Component, OnInit } from '@angular/core';
import { resolve } from 'path';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

      this.contraTres().then(
        mensaje => console.log('Termino', mensaje)
      )
      .catch( error => console.error('Error en la promesa', error ));


  }

  ngOnInit() {
  }

contraTres(): Promise<boolean> {

  return new Promise( (resolve, reject) => {

          let contador =  0;

          let intervalo = setInterval( () => {

          contador += 1;
          console.log(contador);

          if ( contador === 3 ) {
            resolve( true );
            // reject('Simplesmente hubo un error!');
            clearInterval(intervalo);
              }

              }, 1000 );
          });

        

    }

}
