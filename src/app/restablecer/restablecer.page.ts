import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  username: string = ''; 
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private toastController: ToastController) { }

  ngOnInit() { }

  async restablecerContrasena() {
    if (!this.username || !this.newPassword || !this.confirmPassword) {
      const toast = await this.toastController.create({
        message: 'Por favor, completa todos los campos.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      const toast = await this.toastController.create({
        message: 'Las contraseñas no coinciden.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
      return;
    }

    
    localStorage.setItem('password', this.newPassword);

    const toast = await this.toastController.create({
      message: 'Contraseña restablecida exitosamente.',
      duration: 2000,
      position: 'top',
    });
    toast.present();

    
    this.username = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }
}

