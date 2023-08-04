import * as t from "../templates/code/code";

let mappings: any = {};
//--- Mapping Utils
mappings['assets'] = t.assets;
mappings['enum'] = t.enumConst;
mappings['typedef'] = t.typeDef;
mappings['appButton'] = t.appButton;
mappings['extension'] = t.extensionConst;
mappings['helper'] = t.helper;
mappings['toast'] = t.toast;
mappings['appRootScaffold'] = t.appRootScaffold;
mappings['color'] = t.color;
mappings['theme'] = t.theme;

//---- Mapping Services
mappings['timezone'] = t.timezone;
mappings['loggingInterceptor'] = t.loggingInterceptor;
mappings['tokenInterceptor'] = t.tokenInterceptor;
mappings['baseClient'] = t.baseClient;
mappings['logger'] = t.logger;
mappings['network'] = t.network;
mappings['responsePagination'] = t.responsePagination;
mappings['response'] = t.response;
mappings['url'] = t.url;
mappings['authStorage'] = t.authStorage;
mappings['directory'] = t.directory;
mappings['registerAdapter'] = t.registerAdapter;
mappings['storageKey'] = t.storageKey;
mappings['storage'] = t.storage;

//---- Mapping Features
mappings['loginBinding'] = t.loginBinding;
mappings['loginController'] = t.loginController;
mappings['requestLogin'] = t.requestLogin;
mappings['authRepository'] = t.authRepository;
mappings['someWidgets'] = t.someWidgets;
mappings['loginView'] = t.loginView;

mappings['routes'] = t.routes;

export default mappings;