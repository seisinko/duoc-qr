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

 
  passwordTypeLogin: string = 'password';
  passwordIconLogin: string = 'eye-off';

  passwordTypeRegister: string = 'password';
  passwordIconRegister: string = 'eye-off';

  passwordTypeConfirm: string = 'password';
  passwordIconConfirm: string = 'eye-off';

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {}

  async onLogin() {
  
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

  
    if (this.loginData.username === storedUsername && this.loginData.password === storedPassword) {
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
    
      localStorage.setItem('username', this.registerData.username);
      localStorage.setItem('password', this.registerData.password);

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


  togglePassword(input: string) {
    if (input === 'login') {
      this.passwordTypeLogin = this.passwordTypeLogin === 'password' ? 'text' : 'password';
      this.passwordIconLogin = this.passwordIconLogin === 'eye-off' ? 'eye' : 'eye-off';
    } else if (input === 'register') {
      this.passwordTypeRegister = this.passwordTypeRegister === 'password' ? 'text' : 'password';
      this.passwordIconRegister = this.passwordIconRegister === 'eye-off' ? 'eye' : 'eye-off';
    } else if (input === 'confirm') {
      this.passwordTypeConfirm = this.passwordTypeConfirm === 'password' ? 'text' : 'password';
      this.passwordIconConfirm = this.passwordIconConfirm === 'eye-off' ? 'eye' : 'eye-off';
    }
  }
}



