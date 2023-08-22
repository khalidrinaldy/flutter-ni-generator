export const loginView = `
part of 'login.dart';

class LoginView extends GetView<LoginController> {
  const LoginView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AppRootWrap(
      child: Scaffold(),
    );
  }
}
`;