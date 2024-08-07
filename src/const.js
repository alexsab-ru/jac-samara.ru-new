import { phoneFormat } from '@/js/utils/numbers.format';
// Название сайта по умолчанию
export const SITE_NAME = 'JAC Центр Самара';
// Юр лицо
export const LEGAL_ENTITY = 'ООО «Центр Самара»';
// ИНН
export const LEGAL_INN = '6311098600';
// Город
export const LEGAL_CITY = 'г. Самара';
// где? в Городе
export const LEGAL_CITY_WHERE = 'Самаре';
// Описание сайта по умолчанию
export const SITE_DESCR = 'Официальный дилер JAC Motors (Джак Моторс)';
// Имя пользователя в Телегам
export const TELEGRAM = '';
// Телефон по умолчанию
export const PHONE = '8 (846) 977-77-07';
// Бренд
export const BRAND = 'JAC';
// Конечное время для таймера
//string 2024-04-26 or 2024-04-26 23:59:59 or December 31 2015 or December 31 2015 23:59:59 GMT+02:00
export const TIMER_ENDTIME = '2024-07-31';
// Объект для бегущей строки
export const MARQUEE = {title: 'Тотальная распродажа до', dateTo: '31.08.2024', count: [1,2,3,4,5,6,7,8], show: true };
// Ссылка яндекс-виджета
export const LINK_WIDGET = 'https://yandex.ru/map-widget/v1/-/';
// Ссылка организации для виджета
export const LINK_WIDGET_ORGNIZATION = 'CDVxRGLQ';
// Ссылки под хедером
export const LINKS_MENU = [
	// {url: 'cars/', name: 'Авто в наличии'},
	// {url: 'special-offers/', name: 'Спецпредложения'},
	// {url: 'news/', name: 'Новости'},
	{url: 'test-drive/', name: 'Запись на тест-драйв'},
	{url: 'service-request/', name: 'Запись на сервис'},
	{url: '#services', name: 'Услуги'},
	{url: 'contacts/', name: 'Контакты'},
];
// Текстовая строка над хедером
export const HEADER_TOP_LINE = '';
// Текст согласия в формах
export const AGREE_LABEL = '<span>Я согласен на</span><a href="/privacy-policy" class="underline transition-all hover:no-underline" target="_blank">обработку персональных данных</a>';
// Текст информации в футере
export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона <a class="whitespace-nowrap" href="tel:' + phoneFormat(PHONE) + '">' + PHONE + '</a>. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.';
