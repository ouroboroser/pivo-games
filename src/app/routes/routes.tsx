import * as view from '../views';

export const routes:Array<any> = [

    {
        path: '/',
        auth: false,
        component: view.Home,
        exact: true
    },

    {
        path: '/signup',
        auth: false,
        component: view.SignUp,
    },

    {
        path: '/login',
        auth: false,
        component: view.Login,
    },

    {
        path: '/test',
        auth: true,
        component: view.Test,
    },

];