import Vue from 'vue'
import VueRouter from 'vue-router'
import "element-ui/lib/theme-chalk/display.css";
import Index from '../views/Index.vue'
import Header from '../components/Header.vue'
import Main from "../views/Main.vue"
import Catalog from "../views/Catalog.vue"
import FullContent from "../views/FullContent.vue"
import Pigeonhole from "../views/Pigeonhole.vue"
import AboutMe from "../views/AboutMe.vue"
const editBlog = () => import('../views/admin/EditBlog.vue')
const Login = () => import('../views/admin/Login.vue')
// import newBlog from '../views/admin/EditBlog.vue'
import errorPage from '../views/404.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index/main'
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: 'main',
        component: Main
      },
      {
        path: 'catalog/:pageNum?',
        component: Catalog
      },
      {
        path: 'fullContent/:id?',
        component: FullContent
      },
      {
        path: 'pigeonhole',
        component: Pigeonhole
      },
      {
        path: 'aboutMe',
        component: AboutMe
      },

      {
        path: '/404',
        component: errorPage
      },
    ]

  },

  {
    path: '/admin',
    component: Index,
    children:[
      {
        path: 'editBlog/:id?',
        component: editBlog
      },
  
    ]

  },

  {
    path: '/admin/login',
    component: Login
  },

  {
    path: '/header',
    component: Main
  },

  {
    path: '*',
    redirect: '/404'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.afterEach((to, from) => {
//   console.log("回到顶部")
//   window.scrollTo(0, 0)
// })

export default router
