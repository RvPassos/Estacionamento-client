<template>
    <div class="container col-6">
        <h3 class="mt-5">Cadastre uma nova Movimentação</h3>
        <div class="container text-end">
            <input class="form-control mt-3" type="text" placeholder="VeiculoId">
            <input class="form-control mt-3" type="text" placeholder="CondutorId">
            <input class="form-control mt-3" type="text" placeholder="Entrada da Movimentação">
            <input class="form-control mt-3" type="text" placeholder="Saida da Movimentação">
            <input class="form-control mt-3" type="text" placeholder="Tempo da Movimentação">
            <input class="form-control mt-3" type="text" placeholder="Tempo de Desconto">
            <input class="form-control mt-3" type="text" placeholder="Tempo de Multa">
            <input class="form-control mt-3" type="text" placeholder="Valor do Desconto">
            <input class="form-control mt-3" type="text" placeholder="Valor da Multa">
            <input class="form-control mt-3" type="text" placeholder="Valor Total">
            <input class="form-control mt-3" type="text" placeholder="Valor Hora">
            <input class="form-control mt-3" type="text" placeholder="Valor Hora Multa">
            <router-link to="/listar-movimentacao">
                <button class="btn btn-primary mt-3" type="button">Voltar</button>
            </router-link>
            <button class="btn btn-primary mt-3 ms-3" type="button">Cadastrar</button>
        </div>
    </div>
</template>

<script lang="ts">
</script>
