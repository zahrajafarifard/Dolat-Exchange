"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Configs", [
      {
        id: 1,
        address: "تهران، خیابان ولیعصر، پلاک 123",
        phone: "021-12345678",
        email: "info@example.com",
        whatsApp: "021-12345678",
        fax: "021-12345678",
        telegram: "@example_support",
        instagram: "@example_exchange",
        workHours: "شنبه تا جمعه: 9 صبح تا 6 عصر",
        aboutUs: `ما در قلب تهران با هدف ارائه خدمات حرفه‌ای در زمینه تبادل ارز فعالیت می‌کنیم. تلاش ما همواره بر این بوده است که تجربه‌ای سریع، امن و شفاف برای مشتریان خود فراهم کنیم. با بهره‌گیری از تیمی متخصص و آشنا به بازارهای مالی، خدمات ما شامل خرید و فروش ارز با نرخ‌های رقابتی و به‌روز است.
رضایت و اعتماد مشتریان برای ما در اولویت قرار دارد و همواره سعی کرده‌ایم با ارائه خدمات دقیق، پاسخ‌گویی سریع و پشتیبانی قابل اعتماد، جایگاه خود را به‌عنوان یک صرافی معتبر تثبیت کنیم.
ما معتقدیم که شفافیت، امنیت و مسئولیت‌پذیری سه اصل اساسی در فعالیت‌های مالی هستند و بر همین اساس خدمات خود را ارائه می‌دهیم.`,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Configs", null, {
      ignoreduplicates: true,
    });
  },
};
