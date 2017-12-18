import http from 'axios'
import router from './routes'

export const saveUser = (userName) => {
  sessionStorage.setItem('userName', userName)
}

export const getUser = () => {
  return sessionStorage.getItem('userName')
}

export const isLogin = (needReirect) => {
  if (!getUser()) {
    if (needReirect) {
      router.push({name: '/login'})
    }
    return false
  } else {
    return true
  }
}

export const jumpTo = (url, needAuth = false) => {
  if (!needAuth || isLogin(true)) {
    router.push({name: url})
  }
}

export const register = (that, data) => {
  http.post('/sbgnews/api/user/register', data, {emulateJSON: true}).then(res => {
    if (res.data.code === 0) {
      console.log('注册ok')
      login(that, data)
    } else {
      alert(res.data.data)
    }
  }).catch(err => {
    alert(err)
  })
}
export const login = (that, data) => {
  http.post('/sbgnews/api/user/login', data, {emulateJSON: true}).then(res => {
    if (res.data.code === 0) {
      saveUser(res.data.data.userName)
      that.$router.push({name: '/mine', params: {username: res.data.data.userName}})
      console.log('登陆ok')
    } else {
      alert(res.data.data)
    }
  }).catch(err => {
    alert(err)
  })
}
export const baseGetNewsPost = (that, url, data) => {
  http.post(url, data, {emulateJSON: true}).then(res => {
    if (res.data && res.data.code === 0) {
      that.data = res.data.data
      console.log('请求ok')
    } else {
      alert(res.data.data)
    }
  }).catch(err => {
    alert(err)
  })
}
export const baseOperatePost = (url, data) => {
  if (isLogin(true)) {
    http.post(url, data, {emulateJSON: true}).then(res => {
      if (res.data.code === 0) {
        console.log('请求ok')
      } else {
        alert(res.data.data)
      }
    }).catch(err => {
      alert(err)
    })
  }
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
export const love = (data) => {
  baseOperatePost('/sbgnews/api/operate/love', data)
}
export const hate = (data) => {
  baseOperatePost('/sbgnews/api/operate/hate', data)
}
export const share = (data) => {
  baseOperatePost('/sbgnews/api/operate/share', data)
}
export const comment = (data) => {
  baseOperatePost('/sbgnews/api/operate/comment', data)
}
