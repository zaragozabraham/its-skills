import { User } from "./user";

export interface Opinion {
    id: string,
    user: User,
    description: string
};