import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (data.callback_query) {
      const callbackQuery = data.callback_query;
      
      if (callbackQuery.data === 'replied') {
        const message = callbackQuery.message;
        const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8809497949:AAFH1fH-RR0tqDEdMGdYaQvlncrgM8dhn7w';
        
        // Append text to the original message
        const newText = message.text + '\n\n✅ <b>تم الرد على هذا الطلب</b>';
        
        // Remove the "Mark as Replied" button from the keyboard
        const newInlineKeyboard = message.reply_markup?.inline_keyboard?.filter(
          (row: any) => row[0].callback_data !== 'replied'
        ) || [];

        // Edit the message
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/editMessageText`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: message.chat.id,
            message_id: message.message_id,
            text: newText,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: newInlineKeyboard
            }
          })
        });

        // Answer the callback query to remove the loading state on the button
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            callback_query_id: callbackQuery.id,
            text: "تم تحديث حالة الطلب بنجاح ✅"
          })
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Webhook Error:', error);
    // Always return 200 to Telegram so it doesn't retry indefinitely
    return NextResponse.json({ ok: true });
  }
}
