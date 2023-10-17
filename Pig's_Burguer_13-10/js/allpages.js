//Login-Registrar
class Log extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="login-box">
          <div id="login"><a href="login.html">Login</a></div>
          <div id="registrar"><a href="#">Registrar</a></div>
    </div>
    `;
  }
}

customElements.define('log-component', Log);
//Fim Login-Registrar
//Cabeçalho
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <link rel="stylesheet" href="css/estilogeral.css">
    <header class="cabecalho">
          <a class="texto" href="cardapio.html">CARDÁPIO</a>
          <a class="image" href="home.html"><img src="imagens/logotexto.png" alt="Logo" class="logo"></a>
          <a class="texto" href="contato.html">CONTATO</a>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
//Fim Cabeçalho
//Footer
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <h1>Footer Teste</h1>
    </footer>
    `;
  }
}
customElements.define('footer-component', Footer);
//Fim Footer