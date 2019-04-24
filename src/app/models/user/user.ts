export class User {
  id: string;
  email: string;
  displayName: string;
  avatar: string;
  password: string;

  constructor(id = '', email = '', displayName = '', avatar = '', password = '') {
    this.email = email;
    this.displayName = displayName;
    this.avatar = avatar;
    this.password = password;
  }
}
