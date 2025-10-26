import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Users } from 'lucide-react';

export default function HeroSplineCover() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          style={{ width: '100%', height: '100%' }}
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/60 to-neutral-950" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-24 md:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Shield className="h-3.5 w-3.5" /> Secure • Family-first • AI-guided
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          AIROHI — Your Family's
          <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent"> Health OS</span>
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          A cross-platform digital companion that unifies physical, mental, financial, and environmental wellness. AI-driven guidance, gamified tracking, doctor connectivity, and secure data sharing all in one.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#explore"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            <Rocket className="h-4 w-4" /> Explore Modules
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Users className="h-4 w-4" /> How AIROHI helps families
          </a>
        </div>
      </div>
    </section>
  );
}
