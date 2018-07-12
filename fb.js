var facebookprofile = /** @class */ (function () {
    function facebookprofile(id, about, address, name, age, email, Birthday, gender, noofpics, quote, bussiness_user) {
        var _this = this;
        this.getbusiness_user = function () {
            return _this.bussiness_user;
        };
        this.getBirthday = function () {
            return _this.Birthday;
        };
        this.setbusiness_user = function (n) {
            return _this.bussiness_user = n;
        };
        this.getquote = function () {
            return _this.quote;
        };
        this.getgender = function () {
            return _this.gender;
        };
        this.getemail = function () {
            return _this.email;
        };
        this.getage = function () {
            return _this.age;
        };
        this.getvideorecommendation = function () { };
        this.getFriendList = function () { };
        this.id = id;
        this.about = about;
        this.address = address;
        this.name = name;
        this.email = email;
        this.Birthday = Birthday;
        this.gender = gender;
        this.noofpics = noofpics;
        this.quote = quote;
        this.bussiness_user = bussiness_user;
        this.age = age;
    }
    return facebookprofile;
}());
var user1 = new facebookprofile(10253, "i am very cool person", "daltonganj", "manish", 22, "manishagrawal1994@gmail.com", "14121994", "Male", 14, "arise awake and stop not till goal is acheived", true);
console.log(user1.id);
console.log(user1.about);
console.log(user1.name);
console.log(user1.getage());
console.log(user1.getemail());
console.log(user1.getBirthday());
console.log(user1.getgender());
console.log(user1.address);
console.log(user1.noofpics);
console.log(user1.getquote());
console.log(user1.getbusiness_user());
user1.setbusiness_user(false);
console.log(user1.getbusiness_user());
