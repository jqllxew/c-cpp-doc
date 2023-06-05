import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "基础",
    icon: "lightbulb",
    prefix: "/basic/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
