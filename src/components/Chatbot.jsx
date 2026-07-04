import React, { useState, useEffect, useRef } from 'react';

const CHATBOT_CONFIG = {
  name: 'Kharshari Assistant',
  ownerWhatsApp: '919639890966',
  shopName: 'Kharshari Footwear',
  address: 'Dingerpur, Pakwara Road, Moradabad, UP',
  hours: '10:00 AM – 9:30 PM (Daily)',
  phone: '+91-9639890966',
};

const KB = [
  {
    triggers: ['hello', 'hi', 'helo', 'asalamualikum', 'aslamualikum', 'hey', 'start', 'help', 'Aslamualikum', ''],
    response: `Namaste! 🙏 Welcome to *${CHATBOT_CONFIG.shopName}*!\n\nMain aapka assistant hoon. Aap mujhse pooch sakte hain:\n• 👟 Shoes ke baare mein\n• 💰 Prices aur offers\n• 📍 Store location\n• 🕐 Timings\n• 👟 Sizes guide\n• 💬 Owner se baat karein`,
    quickReplies: ['Prices kya hain?', 'Store kahan hai?', 'Timings batao', 'Sizes guide', 'Owner se baat karein'],
  },
  {
    triggers: ['price', 'prices', 'rate', 'kitna', 'cost', 'कीमत', 'दाम', 'प्राइस'],
    response: `💰 Hamare prices range karte hain:\n\n👟 Men's Sneakers: ₹1,299 – ₹4,499\n👠 Women's Sandals: ₹899 – ₹1,999\n👦 Kids Footwear: ₹799 – ₹1,799\n🏃 Sports Shoes: ₹2,599 – ₹4,499\n👔 Formal Shoes: ₹1,799 – ₹2,499\n\n✅ Sab branded aur original hain!\n🔥 Festival aur special offers bhi milte hain.`,
    quickReplies: ['Offer kya hai?', 'Brands konse hain?', 'Enquiry karna hai'],
  },
  {
    triggers: ['location', 'address', 'kahan', 'where', 'store', 'shop', 'पता', 'कहां', 'दुकान'],
    response: `🌏 Hamari shop yahan hai:\n\n🏪 *${CHATBOT_CONFIG.shopName}*\n🌏 ${CHATBOT_CONFIG.address}\n\n🗺️ Google Maps pe "Kharshari Footwear Moradabad" search karein.\n\n🚗 Pakwara Road pe aaiye, Dingerpur ke paas!`,
    quickReplies: ['Directions chahiye', 'Timings kya hain?', 'Call karna hai'],
  },
  {
    triggers: ['time', 'timing', 'open', 'close', 'hours', 'kab', 'समय', 'टाइमिंग', 'खुलता'],
    response: `🕐 Hamare store timings:\n\n⏰ *10:00 AM – 9:30 PM*\n📅 Saat din khula rehta hai\n\n*Sunday aur holidays pe bhi open hain!*\n\nBest time visit karne ka: Weekday subah 11 baje ke baad — kam bheed hoti hai.`,
    quickReplies: ['Location batao', 'Call karna hai', 'WhatsApp karein'],
  },
  {
    triggers: ['brand', 'brands', 'konse', 'which', 'ब्रांड', 'कौनसे'],
    response: `🏷️ Hamare paas in premium brands ke shoes hain:\n\n👟 *Puma* – Sports & Casual\n👟 *Nike* – Premium Athletic\n👟 *Red Tape* – Formal & Casual\n👟 *One8* – Trendy & Comfortable\n👟 *Hummer* – Rugged & Stylish\n\n✅ Sab *100% Original* aur *Branded* hain!`,
    quickReplies: ['Prices kya hain?', 'Offer kya hai?', 'Products dekhne hain'],
  },
  {
    triggers: ['offer', 'discount', 'sale', 'deal', 'ऑफर', 'छूट', 'सेल'],
    response: `🔥 Hamare current offers:\n\n🎉 *Festival Sale* – Up to 33% off\n💰 *Buy 2 Get 1 Free* – Select items\n🏫 *Student Discount* – Extra 5% (ID required)\n📅 *Weekend Specials* – Every Saturday\n⚡ *Flash Deals* – Limited stock items\n\nSabse ache deals ke liye abhi WhatsApp karein!`,
    quickReplies: ['WhatsApp karein', 'Enquiry karna hai', 'Prices kya hain?'],
  },
  {
    triggers: ['size', 'sizes', 'fitting', 'number', 'साइज', 'नंबर'],
    response: `📏 Size Guide:\n\n👨 *Men's Sizes:* 6 – 11 (Indian)\n👩 *Women's Sizes:* 4 – 9 (Indian)\n👦 *Kids Sizes:* 1 – 7 (Indian)\n\n💡 Tip: Agar aap UK size jaante hain:\n• UK 6 = Indian 7\n• UK 7 = Indian 8\n\nSahi size ke liye store aake try karein ya WhatsApp pe poochein!`,
    quickReplies: ['WhatsApp karein', 'Store visit karein', 'Enquiry karna hai'],
  },
  {
    triggers: ['return', 'exchange', 'refund', 'policy', 'वापसी', 'एक्सचेंज'],
    response: `🔄 Hamare Exchange Policy:\n\n✅ *7 din ke andar exchange* kar sakte hain\n✅ Bill zaroori hai\n✅ Shoes unworn aur original box mein honi chahiye\n⚠️ Return ki jagah *exchange* milta hai\n\nKisi bhi issue ke liye store pe aayein ya call karein!`,
    quickReplies: ['Call karna hai', 'WhatsApp karein', 'Location batao'],
  },
  {
    triggers: ['delivery', 'home delivery', 'ship', 'online', 'डिलीवरी'],
    response: `🚚 Delivery Info:\n\n Abhi hamare paas mainly *in-store shopping* hai.\n\n💬 Home delivery ke liye WhatsApp pe baat karein – Moradabad ke andar kuch items pe special arrangement ho sakta hai!\n\n📞 Baat karein: ${CHATBOT_CONFIG.phone}`,
    quickReplies: ['WhatsApp karein', 'Store location', 'Call karna hai'],
  },
  {
    triggers: ['payment', 'upi', 'cash', 'card', 'paytm', 'gpay', 'भुगतान', 'पेमेंट'],
    response: `💳 Payment Options:\n\n✅ *Cash* – Hamesha accepted\n✅ *UPI* – PhonePe, Google Pay, Paytm\n✅ *Debit / Credit Cards*\n✅ *Net Banking*\n\nSab taraf se aasaan payment!`,
    quickReplies: ['Prices kya hain?', 'Enquiry karna hai', 'Store visit karein'],
  },
  {
    triggers: ['talk', 'owner', 'contact', 'human', 'agent', 'baat', 'बात', 'मालिक', 'संपर्क'],
    response: `💬 Main aapko owner se connect kar raha hoon!\n\nNeeche "Owner se Baat Karein" button dabayein aur WhatsApp pe directly baat karein. 🤝`,
    quickReplies: ['Owner से WhatsApp करें'],
    special: 'owner_transfer',
  },
  {
    triggers: ['enquiry', 'enquire', 'buy', 'purchase', 'order', 'खरीदna', 'एनक्वायरी'],
    response: `📝 Enquiry karne ke liye:\n\n1️⃣ Product select karein website pe\n2️⃣ "Enquire Now" button dabayein\n3️⃣ Ya seedha WhatsApp pe message karein\n\nHum bahut jaldi reply karte hain! ⚡`,
    quickReplies: ['WhatsApp karein', 'Owner se baat karein', 'Products dekhne hain'],
  },
];

const FALLBACK = `😊 Mujhe yeh samajh nahi aaya. Aap in options mein se choose karein ya seedha owner se baat karein!\n\nMain aapki help karne ki poori koshish karunga! 🙏`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState([]);
  const [hasGreeted, setHasGreeted] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when messages list updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Initial Greet
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const greeting = KB[0];
        setMessages([{ sender: 'bot', text: greeting.response, special: null }]);
        setQuickReplies(greeting.quickReplies);
      }, 800);
    }
  }, [isOpen, hasGreeted]);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const closeChat = () => setIsOpen(false);

  const getResponse = (text) => {
    const lower = text.toLowerCase();
    for (const item of KB) {
      if (item.triggers.some((t) => lower.includes(t))) {
        return { text: item.response, quickReplies: item.quickReplies, special: item.special };
      }
    }
    return {
      text: FALLBACK,
      quickReplies: ['Prices kya hain?', 'Location batao', 'Owner se baat karein'],
      special: null,
    };
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: text.trim() }]);
    setInputValue('');
    setQuickReplies([]);

    // Bot response simulation
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const res = getResponse(text);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: res.text, special: res.special },
      ]);
      setQuickReplies(res.quickReplies || []);
    }, 850);
  };

  const handleQuickReplyClick = (reply) => {
    if (reply === 'Owner से WhatsApp करें' || reply === 'Owner se baat karein') {
      const msg = encodeURIComponent('Namaste! Main Kharshari Footwear ke baare mein baat karna chahta hoon.');
      window.open(`https://wa.me/${CHATBOT_CONFIG.ownerWhatsApp}?text=${msg}`, '_blank', 'noopener,noreferrer');
      return;
    }
    sendMessage(reply);
  };

  const formatText = (text) => {
    // Escape simple characters and format bold *text* to <strong>
    const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    return escaped
      .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
      .replace(/🌏/g, '<img src="/assets/images/location_pin.png" alt="location" style="height:1.1em; width:auto; vertical-align:-0.15em; display:inline-block;" />');
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-btn" onClick={toggleOpen} title="Ask our AI assistant">
        🤖
      </button>

      {isOpen && (
        <div className="chatbot-window open" id="chatbotWindow">
          <div className="chatbot-header">
            <div className="chatbot-avatar">🤖</div>
            <div>
              <div className="chatbot-name">{CHATBOT_CONFIG.name}</div>
              <div className="chatbot-status">● Online — Hindi & English</div>
            </div>
            <button className="chatbot-close" onClick={closeChat}>
              ✕
            </button>
          </div>

          <div className="chatbot-messages" id="chatbotMessages">
            {messages.map((msg, index) => (
              <div key={index} className="chat-message">
                <div
                  className={`chat-bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}
                  dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                />
                {msg.special === 'owner_transfer' && (
                  <div style={{ marginTop: '8px', paddingLeft: '8px' }}>
                    <a
                      href={`https://wa.me/${CHATBOT_CONFIG.ownerWhatsApp}?text=${encodeURIComponent('Namaste! Website se aaya hoon, mujhe help chahiye.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      style={{ fontSize: '0.78rem', padding: '8px 16px' }}
                    >
                      💬 Owner se WhatsApp Karein
                    </a>
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="chat-message">
                <div className="chat-bubble bot" style={{ color: 'var(--text-muted)' }}>
                  ...
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {quickReplies.length > 0 && (
            <div className="chatbot-quick-replies" id="chatbotQuickReplies">
              {quickReplies.map((qr, index) => (
                <button
                  key={index}
                  className="quick-reply-btn"
                  onClick={() => handleQuickReplyClick(qr)}
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendMessage(inputValue);
              }}
              placeholder="Kuch bhi poochein..."
            />
            <button className="chatbot-send" onClick={() => sendMessage(inputValue)}>
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
