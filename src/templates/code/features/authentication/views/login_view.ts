export const loginView = `
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class LoginView extends GetView<LoginController> {
    const LoginView({Key? key}) : super(key: key);
  
    @override
    Widget build(BuildContext context) {
      return AppRootWrap(
        child: Scaffold();
    }
  }`;