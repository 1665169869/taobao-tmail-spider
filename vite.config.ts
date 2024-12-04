/*
 * @Author: 白羽 1665169869@qq.com
 * @Date: 2024-12-04 00:06:13
 * @LastEditors: 白羽 1665169869@qq.com
 * @LastEditTime: 2024-12-04 13:26:58
 * @FilePath: \taobao-tmail-spider\vite.config.ts
 * @Description:
 * Copyright (c) 2024 by 白羽 1665169869@qq.com, All Rights Reserved.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn } from "vite-plugin-monkey";
import postcssPresetEnv from "postcss-preset-env"; 

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssPresetEnv]
    },
  },
  plugins: [
    vue(),
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: "淘宝天猫商品详情页数据抓取",
        icon: "https://vitejs.dev/logo.svg",
        namespace: "npm/vite-plugin-monkey",
        match: [
          "https://detail.tmall.com/item.htm?id=*",
          "https://item.taobao.com/item.htm?id=*",
        ],
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr("Vue", "dist/vue.global.prod.js"),
        },
      },
    }),
  ],
});
