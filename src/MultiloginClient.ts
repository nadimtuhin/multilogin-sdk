import { MultiloginOptions, getBaseUrl, getToken, MultiloginResponse, MultiloginError } from './config/options';
import { TokenManager } from './token/TokenManager';
import { Launcher } from './resources/Launcher';
import { ProfileManagement } from './resources/ProfileManagement';
import { Proxy } from './resources/Proxy';
import { CookieManagement } from './resources/CookieManagement';
import { ScriptRunner } from './resources/ScriptRunner';
import { ProfileAccess } from './resources/ProfileAccess';

export class MultiloginClient {
  public readonly launcher: Launcher;
  public readonly profiles: ProfileManagement;
  public readonly proxy: Proxy;
  public readonly cookies: CookieManagement;
  public readonly scripts: ScriptRunner;
  public readonly profileAccess: ProfileAccess;

  // Backward compatibility
  public readonly baseUrl: string;
  public readonly profileAccessManagement: ProfileAccess;
  public readonly profileManagement: ProfileManagement;

  private tokenManager: TokenManager;

  /**
   * New recommended constructor
   */
  constructor(options: MultiloginOptions);
  
  /**
   * Legacy constructor (backward compatible)
   */
  constructor(baseUrl: string, token: string);
  
  constructor(optionsOrBaseUrl: string | MultiloginOptions, token?: string) {
    // Handle both constructor signatures
    let baseUrl: string;
    let tokenStr: string;

    if (typeof optionsOrBaseUrl === 'object') {
      const options = optionsOrBaseUrl;
      baseUrl = options.baseUrl || getBaseUrl();
      tokenStr = options.token || getToken() || '';
    } else {
      baseUrl = optionsOrBaseUrl;
      tokenStr = token || '';
    }

    this.baseUrl = baseUrl;
    this.tokenManager = new TokenManager(tokenStr);

    // Initialize resources
    this.launcher = new Launcher(baseUrl, this.tokenManager);
    this.profiles = new ProfileManagement(baseUrl, this.tokenManager);
    this.proxy = new Proxy(baseUrl, this.tokenManager);
    this.cookies = new CookieManagement(baseUrl, this.tokenManager);
    this.scripts = new ScriptRunner(baseUrl, this.tokenManager);
    this.profileAccess = new ProfileAccess(baseUrl, this.tokenManager);

    // Backward compatible aliases
    this.profileAccessManagement = this.profileAccess;
    this.profileManagement = this.profiles;
  }

  /**
   * Set authentication token
   */
  setToken(token: string): void {
    this.tokenManager.setToken(token);
  }

  /**
   * Get token manager
   */
  getTokenManager(): TokenManager {
    return this.tokenManager;
  }
}

// Re-export for convenience
export { MultiloginOptions, MultiloginResponse, MultiloginError } from './config/options';
export { TokenManager } from './token/TokenManager';
