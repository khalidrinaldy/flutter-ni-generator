export const storageKey = `import 'package:flutter_dotenv/flutter_dotenv.dart';

class StorageKey {
  static String encryptedKey = dotenv.env["STORAGE_KEY"].toString();
  static String token = "token";
  static String user = "user";
}`;