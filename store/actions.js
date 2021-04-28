export default {
  async getPokemon({commit}, id){
    if(!id){
      commit("SET_HAS_DATA", null)
    }else{
      commit("SET_LOADING", true)
      await this.$axios.get(`/pokemon/${id}`).then(response => {
        commit("SET_DATA", response.data)
        commit("SET_HAS_DATA", true)
      })
      .catch(error => {
        commit("SET_HAS_DATA", false)
      });
      commit("SET_LOADING", false)
    }
  }
}