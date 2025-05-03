import { Role } from "./Role";
import { User } from "./User";

export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  refetchUser: () => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  hasRole: (role: Role | Role[]) => boolean;
};
