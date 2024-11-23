const { booking, checking } = require("../services/user-services")

module.exports = {
    book: async (req, res) => {
        console.log(req.body);
        
        booking(req.body).then((response) => {
            res.json({
                status: 200,
                ok: true,
                data: response.res,
                booked: true
            })
        }).catch((err) => {
            res.json(({
                status: 400,
                ok: false,
                res: err.err ? err.err : 'Room is not available'
            }))
        })
    },

    check: async (req, res) => {
        checking(req.body).then((response) => {
            res.json(({
                status: 200,
                ok: true,
                res: response.check
            }))
        }).catch((err) => {
            res.json(({
                status: 400,
                ok: false,
                res: err.err ? err : 'Room is in engaged or not available'
            }))
        })
    }
} 