import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, Calendar, Mail, Phone, Building2, User, StickyNote } from 'lucide-react';

interface BookDemoModalProps {
  open: boolean;
  onClose: () => void;
  formspreeEndpoint?: string;
}

type SubmitStatus =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success' }
  | { state: 'error'; message: string };

const DEFAULT_ENDPOINT = 'https://formspree.io/f/mojleekv';

const BookDemoModal: React.FC<BookDemoModalProps> = ({
  open,
  onClose,
  formspreeEndpoint = DEFAULT_ENDPOINT,
}) => {
  const [status, setStatus] = useState<SubmitStatus>({ state: 'idle' });

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Stable unique ids for accessibility.
  const ids = useMemo(
    () => ({
      title: `book-demo-title-${Math.random().toString(16).slice(2)}`,
      desc: `book-demo-desc-${Math.random().toString(16).slice(2)}`,
    }),
    []
  );

  useEffect(() => {
    if (!open) return;

    // Prevent background scroll while open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus first input.
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (status.state !== 'submitting') onClose();
        return;
      }

      // Minimal focus trap.
      if (e.key === 'Tab') {
        const root = dialogRef.current;
        if (!root) return;

        const focusables = Array.from(
          root.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('aria-hidden'));

        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey) {
          if (!active || active === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose, status.state]);

  if (!open) return null;

  const inputBase =
    'w-full rounded-2xl px-5 py-4 bg-white/70 backdrop-blur border border-wispr-dark/10 text-wispr-dark placeholder:text-slate-400 font-sodo font-bold focus:outline-none focus:ring-4 focus:ring-wispr-purple/20 focus:border-wispr-purple/40 transition-all cursor-text';

  const labelBase = 'font-brand text-[10px] font-black uppercase tracking-[0.35em] text-wispr-dark/50';

  const iconClass = 'text-wispr-purple shrink-0';

  const resetAndClose = () => {
    if (status.state === 'submitting') return;
    setStatus({ state: 'idle' });
    onClose();
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (status.state === 'submitting') return;

    setStatus({ state: 'submitting' });

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Formspree works well with FormData; request JSON response.
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        let message = `Submission failed (${res.status})`;
        try {
          const json = (await res.json()) as { errors?: Array<{ message: string }> };
          if (json?.errors?.[0]?.message) message = json.errors[0].message;
        } catch {
          // ignore
        }
        setStatus({ state: 'error', message });
        return;
      }

      setStatus({ state: 'success' });
      form.reset();
    } catch (err) {
      setStatus({
        state: 'error',
        message: err instanceof Error ? err.message : 'Unknown error',
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 overflow-y-auto"
      role="presentation"
    >
      {/* Backdrop */}
      <button
        aria-label="Close book demo modal"
        className="fixed inset-0 bg-wispr-dark/60 backdrop-blur-sm cursor-pointer"
        onClick={resetAndClose}
        type="button"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ids.title}
        aria-describedby={ids.desc}
        className="relative w-full max-w-3xl my-auto rounded-[3rem] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.35)] border border-white/10 max-h-[95vh] flex flex-col"
      >
        {/* Ambient glow */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-wispr-purple/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-44 -right-44 w-[520px] h-[520px] bg-wispr-purple/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative bg-white/70 backdrop-blur-2xl flex flex-col min-h-0">
          <div className="flex items-start justify-between gap-6 p-8 md:p-10 border-b border-wispr-dark/5 flex-shrink-0">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-wispr-dark text-wispr-cream border border-white/5 shadow-xl">
                <Calendar size={14} className="text-wispr-purple" />
                <span className="font-brand text-[10px] font-black uppercase tracking-[0.4em]">
                  Book a Demo
                </span>
              </div>

              <h2
                id={ids.title}
                className="mt-6 font-lander text-3xl md:text-4xl font-bold tracking-tighter text-wispr-dark leading-tight"
              >
                Let's audit your pipeline.
              </h2>
              <p id={ids.desc} className="mt-3 text-slate-500 font-medium text-base max-w-xl">
                Share a few details and pick a date/time. We'll reply with a calendar invite.
              </p>
            </div>

            <button
              type="button"
              onClick={resetAndClose}
              className="w-12 h-12 rounded-xl bg-wispr-dark text-white flex items-center justify-center shadow-xl border border-white/10 hover:bg-black transition-colors active:scale-95 cursor-pointer flex-shrink-0"
              aria-label="Close"
            >
              <X size={18} strokeWidth={3} />
            </button>
          </div>

          <div className="p-8 md:p-10 overflow-y-auto flex-1 min-h-0 custom-scrollbar">
            {status.state === 'success' ? (
              <div className="bg-white/60 border border-wispr-dark/10 rounded-[2.5rem] p-10 text-center">
                <div className="font-lander text-3xl md:text-4xl font-bold text-wispr-dark tracking-tight">
                  Submitted.
                </div>
                <p className="mt-4 text-slate-500 font-medium text-lg">
                  We’ll get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="mt-8 px-10 py-5 rounded-2xl bg-wispr-dark text-white font-brand text-[11px] font-black uppercase tracking-[0.35em] shadow-xl hover:bg-black active:scale-95 cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Hidden fields to make Formspree emails nicer */}
                <input type="hidden" name="_subject" value="New demo request" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <User size={16} className={iconClass} />
                      <label className={labelBase} htmlFor="demo_name">
                        Name
                      </label>
                    </div>
                    <input
                      ref={firstFieldRef}
                      id="demo_name"
                      name="name"
                      className={inputBase}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={16} className={iconClass} />
                      <label className={labelBase} htmlFor="demo_email">
                        Email
                      </label>
                    </div>
                    <input
                      id="demo_email"
                      name="email"
                      type="email"
                      className={inputBase}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone size={16} className={iconClass} />
                      <label className={labelBase} htmlFor="demo_phone">
                        Phone / WhatsApp
                      </label>
                    </div>
                    <input
                      id="demo_phone"
                      name="phone"
                      className={inputBase}
                      placeholder="+1 555 000 0000"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Building2 size={16} className={iconClass} />
                      <label className={labelBase} htmlFor="demo_company">
                        Company
                      </label>
                    </div>
                    <input
                      id="demo_company"
                      name="company"
                      className={inputBase}
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className={iconClass} />
                      <label className={labelBase} htmlFor="demo_date">
                        Preferred date
                      </label>
                    </div>
                    <input id="demo_date" name="date" type="date" className={inputBase} required />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className={iconClass} />
                      <label className={labelBase} htmlFor="demo_time">
                        Preferred time
                      </label>
                    </div>
                    <input id="demo_time" name="time" type="time" className={inputBase} required />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <StickyNote size={16} className={iconClass} />
                    <label className={labelBase} htmlFor="demo_notes">
                      Notes
                    </label>
                  </div>
                  <textarea
                    id="demo_notes"
                    name="notes"
                    className={
                      inputBase +
                      ' min-h-[100px] resize-none leading-relaxed py-5 cursor-text'
                    }
                    placeholder="What are you trying to automate? CRM, lead sources, ICP, volume…"
                  />
                </div>

                {status.state === 'error' && (
                  <div className="mt-6 rounded-2xl bg-red-500/10 border border-red-500/20 px-6 py-4 text-red-700 font-bold text-sm">
                    {status.message}
                  </div>
                )}

                <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5">
                  <div className="font-brand text-[10px] font-black uppercase tracking-[0.35em] text-slate-400">
                    Powered by Formspree
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="px-8 py-4 rounded-2xl border border-wispr-dark/10 bg-white/40 text-wispr-dark font-brand text-[10px] font-black uppercase tracking-[0.35em] hover:bg-white/70 transition-colors active:scale-95 cursor-pointer"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={status.state === 'submitting'}
                      className="px-10 py-4 rounded-2xl bg-wispr-dark text-white font-brand text-[10px] font-black uppercase tracking-[0.35em] shadow-xl hover:bg-black transition-colors active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status.state === 'submitting' ? 'Sending…' : 'Request Demo'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemoModal;
