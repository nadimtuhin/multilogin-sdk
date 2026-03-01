import { getBaseUrl } from '../config/options';

export class TokenManager {
  private token: string;
  private refreshToken?: string;
  private baseUrl: string;

  constructor(token: string, refreshToken?: string) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.baseUrl = getBaseUrl();
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
  }

  setRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
  }

  async refresh(): Promise<boolean> {
    if (!this.refreshToken) {
      return false;
    }
    
    try {
      const response = await fetch(`${this.baseUrl}/user/refresh_token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: this.refreshToken }),
      });
      
      const data = await response.json();
      
      if (data.status?.error_code === 'OK' && data.data?.token) {
        this.token = data.data.token;
        if (data.data.refresh_token) {
          this.refreshToken = data.data.refresh_token;
        }
        return true;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
    
    return false;
  }
}
