class youtubevideo{
    ChannelName:string;
    ContentDescription:string;
    Title:string;
    ContentType:string;
    Likes:number;
    Dislikes:number
   private PublishionDate:string;
    DownloadAllowed:boolean;
    TotalComment:number;
    private NoOfView:number;
    link:string

    constructor(ChannelName:string,ContentDescription:string,Title:string,ContentType:string,Likes:number,Dislikes:number,PublishionDate:string,DownloadAllowed:boolean, TotalComment:number,NoOfView:number, link:string){
       this.ChannelName=ChannelName;
        this.ContentDescription=ContentDescription;
        this.Title=Title;
        this.ContentType=ContentType;
        this.Likes=Likes;
        this.Dislikes=Dislikes;
       this. PublishionDate=PublishionDate;
       this.DownloadAllowed=DownloadAllowed;
       this.TotalComment=TotalComment;
       this.NoOfView=NoOfView;
       this.link=link;
    }

    getnoofview=()=>{
        return this.NoOfView;
    }
    getPublishionDate=()=>{
        return this.PublishionDate;
    }
    
    setnoofview=(n:number)=>{
        this.NoOfView=n;
    }
    getlike=()=>{
        return this.Likes;
       }
    gettitle=()=>{
        return this.Title;
       }
    getlink=()=>{
        return this.link;
       }
    getRelatedvideo=()=>{}
    getadsRevenue=()=>{}

    
}

let HumseAcha=new youtubevideo("oldisgold","Romantic song collection","Dilchatahai","Song",40,5,"14dec2015",true,20,1000,"www.youtube.com/tdtydy23");
console.log(HumseAcha.ChannelName);
console.log(HumseAcha.ContentDescription);
console.log(HumseAcha.ContentType);
console.log(HumseAcha.Dislikes);
console.log(HumseAcha.DownloadAllowed);
console.log(HumseAcha.getnoofview());
console.log(HumseAcha.getPublishionDate());
console.log(HumseAcha.getlike());
console.log(HumseAcha.gettitle());
console.log(HumseAcha.getlink());
console.log(HumseAcha.TotalComment);
HumseAcha.setnoofview(500);
console.log(HumseAcha.getnoofview());







