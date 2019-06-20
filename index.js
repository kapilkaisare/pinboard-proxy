const express = require('express')
const commands = require('./commands')

const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Pinboard Proxy v0.1'))

app.get('/posts/update', commands.getLastUpdate)
app.get('/posts/add', commands.addBookmark)
app.get('/posts/delete', commands.deleteBookmark)
app.get('/posts/get', commands.getBookmarks)
app.get('/posts/recent', commands.getRecent)
app.get('/posts/dates', commands.getDates)
app.get('/posts/all', commands.getAllBookmarks)
app.get('/posts/suggest', commands.getSuggestions)
app.get('/tags/get', commands.getTags)
app.get('/tags/delete', commands.deleteTag)
app.get('/tags/rename', commands.renameTag)


app.listen(port, () => console.log(`Pinboard proxy listening on ${port}`))

