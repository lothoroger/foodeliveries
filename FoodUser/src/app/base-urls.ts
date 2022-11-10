export class BaseUrls {

    //public static readonly BASE_HREF: string = "http://ec2-35-93-87-188.us-west-2.compute.amazonaws.com:9090";
    public static readonly BASE_HREF: string = "http://localhost:4200";
    public static readonly USER_GROUPURL: string = "customers";





    public static getUrl( key: string) : string { return `$(this.BASE_HREF}/${key}/get`;}
    public static getAddurl( key: string ) : string { return `${this.BASE_HREF}/${key}/add`;}
    public static getUpdateUrl( key: string) : string { return `${this.BASE_HREF}/${key}/update`;}
    public static getDeleteUrl( key: string) : string { return `${this.BASE_HREF}/${key}/delete`;}
    public static getLoginurl( key: string) : string { return `${this.BASE_HREF}/${key}/login)`;}



}