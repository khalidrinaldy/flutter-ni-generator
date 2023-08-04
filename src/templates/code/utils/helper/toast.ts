export const toast = `
part of 'helper.dart';

class AppToast {
  static void success({String? message = "Success"}) {
    Fluttertoast.showToast(
      msg: message.toString(),
      backgroundColor: AppColors.green,
      textColor: Colors.white,
    );
  }

  static void error({int? code = 500, String? message = "Error"}) {
    Fluttertoast.showToast(
      msg: "[$code]: $message",
      backgroundColor: AppColors.red,
      textColor: Colors.white,
    );
  }
}
`;