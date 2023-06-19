<template>
    <div class="container">
        <div class="mt-5">
            <table class="table table-sm">
                <thead class="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>Ativo</th>
                        <th>VeiculoId</th>
                        <th>CondutorId</th>
                        <th>Entrada</th>
                        <th>Saida</th>
                        <th>Tempo</th>
                        <th>Tempo Desconto</th>
                        <th>Tempo Multa</th>
                        <th>Valor Desconto</th>
                        <th>Valor Multa</th>
                        <th>Valor Total</th>
                        <th>Valor Hora</th>
                        <th>Valor Hora Multa</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>true</td>
                        <td>1</td>
                        <td>1</td>
                        <td>00:00:00</td>
                        <td>00:00:00</td>
                        <td>00:00:00</td>
                        <td>00:00:00</td>
                        <td>00:00:00</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <th class="d-flex align-items-center justify-content-center">
                            <i class="bi bi-trash-fill px-2"></i>
                            <i class="bi bi-pencil-fill "></i>
                        </th>
                    </tr>
                </tbody>
            </table>
            <router-link to="/forms-movimentacao">
                <button class="btn btn-primary" type="button">Cadastrar</button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">

</script>
