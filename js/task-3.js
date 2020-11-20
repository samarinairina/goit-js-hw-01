// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

const ADMIN_PASSWORD = 'jqueryismyjam';
const message = prompt('ADMIN_PASSWORD');
console.log(message);

// alert('Отменено пользователем!');
if {(ADMIN_PASSWORD = true)
  message = 'Добро пожаловать!';
console.log(message);}
else if {(ADMIN_PASSWORD = false)
    message = 'Доступ запрещен, неверный пароль!';
      console.log(message);
}
    else {
    message='Отменено пользователем!'
}
