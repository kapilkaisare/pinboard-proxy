const PinboardService = require('./pinboard.service')

const getAllBookmarks = (req, res) => {
    const token = req.query['token']
    const tag = req.query['tag']
    const start = req.query['start_offset']
    const num_results = req.query['number_of_results']
    const from_dt = req.query['from_dt']
    const to_dt = req.query['to_dt']


    if (!token) {
        res.status(403).send({
            status: 403,
            code: 'PINBOARD_TOKEN_NOT_PROVIDED',
            title: 'Pinboard token not provided',
            detail: 'Pinboard token not provided'
        })
    }

    PinboardService.getAllBookmarks(token, tag, start, num_results, from_dt, to_dt)
    .then((bookmarks) => {
        res.send(bookmarks)
    })
    .catch((error) => {
        res.send(error)
    })
}

module.exports = getAllBookmarks