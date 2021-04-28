export default {
  SET_DATA(state, payload){
    state.data = payload
  },
  SET_HAS_DATA(state, payload){
    state.hasData = payload
  },
  SET_LOADING(state, payload){
    state.loading = payload
  }
}