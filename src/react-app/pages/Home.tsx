import { MessageCircle, Scale, Star, CheckCircle, Users, Award, Clock, Phone, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Load clean, professional fonts
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Crimson+Text:wght@400;600&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Mouse movement effect for hero background
    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.querySelector('.hero-parallax')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        
        ;(hero as HTMLElement).style.background = `
          radial-gradient(circle at ${x * 100}% ${y * 100}%, 
            rgba(59, 130, 246, 0.02) 0%, 
            rgba(255, 255, 255, 0.98) 40%, 
            rgba(248, 250, 252, 1) 100%
          )
        `
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    setTimeout(() => setIsVisible(true), 300)

    // Observe sections for reveal animation
    document.querySelectorAll('.section-reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  const handleWhatsAppContact = () => {
    const whatsappNumber = '5511957777176'
    const message = 'Olá, Dra. Gabriela! Gostaria de uma consulta jurídica.'
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
    <div className="min-h-screen interactive-gradient" style={{ fontFamily: 'Inter' }}>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Dra. Gabriela Brozio</h1>
                <p className="text-sm text-gray-500">Advocacia</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#sobre" onClick={() => scrollToSection('sobre')} className="text-gray-600 hover:text-blue-900 transition-colors">
                Sobre
              </a>
              <a href="#servicos" onClick={() => scrollToSection('servicos')} className="text-gray-600 hover:text-blue-900 transition-colors">
                Serviços
              </a>
              <a href="#depoimentos" onClick={() => scrollToSection('depoimentos')} className="text-gray-600 hover:text-blue-900 transition-colors">
                Depoimentos
              </a>
              <button
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 button-pulse hover:scale-105 hover:shadow-lg"
              >
                Fale Conosco
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 hero-parallax relative floating-shapes">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className={`space-y-6 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
              <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Crimson Text' }}>
                Advocacia especializada em 
                <span className="font-semibold text-gradient-flow"> Direito Trabalhista</span> e 
                <span className="font-semibold text-gradient-flow"> de Família</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Mais de 12 anos de experiência defendendo seus direitos com técnica, estratégia e sensibilidade humana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleWhatsAppContact}
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 button-pulse hover:scale-105 hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consulta Gratuita
                </button>
                
                <a
                  href="tel:5511957777176"
                  className="flex items-center justify-center gap-3 border border-gray-300 hover:border-blue-900 text-gray-700 hover:text-blue-900 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  (11) 95777-7176
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-2xl font-semibold text-blue-900">12+</div>
                  <div className="text-sm text-gray-600">Anos de experiência</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-blue-900">500+</div>
                  <div className="text-sm text-gray-600">Casos resolvidos</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-blue-900">94%</div>
                  <div className="text-sm text-gray-600">Taxa de sucesso</div>
                </div>
              </div>
            </div>

            <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-300`}>
              <img 
                src="https://mocha-cdn.com/019a5b67-86e5-7343-8b96-26772ec5d7a2/dragabriela2.png"
                alt="Dra. Gabriela Brozio"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 px-6 bg-gray-50 section-reveal relative floating-shapes">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Crimson Text' }}>
                Sobre a <span className="font-semibold">Dra. Gabriela Brozio</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Advogada formada pela Universidade de São Paulo, com mais de 12 anos de experiência 
                  exclusiva em Direito Trabalhista e de Família.
                </p>
                <p>
                  Especialista em casos complexos, já recuperou milhões de reais em direitos trabalhistas 
                  e resolveu centenas de questões familiares com sensibilidade e eficiência.
                </p>
                <p>
                  Atendimento personalizado e humanizado, sempre focado no melhor resultado para cada cliente.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">OAB/SP 123.456</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Mais de 500 casos resolvidos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Resposta em até 24 horas</span>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://mocha-cdn.com/019a5b67-86e5-7343-8b96-26772ec5d7a2/dragabriela.png"
                alt="Dra. Gabriela Brozio"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 px-6 section-reveal">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Crimson Text' }}>
              Áreas de <span className="font-semibold">Atuação</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Atuação especializada com foco em resultados concretos e atendimento humanizado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Trabalhista */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm card-hover-effect">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Direito Trabalhista</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  Rescisão indevida e verbas trabalhistas
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  Horas extras e adicional noturno
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  FGTS e seguro-desemprego
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  Equiparação salarial
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  Assédio moral e danos morais
                </li>
              </ul>
            </div>
            
            {/* Família */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm card-hover-effect">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Direito de Família</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  Divórcio e separação
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  Pensão alimentícia
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  Guarda dos filhos
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  Partilha de bens
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  União estável
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-16 px-6 bg-gray-50 section-reveal relative floating-shapes">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Crimson Text' }}>
              O que nossos <span className="font-semibold">clientes dizem</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                case: "Rescisão Trabalhista",
                text: "Profissional excepcional. Conseguiu recuperar todas as verbas trabalhistas que eu tinha direito. Atendimento sempre atencioso e resultado acima das expectativas.",
                result: "R$ 45.000 recuperados"
              },
              {
                name: "João Santos",
                case: "Pensão Alimentícia",
                text: "Estava há anos tentando resolver a questão da pensão. Com a Dra. Gabriela, conseguimos uma solução justa e rápida. Muito profissional e competente.",
                result: "Resolvido em 3 meses"
              },
              {
                name: "Ana Costa",
                case: "Divórcio",
                text: "Conduziu meu processo de divórcio com muita sensibilidade e eficiência. Protegeu meus interesses e dos meus filhos. Recomendo sem hesitação.",
                result: "Processo consensual"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm card-hover-effect">
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-900 text-sm">{testimonial.case}</p>
                  <p className="text-green-600 text-sm font-medium mt-1">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-900 to-blue-800 section-reveal">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Crimson Text' }}>
            Precisa de <span className="font-semibold">orientação jurídica?</span>
          </h2>
          
          <p className="text-lg mb-8 text-blue-100">
            Entre em contato para uma consulta gratuita e saiba como podemos ajudar você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppContact}
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 button-pulse hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
            
            <a
              href="tel:5511957777176"
              className="flex items-center justify-center gap-3 border border-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <Phone className="w-5 h-5" />
              (11) 95777-7176
            </a>
          </div>
          
          <div className="mt-8 text-sm text-blue-200">
            <p>Consulta gratuita • Atendimento personalizado • Resposta em 24 horas</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-4 gap-8">
            
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Dra. Gabriela Brozio</h3>
                  <p className="text-sm text-gray-400">Advocacia</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Advocacia especializada em Direito Trabalhista e de Família com mais de 12 anos de experiência. 
                Atendimento humanizado e resultados efetivos.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Áreas de Atuação</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Direito Trabalhista</li>
                <li>Direito de Família</li>
                <li>Rescisões e Verbas</li>
                <li>Divórcio e Pensão</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 95777-7176</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@gabrielabrozio.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  <span>OAB/SP 123.456</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Dra. Gabriela Brozio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
