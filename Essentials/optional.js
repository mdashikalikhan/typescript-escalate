function generateError(msg) {
    throw new Error(msg);
}
generateError();
generateError('An error occured!');
var input = '';
var didProvideInput = input !== null && input !== void 0 ? input : false;
