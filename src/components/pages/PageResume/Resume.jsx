import "./Resume.css";

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
              Telegram: @Michael_Sawage
              <br />
              Почта: mickle.simakov@gmail.com
            </p>
          </div>
        </div>
        <div className="resume-main">
          <div className="resume-skills">
            JavaScript React TypeScript HTML CSS Redux Vite AntDesign Tailwind
            Bootstrap Git Figma БЭМ REST_API SCSS Webpack Bitrix Адаптивная
            верстка Английский язык
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
          <div className="resume-additional-info"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
