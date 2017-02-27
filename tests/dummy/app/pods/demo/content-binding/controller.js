import Ember from 'ember'
const {Controller} = Ember

export default Controller.extend({
  queryParams: [
    'isModalVisible'
  ],

  isModalVisible: false,

  actions: {
    getReference (episode) {
      window.alert(`http://rickandmorty.wikia.com/wiki/${episode}`)
    }
  }
})
