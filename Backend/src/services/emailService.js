import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendWelcomeEmail = async (email, name) => {
  const message = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to SkillSync AI',
    text: `Hi ${name},\n\nWelcome to SkillSync AI! We are excited to help you collaborate smarter with your team.\n\nBest,\nThe SkillSync AI Team`,
  };
  await transporter.sendMail(message);
};

export default sendWelcomeEmail;
