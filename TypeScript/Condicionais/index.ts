// condicionais a partir de paramentros

interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  cargo: 'gerente' | 'cordenador' | 'superior'
}

function redirecina(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario) {
    //redireciona para a area de administração
  }

    //redireciona para a area de usuario
}