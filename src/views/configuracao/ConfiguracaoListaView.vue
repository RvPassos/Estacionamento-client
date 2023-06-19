<template>
    <div class="container">
        <div class="mt-5">
            <table class="table table-sm">
                <thead class="table-secondary">
                    <tr class="text-menor">
                        <th>#</th>
                        <th>Ativo</th>
                        <th>Valor Hora</th>
                        <th>Valor Minuto Multa</th>
                        <th>Inicio Expediente</th>
                        <th>Fim Expediente</th>
                        <th>Tempo Para Desconto</th>
                        <th>Tempo De Desconto</th>
                        <th>Gerar Desconto</th>
                        <th>Vagas Moto</th>
                        <th>Vagas Carro</th>
                        <th>Vagas Van</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>true</td>
                        <td>0</td>
                        <td>0</td>
                        <td>00:00:00</td>
                        <td>00:00:00</td>
                        <td>00:00:00</td>
                        <td>00:00:00</td>
                        <td>sim</td>
                        <td>20</td>
                        <td>5</td>
                        <td>10</td>
                        <th class="d-flex align-items-center justify-content-center">
                            <i class="bi bi-trash-fill px-2"></i>
                            <i class="bi bi-pencil-fill "></i>
                        </th>
                    </tr>
                </tbody>
            </table>
            <router-link to="/forms-configuracao">
                <button class="btn btn-primary" type="button">Cadastrar</button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">

.text-menor{
    font-size: 14px;
}
</style>