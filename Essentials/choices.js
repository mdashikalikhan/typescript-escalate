var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["EDITOR"] = 1] = "EDITOR";
    Role["GUEST"] = "";
})(Role || (Role = {}));
var userRole = 0;
console.log(userRole);
userRole = 1;
console.log(userRole);
