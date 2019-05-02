// Criado em : 13/01/2018 por Diogenes

const fetch = require('node-fetch');
const Twit = require('twit')
const TelegramBot = require('node-telegram-bot-api');

const T = new Twit({
  consumer_key:         process.env.TWIT_consumer_key,
  consumer_secret:      process.env.TWIT_consumer_secret,
  access_token:         process.env.TWIT_access_token,
  access_token_secret:  process.env.TWIT_access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TOKEN_TELEGRAM, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('channel_post', (msg) => {
  const chatId = msg.chat.id;
	console.log(msg.text+'\n-------------------');

  T.post('statuses/update', { status: msg.text+ '\n#ExPassGym' }, function(err, data, response) {
    var body = {
      "username":"Raids Boosted",
      "avatar_url":"https://i.pinimg.com/236x/52/9d/50/529d500103caf60551faa7c0b38eca5e--sexy-pokemon-pokemon-go.jpg",
      "content": msg.text+'\n------------------- '
  };
		fetch(process.env.WEB_HOOK, {
			method: 'POST',
			body:    JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' },
		})
			//.then(res => console.log(res));

		if(err){
			return
		}

		// send a message to the chat acknowledging receipt of their message
		// bot.sendMessage(chatId, 'Messagem Enviada !!');

	});

});
