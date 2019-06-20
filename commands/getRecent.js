const PinboardService = require('./pinboard.service')

const getRecent = (req, res) => {
    const token = req.query['token']
    const tag = req.query['tag']
    const count = req.query['count']

    if (!token) {
        res.status(403).send({
            status: 403,
            code: 'PINBOARD_TOKEN_NOT_PROVIDED',
            title: 'Pinboard token not provided',
            detail: 'Pinboard token not provided'
        })
    }

    PinboardService.getRecent(token, tag, count)
    .then((bookmarks) => {
        res.send(bookmarks)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = getRecent