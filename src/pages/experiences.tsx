export default function Experiences() {
  // Array de tecnologias para facilitar a renderização
  const skills = {
    frontend: ["ReactJS", "VueJS", "TypeScript", "LiveWire"],
    backend: ["Laravel", "PHP", "NodeJS"],
    database: ["MySQL", "PostgreSQL"],
    tools: ["Trello", "Git", "Docker"],
  };

  return (
    <section
      id="experiences"
      className="w-full h-full bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Experiência & Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="relative isolate">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-100"></div>
              <div className="relative mb-12">
                <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="ml-12">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">
                      Desenvolvedor Full Stack
                    </h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-md">
                      2025
                    </span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-3">
                    Alberon Tecnologia
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Desenvolvimento de páginas e CRUD's com codebase em
                      Inglês.
                    </li>
                    <li>
                      Experiência com VueJS, Laravel, PHP, LiveWire, MySQL e
                      PostgreSQL.
                    </li>
                    <li>
                      Integração de APIs REST para comunicação entre diferentes
                      serviços.
                    </li>
                    <li>
                      Desenvolvimento integrado a ferramentas de Inteligência
                      Artificial.
                    </li>
                    <li>
                      Resolução de problemas complexos utilizando lógica de
                      programação avançada.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative mb-0">
                <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="ml-12">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">
                      Desenvolvedor Full Stack
                    </h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-md">
                      2025
                    </span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-3">Aldeia Zen</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Desenvolvimento de sistemas completos, CRUDs e automação
                      de processos.
                    </li>
                    <li>
                      Atuação com ReactJS, Laravel, PHP, TypeScript e NodeJS.
                    </li>
                    <li>
                      Criação de soluções lógicas para atender às necessidades
                      dos clientes.
                    </li>
                    <li>
                      Colaboração em UI e UX Design para melhorar a usabilidade
                      dos sistemas.
                    </li>
                    <li>
                      Uso de Trello para gestão de projetos e comunicação
                      empresarial.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg shadow-md mb-8">
              <h4 className="text-xl font-semibold mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200  p-6 rounded-lg shadow-md mb-8">
              <h4 className="text-xl font-semibold mb-4">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">
                Database & Ferramentas
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.database.concat(skills.tools).map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
