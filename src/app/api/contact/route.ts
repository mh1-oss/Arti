import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, business, phone, service, details } = data;

    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '267707743';
    const TELEGRAM_BOT_TOKEN = '8809497949:AAFH1fH-RR0tqDEdMGdYaQvlncrgM8dhn7w';

    const message = `
🔔 <b>طلب جديد من الموقع:</b>
👤 <b>الاسم:</b> ${name}
🏢 <b>النشاط / الشركة:</b> ${business || 'غير محدد'}
📞 <b>رقم الهاتف:</b> ${phone}
📧 <b>الإيميل:</b> ${email || 'غير محدد'}
🛠 <b>الخدمة المطلوبة:</b> ${service}
📝 <b>التفاصيل:</b> ${details || 'أرغب بمزيد من المعلومات'}
    `;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    let waPhone = phone.replace(/[^0-9+]/g, '');
    // If it starts with 0 (e.g. 0780), replace with 964
    if (waPhone.startsWith('0')) {
      waPhone = '964' + waPhone.substring(1);
    } else if (waPhone.startsWith('+')) {
      waPhone = waPhone.substring(1);
    }

    const inlineKeyboard = [];
    
    if (waPhone) {
      const waText = encodeURIComponent(`مرحباً ${name}، بخصوص طلبك لـ ${service}...`);
      inlineKeyboard.push([
        { text: "📱 الرد عبر واتساب", url: `https://wa.me/${waPhone}?text=${waText}` }
      ]);
    }
    
    if (email) {
      const mailSubject = encodeURIComponent("بخصوص طلبك من موقع آرتي للبرمجيات");
      const baseUrl = 'https://arti-software.com';
      
      inlineKeyboard.push([
        { text: "✉️ الرد عبر الإيميل", url: `${baseUrl}/api/mailto?to=${encodeURIComponent(email)}&subject=${mailSubject}` }
      ]);
    }
    
    inlineKeyboard.push([
      { text: "✅ تحديد كـ (تم الرد)", callback_data: `replied` }
    ]);

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: inlineKeyboard
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Telegram API Error Details:', errorText);
      return NextResponse.json({ success: false, error: 'Telegram Error', details: errorText }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 });
  }
}
