import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Compilation from '../views/Compilation.vue'
import Collection from '../views/Collection.vue'
import Coordination from '../views/Coordination.vue'
import Processing from '../views/Processing.vue'
import Utilities from '../views/Utilities.vue'
import Help from '../views/Help.vue'

const routes = [
        { path: '/', name: 'HomePage', component: HomePage},
        { path: '/compilation', name: 'Compilation', component: Compilation },
        { path : '/collection', name: 'Collection', component: Collection },
        {path : '/coordination', name: 'Coordination', component: Coordination },
        { path : '/processing', name: 'Processing', component: Processing },
        { path : '/utilities', name: 'Utilities', component: Utilities },
        { path : '/help', name: 'Help', component: Help}
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router