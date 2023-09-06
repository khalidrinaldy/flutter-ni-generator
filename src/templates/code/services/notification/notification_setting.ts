export const notificationSetting = `
part of 'notification.dart';

class NotificationPlatformSetting {
  //Android Channel
  static const String _androidNotificationId = "CUSTOM_ID_HERE";
  static const String _androidNotificationName = "CUSTOM_NAME_HERE";
  static AndroidNotificationChannel get androidNotificationChannel => const AndroidNotificationChannel(
        _androidNotificationId,
        _androidNotificationName,
        importance: Importance.max,
      );

  //Android Setting
  static const String _defaultIcon = "@mipmap/ic_launcher";
  static const String _bigIcon = "@mipmap/ic_launcher";
  static AndroidInitializationSettings get androidInitializationSettings => const AndroidInitializationSettings(_defaultIcon);

  //Android Notification Details
  static AndroidNotificationDetails get androidNotificationDetails => AndroidNotificationDetails(
    androidNotificationChannel.id,
    androidNotificationChannel.name,
    icon: _defaultIcon,
    color: Colors.blue,
    largeIcon: const DrawableResourceAndroidBitmap(_bigIcon),
    styleInformation: const BigTextStyleInformation(""),
    importance: Importance.max,
    priority: Priority.high,
    visibility: NotificationVisibility.public,
  );

  //iOS Setting
  static DarwinInitializationSettings get initializationSettingsIOS => DarwinInitializationSettings(
        requestSoundPermission: true,
        requestBadgePermission: true,
        requestAlertPermission: true,
        defaultPresentAlert: true,
        defaultPresentBadge: true,
        defaultPresentSound: true,
        onDidReceiveLocalNotification: (id, title, body, payload) {
          print("test notif on ios");
        },
      );

  static DarwinNotificationDetails get darwinNotificationDetails => DarwinNotificationDetails(
    presentAlert: initializationSettingsIOS.defaultPresentAlert,
    presentBadge: initializationSettingsIOS.defaultPresentBadge,
    presentSound: initializationSettingsIOS.defaultPresentSound,
  );

  //Initialization Setting
  static InitializationSettings get initializationSettings => InitializationSettings(
    android: androidInitializationSettings,
    iOS: initializationSettingsIOS,
  );
}
`;