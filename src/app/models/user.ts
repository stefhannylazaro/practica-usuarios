export interface UserI{
    id?:number,
    name:string,
    email:string,
    password?:string,
    created_at?:string,
    update_at?:string
}
    
export interface UserLoginI{
    id?:number,
    email:string,
    password:string
}