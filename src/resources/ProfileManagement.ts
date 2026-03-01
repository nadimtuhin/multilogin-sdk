import { Resource } from './Resource';
import { MultiloginResponse } from '../config/options';
import { BrowserProfile, ProfileCreatedResponse, ProfileDeletedResponse } from '../types';

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
  async list(): Promise<MultiloginResponse<BrowserProfile[]>> {
    return this.get<BrowserProfile[]>('/api/v1/profile/list');
  }

  /**
   * Get a specific profile
   */
  async get(profileId: string): Promise<MultiloginResponse<BrowserProfile>> {
    return this.get<BrowserProfile>('/api/v1/profile/p/' + profileId);
  }

  /**
   * Create a new profile
   */
  async create(options: ProfileCreateOptions): Promise<MultiloginResponse<ProfileCreatedResponse>> {
    return this.post<ProfileCreatedResponse>('/api/v1/profile/create', options);
  }

  /**
   * Update a profile
   */
  async update(profileId: string, options: Record<string, any>): Promise<MultiloginResponse<BrowserProfile>> {
    return this.post<BrowserProfile>('/api/v1/profile/update/' + profileId, options);
  }

  /**
   * Delete a profile
   */
  async delete(profileId: string): Promise<MultiloginResponse<ProfileDeletedResponse>> {
    return this.delete<ProfileDeletedResponse>('/api/v1/profile/p/' + profileId);
  }

  /**
   * Clone a profile
   */
  async clone(profileId: string, name?: string): Promise<MultiloginResponse<ProfileCreatedResponse>> {
    return this.post<ProfileCreatedResponse>('/api/v1/profile/clone/' + profileId, { name });
  }

  /**
   * Search profiles
   */
  async search(query: string): Promise<MultiloginResponse<BrowserProfile[]>> {
    return this.post<BrowserProfile[]>('/api/v1/profile/search', { search: query });
  }
}
