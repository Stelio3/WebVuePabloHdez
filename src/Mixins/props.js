class Perfil{
  constructor(id, datos){
    this.id = id
    this.name = datos.nombre
    this.email = datos.email
    console.log("NOMBRE Perfil: " + this.name)
  }
}

export default{
  computed:{
    setPerfil: function(datosPerfil){
      props_docPerfil = new Perfil(id, datosPerfil)
    }
  },
  data(){
    return{
      props_blIsLoggedIn: false,
      props_objuser: {},
      props_docPerfil: {}
    }
  },
}
