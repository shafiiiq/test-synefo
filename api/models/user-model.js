const { default: mongoose } = require("mongoose");

const User = mongoose.model("User", {
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
})

module.exports = User