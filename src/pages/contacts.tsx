import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

export default function Contacts() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'cawancnd@gmail.com',
      actionText: 'Enviar um email',
      href: 'mailto:cawancnd@gmail.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/cawan-henrique',
      actionText: 'Visitar Perfil',
      href: 'https://www.linkedin.com/in/cawan-henrique/',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/CawanHenrique',
      actionText: 'Ver meus projetos',
      href: 'https://github.com/CawanHenrique',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+55 (13) 99158-5506',
      actionText: 'Iniciar conversa',
      href: 'https://wa.me/5513991585506',
    },
  ];

  return (
    <section id="contacts" className="w-screen h-full  bg-gray-50 py-16  sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Vamos Conectar?</h2>
          <p className="text-gray-600">Estou à disposição para transformar suas ideias em realidade.</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Estou sempre em busca de novos desafios e oportunidades de colaboração. Seja para discutir um projeto, falar sobre tecnologia ou simplesmente trocar uma ideia, minha caixa de entrada está sempre aberta.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-blue-100 p-4 rounded-full">
                <method.icon className="text-blue-600" size={28} />
              </div>
              <div className="mt-4">
                <p className="text-xl font-bold text-gray-800">{method.title}</p>
                <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                  {method.actionText}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}