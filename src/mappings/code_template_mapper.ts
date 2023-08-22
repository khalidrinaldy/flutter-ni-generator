import * as t from "../templates/code/code";

let mappings: any = {};
//--- Mapping Utils
mappings['assets'] = t.assets;
mappings['enum'] = t.enumConst;
mappings['typedef'] = t.typeDef;
mappings['app_button'] = t.appButton;
mappings['extension'] = t.extensionConst;
mappings['helper'] = t.helper;
mappings['toast'] = t.toast;
mappings['app_root_scaffold'] = t.appRootScaffold;
mappings['color'] = t.color;
mappings['theme'] = t.theme;

//---- Mapping Services
mappings['timezone'] = t.timezone;
mappings['logging_interceptor'] = t.loggingInterceptor;
mappings['token_interceptor'] = t.tokenInterceptor;
mappings['base_client'] = t.baseClient;
mappings['logger'] = t.logger;
mappings['network'] = t.network;
mappings['response_pagination'] = t.responsePagination;
mappings['response'] = t.response;
mappings['url'] = t.url;
mappings['auth_storage'] = t.authStorage;
mappings['directory'] = t.directory;
mappings['register_adapter'] = t.registerAdapter;
mappings['storage_key'] = t.storageKey;
mappings['storage'] = t.storage;

//---- Mapping Features
mappings['login_binding'] = t.loginBinding;
mappings['login_controller'] = t.loginController;
mappings['request_login'] = t.requestLogin;
mappings['user'] = t.user;
mappings['authentication_repository'] = t.authRepository;
mappings['some_widgets'] = t.someWidgets;
mappings['login_view'] = t.loginView;
mappings['login'] = t.login;

mappings['routes'] = t.routes;

export default mappings;