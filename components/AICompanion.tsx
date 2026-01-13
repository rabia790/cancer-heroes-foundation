
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

interface AICompanionProps {
  onClose: () => void;
}

const AICompanion: React.FC<AICompanionProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello, Hero. I am your Resilience Companion. If you're feeling overwhelmed, or just need a compassionate space to share your thoughts about your cancer journey, I am here to listen. How are you feeling in this moment?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const response = await getGeminiResponse(userMessage, messages);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm here, but I'm having a quiet moment. Remember, you are never alone." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-8 sm:right-8 sm:w-96 sm:h-[600px] bg-white shadow-2xl z-50 flex flex-col sm:rounded-3xl overflow-hidden animate-in slide-in-from-bottom-8 duration-300 border border-slate-200">
      {/* Header */}
      <div className="bg-primary p-4 text-white flex justify-between items-center shrink-0 border-b-4 border-hope">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            🤍
          </div>
          <div>
            <h3 className="font-bold text-sm">Resilience Companion</h3>
            <p className="text-[10px] text-cream opacity-80 uppercase tracking-widest font-bold">Cancer Heroes Foundation</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-cream/10" ref={scrollRef}>
        <div className="bg-primary/5 border border-primary/10 p-3 rounded-xl text-[11px] text-primary leading-relaxed italic">
          Disclaimer: This AI is for emotional support and resilience practice only. It does not provide medical advice.
        </div>
        
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
              m.role === 'user' 
                ? 'bg-charcoal text-white rounded-tr-none' 
                : 'bg-white text-charcoal border border-cream rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-cream p-3 rounded-2xl rounded-tl-none shadow-sm flex space-x-1">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-75"></div>
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-cream/50 shrink-0">
        <div className="relative flex items-center">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Share what's on your heart..."
            className="w-full bg-cream/30 border-none rounded-full py-3 pl-5 pr-12 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`absolute right-1.5 p-2 rounded-full transition-all ${
              input.trim() && !isTyping ? 'bg-primary text-white shadow-md' : 'bg-slate-200 text-slate-400'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-text mt-2 opacity-70">
          Your conversation is private. Stay hopeful.
        </p>
      </div>
    </div>
  );
};

export default AICompanion;
