# 🛒 Online Steam Shop

## 📜 Описание проекта
Минимально работающий интернет-магазин, специализирующийся на продаже ножей для платформы Steam.

---

## 🚀 Реализованный функционал
### 🟢 Backend (Laravel)
- Настроено подключение к базе данных MySQL, создана архитектура проекта.
- CRUD-операции для товаров (создание, редактирование, удаление, просмотр).
- Реализована аутентификация с помощью Laravel Sanctum.

### 🟢 Frontend (Vue.js 3 + Tailwind CSS)
- Регистрация и авторизация пользователей.
- Каталог ножей с фильтрацией и сортировкой.
- Админ-панель с CRUD-операциями.
- Адаптивный интерфейс с Tailwind CSS.
- Использование Pinia и Axios для управления состоянием и запросами.

---

## ⏱️ Время разработки
Затрачено: **6-7 часов**

## 🟢 Решённые задачи
- Регистрация и авторизация.
- Каталог товаров.
- Админ-панель для управления товарами.

## ⚠️ Возникшие трудности
- Валидация данных и обработка ошибок. + решил с помощью примеров
- Управление состоянием аутентификации. + решил с помощью просмотра примеров использования Pinia

---

## ⚙️ Как работает сайт
### 🟢 Архитектура проекта
**Backend (Laravel):**
1. Реализованы миграции, модели и контроллеры для пользователей и товаров (ножей).
2. Аутентификация через Laravel Sanctum для безопасной регистрации и входа.
3. CRUD-операции для товаров.

**Frontend (Vue.js 3 + Tailwind CSS):**
1. Регистрация и авторизация через компоненты.
2. Каталог товаров с фильтрацией и сортировкой.
3. Админ-панель для управления товарами.
4. Адаптивная верстка под мобильные и десктопные устройства.

### 🟢 Основной функционал
1. Пользователи могут зарегистрироваться и авторизоваться.
2. Администратор может управлять товарами (создавать, редактировать, удалять).
3. CRUD-операции выполняются через API-запросы (axios + pinia).

### 🟢 Взаимодействие между Frontend и Backend
1. Vue.js отправляет HTTP-запросы на API, реализованный в Laravel.
2. API поддерживает регистрацию, вход, CRUD-операции.
3. Обработка ошибок и уведомления в интерфейсе.

### 🟢 Адаптивность и дизайн
1. Tailwind CSS для быстрой стилизации.
2. Плавные анимации и интерактивные элементы.
3. Поддержка мобильных и десктопных устройств.

---

## 🌍 Ссылка на репозиторий
[GitHub: выбирайте ветку developer ] https://github.com/Shpaldik/online-steam-shop

