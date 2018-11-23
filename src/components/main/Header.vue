<template>
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand>Cálculo Divertido</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item  href="/">
      <i class="material-icons" id="icone"> home </i>
        <p class="d-inline" >Início</p>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="/informacoes" right>
        Informações
      <i class="material-icons" id="icone"> info </i>
      </b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
    name: 'Header',

}
</script>

<style scoped>
#icone{
  position: relative;
  top: 5px;
}
</style>
