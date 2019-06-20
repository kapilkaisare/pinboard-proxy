const PinboardService = require('./pinboard.service')

const addBookmark = (req, res) => {
    const token = req.query['token']
    const url = req.query['url']
    const description = req.query['description']
    const extended = req.query['extended']
    const tags = req.query['tags']
    const dt = req.query['dt']
    const replace = req.query['replace']
    const shared = req.query['shared']
    const toread = req.query['toread']

    if (!token) {
        res.status(403).send({
            status: 403,
            code: 'PINBOARD_TOKEN_NOT_PROVIDED',
            title: 'Pinboard token not provided',
            detail: 'Pinboard token not provided'
        })
    }

    PinboardService.addBookmark(token, url, description, extended, tags, dt, replace, shared, toread)
    .then((result) => {
        res.send(result)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = addBookmark