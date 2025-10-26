import React from 'react';
import { KeyRound, Heart, Video, Cpu, Database, Link as LinkIcon, Cloud } from 'lucide-react';

const modules = [
  {
    icon: KeyRound,
    title: 'Onboarding & Auth',
    items: [
      'Personalization: age, goals, chronic conditions',
      'Family setup: add spouse, kids, elders',
      'Auth: JWT, Google/Apple sign-in',
      'Routes: POST /auth/register, POST /auth/login, POST /auth/family/add, GET /auth/profile'
    ]
  },
  {
    icon: Heart,
    title: 'Health & Devices',
    items: [
      'Integrations: Apple Health, Google Fit, Fitbit',
      'Logs: vitals, sleep, mood, meds, nutrition',
      'Gamification: streaks, challenges, rewards'
    ]
  },
  {
    icon: Cpu,
    title: 'AI Layer',
    items: [
      'Chat and insights via OpenAI or local models',
      'Risk flags, summaries, and care plans',
      'Edge privacy with configurable data scopes'
    ]
  },
  {
    icon: Video,
    title: 'Doctor Connectivity',
    items: [
      'WebRTC video sessions and triage rooms',
      'Prescriptions, follow-ups, secure chat',
      'Scheduling and reminders'
    ]
  },
  {
    icon: Database,
    title: 'Data & Storage',
    items: [
      'MongoDB for users, logs, family data',
      'IPFS or S3 for media and reports',
      'FCM notifications for meds & alerts'
    ]
  },
  {
    icon: LinkIcon,
    title: 'Blockchain Verification',
    items: [
      'Hash records on Polygon/Ethereum testnets',
      'Integrity checks and tamper evidence',
      'Verifiable sharing links'
    ]
  }
];

export default function ModulesOverview() {
  return (
    <section id="explore" className="relative w-full bg-neutral-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Architecture & Core Modules</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              AIROHI spans mobile (React Native) and web (React). Backend powered by Node.js/Express with MongoDB, AI insights, and secure storage.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white hover:bg-white/10"
            aria-label="View developer docs"
          >
            <Cloud className="h-4 w-4" /> View Developer Docs
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-medium">{title}</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {items.map((i) => (
                  <li key={i} className="leading-relaxed">
                    • {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-emerald-500/10 p-5">
          <h4 className="text-sm font-semibold text-white/90">Developer Notes</h4>
          <p className="mt-2 text-sm text-white/70">
            Frontend deploys on Vercel; backend on Render/AWS. Notifications via FCM, storage via IPFS/S3, and record hashing on Polygon/Ethereum testnets. Video calls use a WebRTC signaling service. Authentication via JWT with optional Google/Apple OAuth.
          </p>
        </div>
      </div>
    </section>
  );
}
