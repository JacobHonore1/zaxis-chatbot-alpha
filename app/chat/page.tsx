// app/chat/page.tsx
export default function ChatPage() {
  return (
    <main style={{ minHeight: "100vh", margin: 0, padding: 0 }}>
      <iframe
        src="https://zaxis-agentchat.vercel.app"
        style={{ width: "100%", height: "100vh", border: "0" }}
        allow="clipboard-read; clipboard-write; microphone; camera"
        title="Zaxis AI Chat"
      />
    </main>
  );
}
