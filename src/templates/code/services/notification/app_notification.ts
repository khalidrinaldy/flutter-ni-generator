export const appNotification = `
part of 'notification.dart';

@pragma('vm:entry-point')
void receiveNotificationBackground(NotificationResponse payload) {
  Map<String, dynamic> data = jsonDecode(payload.payload.toString());
  //Handle data payload in background
  AppNotification.instance.onReceivedNotification(data);
}

class AppNotification extends BaseNotification {
  static final AppNotification instance = AppNotification._();

  AppNotification._();

  final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin();

  @override
  Future<void> initializeNotification() async {
    await setupNotificationPlugin();
    setupFirebaseListener();
  }

  @override
  Future<void> setupNotificationPlugin() async {
    await flutterLocalNotificationsPlugin
        .resolvePlatformSpecificImplementation<AndroidFlutterLocalNotificationsPlugin>()
        ?.createNotificationChannel(NotificationPlatformSetting.androidNotificationChannel);

    await requestPermission();

    await flutterLocalNotificationsPlugin.initialize(
      NotificationPlatformSetting.initializationSettings,
      onDidReceiveNotificationResponse: (details) {
        Map<String, dynamic> data = jsonDecode(details.payload.toString());
        onReceivedNotification(data);
      },
      onDidReceiveBackgroundNotificationResponse: receiveNotificationBackground,
    );
  }

  @override
  Future<void> requestPermission() async {
    FirebaseMessaging.instance.requestPermission();
    await flutterLocalNotificationsPlugin.resolvePlatformSpecificImplementation<AndroidFlutterLocalNotificationsPlugin>()?.requestPermission();
    await flutterLocalNotificationsPlugin.resolvePlatformSpecificImplementation<IOSFlutterLocalNotificationsPlugin>()?.requestPermissions(
          sound: NotificationPlatformSetting.initializationSettingsIOS.requestSoundPermission,
          alert: NotificationPlatformSetting.initializationSettingsIOS.requestAlertPermission,
          badge: NotificationPlatformSetting.initializationSettingsIOS.requestBadgePermission,
        );
  }

  @override
  void setupFirebaseListener() {
    FirebaseMessaging.onMessageOpenedApp.listen((message) => onReceivedNotification(message.data));

    FirebaseMessaging.onMessage.listen((message) {
      log('>>>>A new onMessage event was published!<<<<');
      log("message : $message");
      log("data : \${message.data}");
      RemoteNotification notification = message.notification!;
      AndroidNotification? android = message.notification!.android;
      Map<String, dynamic> data = message.data;

      if (message.notification != null || android != null) {
        flutterLocalNotificationsPlugin.show(
          notification.hashCode,
          notification.title,
          notification.body,
          NotificationDetails(
            android: NotificationPlatformSetting.androidNotificationDetails,
            iOS: NotificationPlatformSetting.darwinNotificationDetails,
          ),
          payload: jsonEncode(data),
        );
      }
    });

    FirebaseMessaging.onBackgroundMessage(onBackgroundMessageFirebase);
  }

  @override
  Future<void> getInitialFCMNotification() async {
    RemoteMessage? message = await FirebaseMessaging.instance.getInitialMessage();
    if (message != null) {
      Map<String, dynamic> data = message.data;
      onReceivedNotification(data);
    }
  }

  @override
  Future<void> onBackgroundMessageFirebase(RemoteMessage message) async {
    await Firebase.initializeApp();
  }

  @override
  void onReceivedNotification(Map<String, dynamic> data) {
    //Handle data payload
  }
}
`;