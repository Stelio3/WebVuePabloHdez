import LoginRegistro from '@/components/LoginRegistro'
import Perfiles from '@/components/Perfiles'
import Inicio from '@/components/Inicio'
import MenuPrincipal  from '@/components/MenuPrincipal'
import { EventBus } from '../../Events/events_bus'

export default {
  name: 'principal',
  components: {'loginregistro':LoginRegistro,
  'perfiles':Perfiles,
  'menuP':MenuPrincipal,
  'inicio':Inicio},
  props: [],
  data () {
    return {
      blloggedUser:this.props_blLoggedIn
    }
  },
  computed: {

  },
  mounted () {
    EventBus.$on('loginregistro_userstatechanged', blestado => {
      this.blloggedUser=blestado
    })
  },
  methods: {

  }
}
