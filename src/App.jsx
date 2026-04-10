import { useState } from 'react';
import { Menu, X, MessageCircle, Mail, Heart, Share2, Music } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAdultiDropdown, setActiveAdultiDropdown] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleAdultiDropdown = () => setActiveAdultiDropdown(!activeAdultiDropdown);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-blue-900">
                English With Barry
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-900">Home</a>
              
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-900 flex items-center">
                  Adulti
                  <span className="ml-1">▼</span>
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#adulti-panoramica" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Panoramica</a>
                  <a href="#adulti-individuali" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Percorsi Individuali</a>
                  <a href="#adulti-gruppo" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Percorsi di Gruppo</a>
                  <a href="#adulti-ted" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Metodo T.E.D.</a>
                </div>
              </div>

              <a href="#bambini" className="text-gray-700 hover:text-blue-900">Bambini</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-900">FAQ</a>
              <a href="#contatti" className="text-gray-700 hover:text-blue-900">Contatti</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="/" className="block py-2 text-gray-700">Home</a>
              <button onClick={toggleAdultiDropdown} className="block w-full text-left py-2 text-gray-700">
                Adulti {activeAdultiDropdown ? '▲' : '▼'}
              </button>
              {activeAdultiDropdown && (
                <div className="pl-4">
                  <a href="#adulti-panoramica" className="block py-2 text-gray-600">Panoramica</a>
                  <a href="#adulti-individuali" className="block py-2 text-gray-600">Percorsi Individuali</a>
                  <a href="#adulti-gruppo" className="block py-2 text-gray-600">Percorsi di Gruppo</a>
                  <a href="#adulti-ted" className="block py-2 text-gray-600">Metodo T.E.D.</a>
                </div>
              )}
              <a href="#bambini" className="block py-2 text-gray-700">Bambini</a>
              <a href="#faq" className="block py-2 text-gray-700">FAQ</a>
              <a href="#contatti" className="block py-2 text-gray-700">Contatti</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Corsi di Inglese a Padova
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Impara l'Inglese con Naturalezza
          </p>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Corsi pratici e coinvolgenti per adulti e bambini. Dal livello zero alla fluency, online o in presenza a Padova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#adulti-individuali" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold">
              Scopri i Corsi Adulti
            </a>
            <a href="#bambini" className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold">
              Scopri i Corsi Bambini
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Percorsi di Apprendimento</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Adulti</h3>
              <p className="text-gray-700 mb-4">
                Dal livello zero alla fluency: lezioni pratiche per iniziare, ripartire o migliorare la scioltezza nel parlato.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Online o in presenza</li>
                <li>✓ One-to-one o in gruppo</li>
                <li>✓ Metodo T.E.D.</li>
              </ul>
              <a href="#adulti-individuali" className="text-blue-900 font-semibold hover:underline">
                Scopri di Più →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Bambini & Teens</h3>
              <p className="text-gray-700 mb-4">
                Corsi dal primo approccio alla lingua: apprendimento naturale attraverso gioco, relazione e attività pratiche.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Solo in presenza</li>
                <li>✓ Solo in gruppo, senza schermi</li>
                <li>✓ Metodo Mini T.E.D.</li>
              </ul>
              <a href="#bambini" className="text-blue-900 font-semibold hover:underline">
                Scopri di Più →
              </a>
            </div>
          </div>
        </section>

        {/* Adulti Individuali */}
        <section id="adulti-individuali" className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Percorsi Individuali per Adulti</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "TRAVELLING ENGLISH",
                desc: "Percorso di inglese per viaggiare con sicurezza",
                hours: "10 o 15 ore",
                price: "€250 - €360"
              },
              {
                title: "BUSINESS ENGLISH",
                desc: "Percorso di Business English per il lavoro",
                hours: "15 o 20 ore",
                price: "€370 - €480"
              },
              {
                title: "FLUENT ENGLISH",
                desc: "Percorso di inglese avanzato",
                hours: "30 ore",
                price: "€720"
              }
            ].map((course, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.desc}</p>
                <p className="text-sm text-gray-600 mb-2">{course.hours}</p>
                <p className="text-lg font-semibold text-red-600">{course.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20 bg-gray-50 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-center mb-12">Cosa Dicono di Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Tommy B.",
                text: "Da molti anni ero alla ricerca di una persona che potesse aiutarmi a migliorare il mio inglese attraverso un approccio diverso da quello tradizionale. Incontrare Barry è stata una piacevolissima sorpresa."
              },
              {
                name: "Anna B.",
                text: "Ottima esperienza. Cercavo un insegnante per migliorare la fluidità nel parlato e sono rimasta molto soddisfatta. I progressi si notano rapidamente."
              },
              {
                name: "Valeria F.",
                text: "Ho seguito 20 lezioni online di conversazione con Barry e il mio inglese è migliorato in modo significativo. Lo consiglio vivamente!"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-8">Chi Sono</h2>
          <div className="bg-blue-50 rounded-lg p-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Sono Barry, australiano, <strong>madrelingua</strong> e insegnante di inglese da quasi <strong>20 anni</strong>, sportivo per natura.
            </p>
            <p className="text-lg text-gray-700">
              Credo in un inglese vivo, pratico e concreto. Accompagno adulti e bambini a migliorare il loro inglese con corsi online e in presenza, in un clima sereno, dinamico e coinvolgente.
            </p>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section id="contatti" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Contatti</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Parliamone Insieme</h3>
              <p className="text-gray-300 mb-8">
                Scrivimi senza impegno, ti rispondo personalmente. Rispondo sempre entro 24 ore.
              </p>
              <div className="space-y-4">
                <a href="https://wa.me/393937620160?text=Ciao%2C+vorrei+informazioni+sui+corsi+di+inglese" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-400 hover:text-green-300">
                  <MessageCircle size={24} />
                  <span>Scrivimi su WhatsApp</span>
                </a>
                <a href="mailto:corsiinglesepadova@gmail.com" className="flex items-center gap-3 text-blue-400 hover:text-blue-300">
                  <Mail size={24} />
                  <span>corsiinglesepadova@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Seguimi sui Social</h3>
              <div className="flex gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                  <Heart size={32} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Share2 size={32} />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Music size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 English With Barry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
