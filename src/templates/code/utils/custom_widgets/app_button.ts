export const appButton = `
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:loading_animation_widget/loading_animation_widget.dart';
import '../theme/color.dart';

class AppButton extends StatelessWidget {
  const AppButton({
    Key? key,
    required this.onPressed,
    required this.text,
    this.fontSize = 14,
    this.isFilled = true,
    this.isLoading = false,
    this.backgroundColor,
    this.outlineColor,
    this.padding,
  }) : super(key: key);

  final void Function() onPressed;
  final String text;
  final double? fontSize;
  final bool isFilled;
  final bool isLoading;
  final Color? backgroundColor;
  final Color? outlineColor;
  final EdgeInsetsGeometry? padding;

  @override
  Widget build(BuildContext context) {
    return isFilled
        ? ElevatedButton(
            onPressed: onPressed,
            style: ElevatedButton.styleFrom(
              padding: padding,
              backgroundColor: backgroundColor,
            ),
            child: isLoading
                ? LoadingAnimationWidget.staggeredDotsWave(
                    size: 16,
                    color: Colors.white,
                  )
                : Text(
                    text,
                    style: GoogleFonts.plusJakartaSans(fontSize: fontSize),
                  ),
          )
        : OutlinedButton(
            onPressed: onPressed,
            style: OutlinedButton.styleFrom(
                padding: padding,
                backgroundColor: backgroundColor,
                side: BorderSide(
                  color: outlineColor ?? AppColors.primaryColor,
                )),
            child: isLoading
                ? LoadingAnimationWidget.staggeredDotsWave(
                    size: 16,
                    color: outlineColor ?? AppColors.primaryColor,
                  )
                : Text(
                    text,
                    style: GoogleFonts.plusJakartaSans(fontSize: fontSize),
                  ),
          );
  }
}
`;