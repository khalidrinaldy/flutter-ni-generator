export const routes = `
import 'package:get/get.dart';

import 'features/authentication/views/login_view.dart';

class Routes {
  static String login = '/login';

  static final List<GetPage> pages = <GetPage>[
    GetPage(
      name: login,
      page: () => const LoginView(),
      binding: BindingsBuilder(
        () => Get.lazyPut(() => LoginController(AuthenticationRepository())),
      ),
    ),
  ];
}

class InitialBinding extends Bindings {
  @override
  void dependencies() {
  }
}
`;