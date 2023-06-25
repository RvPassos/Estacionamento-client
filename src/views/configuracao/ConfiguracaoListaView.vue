<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-10 text-start">
                <h2 class="fs-3">Listar Configurações</h2>
            </div>
            <div class="col-md-2 d-grid gap-2">
                <router-link to="/configuracao/formulario" type="button" class="btn btn-primary">Cadastrar</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-sm table-dark mt-4">
                    <thead>
                        <tr class="text-menor">
                            <th scope="col">#</th>
                            <th scope="col">Ativo</th>
                            <th scope="col">Valor Hora</th>
                            <th scope="col">Tempo Para Desconto</th>
                            <th scope="col">Tempo De Desconto</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="item in configuracaoList" :key="item.id">
                            <th>{{ item.id }}</th>
                            <th>
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th>{{ item.valorHora }}</th>
                            <th>{{ item.tempoParaDesconto }}</th>
                            <th>{{ item.tempoDeDesconto }}</th>
                            <th class="col-md-2">
                                <div>
                                    <router-link type="button" class="btn btn-outline-warning"
                                        :to="{ name: 'configuracao-formulario-editar-view', query: { id: item.id, form: 'editar' } }">
                                        <i class="bi bi-pencil-fill"></i>
                                    </router-link>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { Configuracao } from '@/model/configuracao';
import configuracaoClient from '@/client/configuracao.client';


export default defineComponent({
    name: 'ConfiguracaoLista',
    data() {
        return {
            configuracaoList: new Array<Configuracao>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll(){
            configuracaoClient.listAll()
                .then(sucess => {
                    this.configuracaoList = sucess;                    
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
});
</script>

<style lang="scss">
.text-menor {
    font-size: 14px;
}
</style>