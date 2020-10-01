const { Webhook } = require("./main");

const webhook = new Webhook("704517448677851226", "TDlPm0x-SOME-xq3JGubkMYS3Ks7JnCOOOOLfygFGZ6XJPCHHifTKN");

webhook.send({ content: "Testing", embed: { description: "Testing"}})
.then( (result) => result ? console.log('Sent webhook message') : console.log('Error occured someone') )
