import { MessageCircle, Scale, Star, CheckCircle, TrendingUp, Award, Clock, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomeLayout3() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })
    
    setTimeout(() => setIsVisible(true), 100)

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppContact = () => {
    const whatsappNumber = '5511999999999'
    const message = 'Olá, Dra. Gabriela! Vi seu site e preciso de ajuda jurídica. Pode me atender?'
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: 'Poppins' }}>

      {/* Floating Nav */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-full shadow-xl px-8 py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900">Dra. Gabriela</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollToSection('sobre')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Casos
            </button>
          </div>
          
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all"
          >
            WhatsApp
          </button>
        </div>
      </nav>

      {/* Hero - Full Width with Overlay */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://mocha-cdn.com/019a5b67-86e5-7343-8b96-26772ec5d7a2/dragabriela2.png"
            alt="Dra. Gabriela Brozio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-32">
          <div className={`max-w-2xl text-white space-y-8 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
              <Zap className="w-4 h-4" />
              12 ANOS • 500+ CASOS • 94% SUCESSO
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Seus problemas jurídicos <span className="text-yellow-400">acabaram</span>
            </h1>
            
            <p className="text-2xl font-medium text-blue-100">
              Mais de <span className="text-yellow-300 font-bold">500 casos resolvidos</span> com sucesso. 
              Sua situação pode ser a próxima vitória!
            </p>

            <div className="bg-red-600 p-4 rounded-xl font-bold">
              ⚠️ Cada dia sem ação pode prejudicar seus direitos!
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppContact}
                className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-5 rounded-xl font-black text-xl transition-all shadow-2xl"
              >
                <MessageCircle className="w-6 h-6" />
                RESOLVER AGORA
              </button>
              
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="inline-flex items-center justify-center gap-3 border-2 border-white hover:bg-white/10 text-white px-8 py-5 rounded-xl font-bold text-xl transition-all"
              >
                Ver Casos de Sucesso
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap justify-around gap-8">
            {[
              { icon: Award, value: "12+", label: "Anos de Experiência", color: "text-blue-600" },
              { icon: CheckCircle, value: "500+", label: "Casos Resolvidos", color: "text-green-600" },
              { icon: TrendingUp, value: "94%", label: "Taxa de Sucesso", color: "text-yellow-600" },
              { icon: Clock, value: "2h", label: "Tempo de Resposta", color: "text-purple-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-2`} />
                <div className="text-4xl font-black text-gray-900">{stat.value}</div>
                <p className="text-gray-600 font-semibold text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - Icon Grid */}
      <section id="sobre" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
              POR QUE ESCOLHER A DRA. GABRIELA?
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Uma advogada que <span className="text-blue-600">LUTA</span> por você
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "12 Anos Transformando Vidas",
                text: "Conheço cada detalhe da lei que pode te favorecer.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: TrendingUp,
                title: "94% de Sucesso",
                text: "Conhecimento, estratégia e dedicação total ao seu caso.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: Clock,
                title: "Resposta em 2 Horas",
                text: "Atendimento direto comigo. Seu caso é prioridade.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: CheckCircle,
                title: "Milhões Recuperados",
                text: "Valores que mudaram vidas. Sua vez pode ser agora.",
                gradient: "from-yellow-500 to-yellow-600"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Big Cards */}
      <section id="depoimentos" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
              DEPOIMENTOS REAIS
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Vidas <span className="text-blue-600">transformadas</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                case: "Rescisão Trabalhista",
                text: "A Dra. Gabriela conseguiu R$ 45.000 da minha antiga empresa. Mudou minha vida!",
                value: "R$ 45.000",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                name: "João Santos",
                case: "Pensão Alimentícia",
                text: "2 anos tentando resolver. Com a Dra. Gabriela, resolveu em 3 meses!",
                value: "3 meses",
                gradient: "from-green-500 to-green-600"
              },
              {
                name: "Ana Costa",
                case: "Divórcio Consensual",
                text: "Tornou tudo simples e rápido. Protegeu meus direitos e dos meus filhos!",
                value: "Resolvido",
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg font-medium mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-blue-600 text-sm font-medium">{testimonial.case}</p>
                  </div>
                  <div className={`bg-gradient-to-br ${testimonial.gradient} text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg`}>
                    {testimonial.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Box */}
      <section className="py-24 px-8 bg-gradient-to-br from-red-600 via-red-700 to-orange-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-bold mb-6">
            <Clock className="w-5 h-5" />
            TEMPO É DINHEIRO!
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-8">
            Cada dia que você espera, <span className="text-yellow-300">PERDE DINHEIRO</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-left">
              <h3 className="font-black mb-3 text-xl">DIREITOS TRABALHISTAS:</h3>
              <ul className="space-y-2 font-medium">
                <li>✓ Horas extras prescrevem em 5 anos</li>
                <li>✓ FGTS tem prazo de 30 anos</li>
                <li>✓ Adicional de insalubridade</li>
                <li>✓ Equiparação salarial</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-left">
              <h3 className="font-black mb-3 text-xl">DIREITO DE FAMÍLIA:</h3>
              <ul className="space-y-2 font-medium">
                <li>✓ Pensão alimentícia retroativa</li>
                <li>✓ Partilha de bens em união estável</li>
                <li>✓ Guarda dos filhos</li>
                <li>✓ Reconhecimento de paternidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-yellow-300">AGORA</span> é a hora!
          </h2>
          
          <p className="text-2xl font-bold mb-8">
            Primeira consulta <span className="text-yellow-300">GRÁTIS</span> via WhatsApp
          </p>
          
          <div className="bg-green-500/30 border-2 border-green-300 p-6 rounded-xl mb-8">
            <p className="font-black text-xl">
              🎁 BÔNUS: Análise gratuita + cronograma de ações!
            </p>
          </div>
          
          <button
            onClick={handleWhatsAppContact}
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:scale-105"
          >
            <MessageCircle className="w-8 h-8" />
            RESOLVER AGORA!
          </button>
          
          <div className="flex items-center justify-center gap-8 mt-8">
            <span className="flex items-center gap-2 font-bold">
              <CheckCircle className="w-6 h-6" />
              Resposta em 2h
            </span>
            <span className="flex items-center gap-2 font-bold">
              <CheckCircle className="w-6 h-6" />
              Atendimento direto
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-black mb-2">Dra. Gabriela Brozio</h3>
          <p className="text-blue-300 font-bold">OAB/SP 123.456</p>
          <p className="text-gray-400 mt-4">+12 anos • +500 casos • 94% de sucesso</p>
        </div>
      </footer>
    </div>
  )
}
