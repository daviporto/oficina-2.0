import { createStore } from "vuex";
import { resquestGET, requestPost, requestPatch, requestDelete } from "../service/ajaxRequest";
import router from "@/router";
import {isInt, isNumber} from "../utils/validacao"
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
    notificacaoTexto: "afsfafdafds",
    notificacaoAberta:false,
    dadosValidos : false 
  },


  mutations: {
    SwitchDropDownMenu(state) {
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
    },

    verificarEdicao(state, url) {
      (url.replace("/cadastro", "") != "") ? state.isEditing = true : false
    },

    fecharNotificacao(state){
      state.notificacaoAberta = false 
    },

    setTextoNotificacao(state, texto:string){
      state.notificacaoAberta = true
      state.notificacaoTexto = texto
    },

    resetarDadosFalsos(state){
      state.dadosValidos = false 
    },

    verificarCampos(state){
      state.dadosValidos = false
      if(!isInt(state.id)){
        if(state.id == 0){
          state.notificacaoTexto = "o id precisa ser diferente de 0"
          state.notificacaoAberta = true
          return 
        }
        state.notificacaoTexto = "por favor digite apenas númeors inteiros no campo ID"
        state.notificacaoAberta = true
        return  
      }

      if(state.cliente == ""){
        state.notificacaoTexto = "por favor digite o nome do cliente "
        state.notificacaoAberta = true
        return  
      }

      if(state.data.length < 10){
        state.notificacaoTexto = "por favor selectione uma data"
        state.notificacaoAberta = true
        return  
      }

      if(state.hora == 0){
        state.notificacaoTexto = "por favor selectione as horas"
        state.notificacaoAberta = true
        return  
      }

      if(state.vendedor == ""){
        state.notificacaoTexto = "por favor digite o nome do vendedor "
        state.notificacaoAberta = true
        return  
      }

      if(state.descricao == ""){
        state.notificacaoTexto = "por favor digite a descrição "
        state.notificacaoAberta = true
        return  
      }

      if(isNumber(state.valor)){
        if(state.valor == 0){
          state.notificacaoTexto = "o valor precisa ser diferente de 0"
          state.notificacaoAberta = true
          return 
        }
        state.notificacaoTexto = "por favor digite apenas númeors no campo valor  "
        state.notificacaoAberta = true
        return 
      }
      state.dadosValidos = true
    },

    resetarCamposCadastro(state){
      state.id = 0
      state.cliente = ""
      state.data = ""
      state.hora = 0
      state.vendedor = ""
      state.descricao = ""
      state.valor = 0
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
      requestPost(`${this.state.URL}/filtrar`, payload)
        .then((response) => {
          commit("setVendas", response.data)
        })
        .catch((e) => {
          console.log(e)
          commit("setTextoNotificacao", "não foi possivel acessar o servidor");
        });
    },

    salvar({commit}) {
      commit("verificarCampos") 
      if(!this.state.dadosValidos) return 
      requestPatch(`${this.state.URL}/${this.state.id}`, {
        id: this.state.id,
        cliente: this.state.cliente,
        data: this.state.data.replace("/", "-"),
        hora: this.state.hora,
        vendedor: this.state.vendedor,
        descricao: this.state.descricao,
        valor: this.state.valor,
      })
        .then((Response) => {
          commit("setTextoNotificacao", "alterações salvas com sucesso");
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status == 401) {
            commit("setTextoNotificacao", "não foi possivel realiar as modificações");
          }
        });
    },

    deletar({commit}) {
      requestDelete(`${this.state.URL}/${this.state.id}`)
        .then((Response) => {
          commit("setTextoNotificacao", "registro excluido com sucesso");
          router.go(-1);
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status == 401) {
            commit("setTextoNotificacao", "não foi possivel excluir o registro");

          }
        });

    },

    requeriCadastro({commit}) {
      commit("verificarCampos") 
      if(!this.state.dadosValidos) return 
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
         commit("setTextoNotificacao", "cadastro realizado com sucesso")
         commit("resetarCamposCadastro")
        })
        .catch((e) => {
          console.log(e);
          commit("setTextoNotificacao", "não foi possivel realiar o cadastro");
        });
    },


    editar({commit}, id) {
      console.log(id)
      resquestGET(`${this.state.URL}/${id}/edit`)
        .then((Response) => {
          const data = Response.data
          this.state.id = data.id
          this.state.cliente = data.cliente
          this.state.data = data.data
          this.state.hora = data.hora
          this.state.vendedor = data.vendedor
          this.state.descricao = data.descricao
          this.state.valor = data.valor
          router.push({name:'Cadastro', params:{id:id}})
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status == 401) {
            commit("setTextoNotificacao", "não foi possivel acessar o servidor");
          }
        });
    },


  },
  modules: {},
});
