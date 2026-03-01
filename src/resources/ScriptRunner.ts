import { Resource } from './Resource';
import { MultiloginResponse } from '../config/options';

export class ScriptRunner extends Resource {
  /**
   * Start a script for a profile
   */
  async startScript(profileId: string, script: string): Promise<MultiloginResponse> {
    return this.post(`/api/v1/profile/p/${profileId}/script/start`, { script });
  }

  /**
   * Stop a running script
   */
  async stopScript(profileId: string): Promise<MultiloginResponse> {
    return this.post(`/api/v1/profile/p/${profileId}/script/stop`);
  }

  /**
   * Get script status
   */
  async getStatus(profileId: string): Promise<MultiloginResponse> {
    return this.get(`/api/v1/profile/p/${profileId}/script/status`);
  }
}
