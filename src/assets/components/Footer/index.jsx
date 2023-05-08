import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="container">
        <nav>
          <h4>Vinted</h4>
          <a href="https://www.vinted.fr/about"> A propos de Vinted</a>
          <a href="https://www.vinted.fr/jobs">Carrière</a>
          <a href="https://company.vinted.com/fr/sustainability">
            Le developpement durable
          </a>
          <a href="https://www.vinted.fr/presse">Presse</a>
          <a href="https://www.vinted.fr/advertising">Publicités</a>
        </nav>
        <nav>
          <h4>Découvrir</h4>
          <a href="https://www.vinted.fr/how_it_works">Comment ça marche</a>
          <a href="https://www.vinted.fr/app">Applications mobiles</a>
          <a href="https://www.vinted.fr/help">Centre d'aide</a>
          <a href="https://www.vinted.fr/infoboard">Tableau de bord</a>
          <a href="https://www.vinted.fr/pro">Vinted Pro</a>
          <a href="https://www.vinted.fr/pro-guide">Guide Vinted Pro</a>
        </nav>
        <nav>
          <h4>Aide</h4>
          <a href="https://www.vinted.fr/help">Centre d'aide</a>
          <a href="https://www.vinted.fr/help/4-selling?access_channel=hc_topics">
            Vendre
          </a>
          <a href="https://www.vinted.fr/help/5-buying?access_channel=hc_topics">
            Acheter
          </a>
          <a href="https://www.vinted.fr/safety">Confiance et sécurité</a>
        </nav>

        <nav>
          <h4>Communauté</h4>
          <a href="https://www.vinted.fr/forum">Forum</a>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
