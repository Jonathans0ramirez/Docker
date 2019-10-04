import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumbersService {

  constructor() { }

  public arabicoToRomano(numero) {
    let numeroRomano = '';

    if(numero >= 1000){
      for(let i = numero; i >= 1000; i=i-1000){
        numeroRomano = numeroRomano.concat('M');
        numero = numero - 1000;
      }
    }
    if(numero >= 900){
      numeroRomano = numeroRomano.concat('CM');
      numero = numero - 900;
    }
    if(numero >= 500){
      numeroRomano = numeroRomano.concat('D');
      numero = numero - 500;
    }
    if(numero >= 400){
      numeroRomano = numeroRomano.concat('CD');
      numero = numero - 400;
    }
    if(numero >= 100){
      for(let i = numero; i >= 100; i=i-100){
        numeroRomano = numeroRomano.concat('C');
        numero = numero - 100;
      }
    }
    if(numero >= 90){
      numeroRomano = numeroRomano.concat('XC');
      numero = numero - 90;
    }
    if(numero >= 50){
      numeroRomano = numeroRomano.concat('L');
      numero = numero - 50;
    }
    if(numero >= 40){
      numeroRomano = numeroRomano.concat('XL');
      numero = numero - 40;
    }
    if(numero >= 10){
      for(let i = numero; i >= 10; i=i-10){
        numeroRomano = numeroRomano.concat('X');
        numero = numero - 10;
      }
    }
    if(numero == 9){
      numeroRomano = numeroRomano.concat('IX');
      numero = numero -9;
    }
    if(numero >= 5){
      numeroRomano = numeroRomano.concat('V');
      numero = numero - 5;
    }
    if(numero == 4){
      numeroRomano = numeroRomano.concat('IV');
      numero = numero - 4;
    }
    for(let i = 0; i<numero; i++){
      numeroRomano = numeroRomano.concat('I');
    }
    return numeroRomano;
  }
}
