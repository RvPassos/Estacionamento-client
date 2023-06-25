<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-10 text-start">
                <h2 class="fs-3">Listar Modelo</h2>
            </div>
            <div class="col-md-2 d-grid gap-2">
                <router-link to="/modelo/formulario" type="button" class="btn btn-primary">Cadastrar</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-sm table-dark mt-4">
                    <thead>
                        <tr class="text-menor">
                            <th scope="col">#</th>
                            <th scope="col">Ativo</th>
                            <th scope="col">Nome do Modelo</th>
                            <th scope="col">Nome da Marca</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="item in modelosList" :key="item.id">
                            <td class="col-md-1"> {{ item.id }} </td>
                            <td class="col-md-2">
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </td>
                            <td class="col-md-3 text-center"> {{ item.nome }}</td>
                            <td class="col-md-4 text-center"> {{ item.marcaId.nome }}</td>
                            <th class="col-md-4">
                                <div>
                                    <router-link type="button" class="btn btn-outline-warning"
                                        :to="{ name: 'modelo-formulario-editar-view', query: { id: item.id, form: 'editar' } }">
                                        <i class="bi bi-pencil-fill"></i>
                                    </router-link>
                                    <router-link type="button" class="btn btn-outline-danger ms-3"
                                        :to="{ name: 'modelo-formulario-excluir-view', query: { id: item.id, form: 'excluir' } }">
                                        <i class="bi bi-trash-fill"></i>
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

import  ModeloClient  from '@/client/modelo.client';
import { Modelo } from '@/model/modelo';

export default defineComponent({
    name: 'ModeloLista',
    data(){
        return {
            modelosList: new Array<Modelo>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            ModeloClient.listAll()
                .then(sucess => {
                    this.modelosList = sucess;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});

</script>

<style lang="scss">
.text-menor {
    font-size: 14px;
}
</style>