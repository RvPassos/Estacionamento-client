import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listar-marca',
    name: 'marca-lista-view',
    component: () => import(/* webpackChunkName: "MarcaListaView" */ '../views/marca/MarcaListaView.vue')
  },
  {
    path: '/forms-marca',
    name: 'marca-forms-view',
    component: () => import(/* webpackChunkName: "MarcaFormsView" */ '../views/marca/MarcaFormsView.vue')
  },
  {
    path: '/listar-modelo',
    name: 'modelo-lista-view',
    component: () => import(/* webpackChunkName: "ModeloListaView" */ '../views/modelo/ModeloListaView.vue')
  },
  {
    path: '/forms-modelo',
    name: 'modelo-forms-view',
    component: () => import(/* webpackChunkName: "ModeloFormsView" */ '../views/modelo/ModeloFormsView.vue')
  },
  {
    path: '/listar-veiculo',
    name: 'veiculo-lista-view',
    component: () => import(/* webpackChunkName: "VeiculoListaView" */ '../views/veiculo/VeiculoListaView.vue')
  },
  {
    path: '/forms-veiculo',
    name: 'veiculo-forms-view',
    component: () => import(/* webpackChunkName: "VeiculoFormsView" */ '../views/veiculo/VeiculoFormsView.vue')
  },  
  {
    path: '/listar-condutor',
    name: 'condutor-lista-view',
    component: () => import(/* webpackChunkName: "CondutorListaView" */ '../views/condutor/CondutorListaView.vue')
  },
  {
    path: '/forms-condutor',
    name: 'condutor-forms-view',
    component: () => import(/* webpackChunkName: "CondutorFormsView" */ '../views/condutor/CondutorFormsView.vue')
  },  
  {
    path: '/listar-movimentacao',
    name: 'movimentacao-lista-view',
    component: () => import(/* webpackChunkName: "MovimentacaoListaView" */ '../views/movimentacao/MovimentacaoListaView.vue')
  },
  {
    path: '/forms-movimentacao',
    name: 'movimentacao-forms-view',
    component: () => import(/* webpackChunkName: "MovimentacaoFormsView" */ '../views/movimentacao/MovimentacaoFormsView.vue')
  },  
  {
    path: '/listar-configuracao',
    name: 'configuracao-lista-view',
    component: () => import(/* webpackChunkName: "ConfiguracaoListaView" */ '../views/configuracao/ConfiguracaoListaView.vue')
  },
  {
    path: '/forms-configuracao',
    name: 'configuracao-forms-view',
    component: () => import(/* webpackChunkName: "ConfiguracaoFormsView" */ '../views/configuracao/ConfiguracaoFormsView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
