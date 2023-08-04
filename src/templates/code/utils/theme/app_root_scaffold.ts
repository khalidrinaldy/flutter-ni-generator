export const appRootScaffold = `
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class AppRootWrap extends StatelessWidget {
  const AppRootWrap({
    Key? key,
    this.systemUiOverlayStyle,
    required this.child,
  }) : super(key: key);

  final SystemUiOverlayStyle? systemUiOverlayStyle;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => FocusScope.of(context).requestFocus(FocusNode()),
      child: AnnotatedRegion<SystemUiOverlayStyle>(
        value: systemUiOverlayStyle ??
            const SystemUiOverlayStyle(
              statusBarColor: Colors.transparent,
              statusBarBrightness: Brightness.light,
              systemNavigationBarIconBrightness: Brightness.dark,
            ),
        child: child,
      ),
    );
  }
}
`;