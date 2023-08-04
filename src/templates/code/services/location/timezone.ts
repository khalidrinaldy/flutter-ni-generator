export const timezone = `
import 'package:flutter_timezone/flutter_timezone.dart';

class AppTimezone {
  static late final String _localTimeZone;

  static String get getLocalTimeZone => _localTimeZone;

  static Future<void> initLocalTimeZone() async {
    _localTimeZone = await FlutterTimezone.getLocalTimezone();
  }
}`;