<template>
    <div class="container col-6">
        <h3 class="mt-5">Cadastre um novo Condutor</h3>
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
                <label class="form-label mt-3">Nome do Condutor *</label>
                <input type="text" :disabled="this.form === 'excluir' ?  '' : disabled" class="form-control" v-model="condutor.nome">
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3" >Cpf do Condutor *</label>
                <input type="text" :disabled="this.form === 'excluir' ?  '' : disabled" class="form-control" placeholder="121.121.121-12" v-model="condutor.cpf">
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3" >Telefone do Condutor *</label>
                <input type="text" :disabled="this.form === 'excluir' ?  '' : disabled" class="form-control" placeholder="+12(121)12121-1212" v-model="condutor.telefone">
            </div>
        </div>
        
        <div class="row mt-3">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-primary" to="/condutor/lista">Voltar
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

import condutorClient from '@/client/condutor.client';
import { Condutor } from '@/model/condutor';

export default defineComponent({
    name: 'CondutorFormulario',
    data() {
        return {
            condutor: new Condutor(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            },
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

    },
    methods: {
        findById(id : number){
            condutorClient.findById(id)
                .then(sucess =>{
                    this.condutor = sucess;
                })
                .catch(Error =>{
                    console.log(Error);
                })
        },
        onClickCadastrar(){
            condutorClient.cadastrar(this.condutor)
                .then(sucess => {
                    this.condutor = new Condutor()

                    this.mensagem.ativo = true
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Parabens. ";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show"
                })
                .catch(error => {
                    const mensagemError = error.data;
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show"
                })
        },
        onClickEditar() {
            condutorClient.editar(this.condutor.id, this.condutor)
                .then(sucess => {
                    this.condutor = new Condutor()

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
            condutorClient.deletar(this.condutor.id)
                .then(sucess => {
                    this.condutor = new Condutor()

                    this.$router.push({ name: 'condutor-lista-view'});
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
