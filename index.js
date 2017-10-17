// 1. npm init
// 2. npm install node-telegram-bot-api


var TelegramBot = require('node-telegram-bot-api');
var token = '470384292:AAE-7PVVRvSyZpOrWvxTe89JPIxxRaYd5yc';
var bot = new TelegramBot(token, {polling: true});

//handler text
bot.on('message', (msg) => {

  var hi = 'hi';
  if(msg.text.toLowerCase().indexOf(hi) === 0){
    var message = "Hello diyer " + msg.from.last_name + " " + msg.from.first_name;
    bot.sendMessage(msg.chat.id, message)
  }

  var bye = 'bye';
  if(msg.text.toLowerCase().indexOf(bye) != -1){
    bot.sendMessage(msg.chat.id, "You lucky thin");
  }

  var location = 'адрес';
  if(msg.text.toLowerCase().indexOf(location) != -1){
    bot.sendLocation(msg.chat.id, 44.97108, -104.27719)
  }
  
  var aboutOkara = 'об окаре'
  if(msg.text.toLowerCase().indexOf(aboutOkara) != -1){
    bot.sendMessage(msg.chat.id, "Окара — соевая пульпа, продукт, получаемый при производстве соевого молока. Также является ценным пищевым продуктом, содержит много клетчатки и белка. Используется в японской, китайской и корейской традиционной кухне, а также в вегетарианской кухне.")
  }

  var take = 'взять'
  if(msg.text.toLowerCase().indexOf(take) != -1){
    bot.sendMessage(msg.chat.id, "https://yandex.ru/maps/-/CBU-qPDX0B")
  }

  var give = 'отдать';
  if(msg.text.toLowerCase().indexOf(give) != -1){
    bot.sendMessage(msg.chat.id, "Свяжитесь с администратором: @livevasiliy")
  }

  var second = 'второе';
  if(msg.text.toLowerCase().indexOf(second) != -1){
    var text = "\
      Время приготовления:  ~40 минут.\n\
      \n\
      КАЛОРИЙНОСТЬ: 208 Ккал \n\
      БЕЛКИ: 3,5 грамм\n\
      ЖИРЫ: 16 грамм \n\
      УГЛЕВОДЫ: 12,2 грамм\n\
      \n\
      ИНГРЕДИЕНТЫ\n\
      ПОРЦИИ: 2\n\
       \n\
      ОКАРА 150 г\n\
      ЛУК ½ головки\n\
      МОРКОВЬ ½ штуки\n\
      СУХИЕ ВОДОРОСЛИ НОРИ ½ штуки\n\
      СОЛЬ по вкусу\n\
      РАСТИТЕЛЬНОЕ МАСЛО 1,5 столовые ложки\n\
      СПЕЦИИ по вкусу\n\
      \n\
      Способ приготовления:\n\
      1. В окару (сколько есть, не важно количество) кидаем специи, соль, рвем 1-2 листа нори и масло.\n\
      2. Мелко нарезаем морковь и лук (чем больше лука - тем лучше), пассеруем на сковороде.\n\
      3. Смешиваем сие угощение, лепим котлетки (если плохо лепятся - можно добавить муки).\n\
      4. Отправляем котлетки в разогретую до 180 градусов духовку на 30-40 минут (зависит от размера котлеток. Чем больше котлетка, тем больше ей нужно времени).\n\
      5. Приятного аппетита!\n\
      ";
    bot.sendPhoto(msg.chat.id, "https://im0-tub-ru.yandex.net/i?id=c9ae7976fffb8b9f923c5c19cea40286&n=13" , {caption: "«Рыбные» котлеты из окары"});
    bot.sendMessage(msg.chat.id, text)
  }

  var third = 'десерт';
  if(msg.text.toLowerCase().indexOf(third) != -1){
    var text = "\
      Время приготовления:  ~40 минут.\n\
      КАЛОРИЙНОСТЬ: 55 Ккал\n\
      БЕЛКИ: 1,2  Грамм\n\
      ЖИРЫ: 1,9 Грамм\n\
      УГЛЕВОДЫ: 8,2 Грамм\n\
      \n\
      ИНГРЕДИЕНТЫ ПОРЦИИ 12\n\
       \n\
      РЖАНАЯ МУКА 90 г\n\
      ОКАРА 100 г\n\
      КАКАО-ПОРОШОК 10 г\n\
      МЕД 40 г\n\
      РАСТИТЕЛЬНОЕ МАСЛО 2 чайные ложки\n\
      СПЕЦИИ по вкусу\n\
    ";
    bot.sendPhoto(msg.chat.id, "https://s1.eda.ru/StaticContent/Photos/120131083136/140323005041/p_O.jpg" , {caption: "Шоколадное печенье из окары"});
    bot.sendMessage(msg.chat.id, text)
  }

  var what = "idiot";
  if (msg.text.includes(what)) {
    bot.kickChatMember(msg.chat.id,  msg.from.id);
  }

});

//handler for start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Добро пожаловать.', {
    "reply_markup": {
      "keyboard": [["Об окаре", "Рецепты"], ["Взять", "Отдать"]]
    }
  })
});
bot.onText(/\Назад/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Добро пожаловать.', {
    "reply_markup": {
      "keyboard": [["Об окаре", "Рецепты"], ["Взять", "Отдать"]]
    }
  })
});


bot.onText(/\Рецепты/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Выберите категорию блюд', {
    "reply_markup": {
      "keyboard": [["Первое", "Второе"], ['Десерт'], ["Назад"]]
    }
  })
});


//handler for sendPhoto
bot.onText(/\/sendpic/, (msg) => {
  bot.sendPhoto(msg.chat.id, "https://im0-tub-ru.yandex.net/i?id=c9ae7976fffb8b9f923c5c19cea40286&n=13" , {caption: text});
});