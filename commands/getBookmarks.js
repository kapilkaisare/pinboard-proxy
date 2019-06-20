const PinboardService = require('./pinboard.service')

const getBookmarks = (req, res) => {
    const token = req.query['token']
    const tag = req.query['tag']
    const from_dt = req.query['dt']
    const url = req.query['url']
    const meta = req.query['meta']


    if (!token) {
        res.status(403).send({
            status: 403,
            code: 'PINBOARD_TOKEN_NOT_PROVIDED',
            title: 'Pinboard token not provided',
            detail: 'Pinboard token not provided'
        })
    }

    PinboardService.getBookmarks(token, tag, from_dt, url, meta)
    .then((bookmarks) => {
        res.send(bookmarks)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = getBookmarks