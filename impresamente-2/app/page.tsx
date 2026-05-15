"use client";

import { motion } from "framer-motion";

const wa =
  "https://wa.me/527445082879?text=Hola%20Impresamente%2C%20quiero%20cotizar%20un%20regalo%20personalizado";

export default function Home() {
  const categorias = [
    ["Agendas", "/hero/categoria1.png"],
    ["Termos", "/hero/categoria2.png"],
    ["Regalos", "/hero/categoria3.png"],
    ["Maestras", "/hero/categoria4.png"],
    ["Lifestyle", "/hero/categoria5.png"],
  ];

  const productos = [
    ["Agenda personalizada", "/hero/agendas.png", "Desde $280"],
    ["Termo personalizado", "/hero/termo.png", "Desde $220"],
    ["Taza personalizada", "/hero/tazas.jpg", "Desde $180"],
  ];

  return (
    <main className="bg-[#fff8fb] min-h-screen overflow-hidden text-[#111827]">
      {/* TOP BAR */}
      <div className="bg-pink-300 text-center py-2 text-sm font-bold">
        🎁 Personalizamos tus ideas y las convertimos en recuerdos inolvidables ✨
      </div>

      {/* NAVBAR */}
      <header className="bg-white/90 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/hero/logo.png" className="h-12 object-contain" />

          <nav className="hidden md:flex gap-8 font-semibold text-sm">
            <a href="#">Inicio</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#productos">Productos</a>
            <a href="#opiniones">Opiniones</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            href={wa}
            target="_blank"
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-black shadow-lg"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 py-20 bg-gradient-to-br from-pink-100 via-white to-rose-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-pink-500 font-black text-xl mb-4">
              Diseños que emocionan ✨
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              No es solo un regalo, <br />
              <span className="text-pink-500">
                es un recuerdo que se queda.
              </span>
            </h1>

            <p className="text-gray-700 text-xl mt-6 max-w-xl">
              Agendas, termos, tazas y regalos personalizados con estilo chibi,
              diseño premium y envíos a toda la República Mexicana 🇲🇽
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href={wa}
                target="_blank"
                className="bg-pink-500 text-white px-8 py-4 rounded-full font-black shadow-xl"
              >
                Cotizar por WhatsApp
              </a>

              <a
                href="#catalogo"
                className="bg-white text-pink-500 px-8 py-4 rounded-full font-black shadow border border-pink-200"
              >
                Ver catálogo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[560px] flex items-center justify-center"
          >
            <div className="absolute w-[480px] h-[480px] bg-pink-300 blur-3xl rounded-full opacity-25" />

            <motion.img
              src="/hero/agendas.png"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute w-[300px] rounded-[35px] shadow-2xl rotate-[-6deg] right-24 top-10 z-30"
            />

            <motion.img
              src="/hero/termo.png"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 5.5, repeat: Infinity }}
              className="absolute w-[240px] rounded-[35px] shadow-2xl rotate-[8deg] left-8 bottom-24 z-40"
            />

            <motion.img
              src="/hero/tazas.jpg"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute w-[230px] rounded-[35px] shadow-2xl rotate-[-8deg] right-4 bottom-20 z-20"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-[30px] shadow-xl grid grid-cols-2 md:grid-cols-4 text-center overflow-hidden">
          {[
            ["+500", "Pedidos entregados"],
            ["+120", "Clientes felices"],
            ["+4 años", "De experiencia"],
            ["100%", "Hecho con amor"],
          ].map(([num, text]) => (
            <div className="p-6 border-pink-100 border">
              <h3 className="text-3xl font-black text-pink-500">{num}</h3>
              <p className="text-sm font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="catalogo" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12">
            Explora nuestras categorías 💖
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {categorias.map(([name, img]) => (
              <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-200 shadow-xl">
                  <img src={img} className="w-full h-full object-cover" />
                </div>
                <p className="mt-4 text-xl font-black">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-24 px-6 bg-[#fff8fb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-pink-500 font-bold text-xl">Los más pedidos 💖</p>
            <h2 className="text-5xl font-black mt-3">
              Productos que enamoran
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productos.map(([name, img, price]) => (
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-[35px] overflow-hidden shadow-xl"
              >
                <img src={img} className="w-full h-[340px] object-cover" />
                <div className="p-7">
                  <h3 className="text-3xl font-black">{name}</h3>
                  <p className="text-gray-600 mt-3">
                    Personalizado a tu estilo, con diseño premium.
                  </p>
                  <p className="text-pink-500 text-2xl font-black mt-5">
                    {price}
                  </p>
                  <a
                    href={wa}
                    target="_blank"
                    className="block text-center mt-5 bg-pink-500 text-white rounded-full py-3 font-black"
                  >
                    Cotizar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO PEDIR */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-pink-500 font-bold text-xl">Fácil y rápido 💕</p>
          <h2 className="text-5xl font-black mt-3">Pide en 3 pasos</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              ["1", "Cuéntanos tu idea", "Mándanos foto, nombre o inspiración."],
              ["2", "Diseñamos para ti", "Te mostramos cómo quedará."],
              ["3", "Recibe tu pedido", "Lo enviamos a toda la República 🇲🇽."],
            ].map(([n, title, desc]) => (
              <div className="bg-[#fff7fb] rounded-[35px] p-10 shadow-lg">
                <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6">
                  {n}
                </div>
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="text-gray-600 mt-4">{desc}</p>
              </div>
            ))}
          </div>

          <a
            href={wa}
            target="_blank"
            className="inline-block mt-12 bg-pink-500 text-white px-10 py-4 rounded-full font-black shadow-xl"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="opiniones" className="py-24 px-6 bg-[#fff8fb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-pink-500 font-bold text-xl">Opiniones reales 💕</p>
            <h2 className="text-5xl font-black mt-3">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "La agenda quedó hermosa, más bonita de lo que esperaba.",
              "Excelente atención y el termo quedó precioso.",
              "Todo llegó rápido, bien empacado y con mucho amor.",
            ].map((text) => (
              <div className="bg-white rounded-[35px] p-8 shadow-lg">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 text-lg">“{text}”</p>
                <h3 className="mt-6 font-black text-pink-500">
                  Cliente feliz
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-12">
            Preguntas frecuentes 💖
          </h2>

          {[
            ["¿Hacen envíos a todo México?", "Sí, enviamos a toda la República Mexicana."],
            ["¿Puedo enviar mi propio diseño?", "Sí, puedes enviarnos tu idea o referencia por WhatsApp."],
            ["¿Cuánto tarda mi pedido?", "Depende del producto y cantidad. Te confirmamos por WhatsApp."],
          ].map(([q, a]) => (
            <div className="bg-[#fff8fb] rounded-2xl p-6 mb-4 shadow">
              <h3 className="font-black text-xl">{q}</h3>
              <p className="text-gray-600 mt-2">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111827] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <img src="/hero/logo.png" className="h-16 mb-6 object-contain" />
            <p className="text-gray-300">
              Creamos regalos personalizados hechos con amor.
            </p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4">Enlaces</h3>
            <p>Inicio</p>
            <p>Catálogo</p>
            <p>Opiniones</p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4">Contacto</h3>
            <p>📱 744 508 2879</p>
            <p>📍 Acapulco, Guerrero</p>
            <p>🇲🇽 Envíos nacionales</p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4">Redes</h3>
            <a href="https://www.instagram.com/creativosimpresamente/" target="_blank">
              Instagram
            </a>
            <br />
            <a href="https://www.facebook.com/creativosimpresamente" target="_blank">
              Facebook
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-12 border-t border-white/10 pt-8">
          © 2026 Impresamente Acapulco — Hecho con amor.
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={wa}
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-6 py-4 rounded-full font-black shadow-2xl"
      >
        WhatsApp
      </a>
    </main>
  );
}