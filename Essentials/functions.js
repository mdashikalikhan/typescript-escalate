function add(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
var logMsg = function (msg) {
    console.log(msg);
};
function performJob(cb) {
    //...
    cb('Job Done!!');
}
performJob(logMsg);
performJob(log);
var auser = {
    name: 'ASHIK',
    age: 80,
    greet: function () {
        console.log(this.name);
        return this.name;
    }
};
auser.greet();
