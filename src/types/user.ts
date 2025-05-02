import { Role } from "./role";

export type User = {
    id: String;
    name: String;
    email: String;
    role: Role;
    token: String;
}