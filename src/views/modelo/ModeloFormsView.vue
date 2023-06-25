<template>
    <div class="container col-6">
        <h3 class="mt-5">Cadastre um novo Modelo</h3>
        <hr>
        
        <div v-if="mensagem.ativo" class="row">
            <div class="col-md-12 text-start">
                <div :class="mensagem.css" role="alert">
                    <strong> {{ mensagem.titulo }} </strong> {{ mensagem.mensagem }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <label class="form-label">Nome do Modelo *</label>
                <input type="text" :disabled="this.form === 'excluir' ?  '' : disabled" class="form-control" v-model="modelo.nome">
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Nome da Marca *</label>
                <select v-model="modelo.marcaId" class="form-select" >
                    <option v-for="item in marca" :value="item"> {{ item.nome }}</option>
                </select>
            </div>
        </div>
        
        <div class="row mt-3">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-primary" to="/modelo/lista">Voltar
                    </router-link>
                </div>
            </div>
            <div class="col-md-3 ">
                <div class="d-grid gap-2">
                    <button v-if="this.form === undefined" type="button" class="btn btn-success"
                        @click="onClickCadastrar()">
                        Cadastrar
                    </button>
                    <button v-if="this.form === 'editar'" type="button" class="btn btn-warning" @click="onClickEditar()">
                        Editar
                    </button>
                    <button v-if="this.form === 'excluir'" type="button" class="btn btn-danger" @click="onClickExcluir()">
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import marcaClient from '@/client/marca.client';
import ModeloClient from '@/client/modelo.client';
import { Marca } from '@/model/marca';
import { Modelo } from '@/model/modelo';

export default defineComponent({
    name: 'ModeloFormulario',
    data() {
        return {
            modelo: new Modelo(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            },
            marca: new Array<Marca>()
        }
    },
    computed: {
        id() {
            return this.$route.query.id
        },
        form() {
            return this.$route.query.form
        }
    },
    mounted() {

        if (this.id !== undefined) {
            this.findById(Number(this.id));
        }

        this.listAllMarca();
    },
    methods: {
        findById(id : number){
            ModeloClient.findById(id)
                .then(sucess =>{
                    this.modelo = sucess;
                })
                .catch(Error =>{
                    console.log(Error);
                })
        },
        listAllMarca() {
            marcaClient.listAll()
                .then(sucess =>{
                    this.marca = sucess;
                })
                .catch(Error =>{
                    console.log(Error);
                })
        },
        onClickCadastrar(){
            ModeloClient.cadastrar(this.modelo)
                .then(sucess => {
                    this.modelo = new Modelo()

                    this.mensagem.ativo = true
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Parabens. ";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show"
                })
                .catch(error => {
                    const mensagemError = error.data;
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = mensagemError;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show"
                })
        },
        onClickEditar() {
            ModeloClient.editar(this.modelo.id, this.modelo)
                .then(sucess => {
                    this.modelo = new Modelo()

                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Parabens. "
                    this.mensagem.css = "alert alert-success alert-dismissible fade show"
                })
                .catch(error => {
                    const mensagemError = error.data;
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = mensagemError;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show"
                });
        },
        onClickExcluir() {
            ModeloClient.deletar(this.modelo.id)
                .then(sucess => {
                    this.modelo = new Modelo()

                    this.$router.push({ name: 'modelo-lista-view'});
                })
                .catch(error => {
                    const mensagemError = error.data;
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = mensagemError;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show"
                })

        }
    }
})


</script>
