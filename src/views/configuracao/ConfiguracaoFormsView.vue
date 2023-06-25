<template>
    <div class="container col-6">
        <h3 class="mt-5">Cadastre uma nova Configuracao</h3>
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
                <label class="form-label mt-3">Valor hora *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="configuracao.valorHora">
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Tempo para desconto *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" placeholder="Valor em horas"
                    v-model="configuracao.tempoParaDesconto">
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Tempo de desconto *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" placeholder="Valor em horas"
                    v-model="configuracao.tempoDeDesconto">
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-primary" to="/configuracao/lista">Voltar
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
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Configuracao } from '@/model/configuracao';
import configuracaoClient from '@/client/configuracao.client';

export default defineComponent({
    name: 'ConfiguracaoFormulario',
    data() {
        return {
            configuracao: new Configuracao(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            }
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
        findById(id: number) {
            configuracaoClient.findById(id)
                .then(sucess => {
                    this.configuracao = sucess;
                })
                .catch(Error => {
                    console.log(Error);
                })
        },
        onClickCadastrar() {
            configuracaoClient.cadastrar(this.configuracao)
                .then(sucess => {
                    this.configuracao = new Configuracao()

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
            configuracaoClient.editar(this.configuracao.id, this.configuracao)
                .then(sucess => {
                    this.configuracao = new Configuracao()

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
        }
    }
})
</script>
