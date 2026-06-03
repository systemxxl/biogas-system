import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

const phoneNumber = "+254715613635";
const message = encodeURIComponent(
  "Hello Hot Flame Biogas, I would like to support your work through a donation.",
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

export const Route = createFileRoute("/donations")({
  component: DonationsRedirect,
});

function DonationsRedirect() {
  useEffect(() => {
    window.location.replace(whatsappUrl);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 text-center">
      <div className="max-w-md">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
          Donations
        </p>
        <h1 className="mt-4 text-3xl font-black text-zinc-950">Redirecting to WhatsApp</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          If you are not redirected automatically, use the button below.
        </p>
        <a
          href={whatsappUrl}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
        >
          Open WhatsApp <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
