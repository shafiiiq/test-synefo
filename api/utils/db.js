const { default: mongoose } = require("mongoose");

module.exports = mongoose.connect('mongodb://localhost:27017/mechine')
.then((res) => {
    console.log("Mongodb successfully connectied");
}).catch((err) => {
    console.log("Mongodb connection err : ", err);
})