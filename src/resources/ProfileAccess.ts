import { Resource } from './Resource';
import { MultiloginResponse } from '../config/options';

export class ProfileAccess extends Resource {
  async signIn(email: string, passwordMd5: string): Promise<MultiloginResponse> {
    return this.post('/user/signin', { email, password: passwordMd5 });
  }

  async refreshToken(refreshToken: string): Promise<MultiloginResponse> {
    return this.post('/user/refresh_token', { refresh_token: refreshToken });
  }

  async getWorkspaces(): Promise<MultiloginResponse> {
    return this.get('/api/v1/user/workspaces');
  }

  async getTokenList(): Promise<MultiloginResponse> {
    return this.get('/api/v1/user/tokens');
  }

  async getWorkspaceRestrictions(workspaceId: string): Promise<MultiloginResponse> {
    const endpoint = '/api/v1/workspaces/' + workspaceId + '/restrictions';
    return this.get(endpoint);
  }

  async getWorkspaceStatistics(workspaceId: string): Promise<MultiloginResponse> {
    const endpoint = '/api/v1/workspaces/' + workspaceId + '/statistics';
    return this.get(endpoint);
  }

  async getAutomationToken(workspaceId: string): Promise<MultiloginResponse> {
    const endpoint = '/api/v1/workspaces/' + workspaceId + '/automation-token';
    return this.get(endpoint);
  }
}
