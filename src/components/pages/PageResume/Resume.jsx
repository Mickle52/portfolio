import "./Resume.css";

const skillsStr = `JavaScript React TypeScript Next.js Node.js HTML CSS SCSS Redux Vite AntDesign MaterialUI Tailwind Bootstrap Git Figma REST-API  Webpack Bitrix Адаптивная-верстка Английский-язык`;
const skillsArr = skillsStr.split(" ").map((skill) => {
  if (skill.includes("-")) {
    return skill.replace("-", " ");
  } else {
    return skill;
  }
});

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-container">
        <div className="resume-header">
          <img
            src="images/resume-photo.jpg"
            alt="resume-photo"
            loading="lazy"
            className="resume-photo"
          />
          <div className="resume-header__info">
            <p className="resume-name">Симаков Михаил</p>
            <p className="resume-position">FRONTEND DEVELOPER</p>
            <p className="resume-contacts">
              Контакты:
              <br />
              Telegram:{" "}
              <a href="https://t.me/Michael_Sawage" target="_blank">
                @Michael_Sawage
              </a>{" "}
              <br />
              Почта: mickle.simakov@gmail.com
              <br />
              Резюме на HH.ru:{" "}
              <a
                href="https://hh.ru/resume/b01993feff0e7803170039ed1f6a3852614258"
                target="_blank"
              >
                ссылка
              </a>
              <br />
              Мой GitHub:{" "}
              <a href="https://github.com/Mickle52" target="_blank">
                Mickle52
              </a>
            </p>
          </div>
        </div>
        <div className="resume-main">
          <div className="resume-skills">
            {skillsArr.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
          <div className="resume-experience">
            <p className="experience-header">
              Опыт работы —1 год 2 месяца
              <br />
              Позиция Frontend-разработчик
            </p>
            <br />
            <p className="experience-main">
            В мои обязанности на данной должности входило:
            <br />
            <br />
            - Разработка адаптивных и отзывчивых пользовательских интерфейсов (UI) с использованием HTML5, CSS3, JavaScript (ES6+) и React, обеспечивающих кроссбраузерную совместимость и оптимальный пользовательский опыт на различных устройствах
            <br />
            <br />
            - Взаимодействие с backend-разработчиками для интеграции API
            <br />
            <br />
            - Исправление и отладка ошибок и багов в существующем коде, а также проведение тестирования для обеспечения стабильности и надежности веб-приложений
            <br />
            <br />
            - Активное участие в code review, выявление и устранение потенциальных проблем и улучшение качества кода
            <br />
            <br />
            - Адаптивная вёрстка / Pixel perfect верстка
            <br />
            <br />
            За время работы я:
            <br />
            <br />
            - Разработал интерактивную карту на React с использованием Google Maps API, что позволило улучшить пользовательский опыт и увеличить конверсию
            <br />
            <br />
            - Разработал с нуля интерактивный dashboard для мониторинга актуального курса криптовалют и оценки возможных инвестиций, используя React, TypeScript, Ant Design, Chart.js и Tailwind CSS. Dashboard включал в себя таблицы с ассетами пользователей, графиком с функцией фильтрации, sidebar-меню с возможностью добавить новый ассет в портфель с возможностью выбора монеты, курса и даты 
            <br />
            <br />
            - Интегрировал сторонний API для отслеживания курса валют, обеспечив автоматическое обновление данных в режиме реального времени. Это позволило расширить функциональность приложения, предоставляя пользователям актуальную информацию и улучшить пользовательский опыт
            <br />
            <br />
            - Оптимизировал производительность веб-приложения  путем внедрения lazy loading и code splitting, что привело к сокращению времени загрузки страницы
            <br />
            <br />
            - Активно участвовал в разработке новых фич и улучшении пользовательского интерфейса, внося предложения по улучшению дизайна и функциональности
            </p>
          </div>
          <div className="resume-additional-info">
          —	Меня зовут Михаил и я Frontend разработчик с желанием расти в карьере. Специализируюсь на создании сложных SPA с использованием React и TypeScript. Для профессионального развития на регулярной основе смотрю обучающие ролики на YouTube, читаю статьи на Habr, stackoverflow и Medium, а также при любой возможности консультируюсь у более опытных коллег.
            <br />
            <br />
            —  На данном этапе я совершенствуюсь в Next.js и осваиваю backend
            технологии для дальнейшего карьерного роста. Люблю решать сложные
            задачи и работать в команде. Считаю, что работа — это
            непрерывное образование, поэтому всегда ищу возможности для
            саморазвития.
            <br />
            <br />
            — Если вас заинтересовало моё резюме и вы хотите со мной
            свзяаться, то с радостью отвечу вам в телеграме( @Michael_Sawage )
            или на почте( mickle.simakov@gmail.com )
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
