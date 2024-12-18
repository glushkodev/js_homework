// --- 1 --- Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в городе %Город% и работаю в компании %Компания%. Мои контактные данные: %Телефон%, %Почта%.».

let name = prompt('Введите имя'),
	age = prompt('Введите возраст'),
	city = prompt('Введите город проживания'),
	phone = prompt('Введите телефон'),
	email = prompt('Введите эл. почту'),
	company = prompt('Введите название компании');

console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}`);

// --- 2 --- Определите по введенному возрасту (исп. значение из задания 1) год рождения.Выведите на экран «%Имя% родился в %Год% году.».

let year = 2024 - age;

console.log(`${name} родился в ${year} году`);

//  --- 3 --- Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let num = "123321";

sum1 = +num[0] + +num[1] + +num[2];
sum2 = +num[3] + +num[4] + +num[5];

if (sum1 == sum2) {
	console.log('Да');
} else {
	console.log('Нет');
};

// --- 4 --- Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. 

{
	let a = prompt('Введите число А');

	if (+a > 0) {
		console.log('Верно');
	} else {
		console.log('Неверно');
	};
}

// --- 5 --- Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму вквадрат.

let a = 10,
	b = 2,
	sum = a + b,
	diff = a - b,
	proizv = a * b,
	ch = a / b;

console.log(`Сумма ${sum}, Разность ${diff}, Произведение ${proizv}, Частное ${ch}`);

if (sum > 1) {
	console.log(sum * sum);
}

// --- 6 --- Если переменная a (значение 10) больше 2 и меньше 11, или переменная b (значение 2) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите'Неверно'.

{
	let a = 10,
		b = 2;

	if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
		console.log('Верно');
	} else {
		console.log('Неверно');
	}
}

// --- 7 --- В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).  Решить задачу используя (switch)

let n = 33;

switch (true) {
	case (n >= 0 && n < 15) :
		console.log('В первую');
	break;
	case (n > 16 && n < 30) :
		console.log('Во вторую');
	break;

	case (n > 31 && n < 45) :
		console.log('В третью');
	break;

	case (n > 46 && n <= 60) :
		console.log('В четвертую');
	break;
	default:
		console.log('Неверное число');
}

//  --- 8 --- В переменной day лежит число из интервала от 1 до 31. Определите в какую декадумесяца попадает это число (в первую, вторую или третью).

let day = 19;

if (day >= 1 && day <= 10) {
	console.log('В первую');
} else if (day >= 11 && day <= 20) {
	console.log('Во вторую');
} else if (day >= 21 && day <= 31) {
	console.log('В третью');
} else {
	console.log('Неверное число');
}

// --- 9 ---  Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», соответственно.

let days = +prompt('Введите количество дней года от 1 до 365'),
	years = days / 365,
	month = days / 31,
	week = days / 7,
	hour = days * 24,
	min = hour * 60,
	sec = min * 60;

if (years < 1 && month < 1 && week < 1) {
	console.log(`${days} дней это - меньше года, меньше месяца, меньше недели, ${hour} часов, ${min} минут, ${sec} секунд`);
} else if (years < 1 && month < 1) {
	console.log(`${days} дней это - меньше года, меньше месяца, ${week} недель, ${hour} часов, ${min} минут, ${sec} секунд`);
} else if (years < 1) {
	console.log(`${days} дней это - меньше года, ${month} месяцев, ${week} недель, ${hour} часов, ${min} минут, ${sec} секунд`);
} else {
	console.log(`${days} дней это - ${years} лет, ${month} месяцев, ${week} недель, ${hour} часов, ${min} минут, ${sec} секунд`);
}

// --- 10 --- Напишите скрипт, который по введенному дню (исп. значение переменной из 8 задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 	т.д.). Скрипт определение поры года написать через switch.

if (day >=1 && day <= 31) {
	console.log(`${day} день года это январь`);
} else if (day >= 32 && day <= 59) {
	console.log(`${day} день года это февраль`);
} else if (day >= 69 && day <= 90) {
	console.log(`${day} день года это март`);
} else if (day >= 91 && day <= 120) {
	console.log(`${day} день года это апрель`);
} else if (day >= 121 && day <= 151) {
	console.log(`${day} день года это май`);
} else if (day >= 152 && day <= 181) {
	console.log(`${day} день года это июнь`);
} else if (day >= 182 && day <= 212) {
	console.log(`${day} день года это июль`);
} else if (day >= 213 && day <= 243) {
	console.log(`${day} день года это август`);
} else if (day >= 244 && day <= 273) {
	console.log(`${day} день года это сентябрь`);
} else if (day >= 274 && day <= 304) {
	console.log(`${day} день года это октябрь`);
} else if (day >= 305 && day <= 334) {
	console.log(`${day} день года это ноябрь`);
} else if (day >= 335 && day <= 365) {
	console.log(`${day} день года это декабрь`);
} else {
	console.log(`В году 365 дней, введите корректную дату`);
}

switch (true) {
	case (day >= 1 && day <= 59):
	case (day >= 336 && day <= 365):
		console.log(`${day} день года это зима`);
	break;
	case (day >= 60 && day <= 151):
		console.log(`${day} день года это весна`);
	break;
	case (day >= 152 && day <= 243):
		console.log(`${day} день года это лето`);
	break;
	case (day >= 244 && day <= 335):
		console.log(`${day} день года это осень`);
	break;
	default:
		console.log(`В году 365 дней, введите корректную дату`);
}

// Необходимо написать программу, которая проверяет пользователя на знание таблицы умножения. Пользователь сам вводит два целых однозначных числа через promt. Затем вводит результат умножения и в результате должен увидеть на экране правильно он ответил или нет (результат вывести в alert)

let a1 = prompt('Введите первое число', 4),
	a2 = prompt('Введите второе число', 5),
	a3 = prompt('Умножьте два числа');

if (a1 * a2 == a3) {
	alert('Правильно');
} else {
	alert('Неправильно');
}

// Дана строка состоящая из символов, например ‘abcde’. Проверить, что первым символом этой строки является буква ‘a’. Если это так вывести слова ‘да’, в противном случае выведите ‘нет’

let str = 'bbcde';

if (str[0] == 'a') {
	console.log('Да');
} else {
	console.log('Нет');
}

// У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто «лягут» на третью и треугольника не получится.Пользователь вводит поочерёдно через prompt длины трех сторон. Используя конструкцию if..else (один раз), напишите код, который должен определять, может ли существовать треугольник при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной. Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.

let f = +prompt('Введите длину первой стороны треугольника'),
	d = +prompt('Введите длину второй стороны треугольника'),
	e = +prompt('Введите длину третьей стороны треугольника');

if ((f + d) > e && (f + e) > d && (e + d) > f) {
	console.log('Такой треугольник существует');
} else {
	console.log('Такого треугольника не существует');
}


// --- Задания ниже вне ДЗ решали на занятии --- 

// Если возраст:- от 0 до 12 - вывести <name> is a child- с 12 до 18 - вывести <name> is a teenagerиначе - вывести Steve is an adult Решить задачу 3 способами: 1 if-else 2 switch. 3 Условный (тернарный) оператор

if  (age > 0 && age < 12) {
	console.log(`${name} is a child`);
} else if (age > 12 && age < 18) {
	console.log(`${name} is a teenager`);
} else {console.log(`${name} is an adult`);}

switch (true) {
	case (age > 0 && age < 12):
		console.log(`${name} is a child`);
	break;
	case (age >= 12 && age < 18):
		console.log(`${name} is a teenager`);
	break;
	default:
		console.log(`${name} is an adult`);
}

console.log(`${name} is a ${(age > 0 && age < 12) ? 'child' : (age >= 12 && age < 18) ? 'teenager' : 'adult'}`);

//Пользователь вводит два числа. Найти и вывести (в alert) максимальное из двух чисел. Учтите вариант равенства чисел

let num1 = prompt('Введите первое число', 22),
	num2 = prompt('Введите второе число', 41);

if (+num1 > +num2) {
	alert (`Максимальное число ${+num1}`);
} else if (+num2 > +num1) {
	alert (`Максимальное число ${+num2}`);
} else {
	alert (`Числа равны`);
}