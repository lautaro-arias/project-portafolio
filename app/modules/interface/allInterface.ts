export interface DataForm {
    name:string,
    lastname:string,
    phone:number | any,
    email:string | number,
    message:string | number ,
  }

export interface CreateCard {
  imagen:string,
  name:string,
  subDescription:string,
  description:string,
  url:string
}

export interface DataLogin {
  user:string | number | any,
  password:string | number | any,
}