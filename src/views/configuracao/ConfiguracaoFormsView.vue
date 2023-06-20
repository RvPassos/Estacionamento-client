<template>
    <div class="container col-6">
        <h3 class="mt-5">Cadastre uma nova Configuracao</h3>
        <div class="container text-end">
        <input class="form-control mt-3" type="text" placeholder="Valor da Hora">
        <input class="form-control mt-3" type="text" placeholder="Valor Minuto Multa">
        <input class="form-control mt-3" type="text" placeholder="Inicio do Expediente">
        <input class="form-control mt-3" type="text" placeholder="Fim do Expediente">
        <input class="form-control mt-3" type="text" placeholder="Tempo Para Desconto">
        <input class="form-control mt-3" type="text" placeholder="Tempo De Desconto">
        <input class="form-control mt-3" type="text" placeholder="Gerar Desconto">
        <input class="form-control mt-3" type="text" placeholder="Vagas para Motos">
        <input class="form-control mt-3" type="text" placeholder="Vagas para Carros">
        <input class="form-control mt-3" type="text" placeholder="Vagas para Vans">
        <router-link to="/listar-configuracao">
            <button class="btn btn-primary mt-3">Voltar</button>
        </router-link>
        <button class="btn btn-primary mt-3 ms-3" type="button">Cadastrar</button>
    </div>
    </div>
</template>

<script lang="ts">
</script>
