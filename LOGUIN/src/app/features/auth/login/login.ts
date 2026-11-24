import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    if (this.authService.isAuthenticated()) this.router.navigate(['/inicio']);
  }

  login(): void {
    this.errorMessage = '';
    if (!this.email.trim() || !this.password) {
      this.errorMessage = 'Completa tu correo electrónico y contraseña.';
      return;
    }
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/inicio']);
    } else {
      this.errorMessage = 'El correo electrónico o la contraseña son incorrectos.';
    }
  }
}
