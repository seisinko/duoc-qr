import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showQR = false;
  qrCodeDataUrl: string | null = null;
  username: string = '';

  constructor() {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || 'Invitado';
  }

  toggleQRCode() {
    this.showQR = !this.showQR;
    if (this.showQR) {
      this.generateRandomQRCode();
    }
  }

  generateRandomQRCode() {
    const randomString = Math.random().toString(36).substring(2, 15); // Genera una cadena aleatoria
    const qr = QRCode(0, 'L');
    qr.addData(randomString);
    qr.make();
    this.qrCodeDataUrl = qr.createDataURL(); // Genera el código QR como Data URL
  }
}
