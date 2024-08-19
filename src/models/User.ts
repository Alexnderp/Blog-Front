import Post from "./Post";

export default interface User{
    id: string;
    name: string;
    email: string;
    photo:File | null;
    password:string;
    post?: Post | null;
}