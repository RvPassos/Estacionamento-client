<template>
  <nav class="navbar navbar-expand-lg nav-bar-color">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item"><router-link to="/" class="router-link-nav">Home</router-link></li>
        <li class="nav-item"><router-link to="/listar-marca" class="router-link-nav">Marca</router-link></li>
        <li class="nav-item"><router-link to="/listar-modelo" class="router-link-nav">Modelo</router-link></li>
        <li class="nav-item"><router-link to="/listar-veiculo" class="router-link-nav">Veiculo</router-link></li>
        <li class="nav-item"><router-link to="/listar-condutor" class="router-link-nav">Condutor</router-link></li>
        <li class="nav-item"><router-link to="/listar-movimentacao" class="router-link-nav">Movimentação</router-link></li>
        <li class="nav-item"><router-link to="/listar-configuracao" class="router-link-nav">Configuração</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">



@import "~/node_modules/bootstrap/scss/bootstrap";
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #bebebe;
}

li {
  padding: 12px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}

.router-link-nav{
  text-decoration: none;
  color: #292929;
}

.nav-bar-color{
  background-color: #007cb6;
}

body{
  background-color: #2e2e2e;
  margin: 0px;
  padding: 0px;
}
</style>
