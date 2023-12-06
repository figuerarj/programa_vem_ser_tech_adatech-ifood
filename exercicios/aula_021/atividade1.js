class LoginSystem {
  users = [];

  cadastrarUsuario(username, password) {
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
    this.users.push({ username: username, password: password });
    console.log(`User:${username} registered.`);
  }

  realizarLogin(username, password) {
    for (let i = 0; i < this.users.length; i++) {
      if (
        username === this.users[i].username &&
        password === this.users[i].password
      ) {
        return username;
      }
    }
    console.log("Incorrect username or password!");
    return null;
  }

  exibirMensagemPersonalizada(username) {
    console.log(`Bem-vindo, ${username}`);
  }
}


  const loginSytem = new LoginSystem(); //cria a instancia de LoginSystem

  // Cadastrando 2 usuários

  loginSytem.cadastrarUsuario("Rodrigo", "abc123");
  loginSytem.cadastrarUsuario("Eduardo", "def456");

  // Percorre o array e da um console log em cada objeto, pegando o nome e o password.
  console.log("All users registered:");
  loginSytem.users.forEach((user) => {
    console.log(`Username: ${user.username}, Password: ${user.password}`);
  });

  // Realiza o login
  const usuarioLogado = loginSytem.realizarLogin("Rodrigo", "abc123");
  if(usuarioLogado){
    loginSytem.exibirMensagemPersonalizada(usuarioLogado)
};


