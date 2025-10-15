// app/chat/page.tsx
export default function ChatPage() {
  if (typeof window !== "undefined") {
    window.location.href = "https://zaxis-agentchat.vercel.app"; // <- din præcise chat-URL
  }
  return <p style={{ padding: 16 }}>Sender dig videre til Zaxis AI Chat…</p>;
}
