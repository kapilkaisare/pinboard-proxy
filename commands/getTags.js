const PinboardService = require('./pinboard.service')

const getTags = (req, res) => {
    const token = req.query['token']

    if (!token) {
        res.status(403).send({
            status: 403,
            code: 'PINBOARD_TOKEN_NOT_PROVIDED',
            title: 'Pinboard token not provided',
            detail: 'Pinboard token not provided'
        })
    }

    PinboardService.getTags(token)
    .then((tags) => {
        res.send(tags)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = getTags