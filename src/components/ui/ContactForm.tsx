import { useState } from "react";
import { profile } from "@/content";

const fieldClass =
  "w-full rounded-lg border border-input bg-card p-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

const FORM_ENDPOINT = "https://formspree.io/f/formid arrumr";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) throw new Error("Falha no envio");

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {status === "sent" && (
        <p className="rounded-lg bg-primary/10 p-4 text-sm text-primary">
          Mensagem enviada com sucesso. Respondo em breve!
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
          Não foi possível enviar agora. Tente novamente ou escreva para{" "}
          <a href={`mailto:${profile.email}`} className="underline">
            {profile.email}
          </a>
          .
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
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensagem"}
      </button>
    </form>
  );
}
