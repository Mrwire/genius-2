import { Mail, MapPin, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-[#191C1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Parlons de vos projets et donnons vie à vos idées.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Adresse</h3>
                  <p className="text-gray-400 mt-1">
                    123 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-500 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Téléphone</h3>
                  <a 
                    href="tel:+33123456789" 
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-500 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a 
                    href="mailto:contact@genius.com"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    contact@genius.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Nom
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md bg-white/5 border border-gray-600 text-white px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md bg-white/5 border border-gray-600 text-white px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                required
                className="mt-1 block w-full rounded-md bg-white/5 border border-gray-600 text-white px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                required
                className="mt-1 block w-full rounded-md bg-white/5 border border-gray-600 text-white px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}