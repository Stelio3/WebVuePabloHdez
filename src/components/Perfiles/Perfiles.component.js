import { EventBus } from '../../Events/events_bus'
import firebase from 'firebase'

class Perfil{
  constructor(id, datos){
    this.id = id
    this.name = datos.nombre
    console.log("NOMBRE Perfil: " + this.name)
  }
}

export default {
  name: 'perfiles',
  components: {},
  props: [],
  data () {
    return {
      Perfiles: []
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
      var that=this
      firebase.firestore().collection("Perfiles").onSnapshot(function(querySnapshot) {
          that.Perfiles = []
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        that.Perfiles.push(new Perfil(doc.id,doc.data()))
    });
});
    }
  }
}
