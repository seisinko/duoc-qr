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
  loginData = { username: '', password: '' };
  registerData = { username: '', password: '', confirmPassword: '' };

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {}

  async onLogin() {
    
    if (this.loginData.username === 'user123' && this.loginData.password === 'password123') {
      const toast = await this.toastController.create({
        message: 'Inicio de sesión exitoso.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
      this.router.navigate(['/home']); 
    } else {
      const toast = await this.toastController.create({
        message: 'Nombre de usuario o contraseña incorrectos.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
    }
  }

  async onRegister() {
    
    if (this.registerData.password !== this.registerData.confirmPassword) {
      const toast = await this.toastController.create({
        message: 'Las contraseñas no coinciden.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
      return;
    }

    
    if (this.registerData.username && this.registerData.password) {
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

