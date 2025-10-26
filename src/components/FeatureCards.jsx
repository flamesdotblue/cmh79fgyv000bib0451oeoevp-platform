import React from 'react';
import { Brain, Activity, Stethoscope, Wallet, Leaf, Bell, Share2, Lock } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Wellness Guidance',
    desc: 'Personalized insights, habit nudges, and chat-based support powered by OpenAI or local models.'
  },
  {
    icon: Activity,
    title: 'Gamified Health Tracking',
    desc: 'Daily streaks, points, and family challenges across steps, sleep, mindfulness, and nutrition.'
  },
  {
    icon: Stethoscope,
    title: 'Doctor Connectivity',
    desc: 'WebRTC video calls, secure messaging, prescriptions storage, and follow-up reminders.'
  },
  {
    icon: Wallet,
    title: 'Financial Wellness',
    desc: 'Track medical expenses, insurance documents, and plan preventive care to reduce costs.'
  },
  {
    icon: Leaf,
    title: 'Environmental Health',
    desc: 'Air quality, UV index, hydration reminders, and eco-health guidance for the whole family.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    desc: 'FCM reminders for meds, appointments, and family check-ins, tailored to routines.'
  },
  {
    icon: Share2,
    title: 'Secure Data Sharing',
    desc: 'Share records with doctors via verifiable links. Control scope, duration, and recipients.'
  },
  {
    icon: Lock,
    title: 'Trust & Verification',
    desc: 'Hash medical records on Polygon/Ethereum for integrity and auditability.'
  }
];

export default function FeatureCards() {
  return (
    <section id="features" className="relative w-full bg-neutral-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Why families choose AIROHI</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Made for multi-generational households. Privacy-first, clinically responsible, and delightful to use.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition-colors hover:border-sky-400/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/15 text-sky-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
