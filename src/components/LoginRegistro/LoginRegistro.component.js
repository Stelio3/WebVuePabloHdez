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
    btnRegistrarGoogle: function (event){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;

  var docRef = firebase.firestore().collection("Perfiles")
  docRef.doc(user.uid+"").set({email: user.email, nombre:"Pablo"})
  alert("Tu cuenta fue creada!!"+ user.email);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
    },
    btnRegistrarFacebook: function (event){
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    var docRef = firebase.firestore().collection("Perfiles")
    docRef.doc(user.uid+"").set({email: user.email, nombre:"Pablo"})
    alert("Tu cuenta fue creada!!"+ user.email);

    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
},
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
          docRef.doc(user.uid+"").set({email: user.email, nombre:"Pablo"})
          alert("Tu cuenta fue creada!!"+ user.email);
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
