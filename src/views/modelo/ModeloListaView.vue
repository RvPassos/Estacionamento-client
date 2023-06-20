<template>
    <div class="container">
        <h2 class="mt-3">Listar Modelo</h2>
        <div class="mt-5">
            <div class="container text-end">
                <router-link to="/forms-modelo">
                    <button class="btn btn-primary" type="button">Cadastrar</button>
                </router-link>
            </div>
            <div class="container text-center">
                <table class="table table-sm table-dark mt-4">
                    <thead class="text-menor">
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
                            <th class="d-flex align-items-center justify-content-center gap-2">
                                <button class="btn btn-outline-danger "><i class="bi bi-trash-fill"></i></button>
                                <button class="btn btn-outline-primary"><i class="bi bi-pencil-fill "></i></button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
.text-menor {
    font-size: 14px;
}
</style>