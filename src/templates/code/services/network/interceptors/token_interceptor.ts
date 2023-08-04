export const tokenInterceptor = `part of '../network.dart';

///Interceptor for http method that needs token
class TokenInterceptor extends QueuedInterceptor {
  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) async {
    RequestOptions customOptions = options;

    // Check if path request is not in Endpoint.excludedPath, then
    // add Authorization header. Else, will not add Authorization header
    if (!NetworkEndpoint.excludedPath.contains(options.path)) {
      customOptions.headers = {'Authorization': 'Bearer \${AuthStorage.instance.token}'};
    }
    Logger.info('\${customOptions.headers}', tag: 'HEADERS ');

    super.onRequest(options, handler);
  }

  @override
  void onError(DioException err, ErrorInterceptorHandler handler) async {
    final options = err.response!.requestOptions;
    handler.reject(
      DioException(requestOptions: options),
    );
    // if (err.response?.statusCode == 401 &&
    //     !NetworkEndpoint.excludedPath.contains(options.path)) {
    //   final AuthenticationRepository repo = AuthenticationRepository();

    //   final retry = await repo.refreshToken(await _storage.token);
    //   Logger.info(options.headers.toString());
    //   if (!retry.error) {
    //     final res = await _dio.fetch(options..path);
    //     return handler.resolve(res);
    //   } else {
    //     return handler.reject(
    //       DioError(requestOptions: options),
    //     );
    //   }
    // }
    super.onError(err, handler);
  }
}
`;