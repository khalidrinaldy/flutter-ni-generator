export const response = `part of 'network.dart';

class ApiResponse<T> {
  ApiResponse({
    required this.message,
    this.code,
    this.data,
    this.error = false,
  });

  bool error;
  String message;
  int? code;
  T? data;

  ApiResponse<T> copyWith({
    bool? error,
    String? message,
    int? code,
    T? data,
  }) {
    return ApiResponse<T>(
      error: error ?? this.error,
      code: code ?? this.code,
      data: data ?? data,
      message: message ?? this.message,
    );
  }

  factory ApiResponse.fromRawJson(String str) =>
      ApiResponse.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory ApiResponse.fromJson(Map<String, dynamic> json) => ApiResponse(
        error: json["error"],
        code: json["code"],
        message: json["message"],
        data: json["data"],
      );

  Map<String, dynamic> toJson() => {
        "error": error,
        "code": code,
        "message": message,
        "data": data,
      };
}
`;