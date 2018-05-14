export class Perfil{
  constructor(id, datos){
    this.id = id
    this.name = datos.nombre
    this.email = datos.email
    this.ciudad = datos.ciudad
    console.log("NOMBRE Perfil: " + this.name)
    console.log("Email Perfil: " + this.email)
  }
}

export default{
  computed:{

  },
  data(){
    return{
      props_blIsLoggedIn: false,
      props_objuser: {},
      props_docPerfil: {},
      props_firuser:{}
    }
  },
}
