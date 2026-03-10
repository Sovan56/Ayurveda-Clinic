import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email configuration
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // API Routes
  app.post("/api/book", async (req, res) => {
    const { name, email, phone, date, time, message } = req.body;

    const emailStyle = `
      <style>
        /* Reset styles */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }
        
        /* Responsive styles */
        @media screen and (max-width: 600px) {
          .mobile-width { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 20px !important; }
          .mobile-header { padding: 30px 15px !important; }
          .mobile-content { padding: 30px 20px !important; }
          .mobile-footer { padding: 20px !important; }
          .mobile-font-size { font-size: 24px !important; }
        }
      </style>
    `;

    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: '🌿 New Consultation Booking Request',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="color-scheme" content="light dark">
          <meta name="supported-color-schemes" content="light dark">
          ${emailStyle}
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f0; font-family: 'Georgia', serif;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f0;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="mobile-width" style="background-color: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 10px 30px rgba(90, 90, 64, 0.1); border: 1px solid #efefdf;">
                  <!-- Header -->
                  <tr>
                    <td align="center" class="mobile-header" style="background-color: #5A5A40; padding: 40px 20px;">
                      <div style="font-size: 40px; margin-bottom: 10px;">🌿</div>
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase;">AyurVeda</h1>
                      <p style="color: #efefdf; margin: 10px 0 0 0; font-style: italic; font-size: 16px; opacity: 0.9;">New Booking Notification</p>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td class="mobile-content" style="padding: 50px 40px;">
                      <h2 style="color: #5A5A40; font-size: 24px; margin: 0 0 30px 0; border-bottom: 2px solid #f7f7f2; padding-bottom: 15px;">Appointment Details</h2>
                      
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                        <tr>
                          <td width="100" style="padding: 10px 0; color: #8E9299; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #f7f7f2;">Client</td>
                          <td style="padding: 10px 0; color: #1a1a13; font-weight: 600; border-bottom: 1px solid #f7f7f2;">${name}</td>
                        </tr>
                        <tr>
                          <td width="100" style="padding: 10px 0; color: #8E9299; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #f7f7f2;">Email</td>
                          <td style="padding: 10px 0; color: #1a1a13; border-bottom: 1px solid #f7f7f2;">${email}</td>
                        </tr>
                        <tr>
                          <td width="100" style="padding: 10px 0; color: #8E9299; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #f7f7f2;">Phone</td>
                          <td style="padding: 10px 0; color: #1a1a13; border-bottom: 1px solid #f7f7f2;">${phone}</td>
                        </tr>
                        <tr>
                          <td width="100" style="padding: 10px 0; color: #8E9299; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #f7f7f2;">Date</td>
                          <td style="padding: 10px 0; color: #1a1a13; font-weight: 600; border-bottom: 1px solid #f7f7f2;">${date}</td>
                        </tr>
                        <tr>
                          <td width="100" style="padding: 10px 0; color: #8E9299; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #f7f7f2;">Time</td>
                          <td style="padding: 10px 0; color: #1a1a13; font-weight: 600; border-bottom: 1px solid #f7f7f2;">${time}</td>
                        </tr>
                      </table>

                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f7f7f2; border-radius: 20px; border-left: 6px solid #5A5A40;">
                        <tr>
                          <td style="padding: 30px;">
                            <p style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #5A5A40; font-weight: bold;">Client Message</p>
                            <p style="margin: 0; color: #4a4a34; font-style: italic; line-height: 1.8;">"${message || 'No additional message provided.'}"</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td align="center" style="background-color: #f7f7f2; padding: 30px; border-top: 1px solid #efefdf;">
                      <p style="margin: 0; font-size: 12px; color: #8E9299; letter-spacing: 1px;">© 2026 AYURVEDA CLINIC • INTERNAL NOTIFICATION</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: '🌿 Your Wellness Journey Starts Here - AyurVeda Clinic',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="color-scheme" content="light dark">
          <meta name="supported-color-schemes" content="light dark">
          ${emailStyle}
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f0; font-family: 'Georgia', serif;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f0;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="mobile-width" style="background-color: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 10px 30px rgba(90, 90, 64, 0.1); border: 1px solid #efefdf;">
                  <!-- Header -->
                  <tr>
                    <td align="center" class="mobile-header" style="background-color: #5A5A40; padding: 60px 20px;">
                      <div style="font-size: 40px; margin-bottom: 10px;">🌿</div>
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 400; letter-spacing: 4px; text-transform: uppercase;">AyurVeda</h1>
                      <p style="color: #efefdf; margin: 10px 0 0 0; font-style: italic; font-size: 16px; opacity: 0.9;">Natural Healing • Holistic Wellness</p>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td class="mobile-content" style="padding: 50px 40px;">
                      <h2 style="color: #5A5A40; font-size: 28px; margin: 0 0 20px 0; font-weight: 400;">Namaste ${name},</h2>
                      <p style="font-size: 18px; color: #4a4a34; line-height: 1.8; margin: 0 0 30px 0;">
                        Thank you for reaching out to AyurVeda Clinic. We are honored to be part of your path toward balance and vitality.
                      </p>
                      
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 40px 0; background-color: #f7f7f2; border-radius: 24px; border: 1px solid #efefdf;">
                        <tr>
                          <td align="center" style="padding: 35px;">
                            <h3 style="margin: 0 0 20px 0; color: #5A5A40; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Requested Consultation</h3>
                            <div style="font-size: 22px; color: #1a1a13; margin-bottom: 10px;">${date}</div>
                            <div style="font-size: 16px; color: #8E9299; font-style: italic;">${time}</div>
                          </td>
                        </tr>
                      </table>

                      <p style="color: #4a4a34; line-height: 1.8; margin: 0 0 30px 0;">
                        Our practitioners are currently reviewing your request. We will contact you at <strong style="color: #5A5A40;">${phone}</strong> within the next 24 hours to finalize your appointment and discuss any specific preparations.
                      </p>
                      
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td align="center" style="padding-top: 20px;">
                            <a href="${process.env.APP_URL || '#'}" style="background-color: #5A5A40; color: #ffffff; padding: 18px 35px; border-radius: 50px; text-decoration: none; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; display: inline-block;">Explore Treatments</a>
                          </td>
                        </tr>
                      </table>

                      <div style="margin-top: 60px; border-top: 1px solid #f7f7f2; padding-top: 30px; text-align: center;">
                        <p style="color: #8E9299; font-style: italic; margin: 0 0 5px 0;">With warmth and gratitude,</p>
                        <p style="color: #5A5A40; font-weight: bold; font-size: 18px; margin: 0;">The AyurVeda Team</p>
                      </div>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td align="center" style="background-color: #f7f7f2; padding: 40px 20px; border-top: 1px solid #efefdf;">
                      <p style="margin: 0 0 15px 0; font-size: 13px; color: #5A5A40; font-weight: 600; letter-spacing: 1px;">AYURVEDA CLINIC</p>
                      <p style="margin: 0; font-size: 12px; color: #8E9299; line-height: 1.6;">
                        123 Healing Way, Wellness District<br>
                        Mon - Sat: 9:00 AM - 7:00 PM<br>
                        +1 (234) 567-890
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
      res.status(200).json({ message: "Booking request sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send booking request" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    const emailStyle = `
      <style>
        /* Reset styles */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }
        
        /* Responsive styles */
        @media screen and (max-width: 600px) {
          .mobile-width { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 20px !important; }
          .mobile-header { padding: 30px 15px !important; }
          .mobile-content { padding: 30px 20px !important; }
          .mobile-footer { padding: 20px !important; }
          .mobile-font-size { font-size: 24px !important; }
        }
      </style>
    `;

    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `📩 New Message: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="color-scheme" content="light dark">
          <meta name="supported-color-schemes" content="light dark">
          ${emailStyle}
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f0; font-family: 'Georgia', serif;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f0;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="mobile-width" style="background-color: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 10px 30px rgba(90, 90, 64, 0.1); border: 1px solid #efefdf;">
                  <!-- Header -->
                  <tr>
                    <td align="center" class="mobile-header" style="background-color: #5A5A40; padding: 40px 20px;">
                      <div style="font-size: 40px; margin-bottom: 10px;">📩</div>
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase;">AyurVeda</h1>
                      <p style="color: #efefdf; margin: 10px 0 0 0; font-style: italic; font-size: 16px; opacity: 0.9;">New Inquiry Received</p>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td class="mobile-content" style="padding: 50px 40px;">
                      <h2 style="color: #5A5A40; font-size: 24px; margin: 0 0 30px 0; border-bottom: 2px solid #f7f7f2; padding-bottom: 15px;">Message Details</h2>
                      <div style="margin-bottom: 30px;">
                        <p style="margin: 0 0 10px 0; color: #4a4a34;"><strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #5A5A40; text-decoration: none;">${email}</a>)</p>
                        <p style="margin: 0; color: #4a4a34;"><strong>Subject:</strong> ${subject}</p>
                      </div>
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f7f7f2; border-radius: 20px; border-left: 6px solid #5A5A40;">
                        <tr>
                          <td style="padding: 30px;">
                            <p style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #5A5A40; font-weight: bold;">Message Content</p>
                            <p style="margin: 0; color: #4a4a34; line-height: 1.8;">${message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td align="center" style="background-color: #f7f7f2; padding: 30px; border-top: 1px solid #efefdf;">
                      <p style="margin: 0; font-size: 12px; color: #8E9299; letter-spacing: 1px;">© 2026 AYURVEDA CLINIC • CONTACT FORM</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: '📩 We Have Received Your Message - AyurVeda Clinic',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="color-scheme" content="light dark">
          <meta name="supported-color-schemes" content="light dark">
          ${emailStyle}
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f0; font-family: 'Georgia', serif;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f0;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="mobile-width" style="background-color: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 10px 30px rgba(90, 90, 64, 0.1); border: 1px solid #efefdf;">
                  <!-- Header -->
                  <tr>
                    <td align="center" class="mobile-header" style="background-color: #5A5A40; padding: 60px 20px;">
                      <div style="font-size: 40px; margin-bottom: 10px;">📩</div>
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 400; letter-spacing: 4px; text-transform: uppercase;">AyurVeda</h1>
                      <p style="color: #efefdf; margin: 10px 0 0 0; font-style: italic; font-size: 16px; opacity: 0.9;">Thank You For Reaching Out</p>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td class="mobile-content" style="padding: 50px 40px;">
                      <h2 style="color: #5A5A40; font-size: 28px; margin: 0 0 20px 0; font-weight: 400;">Hello ${name},</h2>
                      <p style="font-size: 18px; color: #4a4a34; line-height: 1.8; margin: 0 0 30px 0;">
                        We have successfully received your message regarding <strong>"${subject}"</strong>.
                      </p>
                      
                      <p style="color: #4a4a34; line-height: 1.8; margin: 0 0 30px 0;">
                        Our team is dedicated to providing thoughtful responses to every inquiry. We are currently reviewing your message and will get back to you with the information you need as soon as possible.
                      </p>
                      
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 40px 0; border: 1px dashed #efefdf; border-radius: 24px;">
                        <tr>
                          <td align="center" style="padding: 30px;">
                            <p style="margin: 0; font-style: italic; color: #5A5A40; font-size: 18px; line-height: 1.6;">
                              "The natural healing force within each of us is the greatest force in getting well."
                            </p>
                            <p style="margin: 15px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #8E9299;">— Hippocrates</p>
                          </td>
                        </tr>
                      </table>

                      <div style="margin-top: 60px; border-top: 1px solid #f7f7f2; padding-top: 30px; text-align: center;">
                        <p style="color: #8E9299; font-style: italic; margin: 0 0 5px 0;">Warm regards,</p>
                        <p style="color: #5A5A40; font-weight: bold; font-size: 18px; margin: 0;">The AyurVeda Team</p>
                      </div>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td align="center" style="background-color: #f7f7f2; padding: 40px 20px; border-top: 1px solid #efefdf;">
                      <p style="margin: 0 0 15px 0; font-size: 13px; color: #5A5A40; font-weight: 600; letter-spacing: 1px;">AYURVEDA CLINIC</p>
                      <p style="margin: 0; font-size: 12px; color: #8E9299; line-height: 1.6;">
                        123 Healing Way, Wellness District<br>
                        Mon - Sat: 9:00 AM - 7:00 PM<br>
                        +1 (234) 567-890
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
