import { MessageCircle, Scale, Star, CheckCircle, TrendingUp, Award, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomeLayout2() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Lora:wght@400;500;600;700&display=swap'
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

  

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Montserrat' }}>

      {/* Minimal Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900">Dra. Gabriela Brozio</div>
              <div className="text-xs text-gray-500">OAB/SP 123.456</div>
            </div>
          </div>
          
          <button
            onClick={handleWhatsAppContact}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-md hover:shadow-lg"
          >
            Falar Agora
          </button>
        </div>
      </nav>

      {/* Hero Split Screen */}
      <section className="pt-24 grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <div className="flex items-center px-8 lg:px-16 py-16 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className={`text-white space-y-6 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              12 anos • 500+ casos • 94% sucesso
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ fontFamily: 'Lora' }}>
              Seus problemas jurídicos acabaram de encontrar a solução
            </h1>
            
            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
              Mais de <span className="font-bold text-yellow-300">500 casos resolvidos</span> com sucesso em Direito Trabalhista e de Família. Sua situação pode ser a próxima vitória!
            </p>

            <div className="bg-red-500/30 backdrop-blur-sm border border-red-300 p-4 rounded-lg">
              <p className="font-semibold">
                ⚠️ Cada dia sem ação pode prejudicar seus direitos!
              </p>
            </div>
            
            <button
              onClick={handleWhatsAppContact}
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              RESOLVER NO WHATSAPP AGORA
            </button>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
              {[
                { value: "12+", label: "Anos" },
                { value: "500+", label: "Casos" },
                { value: "94%", label: "Sucesso" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className={`relative bg-gray-100 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
          <img 
            src="https://mocha-cdn.com/019a5b67-86e5-7343-8b96-26772ec5d7a2/dragabriela2.png"
            alt="Dra. Gabriela Brozio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Why Choose - Compact Cards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Por que escolher a Dra. Gabriela?
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Lora' }}>
              Uma advogada que <span className="text-blue-600">realmente luta</span> por você
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Award,
                title: "12 Anos Transformando Vidas",
                text: "Mais de uma década defendendo trabalhadores e famílias. Conheço cada detalhe da lei que pode te favorecer.",
                color: "blue"
              },
              {
                icon: TrendingUp,
                title: "Resultados que Falam por Si",
                text: "94% de sucesso nos casos. Não é sorte, é conhecimento, estratégia e dedicação total ao seu caso.",
                color: "green"
              },
              {
                icon: Clock,
                title: "Você Nunca Fica no Escuro",
                text: "Resposta em até 2 horas. Atendimento direto comigo, sem secretárias ou assistentes. Seu caso é prioridade.",
                color: "purple"
              },
              {
                icon: CheckCircle,
                title: "Recuperei Milhões para Clientes",
                text: "Valores que mudaram vidas: indenizações trabalhistas, pensões, partilhas justas. Sua vez pode ser agora.",
                color: "yellow"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Magazine Style */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              O que nossos clientes dizem
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Lora' }}>
              Vidas <span className="text-blue-600">transformadas</span> pela justiça
            </h2>
          </div>
          
          <div className="space-y-6">
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
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-200 flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-blue-600 text-sm">{testimonial.case}</p>
                    </div>
                    <div className="text-green-600 font-bold">{testimonial.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-16 px-6 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Cada dia que você espera, perde dinheiro</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="font-bold mb-3 text-xl">DIREITOS TRABALHISTAS:</h3>
              <ul className="space-y-2">
                <li>• Horas extras prescrevem em 5 anos</li>
                <li>• FGTS tem prazo de 30 anos</li>
                <li>• Adicional de insalubridade</li>
                <li>• Equiparação salarial</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="font-bold mb-3 text-xl">DIREITO DE FAMÍLIA:</h3>
              <ul className="space-y-2">
                <li>• Pensão alimentícia retroativa</li>
                <li>• Partilha de bens em união estável</li>
                <li>• Guarda dos filhos</li>
                <li>• Reconhecimento de paternidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-12 rounded-2xl text-center shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Lora' }}>
              <span className="text-yellow-300">AGORA</span> é a hora de recuperar seus direitos!
            </h2>
            
            <p className="text-xl mb-8">
              Primeira consulta <span className="font-bold text-yellow-300">GRÁTIS</span> via WhatsApp!
            </p>
            
            <div className="bg-green-500/30 border border-green-300 p-4 rounded-lg mb-8">
              <p className="font-bold">
                🎁 Quem chamar hoje ganha análise gratuita + cronograma de ações!
              </p>
            </div>
            
            <button
              onClick={handleWhatsAppContact}
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              QUERO RESOLVER MEU CASO AGORA!
            </button>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Resposta em 2h
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Atendimento direto
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Scale className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Dra. Gabriela Brozio</h3>
          <p className="text-blue-300 text-sm">Advogada OAB/SP 123.456</p>
          <p className="text-gray-400 text-sm">Direito Trabalhista e de Família</p>
          <p className="text-gray-500 text-xs mt-4">+12 anos • +500 casos • 94% de sucesso</p>
        </div>
      </footer>
    </div>
  )
}
