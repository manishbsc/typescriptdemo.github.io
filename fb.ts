class facebook_profile{
    id:number;
    about:string;
    name:string;
    address:string;
    email:string
    Birthday:string;
    gender:string;
    noofpics:number;
    quote:string;
    age:number
    private bussiness_user:boolean

    constructor(id:number,about:string,address:string,name:string,age:number,email:string,Birthday:string,gender:string,noofpics:number,quote:string,bussiness_user:boolean){
       this.id=id;
        this.about=about;
        this.address=address;
        this.name=name;
        this.email=email;
       this. Birthday=Birthday;
       this.gender=gender;
       this.noofpics=noofpics;
       this.quote=quote;
       this.bussiness_user=bussiness_user;
       this.age=age;
    }

    getbusiness_user=()=>{
        return this.bussiness_user;
    }
    getBirthday=()=>{
        return this.Birthday;
    }
    
    setbusiness_user=(n:boolean)=>{
       return this.bussiness_user=n;
    }

    getquote=()=>{
     return this.quote;
    }
    getgender=()=>{
        return this.gender;
       }
    getemail=()=>{
        return this.email;
       }
    getage=()=>{
       return this.age;
       }
    getvideorecommendation=()=>{}
    getFriendList=()=>{}
    
}

let user=new facebook_profile(10253,"i am very cool person","daltonganj","manish",22,"manishagrawal1994@gmail.com","14121994","Male",14,"arise awake and stop not till goal is acheived",true);
console.log(user.id);
console.log(user.about);
console.log(user.name);
console.log(user.getage());
console.log(user.getemail());
console.log(user.getBirthday());
console.log(user.getgender());
console.log(user.address);
console.log(user.noofpics);
console.log(user.getquote());
console.log(user.getbusiness_user());
user.setbusiness_user(false);
console.log(user.getbusiness_user());
