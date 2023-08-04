export const loginController = `
import 'package:get/get.dart';
import 'package:flutter/material.dart';

import '../models/request_login.dart';
import '../models/response_login.dart';

class LoginController extends GetxController {
    final AuthenticationRepository _authRepository;
    LoginController(this._authRepository);
  
    //==============================CONTROLLER==============================
    final TextEditingController userController = TextEditingController();
    final TextEditingController passController = TextEditingController();
  
    //==============================STATE==============================
    RxBool obscureText = true.obs;
    RxBool isLoadingLogin = false.obs;
    bool get isFormValidated => userController.text.trim().isNotEmpty || passController.text.trim().isNotEmpty;
  
    //==============================METHOD==============================
    Future<void> login() async {
        final ApiResponse<LoginResponse> apiResponse = await _authRepository.login(
            loginRequest: LoginRequest(
              username: userController.text,
              password: passController.text,
            ),
          );
      
          if (apiResponse.error) {
            //Handle response error
            
          } else {
            //Handle success api response
            
          }
    }
  
    Future<void> _getUserData() async {
    }
  }`;