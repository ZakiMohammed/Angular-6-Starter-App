export class Services{
    id:number;
    name:string;
    description:string;
    icon:string;
}
export class Product{
    id:number;
    title:string;
    shortContent:string;
    content:string;
    image:string;
}
export class Contact {
    id:number;
    name:string;
    phone:string;
    email:string;
    message:string;

    constructor(id:number, name:string, phone:string, email:string, message:string){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.message = message;
    }
}
export class User {
    id:number;
    userName:string;
    password:string;
    email:string;
    mobile:string;
    constructor(id:number, userName:string, password:string, email:string, mobile:string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.mobile = mobile;
    }
}
export class PageTop {
    title: string;
    subTitle: string;
    breadCrumb: BreadCrumb[];

    constructor(title:string, subTitle:string, breadCrumb: BreadCrumb[]){
        this.title = title || '';
        this.subTitle = subTitle || '';
        this.breadCrumb = breadCrumb || [];
    }
}
export class BreadCrumb {
    title:string;
    route:string;
    name:string;
}
export class Alert {
    visible:boolean;
    className:string;
    message:string;

    constructor(visible:boolean, className:string, message:string){
        this.visible = visible;
        this.className = className;
        this.message = message;
    }

    show(message:string, className:string) {
        this.message = message;
        this.className = className;
        this.visible = true;
    }
    success(message:string) {
        this.message = message;
        this.className = 'alert-success';
        this.visible = true;        
    }
    error(message:string) {
        this.message = message;
        this.className = 'alert-danger';
        this.visible = true;
    }
    warning(message:string) {
        this.message = message;
        this.className = 'alert-warning';
        this.visible = true;
    }
    info(message:string) {
        this.message = message;
        this.className = 'alert-info';
        this.visible = true;
    }
    progress() {
        this.message = `<i class="fa fa-spinner fa-spin fa-fw"></i> Sending please wait...`;
        this.className = 'alert-info';
        this.visible = true;
    }
    hide() {
        this.visible = false;
    }
}