const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0866397565c179",
        pass: "63bd6b834322bf"
    }
});

module.exports = transport;
