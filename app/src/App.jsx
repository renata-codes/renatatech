export default function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-8">

        {/* HERO */}
        <section className="grid lg:grid-cols-2 items-center min-h-[85vh]">

          <div>

            <h1 className="text-7xl md:text-8xl font-bold leading-none">
              Renata
            </h1>

            <h2 className="text-6xl md:text-7xl font-light mb-6">
              Carvalho
            </h2>

            <p className="text-xl text-slate-600 mb-6">
              Graduanda em Ciência da Computação
            </p>

            <p className="max-w-xl text-slate-700 leading-8 text-lg">
              Da área comercial para a tecnologia.
              Atualmente desenvolvendo projetos com Java,
              Python, React, APIs REST e Arquitetura de Sistemas.
              Sempre aprendendo, construindo e evoluindo.
            </p>

            <div className="mt-10 space-y-3 text-lg">

              <div>
                🔗 GitHub
              </div>

              <div>
                💼 LinkedIn
              </div>

              <div>
                📧 Contato
              </div>

            </div>

          </div>

          <div className="flex justify-center lg:justify-end">

            <img
              src="/avatar.png"
              alt="Avatar Renata"
              className="w-[650px] max-w-full"
            />

          </div>

        </section>

        {/* SOBRE */}
        <section className="pb-16">

          <h2 className="text-4xl font-bold mb-6">
            Sobre Mim
          </h2>

          <p className="text-slate-700 leading-8 max-w-4xl">
            Minha trajetória profissional começou na área comercial,
            desenvolvendo visão estratégica de negócios, relacionamento
            com clientes e resolução de problemas.

            Atualmente sou graduanda na Universidade Cruzeiro do sul no curso de Ciencia da Computação ,
            Também fiz um curso de Arquitetura de Sistemas na Fundação FAT de Apoio à Tecnologia.

            Tenho interesse em Desenvolvimento Full Stack, APIs REST,
            Microsserviços, Java, Python, React e criação de soluções
            digitais capazes de gerar impacto para pessoas e empresas.
          </p>

        </section>

        {/* PROJETOS */}
        <section className="pb-20">

          <h2 className="text-4xl font-bold mb-8">
            Projetos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-3">
                🚀 Praxis
              </h3>

              <p className="text-slate-600">
                Plataforma de inovação corporativa focada em gestão de ideias,
                colaboração e melhoria contínua.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-3">
                🌎 FundBR
              </h3>

              <p className="text-slate-600">
                Projeto voltado à conexão entre pessoas, iniciativas e
                oportunidades de impacto social.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-3">
                💡 Nota do Bem
              </h3>

              <p className="text-slate-600">
                Solução que conecta tecnologia, dados e ESG para gerar
                impacto social.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-3">
                📈 Central de Oportunidades Vivo
              </h3>

              <p className="text-slate-600">
                Projeto criado para ampliar a divulgação de oportunidades
                profissionais e iniciativas internas.
              </p>
            </div>

          </div>

        </section>

      </div>
    </div>
  );
}