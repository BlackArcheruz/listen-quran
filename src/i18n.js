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
      'Desc': `The Listen-Quran project is produced by young Uzbek programmers and currently works only in Arabic-Uzbek, Arabic-English. The project is currently running in <span> Beta </span> <code> 0.5 </code>. Subsequent versions of the project are also being developed by developers, and a <span> Stable </span> version of the project will soon be available for fans. If you want contribute Join our <a href="https://github.com/BlackArcheruz/listen-quran">Github!</a>`,
      'Destination_desc': `The Listen-Quran project was written by young Uzbek programmers to make it easier to hear the Qur'an and return the love to the Qur'an. Our goal is to return the love of the Qur'an to the Ummah, to make it easier for them to study the interpretations of the Qur'an. The project is not funded by anyone and the goal of the project is not to make money. The main goal of the project is to increase the popularity of Quran recitation.`,
      'NotFound': 'This page doesn\'t exist',
      'Sorry': 'Sorry, that you are searching page is not exist',
      'Back_home': "Go Back home",
      'Select_edition': 'Select Edition:',
      'Select_language': 'Select Language:',
      'Settings': 'Settings'
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
      'Desc': `Listen-Quran loyihasi O'zbekistonlik yosh dasturchilar tomonidan ishlab chiqilgan bo'lib, loyiha hozirda faqat Arab-O'zbek, Arab-Ingliz tillarida ishlamoqda. Loyiha hozirda <span>Beta</span> <code>0.5</code> versiyasida ishga tushirilgan. Loyihaning keyingi versiyalari ham dasturchilar tomonidan ishlab chiqilmoqda va tez orada Qur'on muxlislari uchun loyihaning <span>Stable</span> versiyasi ham taqdim etiladi. Agarda loyihaga o'z hissangizni qo'shmoqchi bo'lsangiz bizning loyihaning <a href="https://github.com/BlackArcheruz/listen-quran">Github</a>dagi sahifasiga qo'shiling va Qur'on ilmini ulashish maqsadida bizga qo'shiling!`,
      'Destination_desc': `Listen-Quran loyihasi O'zbekistonlik yosh dasturchilar tomonidan Qur'on eshitishni osonlashtirish, Qur'onga muhabbatni yana qaytarish maqsadida yozilgan. Maqsadimiz ummatga yana Qur'on muhabbatini qaytarish, Qur'onni tafsirlarini o'rganishni osonlashtirish. Loyiha hech kim tomonidan moliyalashtirilmagan va loyihadan maqsad pul topish emas. Loyihaning asosiy maqsadi Qur'on eshitishni yanada ommalashtirish.`,
      'NotFound': 'Sahifa topilmadi.',
      'Sorry': 'Siz qidirayotgan sahifa afsuski topilmadi.',
      'Back_home': "Bosh sahifaga qaytish",
      'Select_edition': 'Qorini tanlang:',
      'Select_language': 'Tilni tanlang:',
      'Settings': 'Sozlamalar'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language('uz'), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;