import { EventBus } from '../../Events/events_bus'
import firebase from 'firebase'

export default {
  name: 'perfiles',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  created: function(){

    },
  computed: {

  },
  mounted () {
    EventBus.$on('loginregistro_userstatechanged', blestado => {
      //this.blloggedUser=blestado
      if(blestado){
        this.descargarPerfiles()
      }
    })
  },
  methods: {
    descargarPerfiles: function(){
      firebase.firestore().collection("Perfiles").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
    }
  }
}
