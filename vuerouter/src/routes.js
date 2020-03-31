import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'

export const routes = [
    {
        path : '',
        component: Home,
        name: 'home',
    },
    {
        path : '/user',
        component: User,
        children: [
            {path : '', component : UserStart, name: 'user'},
            {path : ':id', component : UserDetail, name: 'userDetail', beforeEnter: (to, from, next) =>{
              console.log('Inside route setup');
              next();
              }},
            {path : ':id/edit', component : UserEdit, name: 'userEdit'}
        ],

    },

    {
        path: '/redirect-me',
        redirect : '/',

    },

    {
        path : '*',
        redirect : '/'
    }


]
