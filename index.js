//============Sidebar============

const menuItems = document.querySelectorAll(".menu-item");
const notifications = document.getElementsByClassName("notifications");
const notificationCounts = document.querySelectorAll(
  "#notification .notification-count "
);
const msgCounts = document.querySelectorAll(
  "#msg-notification .notification-count "
);
const msgsNotification = document.querySelectorAll("#msg-notification");

//============RightMessagesFilter============
const names = document.querySelectorAll(".messages .profile h5");
const profiles = document.querySelectorAll(".messages .profile");
const messageSearch = document.querySelector("#message-search");

//============CustomizeTheme============
const themes = document.querySelectorAll(".sidebar .theme");
const themeModel = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-font span");
const root = document.querySelector(":root");

const colorPalette = document.querySelectorAll(".choose-color span");

const background = document.querySelectorAll(".choose-bg div");
//============Sidebar============
const removeActiveItem = () => {
  menuItems.forEach((item) => item.classList.remove("active"));
};
const removeActiveFont = () => {
  fontSizes.forEach((item) => item.classList.remove("active"));
};
const removeActiveColor = () => {
  colorPalette.forEach((item) => item.classList.remove("active"));
};
const removeActiveBg = () => {
  background.forEach((item) => item.classList.remove("active"));
};
menuItems.forEach((item) => {
  item.onclick = () => {
    removeActiveItem();
    item.classList.add("active");
    if (item.id == "notification") {
      for (element of notifications) element.style.display = "flex";
      for (count of notificationCounts) count.style.display = "none";
    } else {
      for (element of notifications) {
        element.style.display = "none";
      }
    }
  };
});
for (notification of msgsNotification) {
  notification.addEventListener("click", () => {
    document.querySelector(".messages").style.boxShadow =
      "0 0 1rem var(--color-primary)";
    for (count of msgCounts) count.style.display = "none";
    setTimeout(() => {
      document.querySelector(".messages").style.boxShadow = "none";
    }, 2000);
  });
}

//============RightMessagesFilter============
messageSearch.addEventListener("input", () => {
  for (let nameIndex = 0; nameIndex < names.length; nameIndex++)
    if (
      !names[nameIndex].textContent ||
      !names[nameIndex].textContent
        .toLowerCase()
        .includes(messageSearch.value.toLowerCase())
    )
      profiles[nameIndex].style.display = "none";
    else profiles[nameIndex].style.display = "flex";
});

//============CustomizeTheme============
for (theme of themes)
  theme.addEventListener("click", () => {
    themeModel.style.display = "grid";
    addEventListener("click", (event) => {
      if (event.target == themeModel) themeModel.style.display = "none";
    });
  });

fontSizes.forEach((font) => {
  font.addEventListener("click", () => {
    removeActiveFont();
    font.classList.add("active");
    let fontSize;
    if (font.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (font.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (font.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (font.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (font.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    removeActiveColor();
    color.classList.add("active");
    let prinaryHue;
    if (color.classList.contains("color-1")) prinaryHue = "252";
    else if (color.classList.contains("color-2")) prinaryHue = "52";
    else if (color.classList.contains("color-3")) prinaryHue = "352";
    else if (color.classList.contains("color-4")) prinaryHue = "152";
    else if (color.classList.contains("color-5")) prinaryHue = "202";

    root.style.setProperty("--primary-color-hue", prinaryHue);
  });
});
let darkColorlightnees;
let whiteColorlightnees;
let lightColorlightnees;

background.forEach((bg) => {
  bg.addEventListener("click", () => {
    if (bg.classList.contains("bg-1")) {
      removeActiveBg();
      bg.classList.add("active");
      darkColorlightnees = "17%";
      whiteColorlightnees = "100%";
      lightColorlightnees = "95%";
      changeBG();
    } else if (bg.classList.contains("bg-2")) {
      removeActiveBg();
      bg.classList.add("active");
      darkColorlightnees = "95%";
      whiteColorlightnees = "20%";
      lightColorlightnees = "15%";
      changeBG();
    }
    if (bg.classList.contains("bg-3")) {
      removeActiveBg();
      bg.classList.add("active");
      darkColorlightnees = "95%";
      whiteColorlightnees = "10%";
      lightColorlightnees = "0%";
      changeBG();
    }
  });
});

const changeBG = () => {
  root.style.setProperty("--dark-color-lightness", darkColorlightnees);
  root.style.setProperty("--light-color-lightness", lightColorlightnees);
  root.style.setProperty("--white-color-lightness", whiteColorlightnees);
};
