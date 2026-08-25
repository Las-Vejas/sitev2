import { useState, useEffect } from 'react';
import GuestbookCard from '@/components/GuestbookCard.astro';

type Message = {
  id: number;
  name: string;
  message: string;
  email?: string;
  url?: string;
  design: string;
  created_at: string;
};

export default function GuestbookCards() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/messages')
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch messages:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="col-span-full text-center text-gray-500">Loading messages...</div>;
  }

  return (
    <>
      {messages.map((msg) => (
        <div key={msg.id}>
          <GuestbookCard
            name={msg.name}
            message={msg.message}
            email={msg.email}
            url={msg.url}
            design={msg.design}
            created_at={msg.created_at}
          />
        </div>
      ))}
    </>
  );
}
