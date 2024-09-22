import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  email: string = ''; 

  constructor(private toastController: ToastController) { }

  ngOnInit() { }

  async restablecerContrasena() {
    if (this.email) {
      
      const toast = await this.toastController.create({
        message: 'Se ha enviado un correo para restablecer tu contrasena.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, ingresa un correo electronico.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
    }
  }
}
