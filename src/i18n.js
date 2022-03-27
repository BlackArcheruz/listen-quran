import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const language = (lang)=>{
  let Language = localStorage.getItem('Language')
  if(Language){
    return Language
  }else{
    return lang
  }
}
const resources = {
  en: {
    translation: {
      "-sura": "-surah",
      "verse": "-verses",
      "relevation": "Relevation Type: ",
      "Meccan": "Meccan",
      "Medinan": "Medinan",
      "About": "About us",
      "Destination": "Destination",
      "Qur'on": "Quran",
      "Listen": "To listen select one of surah:",
      "Qori": "Edition: ",
      "Translation": "en.ahmedali",
      "verse_long": "consists of a verses",
      "relevation_long_Meccan": 'Revealed in Meccan',
      "relevation_long_Medinan": 'Revealed in Medinan',
      'language': 'Change Language',
      'who': 'Who are we?',
      'Desc': `The Listen-Quran project is produced by young Uzbek programmers and currently works only in Arabic-Uzbek, Arabic-English. The project is currently running in <span> Stable </span> <code> 1.0 </code>. Subsequent versions of the project are also being developed by developers. If you want contribute Join our <a href="https://github.com/BlackArcheruz/listen-quran">Github!</a>. *Now We added listen by verses, but we have only Mishary Al Afasy for verses.`,
      'Destination_desc': `The Listen-Quran project was written by young Uzbek programmers to make it easier to hear the Qur'an and return the love to the Qur'an. Our goal is to return the love of the Qur'an to the Ummah, to make it easier for them to study the interpretations of the Qur'an. The project is not funded by anyone and the goal of the project is not to make money. The main goal of the project is to increase the popularity of Quran recitation.`,
      'NotFound': 'This page doesn\'t exist',
      'Sorry': 'Sorry, that you are searching page is not exist',
      'Back_home': "Go Back home",
      'Select_edition': 'Select Edition:',
      'Select_language': 'Select Language:',
      'Settings': 'Settings',
      'Support': 'Your browser does not support the audio tag.',
      'select_color': 'Select Color:',
      'tasbeh': 'Rosary',
      'namoz': 'Prayer times'
    }
  },
  uz: {
    translation: {
      "-sura": "-sura",
      "verse": " oyat",
      "relevation": "Nozil qilingan joyi: ",
      "Meccan": "Makka",
      "Medinan": "Madina",
      "About": "Biz haqimizda",
      "Destination": "Maqsadimiz",
      "Qur'on": "Qur'on",
      "Listen": "Eshitish uchun suralardan birini tanlang:",
      "Qori": "Qori: ",
      "Translation": "uz.sodik",
      "verse_long": "oyatdan iborat",
      "relevation_long_Meccan": 'Makkada nozil qilingan',
      "relevation_long_Medinan": 'Madinada nozil qilingan',
      'language': 'Tilni o\'zgartirish',
      'who': 'Biz Kimmiz?',
      'Desc': `Listen-Quran loyihasi O'zbekistonlik yosh dasturchilar tomonidan ishlab chiqilgan bo'lib, loyiha hozirda faqat Arab-O'zbek, Arab-Ingliz tillarida ishlamoqda. Loyiha hozirda <span>Stable</span> <code>1.0</code> versiyasida ishga tushirilgan. Loyihaning keyingi versiyalari ham dasturchilar tomonidan ishlab chiqilmoqda. Agarda loyihaga o'z hissangizni qo'shmoqchi bo'lsangiz bizning loyihaning <a href="https://github.com/BlackArcheruz/listen-quran">Github</a>dagi sahifasiga qo'shiling va Qur'on ilmini ulashish maqsadida bizga qo'shiling! * Hozirda oyatma oyat o'qish holati faqat Mishari al Afasiy asosida ishlamoqda`,
      'Destination_desc': `Listen-Quran loyihasi O'zbekistonlik yosh dasturchilar tomonidan Qur'on eshitishni osonlashtirish, Qur'onga muhabbatni yana qaytarish maqsadida yozilgan. Maqsadimiz ummatga yana Qur'on muhabbatini qaytarish, Qur'onni tafsirlarini o'rganishni osonlashtirish. Loyiha hech kim tomonidan moliyalashtirilmagan va loyihadan maqsad pul topish emas. Loyihaning asosiy maqsadi Qur'on eshitishni yanada ommalashtirish.`,
      'NotFound': 'Sahifa topilmadi.',
      'Sorry': 'Siz qidirayotgan sahifa afsuski topilmadi.',
      'Back_home': "Bosh sahifaga qaytish",
      'Select_edition': 'Qorini tanlang:',
      'Select_language': 'Tilni tanlang:',
      'Settings': 'Sozlamalar',
      'Support': 'Sizning browseringiz audio tegini qo\'llab quvvatlamaydi',
      'select_color': 'Rangni tanlang:',
      'tasbeh': 'Tasbeh',
      'namoz': 'Namoz vaqtlari'
    },
    
  },
  uz_cyril:{
    translation: {
    "-sura": "-сура",
    "verse": " оят",
    "relevation": "Нозил қилинган жойи: ",
    "Meccan": "Макка",
    "Medinan": "Мадина",
    "About": "Биз ҳақимизда",
    "Destination": "Мақсадимиз",
    "Qur'on": "Қуръон",
    "Listen": "Эшитиш учун суралардан бирин танланг:",
    "Qori": "Қори: ",
    "Translation": "uz.sodik",
    "verse_long": "оятдан иборат",
    "relevation_long_Meccan": 'Маккада нозил қилинган',
    "relevation_long_Medinan": 'Мадинада нозил қилинган',
    'language': 'Тилни ўзгартириш',
    'who': 'Биз киммиз?',
    'Desc': `Listen-Quran лойиҳаси Ўзбекистонлик ёш дастурчилар томонидан ишлаб чиқилган бўлиб, лойиҳа ҳозирда фақат Араб-Ўзбек, Араб-Инглиз тилларида ишламоқда. Лойиҳа ҳозирда <span>Stable</span> <code>1.0</code> версиясида ишга туширилган. Лойиҳанинг кейинги версиялари ҳам дастурчилар томонидан ишлаб чиқилмоқда. Агарда лойиҳага ўз ҳиссангизни қўшмоқчи бўлсангиз бизнинг лойиҳанинг <a href="https://github.com/BlackArcheruz/listen-quran">Github</a>даги саҳифасига қўшилинг ва Қуръон илмини улашиш мақсадида бизга қўшилинг! * Ҳозирда оятма оят ўқиш ҳолати фақат Мишари ал Афасий асосида ишламоқда`,
    'Destination_desc': `Listen-Quran лойиҳаси Ўзбекистонлик ёш дастурчилар томонидан Қуръон эшитишни осонлаштириш, Қуръонга муҳаббатни яна қайтариш мақсадида ёзилган. Мақсадимиз умматга яна Қуръон муҳаббатини қайтариш, Қуръонни тафсирларини ўрганишни осонлаштириш. Лойиҳа ҳеч ким томонидан молиялаштирилмаган ва лойиҳадан мақсад пул топиш эмас. Лойиҳанинг асосий мақсади Қуръон эшитишни янада оммалаштириш.`,
    'NotFound': 'Саҳифа топилмади.',
    'Sorry': 'Сиз қидираётган саҳифа афсуски топилмади.',
    'Back_home': "Бош саҳифага қайтиш",
    'Select_edition': 'Қорини танланг:',
    'Select_language': 'Тилни танланг:',
    'Settings': 'Созламалар',
    'Support': 'Сизнинг бровзерингиз аудио тегини қўллаб қувватламайди',
    'select_color': 'Рангни танланг:',
    'tasbeh': 'Тасбеҳ',
    'namoz': 'Намоз вақтлари'
    },
  }

};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: language('uz'), 
    

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;