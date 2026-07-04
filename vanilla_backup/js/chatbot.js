/* ============================================================
   KHARSHARI FOOTWEAR — AI CHATBOT
   Hindi + English Support
   ============================================================ */

const CHATBOT_CONFIG = {
  name: 'Kharshari Assistant',
  ownerWhatsApp: '919876543210',
  shopName: 'Kharshari Footwear',
  address: 'Dingerpur, Pakwara Road, Moradabad, UP',
  hours: '10:00 AM – 9:30 PM (Daily)',
  phone: '+91-9876543210',
};

// ─── KNOWLEDGE BASE ────────────────────────────────────────────
const KB = [
  {
    triggers: ['hello', 'hi', 'helo', 'namaste', 'namaskar', 'hey', 'start', 'help', 'नमस्ते', 'हैलो'],
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
    response: `📍 Hamari shop yahan hai:\n\n🏪 *${CHATBOT_CONFIG.shopName}*\n📍 ${CHATBOT_CONFIG.address}\n\n🗺️ Google Maps pe "Kharshari Footwear Moradabad" search karein.\n\n🚗 Pakwara Road pe aaiye, Dingerpur ke paas!`,
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
    response: `🚚 Delivery Info:\n\n📍 Abhi hamare paas mainly *in-store shopping* hai.\n\n💬 Home delivery ke liye WhatsApp pe baat karein – Moradabad ke andar kuch items pe special arrangement ho sakta hai!\n\n📞 Baat karein: ${CHATBOT_CONFIG.phone}`,
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
    triggers: ['enquiry', 'enquire', 'buy', 'purchase', 'order', 'खरीदना', 'एनक्वायरी'],
    response: `📝 Enquiry karne ke liye:\n\n1️⃣ Product select karein website pe\n2️⃣ "Enquire Now" button dabayein\n3️⃣ Ya seedha WhatsApp pe message karein\n\nHum bahut jaldi reply karte hain! ⚡`,
    quickReplies: ['WhatsApp karein', 'Owner se baat karein', 'Products dekhne hain'],
  },
];

// ─── FALLBACK ──────────────────────────────────────────────────
const FALLBACK = `😊 Mujhe yeh samajh nahi aaya. Aap in options mein se choose karein ya seedha owner se baat karein!\n\nMain aapki help karne ki poori koshish karunga! 🙏`;

// ─── CHATBOT CLASS ─────────────────────────────────────────────
class Chatbot {
  constructor() {
    this.isOpen = false;
    this.bindElements();
    this.bindEvents();
  }

  bindElements() {
    this.container = document.querySelector('.chatbot-container');
    this.btn = document.querySelector('.chatbot-btn');
    this.window = document.querySelector('.chatbot-window');
    this.messages = document.querySelector('.chatbot-messages');
    this.input = document.querySelector('.chatbot-input');
    this.sendBtn = document.querySelector('.chatbot-send');
    this.closeBtn = document.querySelector('.chatbot-close');
    this.quickRepliesEl = document.querySelector('.chatbot-quick-replies');
  }

  bindEvents() {
    this.btn?.addEventListener('click', () => this.toggle());
    this.closeBtn?.addEventListener('click', () => this.close());
    this.sendBtn?.addEventListener('click', () => this.send());
    this.input?.addEventListener('keydown', e => { if (e.key === 'Enter') this.send(); });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.window?.classList.add('open');
    if (!this.hasGreeted) {
      this.hasGreeted = true;
      setTimeout(() => {
        const greeting = KB[0];
        this.addBotMessage(greeting.response, greeting.quickReplies);
      }, 400);
    }
    this.input?.focus();
  }

  close() {
    this.isOpen = false;
    this.window?.classList.remove('open');
  }

  send() {
    const text = this.input?.value?.trim();
    if (!text) return;
    this.addUserMessage(text);
    if (this.input) this.input.value = '';
    this.quickRepliesEl && (this.quickRepliesEl.innerHTML = '');

    setTimeout(() => {
      const response = this.getResponse(text);
      this.addBotMessage(response.text, response.quickReplies, response.special);
    }, 600);
  }

  sendQuick(text) {
    if (text === 'Owner से WhatsApp करें' || text === 'Owner se baat karein') {
      const msg = encodeURIComponent('Namaste! Main Kharshari Footwear ke baare mein baat karna chahta hoon.');
      window.open(`https://wa.me/${CHATBOT_CONFIG.ownerWhatsApp}?text=${msg}`, '_blank');
      return;
    }
    if (this.input) this.input.value = text;
    this.send();
  }

  getResponse(text) {
    const lower = text.toLowerCase();
    for (const item of KB) {
      if (item.triggers.some(t => lower.includes(t))) {
        return { text: item.response, quickReplies: item.quickReplies, special: item.special };
      }
    }
    return { text: FALLBACK, quickReplies: ['Prices kya hain?', 'Location batao', 'Owner se baat karein'] };
  }

  addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-message';
    div.innerHTML = `<div class="chat-bubble user">${this.escape(text)}</div>`;
    this.messages?.appendChild(div);
    this.scrollBottom();
  }

  addBotMessage(text, quickReplies = [], special = null) {
    // Show typing indicator
    const typing = document.createElement('div');
    typing.className = 'chat-message';
    typing.innerHTML = `<div class="chat-bubble bot" style="color:var(--text-muted)">...</div>`;
    this.messages?.appendChild(typing);
    this.scrollBottom();

    setTimeout(() => {
      typing.remove();

      const div = document.createElement('div');
      div.className = 'chat-message';
      // Convert markdown-like *bold* to <strong>
      const formatted = this.formatText(text);
      div.innerHTML = `<div class="chat-bubble bot">${formatted}</div>`;

      if (special === 'owner_transfer') {
        const link = `https://wa.me/${CHATBOT_CONFIG.ownerWhatsApp}?text=${encodeURIComponent('Namaste! Website se aaya hoon, mujhe help chahiye.')}`;
        div.innerHTML += `<div style="margin-top:8px;">
          <a href="${link}" target="_blank" class="btn btn-whatsapp btn-sm" style="font-size:0.78rem;padding:8px 16px;">
            💬 Owner se WhatsApp Karein
          </a>
        </div>`;
      }

      this.messages?.appendChild(div);
      this.scrollBottom();

      // Render quick replies
      if (this.quickRepliesEl && quickReplies.length > 0) {
        this.quickRepliesEl.innerHTML = quickReplies.map(qr =>
          `<button class="quick-reply-btn" onclick="chatbotInstance.sendQuick('${qr}')">${qr}</button>`
        ).join('');
      }
    }, 800);
  }

  formatText(text) {
    return this.escape(text)
      .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  escape(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  scrollBottom() {
    if (this.messages) {
      this.messages.scrollTop = this.messages.scrollHeight;
    }
  }
}

// ─── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  window.chatbotInstance = new Chatbot();
});
