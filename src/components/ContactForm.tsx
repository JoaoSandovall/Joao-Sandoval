import { useState } from "react";
import { profile } from "@/content";

const fieldClass =
  "w-full rounded-lg border border-input bg-card p-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Contato de ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`);
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
    setStatus("sent");
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {status === "sent" && (
        <p className="rounded-lg bg-primary/10 p-4 text-sm text-primary">
          Mensagem preparada no seu cliente de e-mail. Respondo em breve!
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={fieldClass}
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={120}
          aria-label="Nome"
        />
        <input
          className={fieldClass}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={200}
          aria-label="E-mail"
        />
      </div>
      <textarea
        className={fieldClass}
        rows={5}
        placeholder="Como posso ajudar?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={4000}
        aria-label="Mensagem"
      />
      <button type="submit" className="btn-primary w-full justify-center">
        Enviar mensagem
      </button>
    </form>
  );
}
