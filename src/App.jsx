import { useState } from 'react';
import { Menu, X, MessageCircle, Mail, Heart, Share2, Music, ChevronDown, Star, Users, BookOpen } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAdultiDropdown, setActiveAdultiDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                English With Barry
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="px-4 py-2 text-gray-700 hover:text-blue-900 transition-colors rounded-lg hover:bg-blue-50">Home</a>
              
              <div className="relative group">
                <button className="px-4 py-2 text-gray-700 hover:text-blue-900 transition-colors rounded-lg hover:bg-blue-50 flex items-center gap-1">
                  Adulti
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <a href="#adulti-panoramica" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">Panoramica Corsi</a>
                  <a href="#adulti-individuali" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">Percorsi Individuali</a>
                  <a href="#adulti-gruppo" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">Percorsi di Gruppo</a>
                  <a href="#adulti-ted" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">Metodo T.E.D.</a>
                </div>
              </div>

              <a href="#bambini" className="px-4 py-2 text-gray-700 hover:text-blue-900 transition-colors rounded-lg hover:bg-blue-50">Bambini</a>
              <a href="#faq" className="px-4 py-2 text-gray-700 hover:text-blue-900 transition-colors rounded-lg hover:bg-blue-50">FAQ</a>
              <a href="#contatti" className="px-4 py-2 text-gray-700 hover:text-blue-900 transition-colors rounded-lg hover:bg-blue-50">Contatti</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="/" className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50">Home</a>
              <button onClick={() => setActiveAdultiDropdown(!activeAdultiDropdown)} className="block w-full text-left px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50">
                Adulti {activeAdultiDropdown ? '▲' : '▼'}
              </button>
              {activeAdultiDropdown && (
                <div className="pl-4 space-y-1">
                  <a href="#adulti-panoramica" className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-blue-50">Panoramica</a>
                  <a href="#adulti-individuali" className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-blue-50">Percorsi Individuali</a>
                  <a href="#adulti-gruppo" className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-blue-50">Percorsi di Gruppo</a>
                  <a href="#adulti-ted" className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-blue-50">Metodo T.E.D.</a>
                </div>
              )}
              <a href="#bambini" className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50">Bambini</a>
              <a href="#faq" className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50">FAQ</a>
              <a href="#contatti" className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50">Contatti</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-400/20 rounded-full border border-blue-300/50 backdrop-blur-sm">
              <span className="text-blue-100 text-sm font-semibold">🎓 Impara l'Inglese con Naturalezza</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Corsi di Inglese<br />a Padova
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Lezioni pratiche e coinvolgenti per adulti e bambini. Dal livello zero alla fluency, online o in presenza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#adulti-individuali" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Scopri i Corsi Adulti
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#bambini" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-blue-900 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Scopri i Corsi Bambini
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Percorsi Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Percorsi di Apprendimento</h2>
              <p className="text-xl text-gray-600">Scegli il percorso più adatto a te o a tuo figlio</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Users size={32} />,
                  title: "Adulti",
                  desc: "Dal livello zero alla fluency: lezioni pratiche per iniziare, ripartire o migliorare la scioltezza nel parlato.",
                  features: ["Online o in presenza", "One-to-one o in gruppo", "Metodo T.E.D."],
                  link: "#adulti-individuali"
                },
                {
                  icon: <BookOpen size={32} />,
                  title: "Bambini & Teens",
                  desc: "Corsi dal primo approccio alla lingua: apprendimento naturale attraverso gioco, relazione e attività pratiche.",
                  features: ["Solo in presenza", "Solo in gruppo, senza schermi", "Metodo Mini T.E.D."],
                  link: "#bambini"
                }
              ].map((item, idx) => (
                <a key={idx} href={item.link} className="group">
                  <div className="h-full p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="text-blue-900 mb-4 p-3 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
                    <ul className="space-y-3 mb-6">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="text-blue-900 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
                      Scopri di Più →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Adulti Individuali */}
        <section id="adulti-individuali" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Percorsi Individuali per Adulti</h2>
              <p className="text-xl text-gray-600">Tre percorsi specializzati per diverse esigenze</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "TRAVELLING ENGLISH",
                  desc: "Percorso di inglese per viaggiare con sicurezza e conversare naturalmente",
                  hours: "10 o 15 ore",
                  price: "€250 - €360",
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "BUSINESS ENGLISH",
                  desc: "Percorso di Business English per il lavoro e la comunicazione professionale",
                  hours: "15 o 20 ore",
                  price: "€370 - €480",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "FLUENT ENGLISH",
                  desc: "Percorso di inglese avanzato per raggiungere la massima scioltezza",
                  hours: "30 ore",
                  price: "€720",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((course, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${course.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="relative p-8 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-xl transition-all duration-300 h-full">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${course.color} text-white text-xs font-bold rounded-full mb-4`}>
                      POPULAR
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{course.desc}</p>
                    <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Durata:</span>
                        <span className="font-semibold text-gray-900">{course.hours}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Prezzo:</span>
                        <span className={`text-2xl font-bold bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>{course.price}</span>
                      </div>
                    </div>
                    <button className={`w-full py-3 px-4 bg-gradient-to-r ${course.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                      Scopri Dettagli
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Cosa Dicono di Me</h2>
              <p className="text-xl text-gray-600">Testimonianze di studenti soddisfatti</p>
            </div>

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
                <div key={idx} className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.text}</p>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Chi Sono</h2>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Sono Barry, australiano, <span className="font-bold text-white">madrelingua</span> e insegnante di inglese da quasi <span className="font-bold text-white">20 anni</span>, sportivo per natura.
            </p>
            <p className="text-xl text-blue-100 leading-relaxed">
              Credo in un inglese vivo, pratico e concreto, proprio come lo sport: si impara facendo, muovendosi e usando la lingua in modo reale. Accompagno adulti e bambini a migliorare il loro inglese con corsi online e in presenza, in un clima sereno, dinamico e coinvolgente.
            </p>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section id="contatti" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16">Contatti</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Parliamone Insieme</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Scrivimi senza impegno, ti rispondo personalmente. Rispondo sempre entro 24 ore.
              </p>
              
              <div className="space-y-4">
                <a href="https://wa.me/393937620160?text=Ciao%2C+vorrei+informazioni+sui+corsi+di+inglese" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group">
                  <div className="p-3 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-sm text-gray-600">+39 393 762 0160</p>
                  </div>
                </a>

                <a href="mailto:corsiinglesepadova@gmail.com" className="flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group">
                  <div className="p-3 bg-blue-500 text-white rounded-lg group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">corsiinglesepadova@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Seguimi sui Social</h3>
              <p className="text-gray-600 mb-8">Rimani aggiornato con i nostri ultimi contenuti e notizie</p>
              
              <div className="flex gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <Heart size={28} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600 text-white rounded-xl hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <Share2 size={28} />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-black text-white rounded-xl hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <Music size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">&copy; 2026 English With Barry. All rights reserved.</p>
          <p className="text-sm">Corsi di Inglese a Padova • Online e in Presenza</p>
        </div>
      </footer>
    </div>
  );
}
