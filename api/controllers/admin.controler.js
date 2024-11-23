const { addRooms } = require("../services/admin-services")


module.exports = {
    addRoom: async (req, res) => {
        addRooms(req.body).then((response) => {
            res.json({
                status: 200,
                ok: true,
                res: response
            })
        })
    },
} 