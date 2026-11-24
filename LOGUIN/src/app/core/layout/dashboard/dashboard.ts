import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({ selector: 'app-dashboard', standalone: true, imports: [RouterLink, RouterLinkActive, RouterOutlet], templateUrl: './dashboard.html', styleUrl: './dashboard.css' })
export class Dashboard {
  private authService = inject(AuthService);
  private router = inject(Router);
  today = new Intl.DateTimeFormat('es-PE', { dateStyle: 'full' }).format(new Date());

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
