<template>
    <div class="container col-6">
        <h3 class="mt-5">Cadastre um novo Modelo</h3>
        <div class="container text-end">
            <input class="form-control mt-3" type="text" placeholder="Nome da Marca">
            <input class="form-control mt-3" type="text" placeholder="Id da Marca">
            <router-link to="/listar-modelo">
                <button class="btn btn-primary mt-3">Voltar</button>
            </router-link>
            <button class="btn btn-primary mt-3 ms-3" type="button">Cadastrar</button>
        </div>
    </div>
</template>

<script lang="ts">
</script>
