<template>
    <div class="container">
        <div class="mt-5">
            <table class="table table-sm">
                <thead class="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>Ativo</th>
                        <th>Nome</th>
                        <th>MarcaId</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>true</td>
                        <td>Toyota</td>
                        <td>1</td>
                        <th class="d-flex align-items-center justify-content-center">
                            <i class="bi bi-trash-fill px-2"></i>
                            <i class="bi bi-pencil-fill "></i>
                        </th>
                    </tr>
                </tbody>
            </table>
            <router-link to="/forms-modelo">
                <button class="btn btn-primary" type="button">Cadastrar</button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">

</script>
