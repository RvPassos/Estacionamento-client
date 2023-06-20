<template>
    <div class="container col-6">
        <h3 class="mt-5">Cadastre um novo Condutor</h3>
        <div class="container text-end">
            <input class="form-control mt-3" type="text" placeholder="Nome do Condutor">
            <input class="form-control mt-3" type="text" placeholder="Cpf do Condutor">
            <input class="form-control mt-3" type="text" placeholder="Telefone do Condutor">
            <input class="form-control mt-3" type="text" placeholder="Tempo Pago">
            <input class="form-control mt-3" type="text" placeholder="Tempo Desconto">
            <router-link to="/listar-condutor">
                <button class="btn btn-primary mt-3">Voltar</button>
            </router-link>
            <button class="btn btn-primary mt-3 ms-3" type="button">Cadastrar</button>
        </div>
    </div>
</template>

<script lang="ts">
</script>
