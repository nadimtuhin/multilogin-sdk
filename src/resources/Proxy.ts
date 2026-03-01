import { Resource } from './Resource';
import { MultiloginResponse } from '../config/options';

export interface ProxyOptions {
  type: string;
  host: string;
  port: string;
  username?: string;
  password?: string;
}

export class Proxy extends Resource {
  /**
   * Validate proxy
   */
  async validate(options: ProxyOptions): Promise<MultiloginResponse> {
    return this.post('/api/v1/proxy/validate', options);
  }

  /**
   * Get proxy list for workspace
   */
  async list(workspaceId: string): Promise<MultiloginResponse> {
    return this.get(`/api/v1/workspaces/${workspaceId}/proxies`);
  }

  /**
   * Create proxy
   */
  async create(workspaceId: string, options: ProxyOptions & { name: string }): Promise<MultiloginResponse> {
    return this.post(`/api/v1/workspaces/${workspaceId}/proxies`, options);
  }

  /**
   * Delete proxy
   */
  async delete(workspaceId: string, proxyId: string): Promise<MultiloginResponse> {
    return this.delete(`/api/v1/workspaces/${workspaceId}/proxies/${proxyId}`);
  }
}
