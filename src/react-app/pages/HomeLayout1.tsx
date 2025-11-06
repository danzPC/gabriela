import { MessageCircle, Scale, Heart, Shield, Star, ArrowRight, CheckCircle, TrendingUp, Award, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomeLayout1() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap'
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
    <div className="min-h-screen bg-white">

      {/* Simple Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scale className="w-7 h-7 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Dra. Gabriela Brozio</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Depoimentos
            </button>
            <button
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
            >
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </nav>

      {/* Hero - Layout Centralizado Limpo */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">+12 Anos • +500 Casos • 94% Sucesso</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
              Seus problemas jurídicos acabaram de encontrar <span className="text-blue-600">a solução</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <span className="font-bold text-blue-600">+500 casos resolvidos</span> com sucesso em Direito Trabalhista e de Família. 
              Sua situação pode ser a próxima vitória!
            </p>

            <div className="bg-red-50 border border-red-200 p-4 rounded-lg max-w-2xl mx-auto">
              <p className="text-red-700 font-semibold">
                ⚠️ ATENÇÃO: Cada dia que passa sem ação jurídica pode prejudicar seus direitos!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={handleWhatsAppContact}
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                RESOLVER AGORA NO WHATSAPP
              </button>
              
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Ver Depoimentos
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Image Below Hero */}
          <div className="mt-16">
            <img 
              src="https://mocha-cdn.com/019a5b67-86e5-7343-8b96-26772ec5d7a2/dragabriela2.png"
              alt="Dra. Gabriela Brozio"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "12+", label: "Anos", icon: Award },
              { number: "500+", label: "Casos Resolvidos", icon: CheckCircle },
              { number: "94%", label: "Taxa de Sucesso", icon: TrendingUp },
              { number: "2h", label: "Tempo de Resposta", icon: Clock }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Side by Side */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://mocha-cdn.com/019a5b67-86e5-7343-8b96-26772ec5d7a2/dragabriela.png"
                alt="Dra. Gabriela Brozio"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Por que escolher a Dra. Gabriela?</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
                Uma advogada que <span className="text-blue-600">realmente luta</span> por você
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "12 Anos Transformando Vidas",
                    text: "Mais de uma década defendendo trabalhadores e famílias. Conheço cada detalhe da lei que pode te favorecer."
                  },
                  {
                    title: "Resultados que Falam por Si",
                    text: "94% de sucesso nos casos. Não é sorte, é conhecimento, estratégia e dedicação total ao seu caso."
                  },
                  {
                    title: "Você Nunca Fica no Escuro",
                    text: "Resposta em até 2 horas. Atendimento direto comigo, sem secretárias ou assistentes. Seu caso é prioridade."
                  },
                  {
                    title: "Recuperei Milhões para Clientes",
                    text: "Valores que mudaram vidas: indenizações trabalhistas, pensões, partilhas justas. Sua vez pode ser agora."
                  }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Cards Simple */}
      <section id="depoimentos" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-200 mb-4">
              <Heart className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-700">O que nossos clientes dizem</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Vidas <span className="text-blue-600">transformadas</span> pela justiça
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                case: "Rescisão Trabalhista",
                text: "A Dra. Gabriela conseguiu R$ 45.000 da minha antiga empresa. Eu nem imaginava que tinha direito a tanto! Ela explicou tudo e lutou até o fim. Mudou minha vida!",
                value: "R$ 45.000 recuperados"
              },
              {
                name: "João Santos",
                case: "Pensão Alimentícia",
                text: "Estava há 2 anos tentando resolver a pensão do meu filho. Com a Dra. Gabriela, resolveu em 3 meses. Profissional incrível, humana e muito competente.",
                value: "Resolvido em 3 meses"
              },
              {
                name: "Ana Costa",
                case: "Divórcio Consensual",
                text: "Pensava que divórcio seria um pesadelo. A Dra. Gabriela tornou tudo simples e rápido. Protegeu meus direitos e dos meus filhos. Recomendo de olhos fechados!",
                value: "Processo simplificado"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm">{testimonial.case}</p>
                  <p className="text-green-600 font-semibold text-sm mt-2">{testimonial.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-24 px-6 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full border border-red-300 mb-6">
            <Clock className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-700">TEMPO É DINHEIRO!</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Playfair Display' }}>
            Cada dia que você espera, <span className="text-red-600">perde dinheiro</span>
          </h2>
          
          <div className="bg-white p-8 rounded-2xl border-l-4 border-red-600 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-6">⚠️ CUIDADO COM OS PRAZOS!</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">DIREITOS TRABALHISTAS:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Horas extras prescrevem em 5 anos</li>
                  <li>• FGTS tem prazo de 30 anos</li>
                  <li>• Adicional de insalubridade</li>
                  <li>• Equiparação salarial</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">DIREITO DE FAMÍLIA:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pensão alimentícia retroativa</li>
                  <li>• Partilha de bens em união estável</li>
                  <li>• Guarda dos filhos</li>
                  <li>• Reconhecimento de paternidade</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-2xl text-white">
            <h3 className="text-xl font-bold mb-2">✅ AÇÃO RÁPIDA = MAIS DINHEIRO NO SEU BOLSO</h3>
            <p className="text-lg">
              Quanto mais cedo você agir, maiores são suas chances de recuperar TUDO que tem direito. 
              Não deixe para amanhã o que pode mudar sua vida hoje!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
            <span className="text-yellow-300">AGORA</span> é a hora de recuperar seus direitos!
          </h2>
          
          <p className="text-xl mb-8 leading-relaxed">
            Não deixe que sua situação piore! Fale comigo AGORA e vamos resolver seu problema juntos. 
            <span className="font-bold"> Primeira consulta GRÁTIS via WhatsApp!</span>
          </p>
          
          <div className="bg-green-500/20 border border-green-300 p-4 rounded-xl mb-8">
            <p className="font-bold text-lg">
              🎁 BÔNUS: Quem chamar hoje ganha análise gratuita do caso + cronograma de ações!
            </p>
          </div>
          
          <button
            onClick={handleWhatsAppContact}
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            QUERO RESOLVER MEU CASO AGORA!
          </button>
          
          <div className="flex items-center justify-center gap-6 mt-8 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              Resposta em até 2 horas
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              Atendimento direto
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scale className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold">Dra. Gabriela Brozio</h3>
          </div>
          
          <p className="text-blue-300 font-semibold mb-2">Advogada OAB/SP 123.456</p>
          <p className="text-gray-400 mb-2">Especialista em Direito Trabalhista e de Família</p>
          <p className="text-gray-500">+12 anos • +500 casos • 94% de sucesso</p>
          
          <blockquote className="text-lg italic text-blue-200 mt-8 max-w-2xl mx-auto" style={{ fontFamily: 'Playfair Display' }}>
            "Não é apenas sobre ganhar o processo. É sobre transformar vidas e restaurar a dignidade."
          </blockquote>
        </div>
      </footer>
    </div>
  )
}
