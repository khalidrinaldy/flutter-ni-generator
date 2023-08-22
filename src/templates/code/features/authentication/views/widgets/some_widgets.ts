export const someWidgets = `
part of '../login.dart';

class SomeWidgets extends GetWidget<LoginController> {
  const SomeWidgets({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AppRootWrap(
      child: Scaffold(),
    );
  }
}
`;