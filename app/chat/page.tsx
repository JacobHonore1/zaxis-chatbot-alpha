"use client";

import { useEffect } from "react";

export default function ChatPage() {
  useEffect(() => {
    // brug replace så /chat ikke bliver i historikken
    window.location.replace("https://zaxis-agentchat.vercel.app");
  }, []);

  return (
    <p style={{ padding: 16 }}>
      Sender dig videre til Zaxis AI Chat… Hvis intet sker,
      <a
        href="https://zaxis-agentchat.vercel.app"
        style={{ marginLeft: 8, textDecoration: "underline" }}
      >
        klik her
      </a>
      .
    </p>
  );
}
