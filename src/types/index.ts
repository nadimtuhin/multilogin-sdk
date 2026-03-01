// TypeScript interfaces for Multilogin X API responses

// ============================================
// Base Types
// ============================================

export interface ApiStatus {
  error_code: string;
  http_code: number;
  message: string;
}

// ============================================
// Profile Types
// ============================================

export interface BrowserProfile {
  id: string;
  name: string;
  browser: string;
  os: string;
  status: string;
  folder_id?: string;
  created_time?: number;
  last_modified?: number;
  [key: string]: any;
}

export interface ProfileCreatedResponse {
  id: string;
  name: string;
  status: string;
}

export interface ProfileDeletedResponse {
  id: string;
  status: string;
}

// ============================================
// Launcher Types
// ============================================

export interface BrowserStartedResponse {
  id: string;
  name: string;
  status: string;
  browser_type?: string;
  port?: number;
  websocket?: string;
}

export interface BrowserStoppedResponse {
  id: string;
  status: string;
}

export interface ProfileStatus {
  id: string;
  status: 'Running' | 'Stopped' | 'Starting' | 'Stopping';
  browser_id?: string;
  port?: number;
  start_url?: string;
}

export interface ProfileAllStatusResponse {
  [profileId: string]: ProfileStatus;
}

export interface VersionResponse {
  version: string;
  build: string;
}

// ============================================
// Workspace Types
// ============================================

export interface Workspace {
  id: string;
  name: string;
  owner: string;
  role: string;
  created_time?: number;
  member_count?: number;
}

export interface TokenInfo {
  token: string;
  refresh_token: string;
  expires_at?: number;
}

export interface TokenListItem {
  id: string;
  name: string;
  created_time: number;
  last_used_time?: number;
}

// ============================================
// Proxy Types
// ============================================

export interface ProxyValidationResult {
  valid: boolean;
  error?: string;
  country?: string;
  ip?: string;
}

export interface ProxyConfig {
  id: string;
  name: string;
  type: 'http' | 'https' | 'socks4' | 'socks5';
  host: string;
  port: string;
  username?: string;
  password?: string;
}

// ============================================
// Cookie Types
// ============================================

export interface CookieSet {
  id: string;
  name: string;
  domain: string;
  cookies: Cookie[];
  created_time?: number;
}

export interface Cookie {
  name: string;
  value: string;
  domain: string;
  path?: string;
  expires?: number;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: string;
}

// ============================================
// Script Runner Types
// ============================================

export interface ScriptStatus {
  id: string;
  profile_id: string;
  status: 'Running' | 'Stopped' | 'Error';
  output?: string;
  error?: string;
}
