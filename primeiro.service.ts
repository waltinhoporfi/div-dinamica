import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimeiroService {

  constructor() { }

  getInfo(){
    return ['Java', 'C', 'Python', 'MySql'];
  }

}
