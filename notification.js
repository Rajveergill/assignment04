

const accountSid = 'AC02a24b9fa7cf252227d70d717ee08da4';
const authToken = '87c34e0b30ace51b0556b4fa49f78d3d';
const client = require('twilio')(accountSid, authToken)

module.exports.notification = (event, context, callback) => {
    console.log('event :',event);
    let file = [];
    event.Records.forEach((record) => {
        file.push(record.s3.object.key);
    });
    client.messages.create(
  {
    to: '+17782238722',
    from: '+16042106756',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  }
)
};