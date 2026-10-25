export default function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-8">

        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-16 items-start py-16">

          {/* ESQUERDA */}
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

           <div className="mt-8 space-y-3 text-lg">

  <a
    href="https://github.com/renata-codes"
    target="_blank"
    rel="noopener noreferrer"
    className="block hover:text-blue-600 transition"
  >
    🔗 GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/renata-carvalho-442a25295/"
    target="_blank"
    rel="noopener noreferrer"
    className="block hover:text-blue-600 transition"
  >
    💼 LinkedIn
  </a>

  <a
    href="mailto:rehhcarvalho.santos@gmail.com"
    className="block hover:text-blue-600 transition"
  >
    📧 Contato
  📱 (11) 94570-0908
</a>

</div>

            {/* TECNOLOGIAS */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">
                Tecnologias
              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  "Java",
                  "Spring Boot",
                  "Python",
                  "React",
                  "JavaScript",
                  "APIs REST",
                  "SQL",
                  "PostgreSQL",
                  "Microsserviços",
                  "Arquitetura de Sistemas",
                  "Git",
                  "GitHub",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white border border-slate-200 px-4 py-2 rounded-full font-bold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>
            </div>
          </div>

          {/* DIREITA */}
          <div className="flex flex-col items-center">

            <img
              src="/avatar.png"
              alt="Avatar Renata"
              className="w-[450px] max-w-full"
            />

            <div className="mt-10 bg-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-3xl font-bold mb-4">
                Sobre Mim
              </h2>

              <p className="text-slate-700 leading-8">
                Minha trajetória profissional começou na área comercial,
                trabalhando com seguros e produtos massificados , desenvolvendo visão estratégica de negócios,
                relacionamento com clientes e resolução de problemas.

                <br />
            Atualmente estudo na Universidade Cruzeiro do Sul.

                <br />
                <br />

                Também concluí formação em Arquitetura de Sistemas
                pela FAT - Fundação de Apoio à Tecnologia.

                <br />
                <br />

                Tenho interesse em Desenvolvimento Full Stack,
                APIs REST, Microsserviços, Java, Python e React,
                criando soluções digitais capazes de gerar impacto
                para pessoas e empresas.
              </p>
            </div>

          </div>

        </section>

        {/* PROJETOS */}
        <section className="pb-20">

          <h2 className="text-4xl font-bold text-center mb-8">
            Projetos
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

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
                Projeto voltado à conexão entre pessoas,
                iniciativas e oportunidades de impacto social.
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
