import Post from "./Post";

export default interface User{
    id: string;
    name: string;
    email: string;
    photo:string | null;
    password:string;
    post?: Post | null;
}