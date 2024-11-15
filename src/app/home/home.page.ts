import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import * as QRCode from 'qrcode-generator'; 
import { HolidayService } from '../services/holiday.service';  

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showQR = false;
  qrCodeDataUrl: string | null = null;
  username: string = '';
  holidays: any[] = [];  

  constructor(private barcodeScanner: BarcodeScanner, private holidayService: HolidayService) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || 'Invitado';
    this.fetchHolidays();  
  }

  toggleQRCode() {
    this.showQR = !this.showQR;
    if (this.showQR) {
      this.generateRandomQRCode();
    }
  }

  generateRandomQRCode() {
    const randomString = Math.random().toString(36).substring(2, 15); 
    const qr = QRCode(0, 'L');
    qr.addData(randomString);
    qr.make();
    this.qrCodeDataUrl = qr.createDataURL(); 
  }

  scanQRCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  fetchHolidays() {
    this.holidayService.getHolidays().subscribe(
      (data) => {
        this.holidays = data;  
        console.log('Holidays:', this.holidays);  
      },
      (error) => {
        console.error('Error fetching holidays:', error);  
      }
    );
  }
}
