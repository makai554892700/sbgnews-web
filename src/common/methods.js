export const baseGetNewsPost = (that, url, data) => {
  that.$http.post(url, data, {emulateJSON: true}).then((data) => {
    that.data = data.data.data
  }, (response) => {
    console.error('error=' + response)
  })
}
export const baseOperatePost = (that, url, data) => {
  console.error('url=' + url)
  console.error('data=' + data)
  that.$http.post(url, data, {emulateJSON: true}).then((data) => {
    console.error('success=' + data)
    console.error('success data.data=' + data.data)
    console.error('success data.data.code=' + data.data.code)
    console.error('success data.data.msg=' + data.data.msg)
    console.error('success data.data.data=' + data.data.data)
  }, (response) => {
    console.error('error=' + response)
  })
}
export const getJocks = (that, data) => {
  baseGetNewsPost(that, '/sbgnews/api/jokes/getJokes', data)
}
export const getPhotos = (that, data) => {
  baseGetNewsPost(that, '/sbgnews/api/bsbdj/getPhotos', data)
}
export const getPunsters = (that, data) => {
  baseGetNewsPost(that, '/sbgnews/api/bsbdj/getPunsters', data)
}
export const getVideos = (that, data) => {
  baseGetNewsPost(that, '/sbgnews/api/bsbdj/getVideos', data)
}
export const getVoices = (that, data) => {
  baseGetNewsPost(that, '/sbgnews/api/bsbdj/getVoices', data)
}
export const Love = (that, data) => {
  baseOperatePost(that, '/sbgnews/api/operate/love', data)
}
export const Hate = (that, data) => {
  baseOperatePost(that, '/sbgnews/api/operate/hate', data)
}
export const Share = (that, data) => {
  baseOperatePost(that, '/sbgnews/api/operate/share', data)
}
export const Comment = (that, data) => {
  baseOperatePost(that, '/sbgnews/api/operate/comment', data)
}
