<!--
 * @Author: 白羽 1665169869@qq.com
 * @Date: 2024-12-04 14:28:41
 * @LastEditors: 白羽 1665169869@qq.com
 * @LastEditTime: 2024-12-04 15:35:42
 * @FilePath: \taobao-tmail-spider\src\App.vue
 * @Description: 
 * Copyright (c) 2024 by 白羽 1665169869@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { isUndefined } from 'lodash-es';
import JSZip from 'jszip-sync';
import { saveAs } from 'file-saver'

const downloadInfo = async () => {
  console.log('下载商品信息, 获取数据中……');
  const titleElement: HTMLHeadingElement | null = document.querySelector('[class^=ItemTitle] h1');
  const descRootElement: HTMLDivElement | null = document.querySelector('#content');
  const descImageList: HTMLImageElement[] = Array.from(descRootElement?.querySelectorAll('.descV8-singleImage-image') || []);


  const zip = new JSZip();
  for (let i = 0; i < descImageList.length; i++) {
    const el = descImageList[i];
    const url: string = el.dataset.src || el.src;
    
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`Failed to fetch image: ${url}`);
    }

    const blob = await resp.blob();


    if (blob.type === 'image/jpeg') {
      zip.file(`${i + 1}.jpg`, blob)
    } else if (blob.type === 'image/png') {
      zip.file(`${i + 1}.png`, blob)
    } else {
      console.error('不支持的图片格式', blob.type)
    }
  }

  const title = titleElement?.title || Date.now().toString()
  const content = await zip.generateAsync({ type: 'blob' })
  saveAs(content, `${title}.zip`)
}




</script>

<template>
  <div class="container">
    <div class="box-button" @click="downloadInfo">
      <p>下载详情页图片</p>
    </div>

    <!-- <div class="max-box" v-else>
      <div class="header">
        <div class="right">
          <div class="close" @click="isShrink = true"><svg t="1733243552059" class="icon" viewBox="0 0 1102 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4277" width="300" height="300"><path d="M701.597538 511.842462l366.119385-366.119385a57.974154 57.974154 0 0 0 0-82.077539l-41.038769-41.038769a57.974154 57.974154 0 0 0-82.077539 0L578.481231 388.726154 212.283077 22.528a57.974154 57.974154 0 0 0-82.077539 0l-41.117538 41.117538a57.974154 57.974154 0 0 0 0 82.077539l366.119385 366.119385-366.119385 366.119384a58.131692 58.131692 0 0 0 0 82.156308l41.038769 41.038769a57.974154 57.974154 0 0 0 82.077539 0l366.119384-366.119385 366.119385 366.119385a57.974154 57.974154 0 0 0 82.077538 0l41.03877-41.038769a58.131692 58.131692 0 0 0 0-82.156308L701.597538 511.842462z" fill="#1E2330" p-id="4278"></path></svg></div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.container {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  .box-button {
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
    background-color: #da3939;
    position: fixed;
    right: 0;
    bottom: 20px;
    font-size: 16px;
    text-align: center;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    color: #fff;
    cursor: pointer;
    user-select: none;
  }

  // .max-box {
  //   width: 98%;
  //   height: 98%;
  //   background-color: #ececec;
  //   position: fixed;
  //   left: 50%;
  //   top: 50%;
  //   z-index: 9999999;
  //   transform: translate(-50%, -50%);

  //   .header  {
  //     position: relative;

  //     .right {
  //       position: absolute;
  //       right: 10px;
  //       top: 10px;

  //       .close {
  //         width: 20px;
  //         height: 20px;
  //         cursor: pointer;
  //         user-select: none;
  //         svg {
  //           width: 100%;
  //           height: 100%;
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>
