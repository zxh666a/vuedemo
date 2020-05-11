import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const Login = () => import('./view/login')
const Home = () => import('./view/home')
const Detail = () => import('./view/detail')
const DetailTab = () => import('./components/Tab/detailTab')
const RateTab = () => import('./components/Tab/rateTab')
const ServerTab = () => import('./components/Tab/serverTab')
const ShopCar = () =>import('./view/shopcar')


const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    {path:'/shopcar',component:ShopCar},
    {
        // path: '/detail:iid',
        path: '/detail',
        component: Detail,
        name:'detail',
        children:[
            { path: "/detail/goodsdetail", component: DetailTab },
            { path: "/detail/goodsrate", component: RateTab },
            { path: "/detail/goodsserver", component: ServerTab }
        ]
    }
]
const router = new VueRouter({
    routes,
    mode: "history"
});

export default router