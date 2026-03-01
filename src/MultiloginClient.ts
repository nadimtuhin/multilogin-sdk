import { isNode } from 'browser-or-node';
import type { LauncherStartBrowserProfileResponse, LauncherStartBrowserProfileOptions, LauncherStartQuickProfileV3Response, LauncherStartQuickProfileV3Options, LauncherStartQuickProfileResponse, LauncherStartQuickProfileOptions, LauncherStopBrowserProfileResponse, LauncherStopAllProfilesResponse, LauncherStopAllProfilesOptions, LauncherGetVersionResponse, LauncherGetProfileStatusResponse, LauncherGetAllProfilesStatusResponse, LauncherLoadedBrowserCoresResponse, LauncherBrowserCoreListResponse, LauncherBrowserCoreListOptions, LauncherLoadBrowserCoreOptions, LauncherDeleteBrowserCoreResponse, LauncherDeleteBrowserCoreOptions, LauncherValidateProxyOptions, LauncherCookieImportOptions, LauncherCookieExportRequest, LauncherCookieExportOptions, LauncherNamespace, ProfileAccessManagementUserSignInRequest, ProfileAccessManagementUserSignInOptions, ProfileAccessManagementUserRefreshTokenSwitchWorkspaceRequest, ProfileAccessManagementUserRefreshTokenSwitchWorkspaceOptions, ProfileAccessManagementUserRevokeTokenOptions, ProfileAccessManagementUserChangePasswordRequest, ProfileAccessManagementUserChangePasswordOptions, ProfileAccessManagementUserWorkspacesResponse, ProfileAccessManagementUserTokenListResponse, ProfileAccessManagementWorkspaceRestrictionsResponse, ProfileAccessManagementWorkspaceFoldersForUserOptions, ProfileAccessManagementWorkspaceStatisticsResponse, ProfileAccessManagementWorkspaceAutomationTokenResponse, ProfileAccessManagementWorkspaceAutomationTokenOptions, ProfileAccessManagementWorkspaceCreateFolderRequest, ProfileAccessManagementWorkspaceCreateFolderOptions, ProfileAccessManagementWorkspaceUpdateFolderRequest, ProfileAccessManagementWorkspaceUpdateFolderOptions, ProfileAccessManagementWorkspaceRemoveFoldersRequest, ProfileAccessManagementWorkspaceRemoveFoldersOptions, ProfileAccessManagementWorkspaceLeaveRequest, ProfileAccessManagementWorkspaceLeaveOptions, ProfileAccessManagementNamespace, ProfileManagementProfileCreateOptions, ProfileManagementProfileSearchRequest, ProfileManagementProfileSearchResponse, ProfileManagementProfileSearchOptions, ProfileManagementProfileRemoveResponse, ProfileManagementProfileRemoveOptions, ProfileManagementProfileUpdateOptions, ProfileManagementProfileMoveRequest, ProfileManagementProfileMoveResponse, ProfileManagementProfileMoveOptions, ProfileManagementProfilePartialUpdateResponse, ProfileManagementProfilePartialUpdateOptions, ProfileManagementProfileRestoreRequest, ProfileManagementProfileRestoreResponse, ProfileManagementProfileRestoreOptions, ProfileManagementProfileMetasRequest, ProfileManagementProfileMetasResponse, ProfileManagementProfileMetasOptions, ProfileManagementProfileSummaryResponse, ProfileManagementProfileSummaryOptions, ProfileManagementProfileCloneResponse, ProfileManagementProfileCloneOptions, ProfileManagementScreenResolutionResponse, ProfileManagementNamespace, BrowserProfileDataUnlockLockedProfilesOptions, BrowserProfileDataNamespace, ProxyGenerateProxyOptions, ProxyFetchProxyDataResponse, ProxyNamespace, PreMadeCookiesTargetWebsiteListResponse, PreMadeCookiesCreateCookiesMetadataRequest, PreMadeCookiesCreateCookiesMetadataOptions, PreMadeCookiesCookiesListResponse, PreMadeCookiesUpdateCookiesMetadataRequest, PreMadeCookiesUpdateCookiesMetadataOptions, PreMadeCookiesNamespace, ScriptRunnerStartBrowserProfileWithSeleniumResponse, ScriptRunnerStartBrowserProfileWithSeleniumOptions, ScriptRunnerStartScriptRunnerResponse, ScriptRunnerStartScriptRunnerOptions, ScriptRunnerStopScriptRunnerRequest, ScriptRunnerNamespace, ProfileImportExportProfileExportResponse, ProfileImportExportExportStatusByProfileResponse, ProfileImportExportExportStatusAllResponse, ProfileImportExportProfileImportResponse, ProfileImportExportProfileImportOptions, ProfileImportExportImportStatusByProfileResponse, ProfileImportExportImportStatusAllResponse, ProfileImportExportNamespace, Namespace, Header } from './MultiloginClientTypes';export class MultiloginClient {
        readonly launcher: LauncherNamespace;
readonly profileAccessManagement: ProfileAccessManagementNamespace;
readonly profileManagement: ProfileManagementNamespace;
readonly browserProfileData: BrowserProfileDataNamespace;
readonly proxy: ProxyNamespace;
readonly preMadeCookies: PreMadeCookiesNamespace;
readonly scriptRunner: ScriptRunnerNamespace;
readonly profileImportExport: ProfileImportExportNamespace;
        private readonly token: string
        private readonly baseUrl: string;
        constructor(baseUrl: string, token: string) {
            const self = this
    this.baseUrl = baseUrl
    this.token = token
                this.launcher = {
      
        async startBrowserProfile(folderId: string, profileId: string, options?: LauncherStartBrowserProfileOptions): Promise<LauncherStartBrowserProfileResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.automationType) { 
                  urlSearchParams.set('automation_type', options.automationType);
               }
      if (options?.headlessMode) { 
                  urlSearchParams.set('headless_mode', options.headlessMode);
               }
      const url = `/api/v2/profile/f/${folderId}/p/${profileId}/start` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async startQuickProfileV3(body: LauncherStartQuickProfileV3Request, options?: LauncherStartQuickProfileV3Options): Promise<LauncherStartQuickProfileV3Response> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.browserType) { 
                  urlSearchParams.set('browser_type', options.browserType);
               }
      if (options?.autoUpdateCore) { 
                  urlSearchParams.set('auto_update_core', options.autoUpdateCore);
               }
      if (options?.coreVersion) { 
                  urlSearchParams.set('core_version', options.coreVersion);
               }
      if (options?.osType) { 
                  urlSearchParams.set('os_type', options.osType);
               }
      if (options?.scriptFile) { 
                  urlSearchParams.set('script_file', options.scriptFile);
               }
      if (options?.automation) { 
                  urlSearchParams.set('automation', options.automation);
               }
      if (options?.isHeadless) { 
                  urlSearchParams.set('is_headless', options.isHeadless);
               }
      if (options?.proxy) { 
                  urlSearchParams.set('proxy', options.proxy);
               }
      if (options?.saveTraffic) { 
                  urlSearchParams.set('save_traffic', options.saveTraffic);
               }
      if (options?.parameters) { 
                  urlSearchParams.set('parameters', options.parameters);
               }
      if (options?.flags) { 
                  urlSearchParams.set('flags', options.flags);
               }
      if (options?.webrtcMasking) { 
                  urlSearchParams.set('webrtc_masking', options.webrtcMasking);
               }
      if (options?.geolocationPopup) { 
                  urlSearchParams.set('geolocation_popup', options.geolocationPopup);
               }
      if (options?.audioMaskingGraphicsNoise) { 
                  urlSearchParams.set('audio_masking, graphics_noise', options.audioMaskingGraphicsNoise);
               }
      if (options?.proxyMasking) { 
                  urlSearchParams.set('proxy_masking', options.proxyMasking);
               }
      if (options?.navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMaskingPortsMasking) { 
                  urlSearchParams.set('navigator_masking, localization_masking, timezone_masking, graphics_masking, fonts_masking, media_devices_masking, screen_masking, ports_masking', options.navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMaskingPortsMasking);
               }
      if (options?.geolocationMasking) { 
                  urlSearchParams.set('geolocation_masking', options.geolocationMasking);
               }
      if (options?.canvasNoise) { 
                  urlSearchParams.set('canvas_noise', options.canvasNoise);
               }
      if (options?.startupBehavior) { 
                  urlSearchParams.set('startup_behavior', options.startupBehavior);
               }
      if (options?.fingerprint) { 
                  urlSearchParams.set('fingerprint', options.fingerprint);
               }
      if (options?.hardwareConcurrency) { 
                  urlSearchParams.set('hardware_concurrency', options.hardwareConcurrency);
               }
      if (options?.userAgent) { 
                  urlSearchParams.set('user_agent', options.userAgent);
               }
      if (options?.platform) { 
                  urlSearchParams.set('platform', options.platform);
               }
      if (options?.osCpu) { 
                  urlSearchParams.set('os_cpu', options.osCpu);
               }
      if (options?.acceptLanguages) { 
                  urlSearchParams.set('accept_languages', options.acceptLanguages);
               }
      if (options?.languages) { 
                  urlSearchParams.set('languages', options.languages);
               }
      if (options?.locale) { 
                  urlSearchParams.set('locale', options.locale);
               }
      if (options?.zone) { 
                  urlSearchParams.set('zone', options.zone);
               }
      if (options?.vendor) { 
                  urlSearchParams.set('vendor', options.vendor);
               }
      if (options?.renderer) { 
                  urlSearchParams.set('renderer', options.renderer);
               }
      if (options?.vendorId) { 
                  urlSearchParams.set('vendor_id', options.vendorId);
               }
      if (options?.rendererId) { 
                  urlSearchParams.set('renderer_id', options.rendererId);
               }
      if (options?.publicIp) { 
                  urlSearchParams.set('public_ip', options.publicIp);
               }
      if (options?.audioOutputs) { 
                  urlSearchParams.set('audio_outputs', options.audioOutputs);
               }
      if (options?.videoInputs) { 
                  urlSearchParams.set('video_inputs', options.videoInputs);
               }
      if (options?.audioInputs) { 
                  urlSearchParams.set('audio_inputs', options.audioInputs);
               }
      if (options?.width) { 
                  urlSearchParams.set('width', options.width);
               }
      if (options?.height) { 
                  urlSearchParams.set('height', options.height);
               }
      if (options?.pixelRatio) { 
                  urlSearchParams.set('pixel_ratio', options.pixelRatio);
               }
      if (options?.ports) { 
                  urlSearchParams.set('ports', options.ports);
               }
      if (options?.accuracy) { 
                  urlSearchParams.set('accuracy', options.accuracy);
               }
      if (options?.altitude) { 
                  urlSearchParams.set('altitude', options.altitude);
               }
      if (options?.longitude) { 
                  urlSearchParams.set('longitude', options.longitude);
               }
      if (options?.latitude) { 
                  urlSearchParams.set('latitude', options.latitude);
               }
      if (options?.fonts) { 
                  urlSearchParams.set('fonts', options.fonts);
               }
      if (options?.cmdParams) { 
                  urlSearchParams.set('cmd_params', options.cmdParams);
               }
      if (options?.customStartUrls) { 
                  urlSearchParams.set('custom_start_urls', options.customStartUrls);
               }
      if (options?.maxTouchPoints) { 
                  urlSearchParams.set('max_touch_points', options.maxTouchPoints);
               }
      const url = `/api/v3/profile/quick` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async startQuickProfile(body: LauncherStartQuickProfileRequest, options?: LauncherStartQuickProfileOptions): Promise<LauncherStartQuickProfileResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.browserType) { 
                  urlSearchParams.set('browser_type', options.browserType);
               }
      if (options?.autoUpdateCore) { 
                  urlSearchParams.set('auto_update_core', options.autoUpdateCore);
               }
      if (options?.coreVersion) { 
                  urlSearchParams.set('core_version', options.coreVersion);
               }
      if (options?.osType) { 
                  urlSearchParams.set('os_type', options.osType);
               }
      if (options?.automation) { 
                  urlSearchParams.set('automation', options.automation);
               }
      if (options?.isHeadless) { 
                  urlSearchParams.set('is_headless', options.isHeadless);
               }
      if (options?.proxy) { 
                  urlSearchParams.set('proxy', options.proxy);
               }
      if (options?.saveTraffic) { 
                  urlSearchParams.set('save_traffic', options.saveTraffic);
               }
      if (options?.parameters) { 
                  urlSearchParams.set('parameters', options.parameters);
               }
      if (options?.flags) { 
                  urlSearchParams.set('flags', options.flags);
               }
      if (options?.webrtcMasking) { 
                  urlSearchParams.set('webrtc_masking', options.webrtcMasking);
               }
      if (options?.geolocationPopup) { 
                  urlSearchParams.set('geolocation_popup', options.geolocationPopup);
               }
      if (options?.audioMaskingGraphicsNoise) { 
                  urlSearchParams.set('audio_masking, graphics_noise', options.audioMaskingGraphicsNoise);
               }
      if (options?.proxyMasking) { 
                  urlSearchParams.set('proxy_masking', options.proxyMasking);
               }
      if (options?.navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMaskingPortsMasking) { 
                  urlSearchParams.set('navigator_masking, localization_masking, timezone_masking, graphics_masking, fonts_masking, media_devices_masking, screen_masking, ports_masking', options.navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMaskingPortsMasking);
               }
      if (options?.geolocationMasking) { 
                  urlSearchParams.set('geolocation_masking', options.geolocationMasking);
               }
      if (options?.canvasNoise) { 
                  urlSearchParams.set('canvas_noise', options.canvasNoise);
               }
      if (options?.startupBehavior) { 
                  urlSearchParams.set('startup_behavior', options.startupBehavior);
               }
      if (options?.fingerprint) { 
                  urlSearchParams.set('fingerprint', options.fingerprint);
               }
      if (options?.hardwareConcurrency) { 
                  urlSearchParams.set('hardware_concurrency', options.hardwareConcurrency);
               }
      if (options?.userAgent) { 
                  urlSearchParams.set('user_agent', options.userAgent);
               }
      if (options?.platform) { 
                  urlSearchParams.set('platform', options.platform);
               }
      if (options?.osCpu) { 
                  urlSearchParams.set('os_cpu', options.osCpu);
               }
      if (options?.acceptLanguages) { 
                  urlSearchParams.set('accept_languages', options.acceptLanguages);
               }
      if (options?.languages) { 
                  urlSearchParams.set('languages', options.languages);
               }
      if (options?.locale) { 
                  urlSearchParams.set('locale', options.locale);
               }
      if (options?.zone) { 
                  urlSearchParams.set('zone', options.zone);
               }
      if (options?.vendor) { 
                  urlSearchParams.set('vendor', options.vendor);
               }
      if (options?.renderer) { 
                  urlSearchParams.set('renderer', options.renderer);
               }
      if (options?.vendorId) { 
                  urlSearchParams.set('vendor_id', options.vendorId);
               }
      if (options?.rendererId) { 
                  urlSearchParams.set('renderer_id', options.rendererId);
               }
      if (options?.publicIp) { 
                  urlSearchParams.set('public_ip', options.publicIp);
               }
      if (options?.audioOutputs) { 
                  urlSearchParams.set('audio_outputs', options.audioOutputs);
               }
      if (options?.videoInputs) { 
                  urlSearchParams.set('video_inputs', options.videoInputs);
               }
      if (options?.audioInputs) { 
                  urlSearchParams.set('audio_inputs', options.audioInputs);
               }
      if (options?.width) { 
                  urlSearchParams.set('width', options.width);
               }
      if (options?.height) { 
                  urlSearchParams.set('height', options.height);
               }
      if (options?.pixelRatio) { 
                  urlSearchParams.set('pixel_ratio', options.pixelRatio);
               }
      if (options?.ports) { 
                  urlSearchParams.set('ports', options.ports);
               }
      if (options?.accuracy) { 
                  urlSearchParams.set('accuracy', options.accuracy);
               }
      if (options?.altitude) { 
                  urlSearchParams.set('altitude', options.altitude);
               }
      if (options?.longitude) { 
                  urlSearchParams.set('longitude', options.longitude);
               }
      if (options?.latitude) { 
                  urlSearchParams.set('latitude', options.latitude);
               }
      if (options?.fonts) { 
                  urlSearchParams.set('fonts', options.fonts);
               }
      if (options?.cmdParams) { 
                  urlSearchParams.set('cmd_params', options.cmdParams);
               }
      if (options?.customStartUrls) { 
                  urlSearchParams.set('custom_start_urls', options.customStartUrls);
               }
      if (options?.maxTouchPoints) { 
                  urlSearchParams.set('max_touch_points', options.maxTouchPoints);
               }
      const url = `/api/v2/profile/quick` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async stopBrowserProfile(profileId: string): Promise<LauncherStopBrowserProfileResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/profile/stop/p/${profileId}`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async stopAllProfiles(options?: LauncherStopAllProfilesOptions): Promise<LauncherStopAllProfilesResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.type) { 
                  urlSearchParams.set('type', options.type);
               }
      const url = `/api/v1/profile/stop_all` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async getVersion(): Promise<LauncherGetVersionResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/version`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async getProfileStatus(profileId: string): Promise<LauncherGetProfileStatusResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/profile/status/p/${profileId}`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async getAllProfilesStatus(): Promise<LauncherGetAllProfilesStatusResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/profile/statuses`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async loadedBrowserCores(): Promise<LauncherLoadedBrowserCoresResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/loaded_browser_cores`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async browserCoreList(options?: LauncherBrowserCoreListOptions): Promise<LauncherBrowserCoreListResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.browserType) { 
                  urlSearchParams.set('browser_type', options.browserType);
               }
      const url = `/bcs/core/list` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async loadBrowserCore(options?: LauncherLoadBrowserCoreOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.browserType) { 
                  urlSearchParams.set('browser_type', options.browserType);
               }
      if (options?.version) { 
                  urlSearchParams.set('version', options.version);
               }
      const url = `/api/v1/load_browser_core` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async deleteBrowserCore(options?: LauncherDeleteBrowserCoreOptions): Promise<LauncherDeleteBrowserCoreResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.browserType) { 
                  urlSearchParams.set('browser_type', options.browserType);
               }
      if (options?.version) { 
                  urlSearchParams.set('version', options.version);
               }
      const url = `/api/v1/delete_browser_core` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "DELETE",
          		headers: headers
          });
          return res.json();
        },
    
      
        async validateProxy(body: LauncherValidateProxyRequest, options?: LauncherValidateProxyOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.type) { 
                  urlSearchParams.set('type', options.type);
               }
      if (options?.host) { 
                  urlSearchParams.set('host', options.host);
               }
      if (options?.port) { 
                  urlSearchParams.set('port', options.port);
               }
      if (options?.username) { 
                  urlSearchParams.set('username', options.username);
               }
      if (options?.password) { 
                  urlSearchParams.set('password', options.password);
               }
      const url = `/api/v1/proxy/validate` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async cookieImport(body: LauncherCookieImportRequest, options?: LauncherCookieImportOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.profileId) { 
                  urlSearchParams.set('profile_id', options.profileId);
               }
      if (options?.folderId) { 
                  urlSearchParams.set('folder_id', options.folderId);
               }
      if (options?.importAdvancedCookies) { 
                  urlSearchParams.set('import_advanced_cookies', options.importAdvancedCookies);
               }
      if (options?.cookies) { 
                  urlSearchParams.set('cookies', options.cookies);
               }
      const url = `/api/v1/cookie_import` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async cookieExport(body: LauncherCookieExportRequest, options?: LauncherCookieExportOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.profileId) { 
                  urlSearchParams.set('profile_id', options.profileId);
               }
      if (options?.folderId) { 
                  urlSearchParams.set('folder_id', options.folderId);
               }
      const url = `/api/v1/cookie_export` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				profile_id: body.profileId,
      				folder_id: body.folderId,
      })
          });
          return res.json();
        }
    }
    this.profileAccessManagement = {
      
        async userSignIn(body: ProfileAccessManagementUserSignInRequest, options?: ProfileAccessManagementUserSignInOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.email) { 
                  urlSearchParams.set('email', options.email);
               }
      if (options?.password) { 
                  urlSearchParams.set('password', options.password);
               }
      const url = `/user/signin` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				email: body.email,
      				password: body.password,
      })
          });
          return res.json();
        },
    
      
        async userRefreshTokenSwitchWorkspace(body: ProfileAccessManagementUserRefreshTokenSwitchWorkspaceRequest, options?: ProfileAccessManagementUserRefreshTokenSwitchWorkspaceOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.email) { 
                  urlSearchParams.set('email', options.email);
               }
      if (options?.refreshToken) { 
                  urlSearchParams.set('refresh_token', options.refreshToken);
               }
      if (options?.workspaceId) { 
                  urlSearchParams.set('workspace_id', options.workspaceId);
               }
      const url = `/user/refresh_token` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				email: body.email,
      				refresh_token: body.refreshToken,
      				workspace_id: body.workspaceId,
      })
          });
          return res.json();
        },
    
      
        async userRevokeToken(body: ProfileAccessManagementUserRevokeTokenRequest, options?: ProfileAccessManagementUserRevokeTokenOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.token) { 
                  urlSearchParams.set('token', options.token);
               }
      if (options?.isAutomation) { 
                  urlSearchParams.set('is_automation', options.isAutomation);
               }
      const url = `/user/revoke_tokens` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async userChangePassword(body: ProfileAccessManagementUserChangePasswordRequest, options?: ProfileAccessManagementUserChangePasswordOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.newPassword) { 
                  urlSearchParams.set('new_password', options.newPassword);
               }
      if (options?.password) { 
                  urlSearchParams.set('password', options.password);
               }
      const url = `/user/change_password` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				new_password: body.newPassword,
      				password: body.password,
      })
          });
          return res.json();
        },
    
      
        async userWorkspaces(): Promise<ProfileAccessManagementUserWorkspacesResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/user/workspaces`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async userTokenList(): Promise<ProfileAccessManagementUserTokenListResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/user/tokens_list`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async workspaceRestrictions(): Promise<ProfileAccessManagementWorkspaceRestrictionsResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/workspace/restrictions`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async workspaceFolders(): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/workspace/folders`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async workspaceFoldersForUser(options?: ProfileAccessManagementWorkspaceFoldersForUserOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.email) { 
                  urlSearchParams.set('email', options.email);
               }
      const url = `/workspace/folders_for_user` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async workspaceStatistics(): Promise<ProfileAccessManagementWorkspaceStatisticsResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/workspace/statistics`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async workspaceAutomationToken(options?: ProfileAccessManagementWorkspaceAutomationTokenOptions): Promise<ProfileAccessManagementWorkspaceAutomationTokenResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.expirationPeriod) { 
                  urlSearchParams.set('expiration_period', options.expirationPeriod);
               }
      const url = `/workspace/automation_token` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async workspaceCreateFolder(body: ProfileAccessManagementWorkspaceCreateFolderRequest, options?: ProfileAccessManagementWorkspaceCreateFolderOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.name) { 
                  urlSearchParams.set('name', options.name);
               }
      if (options?.comment) { 
                  urlSearchParams.set('comment', options.comment);
               }
      const url = `/workspace/folder_create` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				name: body.name,
      				comment: body.comment,
      })
          });
          return res.json();
        },
    
      
        async workspaceUpdateFolder(body: ProfileAccessManagementWorkspaceUpdateFolderRequest, options?: ProfileAccessManagementWorkspaceUpdateFolderOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.folderId) { 
                  urlSearchParams.set('folder_id', options.folderId);
               }
      if (options?.name) { 
                  urlSearchParams.set('name', options.name);
               }
      if (options?.comment) { 
                  urlSearchParams.set('comment', options.comment);
               }
      const url = `/workspace/folder_update` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				folder_id: body.folderId,
      				name: body.name,
      				comment: body.comment,
      })
          });
          return res.json();
        },
    
      
        async workspaceRemoveFolders(body: ProfileAccessManagementWorkspaceRemoveFoldersRequest, options?: ProfileAccessManagementWorkspaceRemoveFoldersOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.ids) { 
                  urlSearchParams.set('ids', options.ids);
               }
      const url = `/workspace/folders_remove` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				ids: body.ids,
      })
          });
          return res.json();
        },
    
      
        async workspaceLeave(body: ProfileAccessManagementWorkspaceLeaveRequest, options?: ProfileAccessManagementWorkspaceLeaveOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.workspaceId) { 
                  urlSearchParams.set('workspace_id', options.workspaceId);
               }
      const url = `/workspace/leave` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				workspace_id: body.workspaceId,
      })
          });
          return res.json();
        }
    }
    this.profileManagement = {
      
        async profileCreate(body: ProfileManagementProfileCreateRequest, options?: ProfileManagementProfileCreateOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.name) { 
                  urlSearchParams.set('name', options.name);
               }
      if (options?.browserType) { 
                  urlSearchParams.set('browser_type', options.browserType);
               }
      if (options?.folderId) { 
                  urlSearchParams.set('folder_id', options.folderId);
               }
      if (options?.osType) { 
                  urlSearchParams.set('os_type', options.osType);
               }
      if (options?.coreVersion) { 
                  urlSearchParams.set('core_version', options.coreVersion);
               }
      if (options?.autoUpdateCore) { 
                  urlSearchParams.set('auto_update_core', options.autoUpdateCore);
               }
      if (options?.times) { 
                  urlSearchParams.set('times', options.times);
               }
      if (options?.notes) { 
                  urlSearchParams.set('notes', options.notes);
               }
      if (options?.parameters) { 
                  urlSearchParams.set('parameters', options.parameters);
               }
      if (options?.flags) { 
                  urlSearchParams.set('flags', options.flags);
               }
      if (options?.webrtcMasking) { 
                  urlSearchParams.set('webrtc_masking', options.webrtcMasking);
               }
      if (options?.audioMaskingGraphicsNoisePortsMasking) { 
                  urlSearchParams.set('audio_masking, graphics_noise, ports_masking', options.audioMaskingGraphicsNoisePortsMasking);
               }
      if (options?.proxyMasking) { 
                  urlSearchParams.set('proxy_masking', options.proxyMasking);
               }
      if (options?.geolocationPopup) { 
                  urlSearchParams.set('geolocation_popup', options.geolocationPopup);
               }
      if (options?.navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMasking) { 
                  urlSearchParams.set('navigator_masking, localization_masking, timezone_masking, graphics_masking, fonts_masking, media_devices_masking, screen_masking', options.navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMasking);
               }
      if (options?.geolocationMasking) { 
                  urlSearchParams.set('geolocation_masking', options.geolocationMasking);
               }
      if (options?.quicMode) { 
                  urlSearchParams.set('quic_mode', options.quicMode);
               }
      if (options?.startupBehavior) { 
                  urlSearchParams.set('startup_behavior', options.startupBehavior);
               }
      if (options?.canvasNoise) { 
                  urlSearchParams.set('canvas_noise', options.canvasNoise);
               }
      if (options?.fingerprint) { 
                  urlSearchParams.set('fingerprint', options.fingerprint);
               }
      if (options?.hardwareConcurrency) { 
                  urlSearchParams.set('hardware_concurrency', options.hardwareConcurrency);
               }
      if (options?.userAgent) { 
                  urlSearchParams.set('user_agent', options.userAgent);
               }
      if (options?.platform) { 
                  urlSearchParams.set('platform', options.platform);
               }
      if (options?.osCpu) { 
                  urlSearchParams.set('os_cpu', options.osCpu);
               }
      if (options?.acceptLanguages) { 
                  urlSearchParams.set('accept_languages', options.acceptLanguages);
               }
      if (options?.languages) { 
                  urlSearchParams.set('languages', options.languages);
               }
      if (options?.locale) { 
                  urlSearchParams.set('locale', options.locale);
               }
      if (options?.zone) { 
                  urlSearchParams.set('zone', options.zone);
               }
      if (options?.vendor) { 
                  urlSearchParams.set('vendor', options.vendor);
               }
      if (options?.renderer) { 
                  urlSearchParams.set('renderer', options.renderer);
               }
      if (options?.vendorId) { 
                  urlSearchParams.set('vendor_id', options.vendorId);
               }
      if (options?.rendererId) { 
                  urlSearchParams.set('renderer_id', options.rendererId);
               }
      if (options?.publicIp) { 
                  urlSearchParams.set('public_ip', options.publicIp);
               }
      if (options?.audioOutputs) { 
                  urlSearchParams.set('audio_outputs', options.audioOutputs);
               }
      if (options?.audioInputs) { 
                  urlSearchParams.set('audio_inputs', options.audioInputs);
               }
      if (options?.videoInputs) { 
                  urlSearchParams.set('video_inputs', options.videoInputs);
               }
      if (options?.width) { 
                  urlSearchParams.set('width', options.width);
               }
      if (options?.height) { 
                  urlSearchParams.set('height', options.height);
               }
      if (options?.pixelRatio) { 
                  urlSearchParams.set('pixel_ratio', options.pixelRatio);
               }
      if (options?.accuracy) { 
                  urlSearchParams.set('accuracy', options.accuracy);
               }
      if (options?.altitude) { 
                  urlSearchParams.set('altitude', options.altitude);
               }
      if (options?.latitude) { 
                  urlSearchParams.set('latitude', options.latitude);
               }
      if (options?.longitude) { 
                  urlSearchParams.set('longitude', options.longitude);
               }
      if (options?.ports) { 
                  urlSearchParams.set('ports', options.ports);
               }
      if (options?.fonts) { 
                  urlSearchParams.set('fonts', options.fonts);
               }
      if (options?.cmdParams) { 
                  urlSearchParams.set('cmd_params', options.cmdParams);
               }
      if (options?.isLocal) { 
                  urlSearchParams.set('is_local', options.isLocal);
               }
      if (options?.saveServiceWorker) { 
                  urlSearchParams.set('save_service_worker', options.saveServiceWorker);
               }
      if (options?.proxy) { 
                  urlSearchParams.set('proxy', options.proxy);
               }
      if (options?.saveTraffic) { 
                  urlSearchParams.set('save_traffic', options.saveTraffic);
               }
      if (options?.customStartUrls) { 
                  urlSearchParams.set('custom_start_urls', options.customStartUrls);
               }
      if (options?.maxTouchPoints) { 
                  urlSearchParams.set('max_touch_points', options.maxTouchPoints);
               }
      const url = `/profile/create` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async profileSearch(body: ProfileManagementProfileSearchRequest, options?: ProfileManagementProfileSearchOptions): Promise<ProfileManagementProfileSearchResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.isRemoved) { 
                  urlSearchParams.set('is_removed', options.isRemoved);
               }
      if (options?.limit) { 
                  urlSearchParams.set('limit', options.limit);
               }
      if (options?.offset) { 
                  urlSearchParams.set('offset', options.offset);
               }
      if (options?.searchText) { 
                  urlSearchParams.set('search_text', options.searchText);
               }
      if (options?.storageType) { 
                  urlSearchParams.set('storage_type', options.storageType);
               }
      if (options?.folderId) { 
                  urlSearchParams.set('folder_id', options.folderId);
               }
      if (options?.orderBy) { 
                  urlSearchParams.set('order_by', options.orderBy);
               }
      if (options?.sort) { 
                  urlSearchParams.set('sort', options.sort);
               }
      if (options?.coreVersion) { 
                  urlSearchParams.set('core_version', options.coreVersion);
               }
      const url = `/profile/search` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				is_removed: body.isRemoved,
      				limit: body.limit,
      				offset: body.offset,
      				storage_type: body.storageType,
      				order_by: body.orderBy,
      				sort: body.sort,
      })
          });
          return res.json();
        },
    
      
        async profileRemove(body: ProfileManagementProfileRemoveRequest, options?: ProfileManagementProfileRemoveOptions): Promise<ProfileManagementProfileRemoveResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.ids) { 
                  urlSearchParams.set('ids', options.ids);
               }
      if (options?.permanently) { 
                  urlSearchParams.set('permanently', options.permanently);
               }
      const url = `/profile/remove` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async profileUpdate(body: ProfileManagementProfileUpdateRequest, options?: ProfileManagementProfileUpdateOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.profileId) { 
                  urlSearchParams.set('profile_id', options.profileId);
               }
      if (options?.name) { 
                  urlSearchParams.set('name', options.name);
               }
      if (options?.parameters) { 
                  urlSearchParams.set('parameters', options.parameters);
               }
      if (options?.flags) { 
                  urlSearchParams.set('flags', options.flags);
               }
      if (options?.webrtcMasking) { 
                  urlSearchParams.set('webrtc_masking', options.webrtcMasking);
               }
      if (options?.audioMaskingGraphicsNoisePortsMasking) { 
                  urlSearchParams.set('audio_masking, graphics_noise, ports_masking', options.audioMaskingGraphicsNoisePortsMasking);
               }
      if (options?.proxyMasking) { 
                  urlSearchParams.set('proxy_masking', options.proxyMasking);
               }
      if (options?.geolocationPopup) { 
                  urlSearchParams.set('geolocation_popup', options.geolocationPopup);
               }
      if (options?.navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMasking) { 
                  urlSearchParams.set('navigator_masking, localization_masking, timezone_masking, graphics_masking, fonts_masking, media_devices_masking, screen_masking', options.navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMasking);
               }
      if (options?.geolocationMasking) { 
                  urlSearchParams.set('geolocation_masking', options.geolocationMasking);
               }
      if (options?.autoUpdateCore) { 
                  urlSearchParams.set('auto_update_core', options.autoUpdateCore);
               }
      if (options?.quicMode) { 
                  urlSearchParams.set('quic_mode', options.quicMode);
               }
      if (options?.canvasNoise) { 
                  urlSearchParams.set('canvas_noise', options.canvasNoise);
               }
      if (options?.startupBehavior) { 
                  urlSearchParams.set('startup_behavior', options.startupBehavior);
               }
      if (options?.fingerprint) { 
                  urlSearchParams.set('fingerprint', options.fingerprint);
               }
      if (options?.hardwareConcurrency) { 
                  urlSearchParams.set('hardware_concurrency', options.hardwareConcurrency);
               }
      if (options?.userAgent) { 
                  urlSearchParams.set('user_agent', options.userAgent);
               }
      if (options?.platform) { 
                  urlSearchParams.set('platform', options.platform);
               }
      if (options?.osCpu) { 
                  urlSearchParams.set('os_cpu', options.osCpu);
               }
      if (options?.acceptLanguages) { 
                  urlSearchParams.set('accept_languages', options.acceptLanguages);
               }
      if (options?.languages) { 
                  urlSearchParams.set('languages', options.languages);
               }
      if (options?.locale) { 
                  urlSearchParams.set('locale', options.locale);
               }
      if (options?.zone) { 
                  urlSearchParams.set('zone', options.zone);
               }
      if (options?.vendor) { 
                  urlSearchParams.set('vendor', options.vendor);
               }
      if (options?.renderer) { 
                  urlSearchParams.set('renderer', options.renderer);
               }
      if (options?.vendorId) { 
                  urlSearchParams.set('vendor_id', options.vendorId);
               }
      if (options?.rendererId) { 
                  urlSearchParams.set('renderer_id', options.rendererId);
               }
      if (options?.publicIp) { 
                  urlSearchParams.set('public_ip', options.publicIp);
               }
      if (options?.audioOutputs) { 
                  urlSearchParams.set('audio_outputs', options.audioOutputs);
               }
      if (options?.audioInputs) { 
                  urlSearchParams.set('audio_inputs', options.audioInputs);
               }
      if (options?.videoInputs) { 
                  urlSearchParams.set('video_inputs', options.videoInputs);
               }
      if (options?.width) { 
                  urlSearchParams.set('width', options.width);
               }
      if (options?.height) { 
                  urlSearchParams.set('height', options.height);
               }
      if (options?.pixelRatio) { 
                  urlSearchParams.set('pixel_ratio', options.pixelRatio);
               }
      if (options?.accuracy) { 
                  urlSearchParams.set('accuracy', options.accuracy);
               }
      if (options?.altitude) { 
                  urlSearchParams.set('altitude', options.altitude);
               }
      if (options?.latitude) { 
                  urlSearchParams.set('latitude', options.latitude);
               }
      if (options?.longitude) { 
                  urlSearchParams.set('longitude', options.longitude);
               }
      if (options?.ports) { 
                  urlSearchParams.set('ports', options.ports);
               }
      if (options?.fonts) { 
                  urlSearchParams.set('fonts', options.fonts);
               }
      if (options?.cmdParams) { 
                  urlSearchParams.set('cmd_params', options.cmdParams);
               }
      if (options?.isLocal) { 
                  urlSearchParams.set('is_local', options.isLocal);
               }
      if (options?.saveServiceWorker) { 
                  urlSearchParams.set('save_service_worker', options.saveServiceWorker);
               }
      if (options?.proxy) { 
                  urlSearchParams.set('proxy', options.proxy);
               }
      if (options?.saveTraffic) { 
                  urlSearchParams.set('save_traffic', options.saveTraffic);
               }
      if (options?.customStartUrls) { 
                  urlSearchParams.set('custom_start_urls', options.customStartUrls);
               }
      if (options?.notes) { 
                  urlSearchParams.set('notes', options.notes);
               }
      if (options?.maxTouchPoints) { 
                  urlSearchParams.set('max_touch_points', options.maxTouchPoints);
               }
      const url = `/profile/update` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async profileMove(body: ProfileManagementProfileMoveRequest, options?: ProfileManagementProfileMoveOptions): Promise<ProfileManagementProfileMoveResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.destFolderId) { 
                  urlSearchParams.set('dest_folder_id', options.destFolderId);
               }
      if (options?.ids) { 
                  urlSearchParams.set('ids', options.ids);
               }
      const url = `/profile/move` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				dest_folder_id: body.destFolderId,
      				ids: body.ids,
      })
          });
          return res.json();
        },
    
      
        async profilePartialUpdate(body: ProfileManagementProfilePartialUpdateRequest, options?: ProfileManagementProfilePartialUpdateOptions): Promise<ProfileManagementProfilePartialUpdateResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.profileId) { 
                  urlSearchParams.set('profile_id', options.profileId);
               }
      if (options?.name) { 
                  urlSearchParams.set('name', options.name);
               }
      if (options?.autoUpdateCore) { 
                  urlSearchParams.set('auto_update_core', options.autoUpdateCore);
               }
      if (options?.proxy) { 
                  urlSearchParams.set('proxy', options.proxy);
               }
      if (options?.saveTraffic) { 
                  urlSearchParams.set('save_traffic', options.saveTraffic);
               }
      if (options?.customStartUrls) { 
                  urlSearchParams.set('custom_start_urls', options.customStartUrls);
               }
      if (options?.notes) { 
                  urlSearchParams.set('notes', options.notes);
               }
      if (options?.parameters) { 
                  urlSearchParams.set('parameters', options.parameters);
               }
      if (options?.flags) { 
                  urlSearchParams.set('flags', options.flags);
               }
      if (options?.webrtcMasking) { 
                  urlSearchParams.set('webrtc_masking', options.webrtcMasking);
               }
      if (options?.audioMaskingGraphicsNoisePortsMasking) { 
                  urlSearchParams.set('audio_masking, graphics_noise, ports_masking', options.audioMaskingGraphicsNoisePortsMasking);
               }
      if (options?.proxyMasking) { 
                  urlSearchParams.set('proxy_masking', options.proxyMasking);
               }
      if (options?.geolocationPopup) { 
                  urlSearchParams.set('geolocation_popup', options.geolocationPopup);
               }
      if (options?.navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMasking) { 
                  urlSearchParams.set('navigator_masking, localization_masking, timezone_masking, graphics_masking, fonts_masking, media_devices_masking, screen_masking', options.navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMasking);
               }
      if (options?.geolocationMasking) { 
                  urlSearchParams.set('geolocation_masking', options.geolocationMasking);
               }
      if (options?.quicMode) { 
                  urlSearchParams.set('quic_mode', options.quicMode);
               }
      if (options?.canvasNoise) { 
                  urlSearchParams.set('canvas_noise', options.canvasNoise);
               }
      if (options?.startupBehavior) { 
                  urlSearchParams.set('startup_behavior', options.startupBehavior);
               }
      if (options?.isLocal) { 
                  urlSearchParams.set('is_local', options.isLocal);
               }
      if (options?.saveServiceWorker) { 
                  urlSearchParams.set('save_service_worker', options.saveServiceWorker);
               }
      if (options?.fingerprint) { 
                  urlSearchParams.set('fingerprint', options.fingerprint);
               }
      if (options?.hardwareConcurrency) { 
                  urlSearchParams.set('hardware_concurrency', options.hardwareConcurrency);
               }
      if (options?.userAgent) { 
                  urlSearchParams.set('user_agent', options.userAgent);
               }
      if (options?.platform) { 
                  urlSearchParams.set('platform', options.platform);
               }
      if (options?.osCpu) { 
                  urlSearchParams.set('os_cpu', options.osCpu);
               }
      if (options?.acceptLanguages) { 
                  urlSearchParams.set('accept_languages', options.acceptLanguages);
               }
      if (options?.languages) { 
                  urlSearchParams.set('languages', options.languages);
               }
      if (options?.locale) { 
                  urlSearchParams.set('locale', options.locale);
               }
      if (options?.zone) { 
                  urlSearchParams.set('zone', options.zone);
               }
      if (options?.vendor) { 
                  urlSearchParams.set('vendor', options.vendor);
               }
      if (options?.renderer) { 
                  urlSearchParams.set('renderer', options.renderer);
               }
      if (options?.vendorId) { 
                  urlSearchParams.set('vendor_id', options.vendorId);
               }
      if (options?.rendererId) { 
                  urlSearchParams.set('renderer_id', options.rendererId);
               }
      if (options?.publicIp) { 
                  urlSearchParams.set('public_ip', options.publicIp);
               }
      if (options?.audioOutputs) { 
                  urlSearchParams.set('audio_outputs', options.audioOutputs);
               }
      if (options?.audioInputs) { 
                  urlSearchParams.set('audio_inputs', options.audioInputs);
               }
      if (options?.videoInputs) { 
                  urlSearchParams.set('video_inputs', options.videoInputs);
               }
      if (options?.width) { 
                  urlSearchParams.set('width', options.width);
               }
      if (options?.height) { 
                  urlSearchParams.set('height', options.height);
               }
      if (options?.pixelRatio) { 
                  urlSearchParams.set('pixel_ratio', options.pixelRatio);
               }
      if (options?.accuracy) { 
                  urlSearchParams.set('accuracy', options.accuracy);
               }
      if (options?.altitude) { 
                  urlSearchParams.set('altitude', options.altitude);
               }
      if (options?.latitude) { 
                  urlSearchParams.set('latitude', options.latitude);
               }
      if (options?.longitude) { 
                  urlSearchParams.set('longitude', options.longitude);
               }
      if (options?.ports) { 
                  urlSearchParams.set('ports', options.ports);
               }
      if (options?.fonts) { 
                  urlSearchParams.set('fonts', options.fonts);
               }
      if (options?.cmdParams) { 
                  urlSearchParams.set('cmd_params', options.cmdParams);
               }
      if (options?.maxTouchPoints) { 
                  urlSearchParams.set('max_touch_points', options.maxTouchPoints);
               }
      const url = `/profile/partial_update` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async profileRestore(body: ProfileManagementProfileRestoreRequest, options?: ProfileManagementProfileRestoreOptions): Promise<ProfileManagementProfileRestoreResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.ids) { 
                  urlSearchParams.set('ids', options.ids);
               }
      const url = `/profile/restore` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				ids: body.ids,
      })
          });
          return res.json();
        },
    
      
        async profileMetas(body: ProfileManagementProfileMetasRequest, options?: ProfileManagementProfileMetasOptions): Promise<ProfileManagementProfileMetasResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.ids) { 
                  urlSearchParams.set('ids', options.ids);
               }
      const url = `/profile/metas` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				ids: body.ids,
      })
          });
          return res.json();
        },
    
      
        async profileSummary(options?: ProfileManagementProfileSummaryOptions): Promise<ProfileManagementProfileSummaryResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.metaId) { 
                  urlSearchParams.set('meta_id', options.metaId);
               }
      const url = `/profile/summary` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async profileClone(body: ProfileManagementProfileCloneRequest, options?: ProfileManagementProfileCloneOptions): Promise<ProfileManagementProfileCloneResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.profileId) { 
                  urlSearchParams.set('profile_id', options.profileId);
               }
      if (options?.times) { 
                  urlSearchParams.set('times', options.times);
               }
      const url = `/profile/clone` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async screenResolution(): Promise<ProfileManagementScreenResolutionResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/fpb/resolutions`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        }
    }
    this.browserProfileData = {
      
        async unlockLockedProfiles(options?: BrowserProfileDataUnlockLockedProfilesOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.ids) { 
                  urlSearchParams.set('ids', options.ids);
               }
      const url = `/bpds/profile/unlock_profiles` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        }
    }
    this.proxy = {
      
        async generateProxy(body: ProxyGenerateProxyRequest, options?: ProxyGenerateProxyOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.country) { 
                  urlSearchParams.set('country', options.country);
               }
      if (options?.protocol) { 
                  urlSearchParams.set('protocol', options.protocol);
               }
      if (options?.sessiontype) { 
                  urlSearchParams.set('sessionType', options.sessiontype);
               }
      if (options?.region) { 
                  urlSearchParams.set('region', options.region);
               }
      if (options?.city) { 
                  urlSearchParams.set('city', options.city);
               }
      if (options?.ipttl) { 
                  urlSearchParams.set('IPTTL', options.ipttl);
               }
      if (options?.count) { 
                  urlSearchParams.set('count', options.count);
               }
      const url = `/v1/proxy/connection_url` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async fetchProxyData(): Promise<ProxyFetchProxyDataResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/v1/user`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        }
    }
    this.preMadeCookies = {
      
        async targetWebsiteList(): Promise<PreMadeCookiesTargetWebsiteListResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/cookies/metadata/websites`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async createCookiesMetadata(body: PreMadeCookiesCreateCookiesMetadataRequest, options?: PreMadeCookiesCreateCookiesMetadataOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.profileId) { 
                  urlSearchParams.set('profile_id', options.profileId);
               }
      if (options?.targetWebsite) { 
                  urlSearchParams.set('target_website', options.targetWebsite);
               }
      const url = `/api/v1/cookies/metadata` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				profile_id: body.profileId,
      				target_website: body.targetWebsite,
      })
          });
          return res.json();
        },
    
      
        async cookiesList(): Promise<PreMadeCookiesCookiesListResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/cookies/<your profile id>`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async updateCookiesMetadata(body: PreMadeCookiesUpdateCookiesMetadataRequest, options?: PreMadeCookiesUpdateCookiesMetadataOptions): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.profileId) { 
                  urlSearchParams.set('profile_id', options.profileId);
               }
      if (options?.targetWebsite) { 
                  urlSearchParams.set('target_website', options.targetWebsite);
               }
      if (options?.additionalWebsite) { 
                  urlSearchParams.set('additional_website', options.additionalWebsite);
               }
      const url = `/api/v1/cookies/metadata` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "PUT",
          		headers: headers,
          		body: JSON.stringify({
      				profile_id: body.profileId,
      				target_website: body.targetWebsite,
      				additional_website: body.additionalWebsite,
      })
          });
          return res.json();
        }
    }
    this.scriptRunner = {
      
        async startBrowserProfileWithSelenium(folderId: string, profileId: string, options?: ScriptRunnerStartBrowserProfileWithSeleniumOptions): Promise<ScriptRunnerStartBrowserProfileWithSeleniumResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.automationType) { 
                  urlSearchParams.set('automation_type', options.automationType);
               }
      const url = `/api/v1/profile/f/${folderId}/p/${profileId}/start` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async startScriptRunner(body: ScriptRunnerStartScriptRunnerRequest, options?: ScriptRunnerStartScriptRunnerOptions): Promise<ScriptRunnerStartScriptRunnerResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.scriptFile) { 
                  urlSearchParams.set('script_file', options.scriptFile);
               }
      if (options?.profileIds) { 
                  urlSearchParams.set('profile_ids', options.profileIds);
               }
      const url = `/api/v1/run_script` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async stopScriptRunner(body: ScriptRunnerStopScriptRunnerRequest): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/profile/stop_script`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify({
      				profile_ids: body.profileIds,
      })
          });
          return res.json();
        },
    
      
        async scriptList(): Promise<any> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/scripts`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        }
    }
    this.profileImportExport = {
      
        async profileExport(profileId: string): Promise<ProfileImportExportProfileExportResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/profile/${profileId}/export`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers
          });
          return res.json();
        },
    
      
        async exportStatusByProfile(exportId: string): Promise<ProfileImportExportExportStatusByProfileResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/profile/exports/${exportId}/status`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async exportStatusAll(): Promise<ProfileImportExportExportStatusAllResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/profile/exports/statuses`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async profileImport(body: ProfileImportExportProfileImportRequest, options?: ProfileImportExportProfileImportOptions): Promise<ProfileImportExportProfileImportResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const urlSearchParams = new URLSearchParams();
      if (options?.importPath) { 
                  urlSearchParams.set('import_path', options.importPath);
               }
      if (options?.isLocal) { 
                  urlSearchParams.set('is_local', options.isLocal);
               }
      const url = `/api/v1/profile/import` + '?' + urlSearchParams.toString();
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "POST",
          		headers: headers,
          		body: JSON.stringify(undefined)
          });
          return res.json();
        },
    
      
        async importStatusByProfile(importId: string): Promise<ProfileImportExportImportStatusByProfileResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/profile/imports/${importId}/status`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        },
    
      
        async importStatusAll(): Promise<ProfileImportExportImportStatusAllResponse> {
          const headers: Header = {"Content-Type": "application/json"};
      const url = `/api/v1/profile/imports/statuses`;
      headers.Authorization = "Bearer " + self.token;
          const res = await fetch(self.baseUrl + url, {
            	method: "GET",
          		headers: headers
          });
          return res.json();
        }
    }
        }
    }