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
        path: '/profile',
        auth: true,
        component: view.Profile,
    },

    {
        path: '/edit',
        auth: true,
        component: view.Edit,
    },

    {
        path: '/song',
        auth: true,
        component: view.Song,
    },

    {
        path: '/crossword',
        auth: true,
        component: view.Crossword,
    },

    {
        path: '/millionare',
        auth: true,
        component: view.Millionare,
    }, 

    {
        path:'/millionaire-process/:questionNumber',
        auth: true,
        component: view.MillionaireProcess,
    },

    {
        path:'/millionaire-finish',
        auth: true,
        component: view.MillionareFinish,
    },

    {
        path:'/whythisapp',
        auth: false,
        component: view.WhyThisApp,
    },

    {
        path:'/about',
        auth: false,
        component: view.AboutUs,
    }

];