<template>
    <div class="container col-6">
        <h3 class="mt-5">Cadastre um novo Veiculo</h3>
        <div class="container text-end">
            <input class="form-control mt-3" type="text" placeholder="Placa do Veiculo">
            <input class="form-control mt-3" type="text" placeholder="ModeloId">
            <input class="form-control mt-3" type="text" placeholder="Cor do Veiculo">
            <input class="form-control mt-3" type="text" placeholder="Tipo de Veiculo">
            <input class="form-control mt-3" type="text" placeholder="Ano do Veiculo">
            <router-link to="/listar-veiculo">
                <button class="btn btn-primary mt-3">Voltar</button>
            </router-link>
            <button class="btn btn-primary mt-3 ms-3" type="button">Cadastrar</button>
        </div>
    </div>
</template>

<script lang="ts">
</script>
