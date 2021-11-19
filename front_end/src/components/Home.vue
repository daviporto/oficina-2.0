<template>
  <section>
    <section class="box">
      <router-link class="button is-link is-outlined" to="/cadastro">Adicionar novas vendas</router-link> 
    <router-link class="button is-link is-outlined" to="/vendas">Visualizas e/ou editar vendas</router-link>
    </section>
  </section>
</template>

<style scoped>
section {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(3px);
  justify-content: center;
  align-items: center;
  animation: all 0.5s;
  background: linear-gradient(217deg, #dfde92, #e5e48a);
    background: #dfc140;
}

.box {
  max-width: 30em;
  height: 8em;
  margin: auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16), 0 0 15px rgba(0, 0, 0, 0.23);
  background-color: #38372a03;
  padding: 15px;
  margin-top: 10em;
  background: #dfc140;
  display: flex;
}

.button {
    height: 5em;
    margin-right: 3px;
}
</style>