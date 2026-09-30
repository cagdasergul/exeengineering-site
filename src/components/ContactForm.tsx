import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { sectors } from '@/data/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const initial = { name: '', company: '', email: '', sector: '', message: '', 'bot-field': '' }

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString()
}

export default function ContactForm() {
  const [fields, setFields] = useState(initial)
  const [status, setStatus] = useState<Status>('idle')

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      setFields(initial)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-4 bg-white p-10">
        <CheckCircle2 className="text-amber-dark" size={40} />
        <h3 className="font-display text-2xl font-bold">Thank you — enquiry received.</h3>
        <p className="text-ink/70">
          One of our engineers will review your project details and get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-semibold text-ink underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  const input =
    'w-full border border-ink/15 bg-paper/60 px-4 py-3 text-ink placeholder:text-ink/40 outline-none transition focus:border-amber focus:bg-white'

  return (
    <form name="contact" onSubmit={onSubmit} className="grid gap-5 bg-white p-8 md:p-10">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" value={fields['bot-field']} onChange={onChange} />
        </label>
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Full name
          <input name="name" required value={fields.name} onChange={onChange} className={input} placeholder="Jane Smith" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Company
          <input name="company" value={fields.company} onChange={onChange} className={input} placeholder="Organisation" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Email
          <input type="email" name="email" required value={fields.email} onChange={onChange} className={input} placeholder="you@company.com" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Sector
          <select name="sector" value={fields.sector} onChange={onChange} className={input}>
            <option value="">Select a sector</option>
            {sectors.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium">
        Project details
        <textarea
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={onChange}
          className={input}
          placeholder="Tell us about the project, its stage and the support you need."
        />
      </label>
      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="group inline-flex items-center justify-center gap-2 bg-ink px-6 py-4 font-semibold text-white transition-colors hover:bg-amber hover:text-ink disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  )
}
