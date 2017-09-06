import Vue from 'vue'
import Vuex from 'vuex'
import { setlStorage } from '../utils'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    showModal: false,
    showGetNotifiedModal: false,
    showSaleModal: false,
    email: '',
    language: 'en',
    routeLoaded: false,
    showPulseSpinner: false,
    showSaleContract: false,
    contractInfo: {
      contractAddress: '',
      dataField: '',
      gas: ''
    }
  },
  getters: {

  },
  mutations: {
    showModal (state, show) {
      state.showModal = show
    },
    setEmail (state, email) {
      setlStorage('email', email)
      state.email = email
    },
    showGetNotifiedModal (state, show) {
      state.showGetNotifiedModal = show
    },
    setLanguage (state, language) {
      state.language = language
    },
    showSaleModal (state, show) {
      state.showSaleModal = show
    },
    toggleRouteLoaded (state, loaded) {
      state.routeLoaded = loaded
    },
    togglePulseSpinner (state, show) {
      state.showPulseSpinner = show
    },
    setContractInfo (state, info) {
      state.contractInfo = info
    },
    clearContractInfo (state) {
      state.contractInfo = {
        contractAddress: '',
        dataField: '',
        gas: ''
      }
    },
    toggleSaleContract (state, show) {
      state.showSaleContract = show
    },
    clearChecked (state) {
      state.checked = {
        saleTermsRead: {
          checked: false,
          enable: false
        },
        erc20WalletAddress: {
          checked: false,
          enable: false
        },
        noExchangeAddress: {
          checked: false,
          enable: false
        },
        havePrivateKeys: {
          checked: false,
          enable: false
        }
      }
    }
  },
  strict: debug
})
