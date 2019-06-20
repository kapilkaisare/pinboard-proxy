const PinboardService = require('./pinboard.service')

const getSuggestions = (req, res) => {
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

    PinboardService.getSuggestions(token, url)
    .then((suggestions) => {
        res.send(suggestions)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = getSuggestions