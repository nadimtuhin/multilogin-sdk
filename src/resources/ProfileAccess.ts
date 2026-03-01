import { Resource } from './Resource';
import { MultiloginResponse } from '../config/options';
import { Workspace, TokenInfo, TokenListItem } from '../types';

export class ProfileAccess extends Resource {
  /**
   * Sign in with email and MD5 hashed password
   */
  async signIn(email: string, passwordMd5: string): Promise<MultiloginResponse<TokenInfo>> {
    return this.post<TokenInfo>('/user/signin', { email, password: passwordMd5 });
  }

  /**
   * Refresh authentication token
   */
  async refreshToken(refreshToken: string): Promise<MultiloginResponse<TokenInfo>> {
    return this.post<TokenInfo>('/user/refresh_token', { refresh_token: refreshToken });
  }

  /**
   * Get user workspaces
   */
  async getWorkspaces(): Promise<MultiloginResponse<Workspace[]>> {
    return this.get<Workspace[]>('/api/v1/user/workspaces');
  }

  /**
   * Get token list
   */
  async getTokenList(): Promise<MultiloginResponse<TokenListItem[]>> {
    return this.get<TokenListItem[]>('/api/v1/user/tokens');
  }

  /**
   * Get workspace restrictions
   */
  async getWorkspaceRestrictions(workspaceId: string): Promise<MultiloginResponse> {
    var endpoint = '/api/v1/workspaces/' + workspaceId + '/restrictions';
    return this.get(endpoint);
  }

  /**
   * Get workspace statistics
   */
  async getWorkspaceStatistics(workspaceId: string): Promise<MultiloginResponse> {
    var endpoint = '/api/v1/workspaces/' + workspaceId + '/statistics';
    return this.get(endpoint);
  }

  /**
   * Get automation token
   */
  async getAutomationToken(workspaceId: string): Promise<MultiloginResponse<TokenInfo>> {
    var endpoint = '/api/v1/workspaces/' + workspaceId + '/automation-token';
    return this.get<TokenInfo>(endpoint);
  }
}
