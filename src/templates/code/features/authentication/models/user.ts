export const user = `
import 'package:hive/hive.dart';

part 'user.g.dart';

//Run \`flutter packages pub run build_runner build\`
//to generate UserAdapter
//then register UserAdapter at hive service folder

@HiveType(typeId: 0)
class User {
  @HiveField(0)
  String? _uuid;
  @HiveField(1)
  String? _email;
  @HiveField(2)
  String? _role;
  @HiveField(3)
  String? _name;
  @HiveField(4)
  int? _emailVerifiedAt;
  @HiveField(5)
  String? _phone;
  @HiveField(6)
  String? _picture;
  @HiveField(7)
  Vendor? _vendor;

  User(
      {String? uuid,
      String? email,
      String? role,
      String? name,
      int? emailVerifiedAt,
      String? phone,
      String? picture,
      Vendor? vendor}) {
    if (uuid != null) {
      this._uuid = uuid;
    }
    if (email != null) {
      this._email = email;
    }
    if (role != null) {
      this._role = role;
    }
    if (name != null) {
      this._name = name;
    }
    if (emailVerifiedAt != null) {
      this._emailVerifiedAt = emailVerifiedAt;
    }
    if (phone != null) {
      this._phone = phone;
    }
    if (picture != null) {
      this._picture = picture;
    }
    if (vendor != null) {
      this._vendor = vendor;
    }
  }

  String? get uuid => _uuid;
  set uuid(String? uuid) => _uuid = uuid;
  String? get email => _email;
  set email(String? email) => _email = email;
  String? get role => _role;
  set role(String? role) => _role = role;
  String? get name => _name;
  set name(String? name) => _name = name;
  int? get emailVerifiedAt => _emailVerifiedAt;
  set emailVerifiedAt(int? emailVerifiedAt) =>
      _emailVerifiedAt = emailVerifiedAt;
  String? get phone => _phone;
  set phone(String? phone) => _phone = phone;
  String? get picture => _picture;
  set picture(String? picture) => _picture = picture;
  Vendor? get vendor => _vendor;
  set vendor(Vendor? vendor) => _vendor = vendor;

  User.fromJson(Map<String, dynamic> json) {
    _uuid = json['uuid'];
    _email = json['email'];
    _role = json['role'];
    _name = json['name'];
    _emailVerifiedAt = json['email_verified_at'];
    _phone = json['phone'];
    _picture = json['picture'];
    _vendor =
        json['vendor'] != null ? new Vendor.fromJson(json['vendor']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['uuid'] = this._uuid;
    data['email'] = this._email;
    data['role'] = this._role;
    data['name'] = this._name;
    data['email_verified_at'] = this._emailVerifiedAt;
    data['phone'] = this._phone;
    data['picture'] = this._picture;
    if (this._vendor != null) {
      data['vendor'] = this._vendor!.toJson();
    }
    return data;
  }
}


@HiveType(typeId: 1)
class Vendor {
  @HiveField(0)
  String? _uuid;
  @HiveField(1)
  String? _userId;
  @HiveField(2)
  String? _username;

  Vendor({String? uuid, String? userId, String? username}) {
    if (uuid != null) {
      this._uuid = uuid;
    }
    if (userId != null) {
      this._userId = userId;
    }
    if (username != null) {
      this._username = username;
    }
  }

  String? get uuid => _uuid;
  set uuid(String? uuid) => _uuid = uuid;
  String? get userId => _userId;
  set userId(String? userId) => _userId = userId;
  String? get username => _username;
  set username(String? username) => _username = username;

  Vendor.fromJson(Map<String, dynamic> json) {
    _uuid = json['uuid'];
    _userId = json['user_id'];
    _username = json['username'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['uuid'] = this._uuid;
    data['user_id'] = this._userId;
    data['username'] = this._username;
    return data;
  }
}`;