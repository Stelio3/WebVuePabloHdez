import firebase from 'firebase'
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
    }
  }
}
