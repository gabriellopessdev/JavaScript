//variaveis opcionis "?"

interface IUsuario {
  id: string;
  email: string;
  cargo?: 'funcionario' | 'gerente' | 'cordenador' | 'superior'
}

function redirecina(usuario: IUsuario) {
  if (usuario.cargo) {
    //redireciona() para a area de correta
  }

  //redireciona para a area de usuario
}