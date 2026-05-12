export default function Home() {
  return (
    <main>

      <section className="hero">

        <div className="heroText">
          <h1>Diseños que enamoran.</h1>

          <p>
            Agendas y termos personalizados creados para emocionar.
          </p>

          <div className="buttons">
            <a href="https://wa.me/527445082879">
              💬 Cotizar
            </a>

            <a href="#catalogo">
              📖 Catálogo
            </a>
          </div>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="heroVideo"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

      </section>

      <section id="catalogo" className="catalogo">

        <h2>Productos estrella</h2>

        <div className="cards">

          <div className="card">
            <img src="/images/termo1.png" />

            <h3>Termos personalizados</h3>

            <a href="https://wa.me/527445082879">
              Cotizar ✨
            </a>
          </div>

          <div className="card">
            <img src="/images/agenda1.png" />

            <h3>Agendas premium</h3>

            <a href="https://wa.me/527445082879">
              Cotizar ✨
            </a>
          </div>

          <div className="card">
            <img src="/images/combo1.png" />

            <h3>Combos regalo</h3>

            <a href="https://wa.me/527445082879">
              Cotizar ✨
            </a>
          </div>

        </div>

      </section>

      <footer className="footer">

        <h3>Impresamente</h3>

        <p>Diseños que enamoran ✨</p>

        <div className="socials">

          <a
            href="https://www.instagram.com/creativosimpresamente/"
            target="_blank"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/creativosimpresamente"
            target="_blank"
          >
            Facebook
          </a>

          <a
            href="https://wa.me/527445082879"
            target="_blank"
          >
            WhatsApp
          </a>

        </div>

      </footer>

    </main>
  );
}