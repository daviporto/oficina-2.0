import { createStore } from "vuex";
import { resquestGET, requestPost, requestPatch, requestDelete } from "../service/ajaxRequest";
import router from "@/router";
export default createStore({
  state: {
    DropDownActive: false,
    filtroAtual: "intervalo",
    textFiltro: "",
    vendas: {},
    URL: "http://127.0.0.1:8000/cadastro",
    dataInicio: "",
    dataFim: "",
    id: 0,
    cliente: "",
    data: "",
    hora: 0,
    vendedor: "",
    descricao: "",
    valor: 0,
    isEditing: false,

  },


  mutations: {
    SwitchDropDownMenu(state) {
      console.log("here")
      state.DropDownActive = !(state.DropDownActive)
    },

    mudarFiltroAtual(state, NovoFiltro) {
      state.filtroAtual = NovoFiltro
      state.DropDownActive = !(state.DropDownActive)

    },
    setFiltroText(state, newValue) {
      state.textFiltro = newValue;

    },
    setVendas(state, vendas) {
      state.vendas = vendas;
    },

    setDataInicio(state, data) {
      state.dataInicio = data
    },

    setDataFim(state, data) {
      state.dataFim = data
    },

    setID(state, id) {
      state.id = id
    },

    setCliente(state, cliente) {
      state.cliente = cliente
    },

    setData(state, data) {
      state.data = data
    },

    setHora(state, hora) {
      state.hora = hora
    },

    setVendedor(state, vendedor) {
      state.vendedor = vendedor
    },

    setDescricao(state, descricao) {
      state.descricao = descricao
    },

    setValor(state, valor) {
      state.valor = valor
    }

  },



  actions: {
    getVendas({ commit }) {
      resquestGET(this.state.URL)
        .then((response) => {
          commit("setVendas", response.data)
        })
        .catch(() => {
          alert("não há produtos cadastrados ainda");
        });
    },
    getFiltered({ commit }) {
      let payload;
      if (this.state.filtroAtual == "intervalo") {
        payload = {
          tipo: "intervalo",
          inicio: this.state.dataInicio,
          fim: this.state.dataFim
        }
      } else {
        payload = {
          tipo: this.state.filtroAtual,
          nome: this.state.textFiltro
        }
      }
      console.log(this.state.filtroAtual)
      requestPost(`${this.state.URL}/filtrar`, payload)
        .then((response) => {
          commit("setVendas", response.data)
        })
        .catch(() => {
          alert("não há produtos cadastrados ainda");
        });
    },

    salvar() {
      requestPatch(`${URL}/${this.state.id}`, {
        id: this.state.id,
        cliente: this.state.cliente,
        data: this.state.data.replace("/", "-"),
        hora: this.state.hora,
        vendedor: this.state.vendedor,
        descricao: this.state.descricao,
        valor: this.state.valor,
      })
        .then((Response) => {
          console.log(Response);
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status == 401) {
            alert("usuario ou senha incorretor"); //TODO notifications
          }
        });
    },

    deletar() {
      requestDelete(`${URL}/${this.state.id}`)
        .then((Response) => {
          console.log(Response);
          router.go(-1);
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status == 401) {
            alert("usuario ou senha incorretor"); //TODO notifications

          }
        });
    },

    requeriCadastro() {
      requestPost(this.state.URL, {
        id: this.state.id,
        cliente: this.state.cliente,
        data: this.state.data.replace("/", "-"),
        hora: this.state.hora,
        vendedor: this.state.vendedor,
        descricao: this.state.descricao,
        valor: this.state.valor,
      })
        .then((Response) => {
          console.log(this.state.id);
          // redirect();
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status == 401) {
            alert("usuario ou senha incorretor"); //TODO notifications
          }
        });
    },


  },
  modules: {},
});
