import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {}

  
  generateQR() {
    console.log('Botón de QR presionado');
   
  }
}
