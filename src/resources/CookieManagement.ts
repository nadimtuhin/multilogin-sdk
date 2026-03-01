import { Resource } from './Resource';
import { MultiloginResponse } from '../config/options';

export interface CookieOptions {
  name: string;
  domain: string;
  value: string;
  path?: string;
}

export class CookieManagement extends Resource {
  /**
   * Get all cookie sets
   */
  async list(): Promise<MultiloginResponse> {
    return this.get('/api/v1/premade-cookies');
  }

  /**
   * Create new cookie set
   */
  async create(name: string, cookies: CookieOptions[]): Promise<MultiloginResponse> {
    return this.post('/api/v1/premade-cookies', { name, cookies });
  }

  /**
   * Delete cookie set
   */
  async delete(cookiesId: string): Promise<MultiloginResponse> {
    return this.delete(`/api/v1/premade-cookies/${cookiesId}`);
  }

  /**
   * Export cookies for a profile
   */
  async export(profileId: string): Promise<MultiloginResponse> {
    return this.get(`/api/v1/profile/p/${profileId}/cookies/export`);
  }

  /**
   * Import cookies to a profile
   */
  async import(profileId: string, cookies: CookieOptions[]): Promise<MultiloginResponse> {
    return this.post(`/api/v1/profile/p/${profileId}/cookies/import`, { cookies });
  }
}
