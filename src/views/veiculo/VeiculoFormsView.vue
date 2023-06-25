<template>
    <div class="container col-6">
        <h3 class="mt-5">Cadastre um novo Veiculo</h3>
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
                <label class="form-label mt-3">Placa *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" placeholder="ABC-1234 || AAA1A12"
                    v-model="veiculo.placa">
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Modelo do Carro *</label>
                <select v-model="veiculo.modeloId" class="form-select">
                    <option v-for="item in modelo" :value="item"> {{ item.nome }}</option>
                </select>
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Cor *</label>
                <select v-model="veiculo.cor" :disable="this.form === 'excluir' ? '' : disabled" class="form-select">
                    <option v-for="item in coresEnum" :value="item"> {{ item }}</option>
                </select>
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Tipo *</label>
                <select v-model="veiculo.tipo" :disable="this.form === 'excluir' ? '' : disabled" class="form-select">
                    <option v-for="item in tipoEnum" :value="item"> {{ item }}</option>
                </select>
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Ano *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="veiculo.ano">
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-primary" to="/veiculo/lista">Voltar
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

import modeloClient from '@/client/modelo.client';
import { Modelo } from '@/model/modelo';
import veiculoClient from '@/client/veiculo.client';
import { Veiculo } from '@/model/veiculo';
import { Cor } from '@/model/cor'
import { Tipo } from '@/model/tipo'

export default defineComponent({
    name: 'MarcaFormulario',
    data() {
        return {
            veiculo: new Veiculo(),
            modelo: new Array<Modelo>(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            },
            coresEnum: Cor,
            tipoEnum: Tipo
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

        this.listaAllModelo()

    },
    methods: {
        findById(id: number) {
            veiculoClient.findById(id)
                .then(sucess => {
                    this.veiculo = sucess
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        listaAllModelo() {
            modeloClient.listAll()
                .then(sucess => {
                    this.modelo = sucess
                })
                .catch(Error =>{
                    console.log(Error);
                })
        },
        onClickCadastrar() {
            veiculoClient.cadastrar(this.veiculo)
                .then(sucess => {
                    this.veiculo = new Veiculo()

                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Parabens. ";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show";
                })
                .catch(error => {
                    const mensagemError = error.data;
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = mensagemError;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickEditar() {
            veiculoClient.editar(this.veiculo.id, this.veiculo)
                .then(sucess => {
                    this.veiculo = new Veiculo()

                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Parabens. ";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show";
                })
                .catch(error => {
                    const mensagemError = error.data;
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = mensagemError;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickExcluir() {
            veiculoClient.deletar(this.veiculo.id)
                .then(sucess => {
                    this.veiculo = new Veiculo()

                    this.$router.push({ name: 'veiculo-lista-view' });
                })
                .catch(error => {
                    const mensagemError = error.data;
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = mensagemError;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        }
    }
});



</script>
