import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "c/c++教程",
  description: "c/c++教程",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
