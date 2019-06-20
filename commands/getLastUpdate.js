const PinboardService = require('./pinboard.service')

const getLastUpdate = (req, res) => {
    const token = req.query['token']

    if (!token) {
        res.status(403).send({
            status: 403,
            code: 'PINBOARD_TOKEN_NOT_PROVIDED',
            title: 'Pinboard token not provided',
            detail: 'Pinboard token not provided'
        })
    }

    PinboardService.getLastUpdate(token)
    .then((lastUpdate) => {
        res.send(lastUpdate)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = getLastUpdate