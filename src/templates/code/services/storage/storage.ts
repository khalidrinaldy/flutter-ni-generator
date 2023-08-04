export const storage = `
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:hive/hive.dart';
import 'package:path_provider/path_provider.dart';

class AppStorage {
  static const FlutterSecureStorage _storage = FlutterSecureStorage();
  static late final Box _box;

  ///Use this only for subclasses
  @protected Box get box => _box;

  ///Init the [box]
  ///
  ///Call this function in main.dart
  static Future<void> initSecureBox() async {
    String encryptedKey = await _storage.read(key: StorageKey.encryptedKey) ?? '';

    if (encryptedKey.isEmpty) {
      encryptedKey = base64Encode(Hive.generateSecureKey());
      await _storage.write(
        key: StorageKey.encryptedKey,
        value: encryptedKey,
      );
    }

    final encryptionKeyUint8List = base64Url.decode(encryptedKey);
    _box = await _openHiveBox(
        //Change box name here
      "BOX_NAME",
      encryptionCipher: HiveAesCipher(encryptionKeyUint8List),
    );
  }

  static Future<Box> _openHiveBox(String boxName, {HiveCipher? encryptionCipher}) async {
    if (!kIsWeb && !Hive.isBoxOpen(boxName)) {
      Hive.init((await getApplicationDocumentsDirectory()).path);
    }

    return await Hive.openBox(boxName, encryptionCipher: encryptionCipher);
  }
}`;