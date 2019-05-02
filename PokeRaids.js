// Criado em : 13/01/2018 por Diogenes

const fetch = require('node-fetch');
const Twit = require('twit')
const TelegramBot = require('node-telegram-bot-api');

const T = new Twit({
  consumer_key:         'h7y9nQ0lfgaOTed7bjPSiTzlR',
  consumer_secret:      'wZY2iAyaAGqD5XQT75SKZcGmPwaD5dNpmvS7nKpmJE9BnWucUu',
  access_token:         '1113373448955420677-6G9Sca0zx4I3Tz3lvyRtQZwcBUsC9B',
  access_token_secret:  '4GdugF9cFrK8Y1XbyURzm0c2mtlZeUyAnHeIlOuyr06dH',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot('793645301:AAGF9MyCwJumNtvl5fExrwZSGc88VwA6WkU', {polling: true});

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
		fetch('https://discordapp.com/api/webhooks/563070862853537795/CqqfNy_4hPBXCdUUaEY0-Z12yWt5tmInAqNN1z0r9_7AC24_qPBIWlF48tUEc9KahOBS', {
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
