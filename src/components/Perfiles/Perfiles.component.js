import { EventBus } from '../../Events/events_bus'
import firebase from 'firebase'
import { Perfil } from '../../Mixins/props'


class City{
  constructor(id, datos){
    this.id = id
    this.capital = datos.capital
    this.name = datos.name
    this.latitud = datos.latitud
    this.longitud = datos.longitud
    this.population = datos.population
    this.country = datos.country
    console.log("NOMBRE capital: " + this.capital)
    console.log("NOMBRE nombre: " + this.name)
    console.log("NOMBRE latitud: " + this.latitud)
    console.log("NOMBRE longitud: " + this.longitud)
    console.log("NOMBRE poblacion: " + this.population)
    console.log("NOMBRE pais: " + this.country)

  }
}

export default {
  name: 'Perfiles',
  components: {},
  props: [],
  data () {
    return {
      Perfiles: [],
      cities: []
    }
  },
  created: function(){

    },
  computed: {

  },
  mounted () {
    EventBus.$on('loginregistro_perfildescargado', perfillocal => {
      console.log(perfillocal.ciudad+" HEY!!!" )
      //this.blloggedUser=blestado
      //if(blestado){
        this.descargarPerfiles(perfillocal)
        this.descargarCiudadDePerfiles(perfillocal)
      //}
    })
  },
  methods: {
    descargarPerfiles: function(perfillocal){
      var that=this
      firebase.firestore().collection("Perfiles").onSnapshot(function(querySnapshot) {
          that.Perfiles = []
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        that.Perfiles.push(new Perfil(doc.id,doc.data()))
    });
});
},
descargarCiudadDePerfiles: function(perfillocal){
  var that=this
  firebase.firestore().collection("cities").doc(perfillocal.ciudad).get().then(function(doc) {
      that.cities = []
    that.cities.push(new City(doc.id,doc.data()))

});
}
  }
}
