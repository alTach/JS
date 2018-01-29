let i = 0;
let covertingLetter = "\
Добрый день. \n\
Меня заинтересовала ваша вакансия. Думаю мой профессиональный опыт и умения соответствуют заявленным требованиям. Ищу постоянную работу, на долгосрочные отношения. \n\
В приложении вы найдёте моё резюме. По всем вопросам можете звонить на мой номер или я вам отвечу на электронную почту. \n\
\n\
C уважение, \n\
Алиев Турац \n\
моб: 89650366676 \n\
почта: Turach@list.ru \n"
let vacansy = document.getElementsByClassName('vacancy-serp-item');
let isClicked = 'a[class="search-result-item__label HH-VacancyResponseTrigger-Text g-hidden"]';
let btnClick = 'bloko-link bloko-link_dimmed HH-VacancyResponsePopup-Link';
let sendCovertiongLetter = "bloko-button bloko-button_primary HH-VacancyResponsePopup-Submit HH-SubmitDisabler-Submit";

window.onbeforeunload = function (e) {
	var myMessage = "Вы действительно хотите покинуть страницу, не сохранив данные?";
	return myMessage;
}

function sendResume() {
	if (vacansy[i].querySelector(isClicked)) {
		vacansy[i].getElementsByClassName(btnClick)[0].click();
		if (!document.getElementsByClassName('vacancy-response-resumes')[0]) {
			setTimeout(() => {
				document.querySelector('#resume_25ec340aff0118d2fd0039ed1f415a4d466158').click()
				setTimeout(() => {
					document.getElementsByClassName('bloko-textarea bloko-textarea_sized-rows HH-VacancyResponsePopup-Letter ')[0].value = covertingLetter;
					document.getElementsByClassName(sendCovertiongLetter)[0].click() ? document.getElementsByClassName(sendCovertiongLetter)[0].click() : document.getElementsByClassName('HH-SubmitDisabler-Submit')[0].click();
				}, 500)
			}, 500)
		}
	}
	console.log("Вакансия №: " + i)
	i++;
}
let timerId = setInterval(function () {
	i < vacansy.length ? sendResume() : clearInterval(timerId)
}, 2000);

//инфорамция об объкте
function callback(date) {
	console.log(date);
}