import { Resource } from './Resource';
import { MultiloginResponse } from '../config/options';

export interface StartBrowserProfileOptions {
  automationType?: 'selenium' | 'puppeteer' | 'playwright';
  headlessMode?: boolean;
}

export class Launcher extends Resource {
  /**
   * Start a browser profile
   */
  async startBrowserProfile(
    folderId: string,
    profileId: string,
    options?: StartBrowserProfileOptions
  ): Promise<MultiloginResponse> {
    const params = new URLSearchParams();
    if (options?.automationType) {
      params.set('automation_type', options.automationType);
    }
    if (options?.headlessMode !== undefined) {
      params.set('headless_mode', String(options.headlessMode));
    }

    const query = params.toString() ? `?${params.toString()}` : '';
    return this.get(`/api/v2/profile/f/${folderId}/p/${profileId}/start${query}`);
  }

  /**
   * Stop a browser profile
   */
  async stopBrowserProfile(profileId: string): Promise<MultiloginResponse> {
    return this.get(`/api/v1/profile/stop/${profileId}`);
  }

  /**
   * Stop all running profiles
   */
  async stopAllProfiles(): Promise<MultiloginResponse> {
    return this.get('/api/v1/profile/stop-all');
  }

  /**
   * Get profile status
   */
  async getProfileStatus(profileId: string): Promise<MultiloginResponse> {
    return this.get(`/api/v1/profile/status/${profileId}`);
  }

  /**
   * Get all profiles status
   */
  async getAllProfilesStatus(): Promise<MultiloginResponse> {
    return this.get('/api/v1/profile/status/all');
  }

  /**
   * Get launcher version
   */
  async getVersion(): Promise<MultiloginResponse> {
    return this.get('/api/v1/version');
  }

  /**
   * Start quick profile (V3)
   */
  async startQuickProfileV3(options?: Record<string, any>): Promise<MultiloginResponse> {
    return this.post('/api/v1/profile/quick/create', options);
  }
}
