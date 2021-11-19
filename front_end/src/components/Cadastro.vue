<template>
  <section>
    <form>
      <!-- ID -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">ID </label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <!-- em caso de edição o Id não poderá ser modificado -->
              <input
                class="input is-rounded"
                required
                v-model="id"
                type="number"
                min="1"
                step="1"
                v-if="!$store.state.isEditing"
              />
              <input
                class="input is-rounded"
                required
                v-model="$store.state.id"
                type="number"
                v-else
                readonly
              />
            </p>
          </div>
        </div>
      </div>

      <!-- Cliente -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Cliente </label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input is-rounded"
                required
                v-model="cliente"
                type="text"
              />
            </p>
          </div>
        </div>
      </div>

      <!-- Data/Hora -->

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Data/Hora</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input
                class="input is-rounded"
                required
                v-model="data"
                type="date"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              />
            </p>
          </div>

          <div class="field">
            <p class="control is-expanded">
              <input
                class="input is-rounded"
                required
                v-model="hora"
                type="time"
              />
            </p>
          </div>
        </div>
      </div>

      <!-- vendedor -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">vendedor </label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input is-rounded"
                required
                v-model="vendedor"
                type="text"
              />
            </p>
          </div>
        </div>
      </div>

      <!-- descrição -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">descrição </label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input is-rounded"
                required
                v-model="descricao"
                type="text"
              />
            </p>
          </div>
        </div>
      </div>

      <!-- valor -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">valor </label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input is-rounded"
                type="number"
                min="1"
                step="any"
                required
                v-model="valor"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="buttons cadastro" v-if="!$store.state.isEditing">
        <button
          class="button is-success"
          id="botao-sem-login"
          @click.prevent="$store.dispatch('requeriCadastro')"
          @keyup.enter="$store.dispatch('requeriCadastro')"
        >
          cadastrar
        </button>
      </div>
      <div class="editando" v-else>
        <button
          class="button is-success"
          id="botao-sem-login"
          @click.prevent="$router.go(-1)"
        >
          voltar
        </button>
        <button
          class="button is-success"
          id="botao-sem-login"
          @click.prevent="$store.dispatch('salvar')"
        >
          salvar
        </button>
        <button
          class="button is-success"
          id="botao-sem-login"
          @click.prevent="$store.dispatch('deletar')"
        >
          deletar
        </button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  mounted: function (){ this.$store.commit("verificarEdicao", window.location.pathname)},
  computed: {
    cliente: {
      get() {
        return this.$store.state.cliente;
      },
      set(newValue) {
        this.$store.commit("setCliente", newValue);
      },
    },
    id: {
      get() {
        return this.$store.state.id;
      },
      set(newValue) {
        this.$store.commit("setID", newValue);
      },
    },
    data: {
      get() {
        return this.$store.state.data;
      },
      set(newValue) {
        this.$store.commit("setData", newValue);
      },
    },
    hora: {
      get() {
        return this.$store.state.hora;
      },
      set(newValue) {
        this.$store.commit("setHora", newValue);
      },
    },

    vendedor: {
      get() {
        return this.$store.state.vendedor;
      },
      set(newValue) {
        this.$store.commit("setVendedor", newValue);
      },
    },

    descricao: {
      get() {
        return this.$store.state.descricao;
      },
      set(newValue) {
        this.$store.commit("setDescricao", newValue);
      },
    },

    valor: {
      get() {
        return this.$store.state.valor;
      },
      set(newValue) {
        this.$store.commit("setValor", newValue);
      },
    },
  },
};


</script>
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
  background: linear-gradient(217deg, #dfde92, rgb(240, 240, 123));
}

form {
  max-width: 30em;
  margin: auto;
  display: flex;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16), 0 0 15px rgba(0, 0, 0, 0.23);
  background-color: #38372a03;
  padding: 15px;
  margin-top: 5em;
  flex-direction: column;
  background: #dfc140;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  margin-bottom: 1em;
}

.cadastro {
  justify-content: space-between;
  align-items: center;
}
.cadastro button {
  width: 100%;
}

.editando button {
  width: 31%;
  margin-right: 0.2em;
  margin-left: 0.2em;
}
</style>