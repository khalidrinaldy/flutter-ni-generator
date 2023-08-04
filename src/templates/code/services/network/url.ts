export const url = `part of 'network.dart';

class NetworkEndpoint {
  static String baseUrl = "https://company-domain/api/";
  
  /// Excluded endpoint that will not use Authorization
  /// in headers
  static List<Enum> excludedPath = [
    AuthEndpoint.login,
  ];
  
  //Auth Endpoint
  static String authentication(AuthEndpoint authEndpoint) {
    return authEndpoint.path;
  }
}

enum AuthEndpoint {
  login("login");

  const AuthEndpoint(this.path);
  final String path;
}`;