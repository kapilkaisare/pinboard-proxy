const PinboardService = require('./pinboard.service')

const deleteTag = (req, res) => {
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

    PinboardService.deleteTag(token, tag)
    .then((response) => {
        res.send(response)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = deleteTag