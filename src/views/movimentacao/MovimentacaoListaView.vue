<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-10 text-start">
                <h2 class="fs-3">Listar Movimentacao</h2>
            </div>
            <div class="col-md-2 d-grid gap-2">
                <router-link to="/movimentacao/formulario" type="button" class="btn btn-primary">Cadastrar</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-sm table-dark mt-4">
                    <thead>
                        <tr class="text-menor">
                            <th>#</th>
                            <th>Ativo</th>
                            <th>VeiculoId</th>
                            <th>CondutorId</th>
                            <th>Entrada</th>
                            <th>Saida</th>
                            <th>Valor Total</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="item in movimentacaoList" :key="item.id">
                            <td> {{ item.id }} </td>
                            <td>
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </td>
                            <td> {{ item.veiculoId.placa }} </td>
                            <td> {{ item.condutorId.nome }} </td>
                            <td> {{ item.entrada }} </td>
                            <td> {{ item.saida }} </td>
                            <td> {{ item.valorTotal }} </td>
                            <th class="col-md-2">
                                <div>
                                    <router-link type="button" class="btn btn-outline-warning"
                                        :to="{ name: 'movimentacao-formulario-editar-view', query: { id: item.id, form: 'editar' } }">
                                        <i class="bi bi-pencil-fill"></i>
                                    </router-link>
                                    <router-link type="button" class="btn btn-outline-danger ms-3"
                                        :to="{ name: 'movimentacao-formulario-excluir-view', query: { id: item.id, form: 'excluir' } }">
                                        <i class="bi bi-trash-fill"></i>
                                    </router-link>
                                    <router-link type="button" class="btn btn-outline-info ms-3"
                                        :to="{ name: 'movimentacao-formulario-finalizar-view', query: { id: item.id, form: 'finalizar' } }">
                                        Finalizar
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

import movimentacaoClient from '@/client/movimentacao.client';
import { Movimentacao } from '@/model/movimentacao';

export default defineComponent({
    name: 'MovimentacaoLista',
    data() {
        return {
            movimentacaoList: new Array<Movimentacao>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAllAbertas() {
            movimentacaoClient.findByAbertas()
                .then(sucess => {
                    this.movimentacaoList = sucess;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        findAll(){
            movimentacaoClient.listAll()
                .then(sucess => {
                    this.movimentacaoList = sucess;
                })
                .catch(error => {
                    console.log
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