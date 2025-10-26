import React from 'react';
import { Shield, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-sky-500/20 text-sky-300">
            <Shield className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold">AIROHI</p>
            <p className="text-xs text-white/60">A family-centered health OS</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#explore" className="hover:text-white">Architecture</a>
          <a href="mailto:hello@airohi.app" className="inline-flex items-center gap-1 hover:text-white">
            <Mail className="h-4 w-4" /> Contact
          </a>
          <a href="#" className="inline-flex items-center gap-1 hover:text-white">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} AIROHI. All rights reserved.
      </div>
    </footer>
  );
}
