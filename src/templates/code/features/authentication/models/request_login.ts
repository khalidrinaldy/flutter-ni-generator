export const requestLogin = `import 'dart:convert';

class LoginRequest {
    String? username;
    String? password;

    LoginRequest({
        this.username,
        this.password,
    });

    factory LoginRequest.fromRawJson(String str) => LoginRequest.fromJson(json.decode(str));

    String toRawJson() => json.encode(toJson());

    factory LoginRequest.fromJson(Map<String, dynamic> json) => LoginRequest(
        username: json["username"],
        password: json["password"],
    );

    Map<String, dynamic> toJson() => {
        "username": username,
        "password": password,
    };
}`;