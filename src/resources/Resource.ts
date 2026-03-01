import { MultiloginError, MultiloginResponse } from '../config/options';
import { TokenManager } from '../token/TokenManager';

export abstract class Resource {
  protected baseUrl: string;
  protected tokenManager: TokenManager;

  constructor(baseUrl: string, tokenManager: TokenManager) {
    this.baseUrl = baseUrl;
    this.tokenManager = tokenManager;
  }

  protected async request<T = any>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<MultiloginResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (this.tokenManager.getToken()) {
      headers['Authorization'] = `Bearer ${this.tokenManager.getToken()}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (data.status?.error_code && data.status.error_code !== 'OK') {
        return {
          success: false,
          error: new MultiloginError(
            data.status.message || 'API Error',
            data.status.error_code,
            data.status.http_code,
            data
          ),
          status: data.status,
        };
      }

      return {
        success: true,
        data: data.data,
        status: data.status,
      };
    } catch (error: any) {
      return {
        success: false,
        error: new MultiloginError(
          error.message || 'Network Error',
          'NETWORK_ERROR',
          0,
          error
        ),
        status: { error_code: 'NETWORK_ERROR', http_code: 0, message: error.message },
      };
    }
  }

  protected async get<T = any>(endpoint: string): Promise<MultiloginResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  protected async post<T = any>(endpoint: string, body?: any): Promise<MultiloginResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  protected async put<T = any>(endpoint: string, body?: any): Promise<MultiloginResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  protected async delete<T = any>(endpoint: string): Promise<MultiloginResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}
