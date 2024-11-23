const { default: mongoose } = require("mongoose");

const Rooms = mongoose.model("Rooms", {
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    apartmentName: {
        type: String,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})

module.exports = Rooms