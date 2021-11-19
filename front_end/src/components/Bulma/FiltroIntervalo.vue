<template >
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Inicio</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input
            class="input "
            type="date"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            v-model="dataInicio"
          />
        </p>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Fim</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input
            class="input"
            type="date"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            v-model="dataFim"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { computed } from "@vue/reactivity";
export default{
    computed:{
    dataInicio: {
        get(){
            return this.$store.state.dataInicio
        },
        set(newValue){
            this.$store.commit("setDataInicio", newValue)
        }
    },

    dataFim: {
        get(){
            return this.$store.state.dataFim
        },
        set(newValue){
            this.$store.commit("setDataFim", newValue)
        }
    }
}
}

</script>

<style scoped>
input{
  background-color: rgb(233, 205, 44);
}
</style>
