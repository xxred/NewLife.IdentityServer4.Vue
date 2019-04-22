import store from '@xxred/easy-front-end/src/store'
import routes from './index'

// 添加路由，侧边栏菜单
store.commit('SET_ROUTERS', routes)
