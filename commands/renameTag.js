const PinboardService = require('./pinboard.service')

const renameTag = (req, res) => {
    const token = req.query['token']
    const oldTag = req.query['oldTag']
    const newTag = req.query['newTag']

    if (!token) {
        res.status(403).send({
            status: 403,
            code: 'PINBOARD_TOKEN_NOT_PROVIDED',
            title: 'Pinboard token not provided',
            detail: 'Pinboard token not provided'
        })
    }

    PinboardService.renameTag(token, oldTag, newTag)
    .then((response) => {
        res.send(response)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = renameTag