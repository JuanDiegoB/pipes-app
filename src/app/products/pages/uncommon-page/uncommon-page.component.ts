import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // * i18n Select Pipe

  public name: string = 'Juan Diego';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }


  // * i18n Plural Pipe

  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia'
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  deleteClient(): void {
    this.clients.shift();
  }


  // * KeyValue Pipe

  public person = {
    name: 'Juan Diego',
    age: 36,
    address: 'Ottawa, Canada'
  }


  // * Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log( 'tap:', value ) )
  );

  public promiseValue = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa.' );
    }, 3500);
  });
}
