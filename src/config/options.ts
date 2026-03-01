export interface MultiloginOptions {
  baseUrl?: string;
  token?: string;
  autoRefreshToken?: boolean;
  timeout?: number;
}

export interface MultiloginResponse<T = any> {
  success: boolean;
  data?: T;
  error?: MultiloginError;
  status: {
    error_code: string;
    http_code: number;
    message: string;
  };
}

export class MultiloginError extends Error {
  constructor(
    message: string,
    public code: string,
    public httpCode: number,
    public status?: any
  ) {
    super(message);
    this.name = 'MultiloginError';
  }
}

export function getBaseUrl(): string {
  return process.env.MULTILOGIN_BASE_URL || 'https://api.multilogin.com';
}

export function getToken(): string | undefined {
  return process.env.MULTILOGIN_TOKEN;
}
