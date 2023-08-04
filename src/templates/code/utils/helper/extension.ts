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
  }`;