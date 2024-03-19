const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        // const transporter = nodemailer.createTransport({
        //     host: process.env.MAIL_HOST,
        //     auth: {
        //         user: process.env.MAIL_USER,
        //         pass: process.env.MAIL_PASS
        //     }
        // });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: "abhishekgraut@gmail.com",
              pass: "skbakjmgtiugliyl",
            },
          });

        const info = await transporter.sendMail({
            from: 'abhishekgraut@gmail.com',
            to: email,
            subject: title,
            html: body
        });

        console.log('Info of sent mail - ', info);
        return info;
    }
    catch (error) { 
        console.log('Error while sending mail (mailSender) - ', email);
    }
}

module.exports = mailSender;