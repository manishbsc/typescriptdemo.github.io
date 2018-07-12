var youtubevideo = /** @class */ (function () {
    function youtubevideo(ChannelName, Content, Title, ContentType, Likes, Dislikes, PublishionDate, DownloadAllowed, TotalComment, NoOfView) {
        var _this = this;
        this.getnoofview = function () {
            return _this.NoOfView;
        };
        this.getPublishionDate = function () {
            return _this.PublishionDate;
        };
        this.setnoofview = function (n) {
            _this.NoOfView = n;
        };
        this.getlike = function () {
            return _this.Likes;
        };
        this.gettitle = function () {
            return _this.Title;
        };
        this.getRelatedvideo = function () { };
        this.getadsRevenue = function () { };
        this.ChannelName = ChannelName;
        this.Content = Content;
        this.Title = Title;
        this.ContentType = ContentType;
        this.Likes = Likes;
        this.Dislikes = Dislikes;
        this.PublishionDate = PublishionDate;
        this.DownloadAllowed = DownloadAllowed;
        this.TotalComment = TotalComment;
        this.NoOfView = NoOfView;
    }
    return youtubevideo;
}());
var HumseAcha = new youtubevideo("oldisgold", "Normal", "Dilchatahai", "Song", 40, 5, "14dec2015", true, 20, 1000);
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
