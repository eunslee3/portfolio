import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
                SL
              </div>
              <span className="font-bold text-lg">Sam Lee</span>
            </div>
          </div>
          <div className="text-white/60 text-center md:text-left mb-4 md:mb-0">
            <p>© {currentYear} Sam Lee. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-1 text-white/60">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Sam Lee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
