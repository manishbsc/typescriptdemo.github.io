var facebook_profile = /** @class */ (function () {
    function facebook_profile(id, about, address, name, age, email, Birthday, gender, noofpics, quote, bussiness_user) {
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
    return facebook_profile;
}());
var user = new facebook_profile(10253, "i am very cool person", "daltonganj", "manish", 22, "manishagrawal1994@gmail.com", "14121994", "Male", 14, "arise awake and stop not till goal is acheived", true);
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
