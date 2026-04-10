import { useState } from 'react';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-gray-900">
                English With Barry
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a>
              <a href="#adulti" className="text-gray-700 hover:text-green-600 font-medium transition-colors">INGLESE PER ADULTI</a>
              <a href="#bambini" className="text-gray-700 hover:text-green-600 font-medium transition-colors">INGLESE PER BAMBINI</a>
              <a href="#servizi" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Servizi</a>
              <a href="#contatti" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contatti</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
              <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Home</a>
              <a href="#adulti" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">INGLESE PER ADULTI</a>
              <a href="#bambini" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">INGLESE PER BAMBINI</a>
              <a href="#servizi" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Servizi</a>
              <a href="#contatti" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Contatti</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-0 relative h-96 md:h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/NxZcV74vQbFRtq23u4YVbu/hero-london-WAGBKrHkCvUEhgppHsESN6.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">English With Barry</h1>
          <p className="text-2xl md:text-3xl mb-2">Corsi di inglese a Padova</p>
          <p className="text-lg md:text-xl mb-8">per adulti e bambini</p>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8">con percorsi specifici in base all'età e agli obiettivi</p>
          
          <a href="#test" className="inline-block px-8 py-3 bg-white text-gray-900 font-bold rounded hover:bg-gray-100 transition-colors">
            Fai il test gratuito per scoprire il tuo livello di inglese
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Percorsi Section */}
        <section id="adulti" className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Adults */}
              <div className="order-2 md:order-1">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/NxZcV74vQbFRtq23u4YVbu/adults-lesson-EyJ7QAwvu8m5mAnWo3RmRG.webp"
                  alt="Adults English lesson"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold text-green-600 mb-6">adults</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Corsi dal livello zero alla fluency: lezioni pratiche per iniziare, ripartire o migliorare la scioltezza nel parlato.
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    Online o in presenza
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    one-to-one o in gruppo
                  </li>
                </ul>
                <a href="#adulti" className="inline-block px-6 py-3 border-2 border-green-600 text-green-600 font-bold rounded hover:bg-green-50 transition-colors">
                  Scopri il percorso adulti
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Kids Section */}
        <section id="bambini" className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Kids */}
              <div>
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/NxZcV74vQbFRtq23u4YVbu/kids-lesson-Y3mwJDLL479W5FYXTUHQGy.webp"
                  alt="Kids English lesson"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-green-600 mb-6">kids & teens</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Corsi dal primo approccio alla lingua: apprendimento naturale attraverso gioco, relazione e attività pratiche.
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    Solo in presenza
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    Solo in gruppo, senza schermi
                  </li>
                </ul>
                <a href="#bambini" className="inline-block px-6 py-3 border-2 border-green-600 text-green-600 font-bold rounded hover:bg-green-50 transition-colors">
                  👉 Scopri il percorso Bambini
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servizi" className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-green-600 mb-12 text-center">Servizi</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Corsi Disponibili</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Corsi di inglese per adulti e bambini</li>
                  <li>✓ Lezioni one-to-one e in piccoli gruppi</li>
                  <li>✓ Corsi online e in presenza</li>
                  <li>✓ Corsi di conversazione e fluency</li>
                  <li>✓ Preparazione esami: IELTS · TOEFL · Cambridge</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Metodi Innovativi</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ <strong>Metodo T.E.D.</strong> per adulti, ispirato ai TED Talks, per sviluppare ascolto, vocabolario e sicurezza nel parlare.</li>
                  <li>✓ <strong>Metodo Mini T.E.D.</strong> per bambini, un approccio basato su gioco, interazione e ascolto, senza l'uso di schermi.</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a href="#servizi" className="inline-block px-8 py-3 border-2 border-green-600 text-green-600 font-bold rounded hover:bg-green-50 transition-colors">
                👉 Scopri tutti i servizi
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-green-600 mb-12 text-center">Cosa dicono di me:</h2>

            <div className="space-y-8">
              {[
                {
                  name: "Tommy.B",
                  text: "Da molti anni ero alla ricerca di una persona che potesse aiutarmi a migliorare il mio inglese attraverso un approccio diverso da quello tradizionale, qualcosa di realmente efficace e stimolante. Incontrare Barry è stata una piacevolissima sorpresa: fin dal primo momento è stato estremamente semplice entrare in sintonia con lui, grazie alla sua grande capacità di mettere a proprio agio e creare un clima sereno e naturale."
                },
                {
                  name: "Anna.B",
                  text: "Ottima esperienza. Cercavo un insegnante per migliorare la fluidità nel parlato e sono rimasta molto soddisfatta. Le lezioni sono dinamiche e stimolanti e i progressi si notano rapidamente. Dopo un solo mese mi sento molto più sicura nel parlare. Consigliatissimo."
                },
                {
                  name: "Valeria F.",
                  text: "Ho seguito 20 lezioni online di conversazione con Barry e il mio inglese è migliorato in modo significativo. Finalmente mi sento più sicura nel parlare inglese con altri. Barry è un insegnante molto disponibile e preparato: organizza ogni lezione con attività e temi diversi, rendendole sempre interessanti e mai ripetitive. Lo consiglio vivamente!"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-lg border-l-4 border-green-600">
                  <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-green-600 mb-8 text-center">Chi Sono</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-6 text-gray-700 leading-relaxed">
              <p>
                Sono Barry, australiano, <strong>madrelingua</strong> e insegnante di inglese da quasi <strong>20 anni</strong>, sportivo per natura.
              </p>
              
              <p>
                Credo in un inglese vivo, pratico e concreto, proprio come lo sport: si impara facendo, muovendosi e usando la lingua in modo reale.
              </p>
              
              <p>
                Accompagno adulti e bambini a migliorare il loro inglese con corsi online e in presenza, in un clima sereno, dinamico e coinvolgente.
              </p>

              <p>
                Sono padre di un bambino cresciuto bilingue: l'esperienza diretta mi permette di supportare i genitori nel trasmettere la lingua ai figli in modo naturale ed efficace.
              </p>

              <p className="text-lg font-semibold text-green-600">
                Se cerchi un modo moderno, motivante e concreto per imparare l'inglese, sei nel posto giusto!
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section id="contatti" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-green-600 mb-12 text-center">Contatti</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hai domande sui corsi di inglese?</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Vuoi capire qual è il percorso più adatto a te o a tuo figlio? Scrivimi senza impegno, ti rispondo personalmente. Rispondo sempre entro 24 ore.
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/393937620160?text=Ciao%2C+vorrei+informazioni+sui+corsi+di+inglese" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200"
              >
                <MessageCircle size={32} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">👉 WhatsApp</p>
                  <p className="text-gray-600">+39 393 762 0160</p>
                </div>
              </a>

              <a 
                href="mailto:corsiinglesepadova@gmail.com"
                className="flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
              >
                <Mail size={32} className="text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-gray-600">corsiinglesepadova@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 English With Barry. All rights reserved.</p>
          <p className="text-sm">Corsi di Inglese a Padova • Online e in Presenza</p>
        </div>
      </footer>
    </div>
  );
}
