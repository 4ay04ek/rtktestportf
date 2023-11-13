export type UserGroup = "Senior" | "Middle" | "Junior" | "Intern";

export type User = {
  name: string;
  email: string;
  login: string;
  phone: string;
  group: UserGroup;
  checked?: boolean;
};

export type Users = User[];
