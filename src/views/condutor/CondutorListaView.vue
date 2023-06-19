<template>
    <div class="container">
        <div class="mt-5">
            <table class="table table-sm">
                <thead class="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>Ativo</th>
                        <th>Nome</th>
                        <th>Cpf</th>
                        <th>Telefone</th>
                        <th>Tempo Pago</th>
                        <th>Tempo Desconto</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>true</td>
                        <td>João</td>
                        <td>121.121.121-11</td>
                        <td>+55(84)99189-1111</td>
                        <td>00:00:00</td>
                        <td>00:00:00</td>
                        <th class="d-flex align-items-center justify-content-center">
                            <i class="bi bi-trash-fill px-2"></i>
                            <i class="bi bi-pencil-fill "></i>
                        </th>
                    </tr>
                </tbody>
            </table>
            <router-link to="/forms-condutor">
                <button class="btn btn-primary" type="button">Cadastrar</button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">

</script>
