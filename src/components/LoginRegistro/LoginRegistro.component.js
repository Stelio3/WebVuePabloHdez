import firebase from 'firebase'
import { EventBus } from '../../Events/events_bus'

export default {
  name: 'login-registro',
  components: {},
  props: [],
  data () {
    return {
      blLoginVisible: true,
      sRegisterEmail: '',
      sRegisterPassword: '',
      sLoginEmail: '',
      sLoginPassword: ''
    }
  },
created: function(){
    firebase.auth().onAuthStateChanged((user) => {
      this.props_objuser = user
      if(user){
        this.props_blIsLoggedIn = true
        var docRef = firebase.firestore().collection("Perfiles").doc(user.uid+"")
          docRef.get().then(function(doc) {
          if (doc.exists) {
          //  console.log("Document data:", doc.data());
          this.setPerfil(doc.id, doc.data())
          } else {
            // doc.data() will be undefined in this case
            console.log("No existe ese documento");
          }
        }).catch(function(error) {
          console.log("Error getting document:", error);
        });
      }else {
        this.props_blIsLoggedIn = false
      }
      EventBus.$emit('loginregistro_userstatechanged',this.props_blIsLoggedIn)
    })
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    btnRegistrar1: function (event) {
      this.blLoginVisible = false
    },
    btnCancelar: function (event) {
      this.blLoginVisible = true
    },
    btnRegistrarse: function (event) {
      firebase.auth().createUserWithEmailAndPassword(this.sRegisterEmail,this.sRegisterPassword).then(
        function(user){
          var docRef = firebase.firestore().collection("Perfiles")
          docRef.doc(user.uid+"").set({nombre:"Pablo"})
          alert("Tu cuenta fue creada!!"+ user.name);
      },
      function(err){
        alert("Error en la creacion de cuenta " + err);
      }
    );
  },
    btnLogin: function (event) {
      firebase.auth().signInWithEmailAndPassword(this.sLoginEmail,this.sLoginPassword).then(
        function(user){
          alert("Te logueaste correctamente"+ user);
      },
      function(err){
        alert("Error en el login " + err);
      }
    );
  },
  Logout: function(event){
    firebase.auth().signOut()
  }
  }
}
