import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "vinukjithsara278@gmail.com",
        pass: "bonlourcdrhqiquk"
    }
});

async function sendEmail(to, subject, msg) {
    try {
        const info = await transporter.sendMail({
            from: "vinukjithsara278@gmail.com",
            to: to,
            subject: subject,
            html: msg
        });

        console.log("Email Sent:", info.response);
    } catch (err) {
        console.log("Error:", err);
    }
}

sendEmail(
    "vinukjithsara278@gmail.com",
    "Test Email",
    "<h1>This is a test email</h1>"
);