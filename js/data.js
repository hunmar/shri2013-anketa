var data = { 'tasks': [
    {
        'title': 'Вопрос 1',
        'text': '<p>Год рождения</p>',
        'input': '<input type="text" tabindex="1" tabindex="1" name="q1" id="q1">',
        'hint': 'Введите реальный год'
    },
    {
        'title': 'Вопрос 2',
        'text': '<p>Город, в котором вы живёте</p>',
        'input': '<input type="text" tabindex="2" name="q2" id="q2">',
        'hint': 'Поле не должно быть пустым'
    },
    {
        'title': 'Вопрос 3', 'text': '<p>Вуз, факультет, специальность, кафедра</p>',
        'input': '<input type="text" tabindex="3" name="q3" id="q3">',
        'hint': 'Поле не должно быть пустым'
    },
    {
        'title': 'Вопрос 4',
        'text': '<p>Год окончания вуза</p>',
        'input': '<input type="text" tabindex="4" name="q4" id="q4">',
        'hint': 'Введите реальный год'
    },
    {
        'title': 'Вопрос 5',
        'text': '<p>Уровень владения английским языком:</p>',
        'input': '<p><input type="radio" name="q5" tabindex="5" value="1" id="a5_1"><label for="a5_1">&nbsp;начальный</label></p><p><input type="radio" tabindex="6" name="q5" value="2" id="a5_2"><label for="a5_2">&nbsp;средний</label></p><p><input type="radio" name="q5" tabindex="7" value="3" id="a5_3"><label for="a5_3">&nbsp;свободное владение</label></p>',
        'hint': 'Поле не должно быть пустым'
    },
    {
        'title': 'Вопрос 6',
        'text': '<p>Чего вы ожидаете от участия в Школе?</p>',
        'input': '<input type="text" tabindex="8" name="q6" id="q6">',
        'hint': 'Поле не должно быть пустым'
    },
    {
        'title': 'Вопрос 7',
        'text': '<p>Откуда вы о нас узнали?</p>',
        'input': '<input type="text" tabindex="9" name="q7" id="q7">',
        'hint': 'Поле не должно быть пустым'
    },
    {
        'title': 'Вопрос 8',
        'text': '<p>Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?</p>',
        'input': '<input type="text" tabindex="10" name="q8" id="q8">',
        'hint': 'Поле не должно быть пустым'
    },
    {
        'title': 'Вопрос 9',
        'text': '<p>Расскажите о вашем опыте разработки. Нам будет интересно всё — как серьезный интерфейс, так и просто домашняя страничка.</p>',
        'input': '<textarea rows="3" tabindex="11" name="q9" id="q9"></textarea>',
        'hint': 'Поле не должно быть пустым'
    },
    {
        'title': 'Вопрос 10',
        'text': '<p>Если вы где-нибудь работали, расскажите, какие у вас были должностные обязанности и был ли опыт работы в команде.</p>',
        'input': '<textarea rows="3" tabindex="12" name="q10" id="q10"></textarea>',
        'hint': 'Поле не должно быть пустым'
    },
    {
        'title': 'Вопрос 11',
        'text': '<p>Перечислите, какими программными продуктами вы пользуетесь в своей работе — от редактора до специализированных утилит (Intellij Idea, Node.js, Uglify.js, GNU Make). Для каждого укажите, какие задачи вы с помощью него решаете и почему выбрали именно его.</p>',
        'input': '<textarea rows="3" tabindex="13" name="q11" id="q11"></textarea>',
        'hint': 'Поле не должно быть пустым'
    },
    {
        'title': 'Вопрос 12',
        'text': '<p>Пользуетесь ли вы командной строкой? Какими командами вы пользуетесь и какие задачи вы решаете с их помощью? С какими программами вы преимущественно или полностью взаимодействуете через интерфейс командной строки?</p>',
        'input': '<textarea rows="3" tabindex="14" name="q12" id="q12"></textarea>',
        'hint': 'Поле не должно быть пустым'
    },
    {
        'title': 'Вопрос 13',
        'text': '<p>Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр.</p><p>Пример такого числа:</p><p>4! + 0! + 5! + 8! + 5! = 40585</p><p>В качестве ответа на вопрос пришлите ссылку на <a href="http://jsfiddle.net/">http://jsfiddle.net/</a> с вашим кодом или на ваш репозиторий на <a href="https://github.com/">https://github.com/</a>.</p>',
        'input': '<input type="text" tabindex="15" name="q13" id="q13">',
        'hint': 'Это должна быть ссылка на GitHub или jsFiddle'
    },
    {
        'title': 'Вопрос 14',
        'text': '<p>Вы — пилот грузового межгалактического корабля. Ваша работа — перевозка грузов с одной планету на другую. Грузоподъемность вашего корабля ограничена, поэтому за один рейс вы можете перевезти не более N кг полезного груза. Ваш корабль умеет сообщать свое состояние (местоположение и степень загруженности), а также летать в любую точку пространства. Каждая планета может содержать на себе груз, который можно взять. Также на каждой планете груз можно оставить.</p><p>Задание</p><p>Даны незавершенные интерфейсы корабля и планеты. Напишите недостающий код.</p><p>Полное условие задачи доступно на<a href="https://github.com/yandex-shri/introtask-space">https://github.com/yandex-shri/introtask-space</a>.</p><p> В качестве ответа на вопрос пришлите ссылку на <a href="http://jsfiddle.net/">http://jsfiddle.net/</a> с вашим кодом или на ваш репозиторий на <a href="https://github.com/">https://github.com/</a>.</p>',
        'input': '<input type="text" tabindex="16" name="q14" id="q14">',
        'hint': 'Это должна быть ссылка на GitHub или jsFiddle'
    },
    {
        'title': 'Вопрос 15',
        'text': '<p>Сверстайте форму-анкету с нашими заданиями для кандидатов. Страница должна работать в следующих браузерах: MSIE (8, 9, 10), Google Chrome (26, 27), Firefox (20, 21), Opera (12.15, 12.14), Яндекс.Браузер 1.5. По возможности используйте приёмы безопасной деградации CSS. Страница должна содержать интерактив, реализованный с помощью JS и jQuery. Это может быть:</p><p><ul><li>проверка полноты и правильности заполнения полей (где это возможно);</li><li>возможность свернуть и развернуть разделы (аккордеон);</li><li>индикатор заполнения анкеты;</li><li>что-нибудь ещё.</li></ul><p>Подумайте над тем, как эти данные будут отправляться на сервер.</p><p>Будет плюсом, если вы сверстаете страницу, используя БЭМ.</p><p>Дополнительные задания</p><ol><li>Выполните задание про форму-анкету, используя один из классических шаблонизаторов: Handlebars, mustache, Dust, Jade и т.п.</li><li>Выполните задание про форму-анкету, используя один из экзотических шаблонизаторов: XSLT, YATE, BEMHTML и т.п.</li></ol></p><p>Разработку необходимо вести на <a href="https://github.com/">https://github.com/</a>. В качестве ответа на вопрос пришлите ссылку на проект. </p>',
        'input': '<input type="text" tabindex="17" name="q15" id="q15">',
        'hint': 'Это должна быть ссылка на GitHub'

    }
]};
