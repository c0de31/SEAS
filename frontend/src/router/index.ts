import { createRouter, createWebHistory } from 'vue-router'

import Compilation from '../views/Compilation.vue'
import Collection from '../views/Collection.vue'
import Processing from '../views/Processing.vue'
import Utilities from '../views/Utilities.vue'
import Help from '../views/Help.vue'
import HomePage from '../views/HomePage.vue'


const routes = [
        { path: '/', name: 'HomePage', component: HomePage},
        { path: '/compilation', name: 'Compilation', component: Compilation },
        { path : '/collection', name: 'Collection', component: Collection },
       {
        path: '/coordination',
        component: () => import('../views/Coordination.vue'),
        children: [
            {
            path: 'stockholder-directory',
            component: () => import('../views/StockHolderDirectory.vue')
            },
            {
            path: 'activities',
            component: () => import('../views/Activities.vue')
            }
            ]
        },
        { path : '/processing', name: 'Processing', component: Processing },
        { path : '/utilities', name: 'Utilities', component: Utilities },
        { path : '/help', name: 'Help', component: Help},

        //For the coordination options
       
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router