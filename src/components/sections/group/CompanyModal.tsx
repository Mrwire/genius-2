import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import type { Company } from './types';

interface CompanyModalProps {
  company: Company | null;
  onClose: () => void;
}

export default function CompanyModal({ company, onClose }: CompanyModalProps) {
  if (!company) return null;

  return (
    <Dialog open={!!company} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-2xl rounded-2xl bg-[#1A1A1A] p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="flex items-center gap-6 mb-8">
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 w-auto filter brightness-0 invert"
            />
            <div>
              <Dialog.Title className="text-2xl font-bold text-white">
                {company.name}
              </Dialog.Title>
              <Dialog.Description className="text-gray-400">
                {company.description}
              </Dialog.Description>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">À propos</h3>
              <p className="text-gray-400">
                {company.longDescription}
              </p>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={onClose}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Fermer
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 