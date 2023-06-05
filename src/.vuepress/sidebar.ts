import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "知识地图",
      icon: "laptop-code",
      link: "markmap/knowledge.html",
      target: "_blank",
    },
    {
      text: "技能",
      icon: "laptop-code",
      link: "skill",
    },
    {
      text: "基础",
      icon: "laptop-code",
      prefix: "basic/",
      link: "basic/",
      children: "structure",
    },
    "slides",
  ],
});
