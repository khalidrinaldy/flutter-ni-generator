export const extensionConst = `
part of 'helper.dart';

extension NumberFormatter on int {
  String get moneyFormat {
    var moneyFormatter = NumberFormat("###,###,000");
    if (toInt() == 0) {
      return "0";
    }
    return moneyFormatter.format(toInt());
  }
}

extension DateFormatter on DateTime {
  String get toRegularDateFormat => DateFormat('MMMM dd, yyyy').format(this);
  String get toRegularDateAndTimeFormat => DateFormat('MMMM dd, yyyy HH:mm:s').format(this);
  String get getTime => DateFormat('HH:mm:s').format(this);
}
`;