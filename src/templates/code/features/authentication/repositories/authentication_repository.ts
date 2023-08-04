export const authRepository = `
import 'package:dio/dio.dart';

import '../../../services/network/network.dart';
import '../models/request_login.dart';
import '../models/response_login.dart';

class AuthenticationRepository {
    // Create NetworkClient instance with baseUrl and interceptors
    final NetworkClient _client = NetworkClient(
      dioClient: Dio(BaseOptions(baseUrl: NetworkEndpoint.baseUrl)),
      interceptors: [
        LoggingInterceptor(
          responseBody: true,
        ),
        TokenInterceptor(),
      ],
    );
  
    ///Login
    Future<ApiResponse<LoginResponse>> login({required LoginRequest loginRequest}) async {
      
    }
  }`;