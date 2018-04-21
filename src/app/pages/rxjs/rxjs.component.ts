import { filter } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { resolve } from 'path';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {



  this.subscription =  this.regresaObservable()
  .subscribe(
    numero => console.log('Subs', numero ),
    error => console.log( 'Error en el obs', error ),
    () => console.log('El observador Termino')
   );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

regresaObservable(): Observable<any> {

  

  return  new Observable ( observer => {

    let contador = 0 ;

    let intervalo = setInterval( () => {


      let salida = {
        valor: contador
      };

      contador += 1;

      observer.next( salida );

      // if( contador === 3 ) {
      //   clearInterval( intervalo );
      //   observer.complete();
      // }

      // if (  contador === 2 ) {
      //   clearInterval( intervalo );
      //   observer.error('Error');

      // }

    }, 500 );

  })
  .map( (resp: any) => {
    return resp.valor + 1;
  })
.filter( (valor, index) =>{

    if (  valor % 2 === 1 ){
      // impar
      return true;
    }else {
      // par
      return false;
    }

   

});

}

}
