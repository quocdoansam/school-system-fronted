import { Role } from "./role";
import { User } from "./user"

export type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    refetchUser: () => Promise<void>;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
    hasRole: (role: Role | Role[]) => boolean;
} 