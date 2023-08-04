export const directory = `import 'dart:io';

import 'package:path_provider/path_provider.dart';

class AppDirectory {
  ///Get \`String\` path of the device download directory
  ///
  ///If platform is [Android], get external storage directory
  ///
  static Future<String> getDownloadDirectoryPath() async {
    //Android Directory
    if (Platform.isAndroid) {
      final String storageDir = (await getExternalStorageDirectory())!.path;
      
      //CHANGE APP_NAME HERE
      return "\${storageDir.split('Android').first}Download/APP_NAME/";
    } 
    // iOS directory
    return (await getApplicationDocumentsDirectory()).path;
  }
}
`;