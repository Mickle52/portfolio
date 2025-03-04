import "./Resume.css";

const skillsStr = `JavaScript React TypeScript HTML CSS Redux Vite AntDesign Tailwind Bootstrap Git Figma REST-API SCSS Webpack Bitrix Адаптивная-верстка Английский-язык`;
const skillsArr = skillsStr.split(" ").map((skill) => {
  if (skill.includes("-")) {
    return skill.replace("-", " ");
  } else {
    return skill;
  }
});
console.log(skillsArr);

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-container">
        <div className="resume-header">
          <img
            src="/images/resume-photo.jpg"
            alt=""
            width="200"
            height="220"
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
            <p className="experience-main">
              <br />
              Занимался разработкой и поддержкой небольших веб-сайтов и
              приложений. Также небольшим менторством для новичков в команде.
              <br />
              <br />
              Моя роль в проектах включала в себя следующие обязанности:
              <br />
              <br />- Разработка различных блоков на сайте / приложении на React
              (Например: sidebar меню, карточек товаров, модальных окон, форм и
              т.д)
              <br />
              <br /> - Реализация клиентской логики (Получение и отображение
              данных с сервера, подтверждение статуса заказа, перенаправление
              после проверки и отправки форм и т.д.)
              <br />
              <br /> - Оптимизация клиентской логики - Реализация сортировки,
              фильтрации, пагинации на странице
              <br />
              <br /> - Участие в code-reviw и анализ выполненной работы
              <br />
              <br />- Адаптивная вёрстка / Pixel perfect верстка
              <br />
              <br /> - Иногда приходилось самому корректировать дизайн для
              улучшения UX/UI
            </p>
          </div>
          <div className="resume-additional-info">
            Доброго времени суток, меня зовут Михаил. Ищу работу на позицию
            frontend-разработчика.
            <br />
            <br />Я имею более 1 года опыта работы в области
            frontend-разработки, включая создание и поддержку веб-сайтов,
            приложений и интерфейсов для пользователей. Владею широким спектром
            технологий и техник разработки, таких как: React, TypeScript,
            JavaScript и др(весь стек опсан в графе "Навыки"), регулярно
            отслеживаю новые тенденции в IT-сфере.
            <br />
            <br />
            Из моих софт-скилов могу выделить: работу в команде, креативность,
            вовлечённость в сферу IT и чувство юмора
            <br />
            <br /> Если вас заинтересовало моё резюме и вы хотите со мной
            свзяаться, то с радостью отвечу вам в телеграме( @Michael_Sawage )
            или на почте( mickle.simakov@gmail.com )
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
