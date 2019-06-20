const axios = require('axios')
const host = 'https://api.pinboard.in/v1'

const PinboardService = class {

    getLastUpdateUrl(token) {
        const authTokenQuery = token ? `auth_token=${token}` : ''
        return `${host}/posts/update?${authTokenQuery}&format=json`
    }

    getLastUpdate(token) {
        const url = this.getLastUpdateUrl(token)
        return axios.get(url).then(response => response.data)
    }

    addBookMarkUrl(
        token,
        url,
        description,
        extended,
        tags,
        dt,
        replace,
        shared,
        toread
    ) {
        const authTokenQuery = token ? `auth_token=${token}` : ''
        const urlQuery = url ? `&url=${url}` : ''
        const descQuery = description ? `&description=${description}` : ''
        const extQuery = extended ? `&extended=${extended}` : ''
        const tagQuery = tags ? `&tag=${tags}` : ''
        const dtQuery = dt ? `&fromdt=${dt}` : ''
        const replaceQuery = `&replace=${replace ? 'yes' : 'no'}`
        const sharedQuery = `&shared=${shared ? 'yes' : 'no'}`
        const toReadQuery = `&toread=${toread ? 'yes' : 'no'}`

        return `${host}/posts/add?${authTokenQuery}${urlQuery}${descQuery}${extQuery}${tagQuery}${dtQuery}${replaceQuery}${sharedQuery}${toReadQuery}&format=json`
    }

    addBookmark(
        token,
        url,
        description,
        extended,
        tags,
        dt,
        replace,
        shared,
        toread
    ) {
        const url = this.addBookMarkUrl(token, url, description, extended, tags, dt, replace, shared, toread)
        return axios.get(url).then(response => response.data)
    }

    deleteBookmarkUrl(token, url) {
        const authTokenQuery = token ? `auth_token=${token}` : ''
        const urlQuery = url ? `&url=${url}` : ''

        return `${host}/posts/delete?${authTokenQuery}${urlQuery}`
    }

    deleteBookmark(token, url) {
        const url = this.deleteBookmarkUrl(token, url)
        return axios.get(url).then(response => response.data)
    }

    getBookmarksUrl(
        token,
        tag,
        from_dt,
        url,
        meta
    ) {
        const authTokenQuery = token ? `auth_token=${token}` : ''
        const tagQuery = tag ? `&tag=${tag}` : ''
        const fromDtQuery = from_dt ? `&dt=${from_dt}` : ''
        const urlQuery = url ? `&url=${url}` : ''
        const metaQuery = `&meta=${meta ? 'yes' : 'no'}`

        return `${host}/posts/get?${authTokenQuery}${tagQuery}${fromDtQuery}${urlQuery}${metaQuery}&format=json`
    }

    getBookmarks(
        token,
        tag,
        from_dt,
        url,
        meta
    ) {
        const url = this.getBookmarksUrl(token, tag, from_dt, url, meta)
        return axios.get(url).then(response => response.data)
    }

    getRecentUrl(
        token,
        tag,
        count
    ) {
        const authTokenQuery = token ? `auth_token=${token}` : ''
        const tagQuery = tag ? `&tag=${tag}` : ''
        const countQuery = count ? `&count=${count}` : ''

        return `${host}/posts/recent?${authTokenQuery}${tagQuery}${countQuery}&format=json`
    }

    getRecent(
        token,
        tag,
        count
    ) {
        const url = this.getRecentUrl(token, tag, count)
        return axios.get(url).then(response => response.data)
    }

    getDatesUrl(
        token,
        tag
    ) {
        const authTokenQuery = token ? `auth_token=${token}` : ''
        const tagQuery = tag ? `&tag=${tag}` : ''

        return `${host}/posts/dates?${authTokenQuery}${tagQuery}&format=json`
    }

    getDates(
        token,
        tag
    ) {
        const url = this.getDatesUrl(token, tag)
        return axios.get(url).then(response => response.data)
    }


    getAllBookmarksUrl(
        token,
        tag,
        start_offset,
        number_of_results,
        from_date,
        to_date
    ) {
        const authTokenQuery = token ? `auth_token=${token}` : ''
        const tagQuery = tag ? `&tag=${tag}` : ''
        const startQuery = start_offset ? `&start=${start_offset}` : ''
        const resultQuery = number_of_results ? `&results=${number_of_results}` : ''
        const fromQuery = from_date ? `&fromdt=${from_date}` : ''
        const toQuery = to_date ? `&todt=${to_date}` : ''

        return `${host}/posts/all?${authTokenQuery}${tagQuery}${startQuery}${resultQuery}${fromQuery}${toQuery}&format=json`
    }

    getAllBookmarks(
        token,
        tag,
        start_offset,
        number_of_results,
        from_date,
        to_date
    ) {
        const url = this.getAllBookmarksUrl(token, tag, start_offset, number_of_results, from_date, to_date)
        return axios.get(url).then(response => response.data)
    }

    getSuggestionsUrl(
        token,
        url
    ) {
        const authTokenQuery = token ? `auth_token=${token}` : ''
        const urlQuery = url ? `&url=${url}` : ''

        return `${host}/posts/suggest?${authTokenQuery}${urlQuery}&format=json`
    }

    getSuggestions(
        token,
        bookmarkUrl
    ) {
        const url = this.getDatesUrl(token, bookmarkUrl)
        return axios.get(url).then(response => response.data)
    }

    getTagsUrl(
        token
    ) {
        const authTokenQuery = token ? `auth_token=${token}` : ''

        return `${host}/tags/get?${authTokenQuery}&format=json`
    }

    getTags(
        token
    ) {
        const url = this.getTagsUrl(token)
        return axios.get(url).then(response => response.data)
    }

    getDeleteTagUrl(
        token,
        tag
    ) {
        const authTokenQuery = token ? `auth_token=${token}` : ''
        const tagQuery = tag ? `&tag=${tag}` : ''

        return `${host}/posts/delete?${authTokenQuery}${tagQuery}&format=json`
    }

    deleteTag(
        token,
        tag
    ) {
        const url = this.getDeleteTagUrl(token, tag)
        return axios.get(url).then(response => response.data)
    }

    getRenameTagUrl(
        token,
        oldTag,
        newTag
    ) {
        const authTokenQuery = token ? `auth_token=${token}` : ''
        const oldTagQuery = oldTag ? `&old=${oldTag}` : ''
        const newTagQuery = newTag ? `&new=${newTag}` : ''

        return `${host}/tags/rename?${authTokenQuery}${oldTagQuery}${newTagQuery}&format=json`
    }

    renameTag(
        token,
        oldTag,
        newTag
    ) {
        const url = this.getRenameTagUrl(token, oldTag, newTag)
        return axios.get(url).then(response => response.data)
    }
}

module.exports = new PinboardService()
