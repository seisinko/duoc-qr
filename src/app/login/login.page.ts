import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authType: string = 'login';  
  loginData = { email: '', password: '' };
  registerData = { username: '', email: '', password: '' };

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {}

  async onLogin() {
    
    if (this.loginData.email === 'user@example.com' && this.loginData.password === 'password123') {
      const toast = await this.toastController.create({
        message: 'Inicio de sesión exitoso.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
      this.router.navigate(['/home']); 
    } else {
      const toast = await this.toastController.create({
        message: 'Correo o contraseña incorrectos.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
    }
  }

  async onRegister() {
    
    if (this.registerData.username && this.registerData.email && this.registerData.password) {
      const toast = await this.toastController.create({
        message: 'Cuenta creada exitosamente.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
      this.router.navigate(['/home']); 
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, completa todos los campos.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
    }
  }
}
