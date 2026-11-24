import { Injectable } from '@angular/core';

const SESSION_KEY = 'biblioteca_session';
const DEMO_EMAIL = 'admin@biblioteca.com';
const DEMO_PASSWORD = '123456';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, password: string): boolean {
    const valid = email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD;
    if (valid) {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ email: DEMO_EMAIL, loggedInAt: new Date().toISOString() }));
    }
    return valid;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(SESSION_KEY);
  }

  getUserEmail(): string | null {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) return null;
    try {
      return JSON.parse(session).email ?? null;
    } catch {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem(SESSION_KEY);
  }
}
