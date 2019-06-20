const getLastUpdate = require('./getLastUpdate')
const addBookmark = require('./addBookmark')
const deleteBookmark = require('./deleteBookmark')
const getBookmarks = require('./getBookmarks')
const getRecent = require('./getRecent')
const getDates = require('./getDates')
const getAllBookmarks = require('./getAllBookmarks')
const getSuggestions = require('./getSuggestions')
const getTags = require('./getTags')
const deleteTag = require('./deleteTag')
const renameTag = require('./renameTag')

module.exports = {
    getLastUpdate: getLastUpdate,
    addBookmark: addBookmark,
    deleteBookmark: deleteBookmark,
    getBookmarks: getBookmarks,
    getRecent: getRecent,
    getDates: getDates,
    getAllBookmarks: getAllBookmarks,
    getSuggestions: getSuggestions,
    getTags: getTags,
    deleteTag: deleteTag,
    renameTag: renameTag
}
