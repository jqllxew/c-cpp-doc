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
      text: "课程安排",
      icon: "laptop-code",
      link: "markmap/lecture.html",
      target: "_blank",
    },
    {
      text: "笔试题",
      icon: "laptop-code",
      link: "exam/",
    },
    {
      text: "第一阶段 - 开发环境",
      icon: "laptop-code",
      prefix: "stage1-env/",
      link: "stage1-env/",
      children: "structure",
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
