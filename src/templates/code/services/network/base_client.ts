export const baseClient = `part of 'network.dart';

class NetworkClient {
  //Dio instance
  final Dio _dio;

  //Cancel token
  final CancelToken _cancelToken;

  //Network client constructor
  NetworkClient({
    required Dio dioClient,
    Iterable<Interceptor>? interceptors,
  })  : _dio = dioClient,
        _cancelToken = CancelToken() {
    if (interceptors != null) _dio.interceptors.addAll(interceptors);
  }

  void cancelRequests({CancelToken? cancelToken}) {
    if (cancelToken == null) {
      _cancelToken.cancel('Cancelled');
    } else {
      cancelToken.cancel();
    }
  }

  /// HTTP Methods \`GET\`
  ///
  /// This methods return \`Response\` from [Dio]
  ///
  /// Keep [Dio] instance isolated from other layers
  Future<Response> get({
    required String endpoint,
    JSONData? queryParams,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    final response = await _dio.get(
      endpoint,
      queryParameters: queryParams,
      options: options,
      cancelToken: cancelToken,
    );
    return response;
  }

  /// HTTP Methods \`POST\`
  ///
  /// Add new [data] to database
  ///
  /// This methods will send [data] to backend
  ///
  /// Keep [Dio] instance isolated from other layers
  Future<Response> post({
    required String endpoint,
    JSONData? queryParams,
    Object? data,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    final response = await _dio.post(
      endpoint,
      queryParameters: queryParams,
      data: data,
      options: options,
      cancelToken: cancelToken,
    );
    return response;
  }

  /// HTTP Methods \`PUT\`
  ///
  /// This methods will send [data] to backend
  ///
  /// Keep [Dio] instance isolated from other layers
  Future<Response> put({
    required String endpoint,
    JSONData? queryParams,
    JSONData? data,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    final response = await _dio.put(
      endpoint,
      queryParameters: queryParams,
      data: data,
      options: options,
      cancelToken: cancelToken,
    );
    return response;
  }

  /// HTTP Methods \`DELETE\`
  ///
  /// This methods will delete [data]
  ///
  /// Keep [Dio] instance isolated from other layers
  Future<Response> delete({
    required String endpoint,
    JSONData? queryParams,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    final response = await _dio.delete(endpoint, queryParameters: queryParams, options: options, cancelToken: cancelToken);
    return response;
  }

  /// Download Methods
  ///
  /// This methods will download [data] via API
  ///
  /// Keep [Dio] instance isolated from other layers
  Future<Response> download({
    required String endpoint,
    required String savePath,
    JSONData? queryParams,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    final response = await _dio.download(
      endpoint,
      savePath,
      queryParameters: queryParams,
      options: options,
      cancelToken: cancelToken,
    );
    return response;
  }

  /// ApiResponse errorParser. This method
  /// will parse error based on DioErrorType
  ///
  /// Will return [ApiReponse]
  Future<ApiResponse<T>> errorParser<T>(DioException e) {
    ApiResponse<T> result = ApiResponse<T>(
      code: e.response?.statusCode,
      error: true,
      message: '',
    );

    switch (e.type) {
      case DioExceptionType.connectionTimeout:
        result = result.copyWith(
          message: e.response?.statusMessage ?? 'Can not connect to server',
        );
        break;
      case DioExceptionType.sendTimeout:
        result = result.copyWith(
          message: e.response?.statusMessage ?? 'Can not connect to server',
        );
        break;
      case DioExceptionType.receiveTimeout:
        result = result.copyWith(
          message: e.response?.statusMessage ?? 'Can not connect to server',
        );
        break;
      case DioExceptionType.connectionError:
        result = result.copyWith(
          message: e.response?.statusMessage ?? 'Connection error',
        );
        break;
      case DioExceptionType.badResponse:
        String message = '';

        if (e.response?.statusCode != 404) {
          message = (e.response?.data['message'] ?? e.response?.data['error'] ?? e.response).toString();
        } else {
          message = e.message ?? "Bad Response";
        }

        result = result.copyWith(
          message: message,
        );
        break;
      case DioExceptionType.cancel:
        result = result.copyWith(
          message: e.response?.statusMessage ?? 'Request cancelled',
        );
        break;
      case DioExceptionType.badCertificate:
        result = result.copyWith(
          message: e.response?.statusMessage ?? 'Bad certificate',
        );
        break;
      case DioExceptionType.unknown:
        result = result.copyWith(
          message: e.response?.statusMessage ?? 'Unknown error',
        );
        break;
    }

    return Future(() => result);
  }
}
`;