export interface LauncherStartBrowserProfileResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface LauncherStartBrowserProfileOptions {
	automationType?: string,
	headlessMode?: string
}


export interface LauncherStartQuickProfileV3Response {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface LauncherStartQuickProfileV3Options {
	browserType?: string,
	autoUpdateCore?: string,
	coreVersion?: string,
	osType?: string,
	scriptFile?: string,
	automation?: string,
	isHeadless?: string,
	proxy?: string,
	saveTraffic?: string,
	parameters?: string,
	flags?: string,
	webrtcMasking?: string,
	geolocationPopup?: string,
	audioMaskingGraphicsNoise?: string,
	proxyMasking?: string,
	navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMaskingPortsMasking?: string,
	geolocationMasking?: string,
	canvasNoise?: string,
	startupBehavior?: string,
	fingerprint?: string,
	hardwareConcurrency?: string,
	userAgent?: string,
	platform?: string,
	osCpu?: string,
	acceptLanguages?: string,
	languages?: string,
	locale?: string,
	zone?: string,
	vendor?: string,
	renderer?: string,
	vendorId?: string,
	rendererId?: string,
	publicIp?: string,
	audioOutputs?: string,
	videoInputs?: string,
	audioInputs?: string,
	width?: string,
	height?: string,
	pixelRatio?: string,
	ports?: string,
	accuracy?: string,
	altitude?: string,
	longitude?: string,
	latitude?: string,
	fonts?: string,
	cmdParams?: string,
	customStartUrls?: string,
	maxTouchPoints?: string
}


export interface LauncherStartQuickProfileResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface LauncherStartQuickProfileOptions {
	browserType?: string,
	autoUpdateCore?: string,
	coreVersion?: string,
	osType?: string,
	automation?: string,
	isHeadless?: string,
	proxy?: string,
	saveTraffic?: string,
	parameters?: string,
	flags?: string,
	webrtcMasking?: string,
	geolocationPopup?: string,
	audioMaskingGraphicsNoise?: string,
	proxyMasking?: string,
	navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMaskingPortsMasking?: string,
	geolocationMasking?: string,
	canvasNoise?: string,
	startupBehavior?: string,
	fingerprint?: string,
	hardwareConcurrency?: string,
	userAgent?: string,
	platform?: string,
	osCpu?: string,
	acceptLanguages?: string,
	languages?: string,
	locale?: string,
	zone?: string,
	vendor?: string,
	renderer?: string,
	vendorId?: string,
	rendererId?: string,
	publicIp?: string,
	audioOutputs?: string,
	videoInputs?: string,
	audioInputs?: string,
	width?: string,
	height?: string,
	pixelRatio?: string,
	ports?: string,
	accuracy?: string,
	altitude?: string,
	longitude?: string,
	latitude?: string,
	fonts?: string,
	cmdParams?: string,
	customStartUrls?: string,
	maxTouchPoints?: string
}


export interface LauncherStopBrowserProfileResponse {
  status: { [key: string]: any };
}

export interface LauncherStopAllProfilesResponse {
  status: { [key: string]: any };
}

export interface LauncherStopAllProfilesOptions {
	type?: string
}


export interface LauncherGetVersionResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface LauncherGetProfileStatusResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface LauncherGetAllProfilesStatusResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface LauncherLoadedBrowserCoresResponse {
  data: { [key: string]: any }[];
  status: { [key: string]: any };
}

export interface LauncherBrowserCoreListResponse {
  status: { [key: string]: any };
  data: { [key: string]: any };
}

export interface LauncherBrowserCoreListOptions {
	browserType?: string
}


export interface LauncherLoadBrowserCoreOptions {
	browserType?: string,
	version?: string
}


export interface LauncherDeleteBrowserCoreResponse {
  status: { [key: string]: any };
}

export interface LauncherDeleteBrowserCoreOptions {
	browserType?: string,
	version?: string
}


export interface LauncherValidateProxyOptions {
	type?: string,
	host?: string,
	port?: string,
	username?: string,
	password?: string
}


export interface LauncherCookieImportOptions {
	profileId?: string,
	folderId?: string,
	importAdvancedCookies?: string,
	cookies?: string
}


export interface LauncherCookieExportRequest {
  profileId: string;
  folderId: string;
}

export interface LauncherCookieExportOptions {
	profileId?: string,
	folderId?: string
}


export interface LauncherNamespace {
  startBrowserProfile(folderId: string, profileId: string, options?: LauncherStartBrowserProfileOptions): Promise<LauncherStartBrowserProfileResponse>;
  startQuickProfileV3(options?: LauncherStartQuickProfileV3Options): Promise<LauncherStartQuickProfileV3Response>;
  startQuickProfile(options?: LauncherStartQuickProfileOptions): Promise<LauncherStartQuickProfileResponse>;
  stopBrowserProfile(profileId: string): Promise<LauncherStopBrowserProfileResponse>;
  stopAllProfiles(options?: LauncherStopAllProfilesOptions): Promise<LauncherStopAllProfilesResponse>;
  getVersion(): Promise<LauncherGetVersionResponse>;
  getProfileStatus(profileId: string): Promise<LauncherGetProfileStatusResponse>;
  getAllProfilesStatus(): Promise<LauncherGetAllProfilesStatusResponse>;
  loadedBrowserCores(): Promise<LauncherLoadedBrowserCoresResponse>;
  browserCoreList(options?: LauncherBrowserCoreListOptions): Promise<LauncherBrowserCoreListResponse>;
  loadBrowserCore(options?: LauncherLoadBrowserCoreOptions): Promise<any>;
  deleteBrowserCore(options?: LauncherDeleteBrowserCoreOptions): Promise<LauncherDeleteBrowserCoreResponse>;
  validateProxy(options?: LauncherValidateProxyOptions): Promise<any>;
  cookieImport(options?: LauncherCookieImportOptions): Promise<any>;
  cookieExport(body: LauncherCookieExportRequest, options?: LauncherCookieExportOptions): Promise<any>;
}

export interface ProfileAccessManagementUserSignInRequest {
  email: string;
  password: string;
}

export interface ProfileAccessManagementUserSignInOptions {
	email?: string,
	password?: string
}


export interface ProfileAccessManagementUserRefreshTokenSwitchWorkspaceRequest {
  email: string;
  refreshToken: string;
  workspaceId: string;
}

export interface ProfileAccessManagementUserRefreshTokenSwitchWorkspaceOptions {
	email?: string,
	refreshToken?: string,
	workspaceId?: string
}


export interface ProfileAccessManagementUserRevokeTokenOptions {
	token?: string,
	isAutomation?: string
}


export interface ProfileAccessManagementUserChangePasswordRequest {
  newPassword: string;
  password: string;
}

export interface ProfileAccessManagementUserChangePasswordOptions {
	newPassword?: string,
	password?: string
}


export interface ProfileAccessManagementUserWorkspacesResponse {
  status: { [key: string]: any };
  data: { [key: string]: any };
}

export interface ProfileAccessManagementUserTokenListResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface ProfileAccessManagementWorkspaceRestrictionsResponse {
  status: { [key: string]: any };
  data: { [key: string]: any };
}

export interface ProfileAccessManagementWorkspaceFoldersForUserOptions {
	email?: string
}


export interface ProfileAccessManagementWorkspaceStatisticsResponse {
  status: { [key: string]: any };
  data: { [key: string]: any };
}

export interface ProfileAccessManagementWorkspaceAutomationTokenResponse {
  status: { [key: string]: any };
  data: { [key: string]: any };
}

export interface ProfileAccessManagementWorkspaceAutomationTokenOptions {
	expirationPeriod?: string
}


export interface ProfileAccessManagementWorkspaceCreateFolderRequest {
  name: string;
  comment: string;
}

export interface ProfileAccessManagementWorkspaceCreateFolderOptions {
	name?: string,
	comment?: string
}


export interface ProfileAccessManagementWorkspaceUpdateFolderRequest {
  folderId: string;
  name: string;
  comment: string;
}

export interface ProfileAccessManagementWorkspaceUpdateFolderOptions {
	folderId?: string,
	name?: string,
	comment?: string
}


export interface ProfileAccessManagementWorkspaceRemoveFoldersRequest {
  ids: string[];
}

export interface ProfileAccessManagementWorkspaceRemoveFoldersOptions {
	ids?: string
}


export interface ProfileAccessManagementWorkspaceLeaveRequest {
  workspaceId: string;
}

export interface ProfileAccessManagementWorkspaceLeaveOptions {
	workspaceId?: string
}


export interface ProfileAccessManagementNamespace {
  userSignIn(body: ProfileAccessManagementUserSignInRequest, options?: ProfileAccessManagementUserSignInOptions): Promise<any>;
  userRefreshTokenSwitchWorkspace(body: ProfileAccessManagementUserRefreshTokenSwitchWorkspaceRequest, options?: ProfileAccessManagementUserRefreshTokenSwitchWorkspaceOptions): Promise<any>;
  userRevokeToken(options?: ProfileAccessManagementUserRevokeTokenOptions): Promise<any>;
  userChangePassword(body: ProfileAccessManagementUserChangePasswordRequest, options?: ProfileAccessManagementUserChangePasswordOptions): Promise<any>;
  userWorkspaces(): Promise<ProfileAccessManagementUserWorkspacesResponse>;
  userTokenList(): Promise<ProfileAccessManagementUserTokenListResponse>;
  workspaceRestrictions(): Promise<ProfileAccessManagementWorkspaceRestrictionsResponse>;
  workspaceFolders(): Promise<any>;
  workspaceFoldersForUser(options?: ProfileAccessManagementWorkspaceFoldersForUserOptions): Promise<any>;
  workspaceStatistics(): Promise<ProfileAccessManagementWorkspaceStatisticsResponse>;
  workspaceAutomationToken(options?: ProfileAccessManagementWorkspaceAutomationTokenOptions): Promise<ProfileAccessManagementWorkspaceAutomationTokenResponse>;
  workspaceCreateFolder(body: ProfileAccessManagementWorkspaceCreateFolderRequest, options?: ProfileAccessManagementWorkspaceCreateFolderOptions): Promise<any>;
  workspaceUpdateFolder(body: ProfileAccessManagementWorkspaceUpdateFolderRequest, options?: ProfileAccessManagementWorkspaceUpdateFolderOptions): Promise<any>;
  workspaceRemoveFolders(body: ProfileAccessManagementWorkspaceRemoveFoldersRequest, options?: ProfileAccessManagementWorkspaceRemoveFoldersOptions): Promise<any>;
  workspaceLeave(body: ProfileAccessManagementWorkspaceLeaveRequest, options?: ProfileAccessManagementWorkspaceLeaveOptions): Promise<any>;
}

export interface ProfileManagementProfileCreateOptions {
	name?: string,
	browserType?: string,
	folderId?: string,
	osType?: string,
	coreVersion?: string,
	autoUpdateCore?: string,
	times?: string,
	notes?: string,
	parameters?: string,
	flags?: string,
	webrtcMasking?: string,
	audioMaskingGraphicsNoisePortsMasking?: string,
	proxyMasking?: string,
	geolocationPopup?: string,
	navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMasking?: string,
	geolocationMasking?: string,
	quicMode?: string,
	startupBehavior?: string,
	canvasNoise?: string,
	fingerprint?: string,
	hardwareConcurrency?: string,
	userAgent?: string,
	platform?: string,
	osCpu?: string,
	acceptLanguages?: string,
	languages?: string,
	locale?: string,
	zone?: string,
	vendor?: string,
	renderer?: string,
	vendorId?: string,
	rendererId?: string,
	publicIp?: string,
	audioOutputs?: string,
	audioInputs?: string,
	videoInputs?: string,
	width?: string,
	height?: string,
	pixelRatio?: string,
	accuracy?: string,
	altitude?: string,
	latitude?: string,
	longitude?: string,
	ports?: string,
	fonts?: string,
	cmdParams?: string,
	isLocal?: string,
	saveServiceWorker?: string,
	proxy?: string,
	saveTraffic?: string,
	customStartUrls?: string,
	maxTouchPoints?: string
}


export interface ProfileManagementProfileSearchRequest {
  isRemoved: boolean;
  limit: number;
  offset: number;
  storageType: string;
  orderBy: string;
  sort: string;
}

export interface ProfileManagementProfileSearchResponse {
  status: { [key: string]: any };
  data: { [key: string]: any };
}

export interface ProfileManagementProfileSearchOptions {
	isRemoved?: string,
	limit?: string,
	offset?: string,
	searchText?: string,
	storageType?: string,
	folderId?: string,
	orderBy?: string,
	sort?: string,
	coreVersion?: string
}


export interface ProfileManagementProfileRemoveResponse {
  status: { [key: string]: any };
  data: any;
}

export interface ProfileManagementProfileRemoveOptions {
	ids?: string,
	permanently?: string
}


export interface ProfileManagementProfileUpdateOptions {
	profileId?: string,
	name?: string,
	parameters?: string,
	flags?: string,
	webrtcMasking?: string,
	audioMaskingGraphicsNoisePortsMasking?: string,
	proxyMasking?: string,
	geolocationPopup?: string,
	navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMasking?: string,
	geolocationMasking?: string,
	autoUpdateCore?: string,
	quicMode?: string,
	canvasNoise?: string,
	startupBehavior?: string,
	fingerprint?: string,
	hardwareConcurrency?: string,
	userAgent?: string,
	platform?: string,
	osCpu?: string,
	acceptLanguages?: string,
	languages?: string,
	locale?: string,
	zone?: string,
	vendor?: string,
	renderer?: string,
	vendorId?: string,
	rendererId?: string,
	publicIp?: string,
	audioOutputs?: string,
	audioInputs?: string,
	videoInputs?: string,
	width?: string,
	height?: string,
	pixelRatio?: string,
	accuracy?: string,
	altitude?: string,
	latitude?: string,
	longitude?: string,
	ports?: string,
	fonts?: string,
	cmdParams?: string,
	isLocal?: string,
	saveServiceWorker?: string,
	proxy?: string,
	saveTraffic?: string,
	customStartUrls?: string,
	notes?: string,
	maxTouchPoints?: string
}


export interface ProfileManagementProfileMoveRequest {
  destFolderId: string;
  ids: string[];
}

export interface ProfileManagementProfileMoveResponse {
  status: { [key: string]: any };
  data: any;
}

export interface ProfileManagementProfileMoveOptions {
	destFolderId?: string,
	ids?: string
}


export interface ProfileManagementProfilePartialUpdateResponse {
  status: { [key: string]: any };
  data: any;
}

export interface ProfileManagementProfilePartialUpdateOptions {
	profileId?: string,
	name?: string,
	autoUpdateCore?: string,
	proxy?: string,
	saveTraffic?: string,
	customStartUrls?: string,
	notes?: string,
	parameters?: string,
	flags?: string,
	webrtcMasking?: string,
	audioMaskingGraphicsNoisePortsMasking?: string,
	proxyMasking?: string,
	geolocationPopup?: string,
	navigatorMaskingLocalizationMaskingTimezoneMaskingGraphicsMaskingFontsMaskingMediaDevicesMaskingScreenMasking?: string,
	geolocationMasking?: string,
	quicMode?: string,
	canvasNoise?: string,
	startupBehavior?: string,
	isLocal?: string,
	saveServiceWorker?: string,
	fingerprint?: string,
	hardwareConcurrency?: string,
	userAgent?: string,
	platform?: string,
	osCpu?: string,
	acceptLanguages?: string,
	languages?: string,
	locale?: string,
	zone?: string,
	vendor?: string,
	renderer?: string,
	vendorId?: string,
	rendererId?: string,
	publicIp?: string,
	audioOutputs?: string,
	audioInputs?: string,
	videoInputs?: string,
	width?: string,
	height?: string,
	pixelRatio?: string,
	accuracy?: string,
	altitude?: string,
	latitude?: string,
	longitude?: string,
	ports?: string,
	fonts?: string,
	cmdParams?: string,
	maxTouchPoints?: string
}


export interface ProfileManagementProfileRestoreRequest {
  ids: string[];
}

export interface ProfileManagementProfileRestoreResponse {
  status: { [key: string]: any };
  data: any;
}

export interface ProfileManagementProfileRestoreOptions {
	ids?: string
}


export interface ProfileManagementProfileMetasRequest {
  ids: string[];
}

export interface ProfileManagementProfileMetasResponse {
  status: { [key: string]: any };
  data: { [key: string]: any };
}

export interface ProfileManagementProfileMetasOptions {
	ids?: string
}


export interface ProfileManagementProfileSummaryResponse {
  status: { [key: string]: any };
  data: { [key: string]: any };
}

export interface ProfileManagementProfileSummaryOptions {
	metaId?: string
}


export interface ProfileManagementProfileCloneResponse {
  status: { [key: string]: any };
  data: { [key: string]: any };
}

export interface ProfileManagementProfileCloneOptions {
	profileId?: string,
	times?: string
}


export interface ProfileManagementScreenResolutionResponse {
  status: { [key: string]: any };
  data: { [key: string]: any };
}

export interface ProfileManagementNamespace {
  profileCreate(options?: ProfileManagementProfileCreateOptions): Promise<any>;
  profileSearch(body: ProfileManagementProfileSearchRequest, options?: ProfileManagementProfileSearchOptions): Promise<ProfileManagementProfileSearchResponse>;
  profileRemove(options?: ProfileManagementProfileRemoveOptions): Promise<ProfileManagementProfileRemoveResponse>;
  profileUpdate(options?: ProfileManagementProfileUpdateOptions): Promise<any>;
  profileMove(body: ProfileManagementProfileMoveRequest, options?: ProfileManagementProfileMoveOptions): Promise<ProfileManagementProfileMoveResponse>;
  profilePartialUpdate(options?: ProfileManagementProfilePartialUpdateOptions): Promise<ProfileManagementProfilePartialUpdateResponse>;
  profileRestore(body: ProfileManagementProfileRestoreRequest, options?: ProfileManagementProfileRestoreOptions): Promise<ProfileManagementProfileRestoreResponse>;
  profileMetas(body: ProfileManagementProfileMetasRequest, options?: ProfileManagementProfileMetasOptions): Promise<ProfileManagementProfileMetasResponse>;
  profileSummary(options?: ProfileManagementProfileSummaryOptions): Promise<ProfileManagementProfileSummaryResponse>;
  profileClone(options?: ProfileManagementProfileCloneOptions): Promise<ProfileManagementProfileCloneResponse>;
  screenResolution(): Promise<ProfileManagementScreenResolutionResponse>;
}

export interface BrowserProfileDataUnlockLockedProfilesOptions {
	ids?: string
}


export interface BrowserProfileDataNamespace {
  unlockLockedProfiles(options?: BrowserProfileDataUnlockLockedProfilesOptions): Promise<any>;
}

export interface ProxyGenerateProxyOptions {
	country?: string,
	protocol?: string,
	sessiontype?: string,
	region?: string,
	city?: string,
	ipttl?: string,
	count?: string
}


export interface ProxyFetchProxyDataResponse {
  traffic: number;
  billingid: string;
}

export interface ProxyNamespace {
  generateProxy(options?: ProxyGenerateProxyOptions): Promise<any>;
  fetchProxyData(): Promise<ProxyFetchProxyDataResponse>;
}

export interface PreMadeCookiesTargetWebsiteListResponse {
  data: { [key: string]: any }[];
  status: { [key: string]: any };
}

export interface PreMadeCookiesCreateCookiesMetadataRequest {
  profileId: string;
  targetWebsite: string;
}

export interface PreMadeCookiesCreateCookiesMetadataOptions {
	profileId?: string,
	targetWebsite?: string
}


export interface PreMadeCookiesCookiesListResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface PreMadeCookiesUpdateCookiesMetadataRequest {
  profileId: string;
  targetWebsite: string;
  additionalWebsite: string;
}

export interface PreMadeCookiesUpdateCookiesMetadataOptions {
	profileId?: string,
	targetWebsite?: string,
	additionalWebsite?: string
}


export interface PreMadeCookiesNamespace {
  targetWebsiteList(): Promise<PreMadeCookiesTargetWebsiteListResponse>;
  createCookiesMetadata(body: PreMadeCookiesCreateCookiesMetadataRequest, options?: PreMadeCookiesCreateCookiesMetadataOptions): Promise<any>;
  cookiesList(): Promise<PreMadeCookiesCookiesListResponse>;
  updateCookiesMetadata(body: PreMadeCookiesUpdateCookiesMetadataRequest, options?: PreMadeCookiesUpdateCookiesMetadataOptions): Promise<any>;
}

export interface ScriptRunnerStartBrowserProfileWithSeleniumResponse {
  status: { [key: string]: any };
}

export interface ScriptRunnerStartBrowserProfileWithSeleniumOptions {
	automationType?: string
}


export interface ScriptRunnerStartScriptRunnerResponse {
  data: { [key: string]: any }[];
  status: { [key: string]: any };
}

export interface ScriptRunnerStartScriptRunnerOptions {
	scriptFile?: string,
	profileIds?: string
}


export interface ScriptRunnerStopScriptRunnerRequest {
  profileIds: string[];
}

export interface ScriptRunnerNamespace {
  startBrowserProfileWithSelenium(folderId: string, profileId: string, options?: ScriptRunnerStartBrowserProfileWithSeleniumOptions): Promise<ScriptRunnerStartBrowserProfileWithSeleniumResponse>;
  startScriptRunner(options?: ScriptRunnerStartScriptRunnerOptions): Promise<ScriptRunnerStartScriptRunnerResponse>;
  stopScriptRunner(body: ScriptRunnerStopScriptRunnerRequest): Promise<any>;
  scriptList(): Promise<any>;
}

export interface ProfileImportExportProfileExportResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface ProfileImportExportExportStatusByProfileResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface ProfileImportExportExportStatusAllResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface ProfileImportExportProfileImportResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface ProfileImportExportProfileImportOptions {
	importPath?: string,
	isLocal?: string
}


export interface ProfileImportExportImportStatusByProfileResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface ProfileImportExportImportStatusAllResponse {
  data: { [key: string]: any };
  status: { [key: string]: any };
}

export interface ProfileImportExportNamespace {
  profileExport(profileId: string): Promise<ProfileImportExportProfileExportResponse>;
  exportStatusByProfile(exportId: string): Promise<ProfileImportExportExportStatusByProfileResponse>;
  exportStatusAll(): Promise<ProfileImportExportExportStatusAllResponse>;
  profileImport(options?: ProfileImportExportProfileImportOptions): Promise<ProfileImportExportProfileImportResponse>;
  importStatusByProfile(importId: string): Promise<ProfileImportExportImportStatusByProfileResponse>;
  importStatusAll(): Promise<ProfileImportExportImportStatusAllResponse>;
}

export interface Namespace {
  launcher: LauncherNamespace;
  profileAccessManagement: ProfileAccessManagementNamespace;
  profileManagement: ProfileManagementNamespace;
  browserProfileData: BrowserProfileDataNamespace;
  proxy: ProxyNamespace;
  preMadeCookies: PreMadeCookiesNamespace;
  scriptRunner: ScriptRunnerNamespace;
  profileImportExport: ProfileImportExportNamespace;
}

export interface Header { 
        [key: string]: string;
    }