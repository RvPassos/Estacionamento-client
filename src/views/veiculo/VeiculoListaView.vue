<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-10 text-start">
                <h2 class="fs-3">Listar Veiculos</h2>
            </div>
            <div class="col-md-2 d-grid gap-2">
                <router-link to="/veiculo/formulario" type="button" class="btn btn-primary">Cadastrar</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-sm table-dark mt-4">
                    <thead>
                        <tr class="text-menor">
                            <th scope="col">#</th>
                            <th scope="col">Ativo</th>
                            <th scope="col">Placa</th>
                            <th scope="col">Modelo do Veiculo</th>
                            <th scope="col">Cor</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Ano</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="item in marcasList" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>

                            </td>
                            <td>{{ item.placa }}</td>
                            <td>{{ item.modeloId.nome }}</td>
                            <td>{{ item.cor }}</td>
                            <td>{{ item.tipo }}</td>
                            <td>{{ item.ano }}</td>
                            <th class="col-md-2">
                                <div>
                                    <router-link type="button" class="btn btn-outline-warning"
                                        :to="{ name: 'veiculo-formulario-editar-view', query: { id: item.id, form: 'editar' } }">
                                        <i class="bi bi-pencil-fill"></i>
                                    </router-link>
                                    <router-link type="button" class="btn btn-outline-danger ms-3"
                                        :to="{ name: 'veiculo-formulario-excluir-view', query: { id: item.id, form: 'excluir' } }">
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

import veiculoClient from '@/client/veiculo.client';
import { Veiculo } from '@/model/veiculo';

export default defineComponent({
    name: 'MarcaLista',
    data() {
        return {
            marcasList: new Array<Veiculo>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {

        findAll() {
            veiculoClient.listAll()
                .then(sucess => {
                    this.marcasList = sucess;
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