export const registerAdapter = `import 'package:hive/hive.dart';

///Register adapter for store object at Hive Storage
class AppHiveAdapter {
  static void registerAdapter() {
    Hive.registerAdapter(UserAdapter());
  }
}
`;