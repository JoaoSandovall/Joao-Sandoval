import { useState } from "react";

const fieldClass =
  "w-full rounded-lg border border-input bg-card p-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary disabled:opacity-50";

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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c4795e86-0e0a-4ef2-97b6-37cb11ec763b",
          name: name,
          email: email,
          message: message,
          subject: `Novo contato pelo portfólio: ${name}`,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        // Retorna o botão ao estado normal após 5 segundos
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      
      {/* MENSAGEM DE SUCESSO */}
      {status === "sent" && (
        <p className="rounded-lg bg-primary/10 p-4 text-sm font-medium text-primary">
          Mensagem enviada com sucesso! Retorno o mais breve possível.
        </p>
      )}

      {/* MENSAGEM DE ERRO (Caso a internet caia, etc) */}
      {status === "error" && (
        <p className="rounded-lg bg-destructive/10 p-4 text-sm font-medium text-destructive">
          Ocorreu um erro ao enviar. Por favor, tente pelo LinkedIn ou e-mail direto.
        </p>
      )}
      
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={fieldClass}
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "sending"}
          required
        />
        <input
          className={fieldClass}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "sending"}
          required
        />
      </div>
      
      <textarea
        className={fieldClass}
        rows={5}
        placeholder="Como posso ajudar?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={status === "sending"}
        required
      />
      
      <button 
        type="submit" 
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>
      
    </form>
  );
}