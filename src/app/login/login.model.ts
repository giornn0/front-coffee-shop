export interface LoginForm {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
  user: User;
}
export interface User {
  id: number;
  name: string;
  email: string;
}
