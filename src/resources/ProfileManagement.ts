import { Resource } from './Resource';
import { MultiloginResponse } from '../config/options';

export interface ProfileCreateOptions {
  name: string;
  browser?: string;
  os?: string;
  [key: string]: any;
}

export class ProfileManagement extends Resource {
  /**
   * List all profiles
   */
  async list(): Promise<MultiloginResponse> {
    return this.get('/api/v1/profile/list');
  }

  /**
   * Get a specific profile
   */
  async get(profileId: string): Promise<MultiloginResponse> {
    return this.get(`/api/v1/profile/p/${profileId}`);
  }

  /**
   * Create a new profile
   */
  async create(options: ProfileCreateOptions): Promise<MultiloginResponse> {
    return this.post('/api/v1/profile/create', options);
  }

  /**
   * Update a profile
   */
  async update(profileId: string, options: Record<string, any>): Promise<MultiloginResponse> {
    return this.post(`/api/v1/profile/update/${profileId}`, options);
  }

  /**
   * Delete a profile
   */
  async delete(profileId: string): Promise<MultiloginResponse> {
    return this.delete(`/api/v1/profile/p/${profileId}`);
  }

  /**
   * Clone a profile
   */
  async clone(profileId: string, name?: string): Promise<MultiloginResponse> {
    return this.post(`/api/v1/profile/clone/${profileId}`, { name });
  }

  /**
   * Search profiles
   */
  async search(query: string): Promise<MultiloginResponse> {
    return this.post('/api/v1/profile/search', { search: query });
  }
}
