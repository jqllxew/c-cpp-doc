import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "c/c++",
  description: "c/c++文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
