const Rooms = require("../models/room-model")
const User = require("../models/user-model")

module.exports = {
    booking: (data) => {
        return new Promise(async (resolve, reject) => {

            let res = {}
            const check = await Rooms.findOne({ startDate: data.startDate, endDate: data.endDate })
            console.log("check here" , check);
            

            const newData = new User({
                startDate: data.startDate,
                endDate: data.endDate,
                guests: data.guests,
                totalPrice: data.totalPrice
            })

            newData.save()

            if (check) {
                if (check.guests < data.guests) {
                    res.err = "There is no rooms matching with your guests"
                    reject(res)
                    return
                }
                await Rooms.findByIdAndDelete(check._id)
                res.res = newData
                resolve(res)
            }
            reject(false)
        })
    },

    checking: (data) => {
        return new Promise(async (resolve, reject) => {

            let res = {}
            const check = await Rooms.findOne({ startDate: data.startDate, endDate: data.endDate })

            if (check) {
                if (check.guests < data.guests) {
                    res.err = "There is no rooms matching with your guests"
                    reject(res)
                    return
                }
                if (check.totalPrice < data.totalPrice) {
                    res.err = "This room is not affordable for this price"
                    reject(res)
                    return
                }
                res.check = check
                resolve(res)
            }
            reject(false)
        })
    }
}