import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import type { Company } from '../types';

interface CompanyModalProps {
  company: Company | null;
  onClose: () => void;
}

export default function CompanyModal({ company, onClose }: CompanyModalProps) {
  if (!company) return null;

  return (
    <Transition appear show={!!company} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="
                w-full max-w-2xl
                transform overflow-hidden
                bg-white/10 backdrop-blur-xl
                rounded-2xl
                border border-white/20
                p-8
                text-left
                shadow-[0_0_50px_rgba(0,0,0,0.3)]
                transition-all
              ">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="
                    absolute top-4 right-4
                    p-2 rounded-full
                    bg-white/10
                    hover:bg-white/20
                    transition-colors
                  "
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Content */}
                <div className="relative">
                  {/* Logo */}
                  <div className="mb-8">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-16 w-auto mx-auto"
                    />
                  </div>

                  {/* Title */}
                  <Dialog.Title
                    as="h3"
                    className="
                      text-2xl font-bold text-white mb-4
                      font-space-grotesk
                    "
                  >
                    {company.name}
                  </Dialog.Title>

                  {/* Description */}
                  <div className="text-gray-300 space-y-4">
                    {company.description}
                  </div>

                  {/* Services */}
                  {company.services && company.services.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Nos services
                      </h4>
                      <ul className="grid grid-cols-2 gap-4">
                        {company.services.map((service, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-300 hover:text-white transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-8 flex justify-end gap-4">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center
                        px-6 py-3
                        bg-white/10
                        hover:bg-white/20
                        rounded-full
                        text-white
                        transition-all duration-300
                      "
                    >
                      Visiter le site
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                    <button
                      onClick={onClose}
                      className="
                        px-6 py-3
                        bg-gradient-to-r from-blue-500 to-purple-500
                        hover:from-blue-600 hover:to-purple-600
                        rounded-full
                        text-white
                        transition-all duration-300
                      "
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 