export interface UserRes{
    success: boolean;
    data: {
        user: User;
        token: string;
    };
    message: string;
}

export interface User {
  id: number;
  username: string;
  name: string;
  role: string;
  token: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}
