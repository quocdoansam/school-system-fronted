import { Role } from "./Role";

export type User = {
  id: String;
  name: String;
  email: String;
  roles: Role;
  token: String;
};
