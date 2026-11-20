import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body?.name || !body?.phone || !body?.buyerType || !body?.quantityRange || !body?.budgetRange) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      replyTo: body.email || undefined,
      subject: `New China Errand lead: ${body.name}`,
      text: [
        `Name: ${body.name}`,
        `Phone: ${body.phone}`,
        `Email: ${body.email || '-'}`,
        `State/City: ${body.state || '-'} / ${body.city || '-'}`,
        `Type: ${body.buyerType}`,
        `Purchased before: ${body.purchasedBefore || '-'}`,
        `Categories: ${(body.categories || []).join(', ') || '-'}`,
        `Products: ${body.specificProducts || '-'}`,
        `Quantity: ${body.quantityRange}`,
        `Budget: ${body.budgetRange}`,
        `Frequency: ${body.frequency || '-'}`,
        `Timeline: ${body.timeline || '-'}`,
        `Wants updates: ${body.wantsUpdates || '-'}`,
        `Notes: ${body.notes || '-'}`,
      ].join('\n'),
    });

    return NextResponse.json({ message: 'Interest registered' }, { status: 201 });
  } catch (err: any) {
    console.error('POST /api/leads error:', err);
    return NextResponse.json(
      { message: 'Could not send your submission. Please try again.' },
      { status: 500 }
    );
  }
}















































// import { NextRequest, NextResponse } from 'next/server';
// import mongoose, { Schema } from 'mongoose';
// import nodemailer from 'nodemailer';
// import { connectDB } from '@/lib/db';

// const leadSchema = new Schema(
//   {
//     name: String,
//     phone: String,
//     email: String,
//     state: String,
//     city: String,
//     buyerType: String,
//     purchasedBefore: String,
//     categories: [String],
//     specificProducts: String,
//     quantityRange: String,
//     budgetRange: String,
//     frequency: String,
//     timeline: String,
//     wantsUpdates: String,
//     notes: String,
//     status: { type: String, default: 'new' },
//     source: { type: String, default: 'web' },
//   },
//   { timestamps: true }
// );

// const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT || 587),
//   secure: false,
//   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
// });

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     if (!body?.name || !body?.phone || !body?.buyerType || !body?.quantityRange || !body?.budgetRange) {
//       return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
//     }

//     await connectDB();
//     const lead = await Lead.create({ ...body, source: 'web' });

//     // fire-and-forget
//     transporter
//       .sendMail({
//         from: process.env.SMTP_FROM,
//         to: process.env.ADMIN_EMAIL,
//         subject: `New China Errand lead: ${lead.name}`,
//         text: [
//           `Name: ${lead.name}`,
//           `Phone: ${lead.phone}`,
//           `Email: ${lead.email || '-'}`,
//           `Type: ${lead.buyerType}`,
//           `Categories: ${(lead.categories || []).join(', ')}`,
//           `Qty: ${lead.quantityRange}`,
//           `Budget: ${lead.budgetRange}`,
//           `Products: ${lead.specificProducts || '-'}`,
//           `Notes: ${lead.notes || '-'}`,
//         ].join('\n'),
//       })
//       .catch((e) => console.error('Mail error:', e.message));

//     return NextResponse.json({ message: 'Interest registered', id: lead._id }, { status: 201 });
//   } catch (err: any) {
//     console.error('POST /api/leads error:', err);
//     return NextResponse.json({ message: err.message || 'Server error' }, { status: 500 });
//   }
// }