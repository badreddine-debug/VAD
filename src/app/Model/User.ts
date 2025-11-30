export class UserModel {
  id: number;
  email: string;
  password?: string; // optional
  isActive: boolean;

  /**
   *
   */
  constructor(data: Partial<UserModel>) {
    this.id = data.id || 0;
    this.email = data.email || '';
    this.password = data.password;
    this.isActive = data.isActive ?? true;
  }
}
