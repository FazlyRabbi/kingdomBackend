export default {
  config: {
    locales: ["en"],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to kingdomofkush!",
        "Auth.form.welcome.subtitle": "Log in to your Admin account",
        "app.components.LeftMenu.navbrand.title": "Dashboard",
        "app.components.HomePage.welcome.again":
          "WELCOME TO KINGDOM OF KUSH ADMIN DASHBOARD",
        "app.components.HomePage.welcomeBlock.content.again": `TOGETHER WE PROSPER. THE FUTURE IS NOW
        Kingdom Of Kush
        Kingdom of Kush LLC
        One World Trade Center Floor 85
        New York, NY 10007
        USA`,
        "app.components.HomePage.button.blog": ` 󠀠`,
      },
    },
  },

  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },

  bootstrap() {},
};
