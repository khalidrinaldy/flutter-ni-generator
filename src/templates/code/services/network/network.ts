export const network = `
import 'dart:convert';
import 'package:dio/dio.dart';

import '../../utils/constant/typedef.dart';
import 'logger.dart';

part 'base_client.dart';
part 'response.dart';
part 'url.dart';
part 'interceptors/logging_interceptor.dart';
part 'interceptors/token_interceptor.dart';
`;