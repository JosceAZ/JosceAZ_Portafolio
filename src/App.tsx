import React from 'react';
import { Github, Linkedin, Mail,PhoneCall, Option, LightbulbIcon, LightbulbOff, GraduationCap, Building2, Trophy, Wrench, BookOpen, Globe } from 'lucide-react';

function App() {
  return (
    <div className="creative-bg text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col items-center text-center section-fade">
        <img 
          src="/src/public/ose.jpeg"
          alt="Professional headshot placeholder"
          className="w-48 h-48 rounded-full object-cover mb-8 border-4 border-blue-500 hover-card"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Josceline Amador Zamarripa </h1>
        <h2 className="text-xl md:text-2xl text-blue-400 mb-4">Estudiante Ing. Mecatrónica</h2>
        <p className="max-w-2xl text-gray-300 mb-6">
          Estudiante de Ing. Mecatrónica enfocado en la automatización, convinando conocimientos tegnologicos  
          y con experiencia en prototipos y  resolución creativa de problemas.
        </p>
        <div className="flex gap-4">
          <a href="https://wa.me/8341505681" className="hover-icon" target="_blank">
            <PhoneCall className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/Josceline-Amador
" target="_blank"  className="hover-icon">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:josceaz@gmail.com"   className="hover-icon">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Education Section */}
      <section className="py-16 section-fade">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="w-8 h-8 text-blue-400 mr-3 hover-icon" />
            <h2 className="text-3xl font-bold">Educación</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 hover-card">
            <div className="mb-6 last:mb-0">
              <h3 className="text-xl font-bold text-blue-400">Ingeniería Mecatrónica</h3>
              <p className="text-lg mb-2">Universidad Tecnológica Santa Catarina Campus Montemorelos </p>
              <p className="text-gray-300">2023 - Present</p>
              <ul className="mt-3 text-gray-300 list-disc list-inside">
                <li className="skill-item p-2 rounded">Implementación de un sistema de iluminación automático controlado con sensores de movimiento</li>
                <li className="skill-item p-2 rounded">Participación en ferias educativas</li>
                <li className="skill-item p-2 rounded">Creación de prototipos automatizados para áreas industriales  </li>
                <li className="skill-item p-2 rounded">Participe en conferencias de tecnologías renovables e implementación de sistemas de seguridad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 section-fade">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Building2 className="w-8 h-8 text-blue-400 mr-3 hover-icon" />
            <h2 className="text-3xl font-bold">Experiencia Profesional</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 hover-card">
              <h3 className="text-xl font-bold text-blue-400">Trabajos</h3>
              <p className="text-lg mb-2">Freelance </p>
              <p className="text-gray-300 mb-4"></p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li className="skill-item p-2 rounded">Asistente en instalaciones eléctricas</li>
                <li className="skill-item p-2 rounded">Mantenimiento y reparaciones de electrodomésticos</li>
                <li className="skill-item p-2 rounded">Asistente en instalaciones y reparaciones en plomerías </li>
                <li className="skill-item p-2 rounded">Experiencia en almacenamiento y recepción de mercancía </li>
              </ul>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 hover-card">
              <h3 className="text-xl font-bold text-blue-400">Prototipos  </h3>
              <p className="text-lg mb-2">Practicas y circuitos realizados </p>
              <p className="text-gray-300 mb-4"></p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li className="skill-item p-2 rounded">Prototipo de una banda clasificadora de color y altura </li>
                <li className="skill-item p-2 rounded">Prototipo de un brazo robótico</li>
                <li className="skill-item p-2 rounded">Implementación de un sistema automatico controlado con sensores de movimiento</li>
                <li className="skill-item p-2 rounded">Lectura de diagramas y circuitos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    
      {/* Skills Section */}
      <section className="py-16 section-fade">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <BookOpen className="w-8 h-8 text-blue-400 mr-3 hover-icon" />
            <h2 className="text-3xl font-bold">Conocimientos Técnicos </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg hover-card">
              <h3 className="text-xl font-bold mb-4">Programación </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="skill-item p-2 rounded">C/C++</li>
                <li className="skill-item p-2 rounded">PLC</li>
                <li className="skill-item p-2 rounded">Arduino</li>
                <li className="skill-item p-2 rounded"></li>
              </ul>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg hover-card">
              <h3 className="text-xl font-bold mb-4">Hardware</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="skill-item p-2 rounded">Microcontroladores</li>
                <li className="skill-item p-2 rounded">Sensores y actuadores</li>
                <li className="skill-item p-2 rounded">Circuitos integrados</li>
     
              </ul>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg hover-card">
              <h3 className="text-xl font-bold mb-4">Herramientas </h3>
              <ul className="space-y-2 text-gray-300">

          
                <li className="skill-item p-2 rounded">Proteus</li>
                <li className="skill-item p-2 rounded">Pic compiler</li>
                <li className="skill-item p-2 rounded">LabVIEW</li>
                <li className="skill-item p-2 rounded">LogixPro</li>
                <li className="skill-item p-2 rounded">Multisim</li>
                                <li className="skill-item p-2 rounded">Visual studio </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

    

      {/* Languages */}
      <section className="py-16 section-fade">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Globe className="w-8 h-8 text-blue-400 mr-3 hover-icon" />
            <h2 className="text-3xl font-bold">Lenguajes </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 hover-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="skill-item p-4 rounded">
                <h3 className="font-bold text-xl mb-2">Español</h3>
                <p className="text-gray-300">Nativo</p>
              </div>
              <div className="skill-item p-4 rounded">
                <h3 className="font-bold text-xl mb-2">Ingles </h3>
                <p className="text-gray-300">Basico  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 section-fade">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Josceline Amador Zamarripa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;