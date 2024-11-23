const Rooms = require("../models/room-model")

module.exports = {
    addRooms: (data) => {
        return new Promise((resolve, reject) => {

            const room = new Rooms(({
                startDate: data.startDate,
                endDate: data.endDate,
                guests: data.guests,
                apartmentName: data.apartmentName,
                totalPrice: data.totalPrice,
                available: data.available
            }))

            room.save()
            resolve(room)
        })
    }
}