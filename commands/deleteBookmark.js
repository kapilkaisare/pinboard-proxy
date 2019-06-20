const PinboardService = require('./pinboard.service')

const deleteBookmark = (req, res) => {
    const token = req.query['token']
    const url = req.query['url']

    if (!token) {
        res.status(403).send({
            status: 403,
            code: 'PINBOARD_TOKEN_NOT_PROVIDED',
            title: 'Pinboard token not provided',
            detail: 'Pinboard token not provided'
        })
    }

    PinboardService.deleteBookmark(token, url)
    .then((result) => {
        res.send(result)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = deleteBookmark