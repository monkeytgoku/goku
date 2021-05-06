export interface User {
  id: string;
  username: string;
  password?: string;
  name?: string;
  gender?: string;
  email?: string;
  phone?: string;
  address?: string;
  birthday?: string;
  avatar?: string;
  roles?: string[];
  isActive?: boolean;
}
