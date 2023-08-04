export const loggingInterceptor = `part of '../network.dart';

///Interceptor for debugging
class LoggingInterceptor extends QueuedInterceptor {
  final bool requestBody;
  final bool requestHeader;
  final bool responseBody;
  final bool error;

  LoggingInterceptor({
    this.requestHeader = true,
    this.requestBody = false,
    this.responseBody = false,
    this.error = true,
  });

  @override
  void onResponse(Response response, ResponseInterceptorHandler handler) {
    Logger.success('sd', header: 'DIO RESPONSE');

    Logger.success(
      DateTime.now().toRegularDateAndTimeFormat,
      tag: 'TIME    ',
    );

    Logger.success(
      response.requestOptions.method,
      tag: 'METHOD  ',
    );

    Logger.success(
      response.requestOptions.path,
      tag: 'ENDPOINT',
    );

    if (response.requestOptions.queryParameters.isNotEmpty) {
      Logger.success(
        response.requestOptions.queryParameters.toString(),
        tag: 'PARAMS  ',
      );
    }

    Logger.success(
      "\${response.statusCode}",
      tag: 'CODE    ',
    );

    Logger.success(
      '\${response.statusMessage}',
      tag: 'MESSAGE ',
    );

    if (responseBody && response.data != null) {
      Logger.success(
        response.data,
        tag: 'DATA    ',
      );
    }
    super.onResponse(response, handler);
  }

  @override
  void onError(DioException err, ErrorInterceptorHandler handler) {
    if (error) {
      Logger.error(header: 'DIO ERROR');

      Logger.error(
        tag: 'METHOD  ',
        error:
            "\${err.requestOptions.method} \${err.requestOptions.baseUrl + err.requestOptions.path}",
      );

      Logger.error(
        tag: 'CODE    ',
        error: '\${err.response?.statusCode}',
      );

      Logger.error(
        tag: 'TYPE    ',
        error: '\${err.type}',
      );

      Logger.error(
        tag: 'MESSAGE ',
        error: '\${err.response?.statusMessage}',
      );

      if (err.response?.data != null && err.response?.data is Map) {
        Logger.error(
          tag: 'DATA    ',
          error: '\${err.response?.data}',
        );
      }
      handler.reject(err);
    }

    super.onError(err, handler);
  }
}
`;