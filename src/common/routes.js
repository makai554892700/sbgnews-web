import Joke from '../components/Joke.vue'
import Photo from '../components/bsbdj/Photo.vue'
import Punster from '../components/bsbdj/Punster.vue'
import Voice from '../components/bsbdj/Voice.vue'
import Video from '../components/bsbdj/Video.vue'
import Login from '../components/Login.vue'
import NewPost from '../components/NewPost.vue'
import New from '../components/New.vue'
import Community from '../components/Community.vue'
import Mine from '../components/Mine.vue'

export default {
  routes: [
    {name: '/', path: '/', redirect: '/joke'},
    {name: '/login', path: '/login', component: Login},
    {name: '/new_post', path: '/new_post', component: NewPost},
    {name: '/new', path: '/new', component: New},
    {name: '/community', path: '/community', component: Community},
    {name: '/mine', path: '/mine', component: Mine},
    {name: '/joke', path: '/joke', component: Joke},
    {name: '/photo', path: '/photo', component: Photo},
    {name: '/punster', path: '/punster', component: Punster},
    {name: '/voice', path: '/voice', component: Voice},
    {name: '/video', path: '/video', component: Video}
  ]
}
