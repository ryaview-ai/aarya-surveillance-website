import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918074591188"
    target="_blank"
    rel="noopener noreferrer"
    className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 rounded-full bg-charcoal text-secondary ring-1 ring-secondary/40 shadow-xl h-14 pl-[14px] pr-[14px] hover:pr-5 hover:ring-secondary/70 transition-all duration-300"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="shrink-0" />
    <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-charcoal-foreground group-hover:max-w-[8rem] group-hover:ml-2.5 transition-all duration-300">
      WhatsApp us
    </span>
  </a>
);

export default WhatsAppButton;
