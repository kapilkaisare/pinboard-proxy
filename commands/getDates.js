const PinboardService = require('./pinboard.service')

const getDates = (req, res) => {
    const token = req.query['token']
    const tag = req.query['tag']

    if (!token) {
        res.status(403).send({
            status: 403,
            code: 'PINBOARD_TOKEN_NOT_PROVIDED',
            title: 'Pinboard token not provided',
            detail: 'Pinboard token not provided'
        })
    }

    PinboardService.getDates(token, tag)
    .then((dateCountMaps) => {
        res.send(dateCountMaps)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = getDates