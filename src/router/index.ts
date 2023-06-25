import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/marca/lista',
    name: 'marca-lista-view',
    component: () => import(/* webpackChunkName: "MarcaListaView" */ '../views/marca/MarcaListaView.vue')
  },
  {
    path: '/marca/formulario',
    name: 'marca-forms-view',
    component: () => import(/* webpackChunkName: "MarcaFormsView" */ '../views/marca/MarcaFormsView.vue'),
    children: [
      {
        path: '/marca/formulario',
        name: 'marca-formulario-editar-view',
        component: () => import(/* webpackChunkName: "MarcaFormsView" */ '../views/marca/MarcaFormsView.vue')
      },
      {
        path: '/marca/formulario',
        name: 'marca-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "MarcaFormsView" */ '../views/marca/MarcaFormsView.vue')
      }
    ]
  },
  {
    path: '/modelo/lista',
    name: 'modelo-lista-view',
    component: () => import(/* webpackChunkName: "ModeloListaView" */ '../views/modelo/ModeloListaView.vue')
  },
  {
    path: '/modelo/formulario',
    name: 'modelo-forms-view',
    component: () => import(/* webpackChunkName: "ModeloFormsView" */ '../views/modelo/ModeloFormsView.vue'),
    children: [
      {
        path: '/modelo/formulario',
        name: 'modelo-formulario-editar-view',
        component: () => import(/* webpackChunkName: "ModeloFormsView" */ '../views/modelo/ModeloFormsView.vue')
      },
      {
        path: '/modelo/formulario',
        name: 'modelo-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "ModeloFormsView" */ '../views/modelo/ModeloFormsView.vue')
      }
    ]
  },
  {
    path: '/veiculo/lista',
    name: 'veiculo-lista-view',
    component: () => import(/* webpackChunkName: "VeiculoListaView" */ '../views/veiculo/VeiculoListaView.vue')
  },
  {
    path: '/veiculo/formulario',
    name: 'veiculo-forms-view',
    component: () => import(/* webpackChunkName: "VeiculoFormsView" */ '../views/veiculo/VeiculoFormsView.vue'),
    children: [
      {
        path: '/veiculo/formulario',
        name: 'veiculo-formulario-editar-view',
        component: () => import(/* webpackChunkName: "VeiculoFormsView" */ '../views/veiculo/VeiculoFormsView.vue')
      },
      {
        path: '/veiculo/formulario',
        name: 'veiculo-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "VeiculoFormsView" */ '../views/veiculo/VeiculoFormsView.vue')
      }
    ]
  },
  {
    path: '/condutor/lista',
    name: 'condutor-lista-view',
    component: () => import(/* webpackChunkName: "CondutorListaView" */ '../views/condutor/CondutorListaView.vue')
  },
  {
    path: '/condutor/formulario',
    name: 'condutor-forms-view',
    component: () => import(/* webpackChunkName: "CondutorFormsView" */ '../views/condutor/CondutorFormsView.vue'),
    children: [
      {
        path: '/condutor/formulario',
        name: 'condutor-formulario-editar-view',
        component: () => import(/* webpackChunkName: "CondutorFormsView" */ '../views/condutor/CondutorFormsView.vue')
      },
      {
        path: '/condutor/formulario',
        name: 'condutor-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "CondutorFormsView" */ '../views/condutor/CondutorFormsView.vue')
      }
    ]
  },
  {
    path: '/movimentacao/lista',
    name: 'movimentacao-lista-view',
    component: () => import(/* webpackChunkName: "MovimentacaoListaView" */ '../views/movimentacao/MovimentacaoListaView.vue')
  },
  {
    path: '/movimentacao/formulario',
    name: 'movimentacao-forms-view',
    component: () => import(/* webpackChunkName: "MovimentacaoFormsView" */ '../views/movimentacao/MovimentacaoFormsView.vue'),
    children: [
      {
        path: '/movimentacao/formulario',
        name: 'movimentacao-formulario-editar-view',
        component: () => import(/* webpackChunkName: "MovimentacaoFormsView" */ '../views/movimentacao/MovimentacaoFormsView.vue')
      },
      {
        path: '/movimentacao/formulario',
        name: 'movimentacao-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "MovimentacaoFormsView" */ '../views/movimentacao/MovimentacaoFormsView.vue')
      },
      {
        path: '/movimentacao/formulario',
        name: 'movimentacao-formulario-finalizar-view',
        component: () => import(/* webpackChunkName: "MovimentacaoFormsView" */ '../views/movimentacao/MovimentacaoFormsView.vue')
      }
    ]
  },
  {
    path: '/configuracao/lista',
    name: 'configuracao-lista-view',
    component: () => import(/* webpackChunkName: "ConfiguracaoListaView" */ '../views/configuracao/ConfiguracaoListaView.vue')
  },
  {
    path: '/configuracao/formulario',
    name: 'configuracao-forms-view',
    component: () => import(/* webpackChunkName: "ConfiguracaoFormsView" */ '../views/configuracao/ConfiguracaoFormsView.vue'),
    children: [
      {
        path: '/configuracao/formulario',
        name: 'configuracao-formulario-editar-view',
        component: () => import(/* webpackChunkName: "ConfiguracaoFormsView" */ '../views/configuracao/ConfiguracaoFormsView.vue')
      },
      {
        path: '/configuracao/formulario',
        name: 'configuracao-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "ConfiguracaoFormsView" */ '../views/configuracao/ConfiguracaoFormsView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
