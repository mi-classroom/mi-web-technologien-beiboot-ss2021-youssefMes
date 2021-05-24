export function getUrl(path) {
    const url = path.replace('data', '')
    return process.env.REACT_APP_API_STATIC + url
}
