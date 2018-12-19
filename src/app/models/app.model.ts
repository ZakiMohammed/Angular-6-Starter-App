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
export class Customer {
    constructor(public firstName = '',
      public lastName = '',
      public email = '',
      public sendCatalog = false,
      public addressType = 'home',
      public street1?: string,
      public street2?: string,
      public city?: string,
      public state = '',
      public zip?: string) { }
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
    constructor(
        private visible:boolean, 
        private className:string, 
        private message:string
    ) { }

    show(message:string, className:string, fadeOut:boolean = true, fadeOutTime:number = 3000) {
        this.message = message;
        this.className = className;
        this.visible = true;

        if (fadeOut) setTimeout(() => this.visible = false, fadeOutTime);
    }
    success(message:string, fadeOut:boolean = true, fadeOutTime:number = 3000) {
        this.message = message;
        this.className = 'alert-success';
        this.visible = true;        

        if (fadeOut) setTimeout(() => this.visible = false, fadeOutTime);
    }
    error(message:string, fadeOut:boolean = true, fadeOutTime:number = 3000) {
        this.message = message;
        this.className = 'alert-danger';
        this.visible = true;

        if (fadeOut) setTimeout(() => this.visible = false, fadeOutTime);
    }
    warning(message:string, fadeOut:boolean = true, fadeOutTime:number = 3000) {
        this.message = message;
        this.className = 'alert-warning';
        this.visible = true;

        if (fadeOut) setTimeout(() => this.visible = false, fadeOutTime);
    }
    info(message:string, fadeOut:boolean = true, fadeOutTime:number = 3000) {
        this.message = message;
        this.className = 'alert-info';
        this.visible = true;

        if (fadeOut) setTimeout(() => this.visible = false, fadeOutTime);
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