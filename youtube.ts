class youtubevideo{
    ChannelName:string;
    Content:string;
    Title:string;
    ContentType:string;
    Likes:number;
    Dislikes:number
   private PublishionDate:string;
    DownloadAllowed:boolean;
    TotalComment:number;
    private NoOfView:number;

    constructor(ChannelName:string,Content:string,Title:string,ContentType:string,Likes:number,Dislikes:number,PublishionDate:string,DownloadAllowed:boolean, TotalComment:number,NoOfView:number){
       this.ChannelName=ChannelName;
        this.Content=Content;
        this.Title=Title;
        this.ContentType=ContentType;
        this.Likes=Likes;
        this.Dislikes=Dislikes;
       this. PublishionDate=PublishionDate;
       this.DownloadAllowed=DownloadAllowed;
       this.TotalComment=TotalComment;
       this.NoOfView=NoOfView;
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
    getRelatedvideo=()=>{}
    getadsRevenue=()=>{}

    
}

let HumseAcha=new youtubevideo("oldisgold","Normal","Dilchatahai","Song",40,5,"14dec2015",true,20,1000);
console.log(HumseAcha.ChannelName);
console.log(HumseAcha.Content);
console.log(HumseAcha.ContentType);
console.log(HumseAcha.Dislikes);
console.log(HumseAcha.DownloadAllowed);
console.log(HumseAcha.getnoofview());
console.log(HumseAcha.getPublishionDate());
console.log(HumseAcha.getlike());
console.log(HumseAcha.gettitle());
console.log(HumseAcha.TotalComment);
HumseAcha.setnoofview(500);
console.log(HumseAcha.getnoofview());







