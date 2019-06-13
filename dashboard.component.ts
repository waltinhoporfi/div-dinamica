import { Component, OnInit } from '@angular/core';
import { PrimeiroService } from './primeiro.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url: string = 'https://picsum.photos/id/301/200/300';

  constructor( private primeiroService: PrimeiroService ) { 
   
  }

  ngOnInit() {
    
  }

}
