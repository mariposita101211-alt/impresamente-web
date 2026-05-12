"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#fff8fb] min-h-screen overflow-hidden">

      {/* TOP BAR */}
      <div className="bg-pink-500 text-white text-center py-2 text-sm font-semibold fixed top-0 left-0 w-full z-[60]">
        ✨ Envíos a toda la República Mexicana 🇲🇽 • Diseños personalizados que emocionan
      </div>

      {/* NAVBAR */}
      <header className="fixed top-9 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <img
            src="/hero/logo.png"
            alt="Impresamente"
            className="h-12 object-contain"
          />

          <nav className="hidden md:flex gap-10 font-semibold text-gray-700">
            <a href="#">Inicio</a>
            <a href="#">Catálogo</a>
            <a href="#">Agendas</a>
            <a href="#">Termos</a>
            <a href="#">Contacto</a>
          </nav>

          <a
            href="https://wa.me/527445082879?text=Hola%20Impresamente%2C%20quiero%20cotizar%20un%20regalo%20personalizado"
            target="_blank"
            className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-full font-bold shadow-lg"
          >
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-36 px-6 bg-gradient-to-br from-pink-100 via-[#fff8fb] to-rose-100">

        <div className="absolute top-28 left-20 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-300 rounded-full blur-3xl opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >

            <p className="text-pink-500 font-bold text-xl mb-4">
              Diseños que emocionan ✨ • Envíos a toda la República 🇲🇽
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-[#111827]">
              Convertimos <br />
              <span className="text-pink-500">ideas</span> en regalos <br />
              que emocionan.
            </h1>

            <p className="text-gray-700 text-xl mt-6 max-w-xl leading-relaxed">
              Agendas, termos, tazas y regalos personalizados
              con estilo chibi, diseño premium y detalles
              que se quedan en el corazón.
            </p>

            {/* BOTONES */}
            <div className="flex gap-4 mt-8 flex-wrap">

              <a
                href="https://wa.me/527445082879?text=Hola%20Impresamente%2C%20quiero%20cotizar%20un%20regalo%20personalizado"
                target="_blank"
                className="bg-pink-500 hover:bg-pink-600 transition text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl"
              >
                Pedir por WhatsApp
              </a>

              <button className="bg-white border border-pink-200 hover:bg-pink-50 transition text-pink-500 px-8 py-4 rounded-full font-bold text-lg shadow">
                Ver catálogo
              </button>

            </div>

            {/* STATS */}
            <div className="flex gap-4 mt-10 flex-wrap">

              <div className="bg-white border border-pink-100 px-6 py-4 rounded-3xl shadow-md">
                <h3 className="text-pink-500 text-4xl font-black">
                  +500
                </h3>
                <p className="text-gray-700">
                  clientes felices
                </p>
              </div>

              <div className="bg-white border border-pink-100 px-6 py-4 rounded-3xl shadow-md">
                <h3 className="text-pink-500 text-4xl font-black">
                  100%
                </h3>
                <p className="text-gray-700">
                  personalizado
                </p>
              </div>

              <div className="bg-white border border-pink-100 px-6 py-4 rounded-3xl shadow-md">
                <h3 className="text-pink-500 text-4xl font-black">
                  🇲🇽
                </h3>
                <p className="text-gray-700">
                  envíos nacionales
                </p>
              </div>

            </div>

          </motion.div>

          {/* IMAGENES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[700px] flex items-center justify-center"
          >

            <div className="absolute w-[500px] h-[500px] bg-pink-300 rounded-full blur-3xl opacity-20" />

            {/* TAZA */}
            <motion.img
              src="/hero/tazas.jpg"
              alt="Taza personalizada"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute w-[250px] rounded-[40px] shadow-2xl rotate-[8deg] left-0 bottom-28 z-30"
            />

            {/* TERMO */}
            <motion.img
              src="/hero/termo.png"
              alt="Termo personalizado"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 5.5, repeat: Infinity }}
              className="absolute w-[230px] rounded-[40px] shadow-2xl rotate-[10deg] right-0 bottom-32 z-40"
            />

            {/* TEXTO FLOTANTE */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-6 bg-white px-8 py-4 rounded-full shadow-xl border border-pink-100 z-50"
            >
              <p className="text-pink-500 font-black text-2xl">
                +500 clientes felices 💖
              </p>
            </motion.div>

          </motion.div>

        </div>

      </section>
{/* CATEGORIAS */}
<section className="py-20 px-6 bg-white">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-pink-500 font-bold text-xl">
        Explora 💖
      </p>

      <h2 className="text-5xl font-black text-gray-900 mt-4">
        Nuestras categorías favoritas
      </h2>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

      {[
        {
          name: "Agendas",
          img: "/hero/categoria1.png",
        },
        {
          name: "Termos",
          img: "/hero/categoria2.png",
        },
        {
          name: "Premium",
          img: "/hero/categoria3.png",
        },
        {
          name: "Maestras",
          img: "/hero/categoria4.png",
        },
        {
          name: "Lifestyle",
          img: "/hero/categoria5.png",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center group cursor-pointer"
        >

          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-pink-200 shadow-2xl group-hover:scale-105 transition duration-300">

            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
            />

          </div>

          <p className="mt-5 text-2xl font-black text-gray-800">
            {item.name}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>
      {/* PRODUCTOS */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-pink-500 font-bold text-xl">
              Nuestros favoritos 💖
            </p>

            <h2 className="text-5xl font-black text-gray-900 mt-4">
              Productos que emocionan
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#fff8fb] rounded-[40px] p-6 shadow-xl"
            >

              <img
                src="/hero/tazas.jpg"
                className="w-full h-[320px] object-cover rounded-[30px]"
              />

              <h3 className="text-3xl font-black text-gray-900 mt-6">
                Tazas personalizadas
              </h3>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#fff8fb] rounded-[40px] p-6 shadow-xl"
            >

              <img
                src="/hero/termo.png"
                className="w-full h-[320px] object-contain rounded-[30px] bg-white"
              />

              <h3 className="text-3xl font-black text-gray-900 mt-6">
                Termos premium
              </h3>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#fff8fb] rounded-[40px] p-6 shadow-xl"
            >

              <img
                src="/hero/logo.png"
                className="w-full h-[320px] object-contain rounded-[30px] bg-white"
              />

              <h3 className="text-3xl font-black text-gray-900 mt-6">
                Diseños únicos
              </h3>

            </motion.div>

          </div>

        </div>

      </section>
      <section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <p className="text-pink-500 font-bold text-xl">
        Fácil y rápido 💕
      </p>

      <h2 className="text-5xl font-black text-[#0f172a] mt-3">
        ¿Cómo hacemos tu pedido?
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-[#fff7fb] rounded-[35px] p-10 text-center shadow-lg">
        <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6">
          1
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Mándanos tu idea
        </h3>

        <p className="text-gray-600 text-lg">
          Envíanos foto, nombre, frase o inspiración por WhatsApp.
        </p>
      </div>

      <div className="bg-[#fff7fb] rounded-[35px] p-10 text-center shadow-lg">
        <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6">
          2
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Diseñamos contigo
        </h3>

        <p className="text-gray-600 text-lg">
          Creamos un diseño premium totalmente personalizado.
        </p>
      </div>

      <div className="bg-[#fff7fb] rounded-[35px] p-10 text-center shadow-lg">
        <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6">
          3
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Recíbelo en casa
        </h3>

        <p className="text-gray-600 text-lg">
          Hacemos envíos a toda la República Mexicana 🇲🇽
        </p>
      </div>

    </div>

  </div>
</section>
{/* COMO PEDIR */}
<section className="py-24 px-6 bg-gradient-to-br from-rose-50 via-white to-pink-100">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-pink-500 font-bold text-xl">
      Súper fácil ✨
    </p>

    <h2 className="text-5xl font-black text-gray-900 mt-4">
      ¿Cómo pedir tu regalo?
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-16">
      <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[40px] p-8 shadow-xl">
        <div className="text-5xl mb-6">💬</div>
        <h3 className="text-3xl font-black text-gray-900">1. Mándanos tu idea</h3>
        <p className="text-gray-600 mt-4">
          Escríbenos por WhatsApp y cuéntanos qué producto quieres personalizar.
        </p>
      </motion.div>

      <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[40px] p-8 shadow-xl">
        <div className="text-5xl mb-6">🎨</div>
        <h3 className="text-3xl font-black text-gray-900">2. Creamos tu diseño</h3>
        <p className="text-gray-600 mt-4">
          Diseñamos tu regalo con estilo premium, chibi o personalizado.
        </p>
      </motion.div>

      <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[40px] p-8 shadow-xl">
        <div className="text-5xl mb-6">📦</div>
        <h3 className="text-3xl font-black text-gray-900">3. Lo recibes en casa</h3>
        <p className="text-gray-600 mt-4">
          Enviamos tu pedido a cualquier parte de la República Mexicana.
        </p>
      </motion.div>
    </div>
  </div>
</section>
<section className="py-24 px-6 bg-[#fff7fb]">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <p className="text-pink-500 font-bold text-xl">
        Opiniones reales 💕
      </p>

      <h2 className="text-5xl font-black text-[#0f172a] mt-3">
        Clientes felices
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-[35px] p-8 shadow-lg">
        <div className="flex mb-4 text-yellow-400 text-2xl">
          ★★★★★
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          “La agenda quedó hermosa 😭💕
          muchísimo más bonita de lo que imaginaba.”
        </p>

        <div className="mt-6 font-bold text-xl">
          Mariana G.
        </div>
      </div>

      <div className="bg-white rounded-[35px] p-8 shadow-lg">
        <div className="flex mb-4 text-yellow-400 text-2xl">
          ★★★★★
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          “Excelente calidad y súper atentos.
          El termo llegó precioso.”
        </p>

        <div className="mt-6 font-bold text-xl">
          Daniela R.
        </div>
      </div>

      <div className="bg-white rounded-[35px] p-8 shadow-lg">
        <div className="flex mb-4 text-yellow-400 text-2xl">
          ★★★★★
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          “Todo llegó rápido y bien empaquetado.
          Se nota el amor en cada detalle.”
        </p>

        <div className="mt-6 font-bold text-xl">
          Laura M.
        </div>
      </div>

    </div>

  </div>
</section>
<section className="py-24 px-6 bg-white">

  <div className="max-w-7xl mx-auto">

    <div className="relative overflow-hidden rounded-[50px] bg-gradient-to-r from-pink-500 to-rose-400 p-14 md:p-20">

      <div className="max-w-2xl relative z-10">

        <p className="text-white/80 font-bold text-xl">
          Diseños personalizados 💖
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-white mt-4 leading-tight">
          Regalos que se convierten en recuerdos.
        </h2>

        <p className="text-white/90 text-xl mt-6 leading-relaxed">
          Creamos agendas, termos y regalos personalizados
          con estilo premium y envíos a toda la República 🇲🇽
        </p>

        <a
          href="https://wa.me/527445082879"
          target="_blank"
          className="inline-block mt-10 bg-white text-pink-500 px-8 py-4 rounded-full font-black text-xl shadow-xl"
        >
          Pedir ahora
        </a>

      </div>

      {/* Glow */}
      <div className="absolute right-[-100px] top-[-50px] w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl" />

      <div className="absolute bottom-[-100px] right-[100px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />

    </div>

  </div>

</section>
      {/* FOOTER */}
      <footer className="bg-[#111827] text-white py-20 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          <div>

            <img
              src="/hero/logo.png"
              className="h-16 object-contain mb-6"
            />

            <p className="text-gray-300 leading-relaxed">
              Creamos regalos personalizados que emocionan y se convierten en recuerdos inolvidables.
            </p>

          </div>

          <div>

            <h3 className="font-black text-2xl mb-6">
              Navegación
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

              <a href="#">Inicio</a>
              <a href="#">Catálogo</a>
              <a href="#">Agendas</a>
              <a href="#">Termos</a>

            </div>

          </div>

          <div>

            <h3 className="font-black text-2xl mb-6">
              Contacto
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

              <p>📱 744 508 2879</p>
              <p>📍 Acapulco, Guerrero</p>
              <p>🇲🇽 Envíos a toda la República</p>

            </div>

          </div>

          <div>

            <h3 className="font-black text-2xl mb-6">
              Redes
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

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

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">
          © 2026 Impresamente Acapulco — Todos los derechos reservados.
        </div>

      </footer>

      {/* BOTON FLOTANTE */}
      <a
        href="https://wa.me/527445082879?text=Hola%20Impresamente%2C%20quiero%20cotizar%20un%20regalo%20personalizado"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 transition text-white px-6 py-4 rounded-full font-black shadow-2xl"
      >
        WhatsApp
      </a>

    </main>
  );
}