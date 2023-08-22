export const authStorage = `
import 'storage.dart';
import 'storage_key.dart';

class AuthStorage extends AppStorage {
  static final AuthStorage instance = AuthStorage._();

  AuthStorage._();

  // Setter
  /// Store user data into storage
  void storeUser(User user) {
    box.put(StorageKey.user, user);
  }

  /// Store access token into storage
  void storeToken(String token) => box.put(StorageKey.token, token);

  /// Delete current user data
  void clearUserData() {
    box.delete(StorageKey.user);
    box.delete(StorageKey.token);
  }

  // Getter
  /// Get user acces token from storage
  String? get token => box.get(StorageKey.token);

  /// Get user from storage
  User get user => box.get(StorageKey.user);

  /// Check the user is authenticated or not
  bool get isAuthenticated => box.get(StorageKey.token) != null;
}
`;