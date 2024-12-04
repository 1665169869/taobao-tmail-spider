/*
 * @Author: 白羽 1665169869@qq.com
 * @Date: 2024-12-04 00:06:13
 * @LastEditors: 白羽 1665169869@qq.com
 * @LastEditTime: 2024-12-04 15:10:17
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
        author: "白羽",
        version: Date.now().toString(),
        description: "可以获取淘宝/天猫的商品数据，目前仅支持淘宝天猫商品详情页图片",
        namespace: 'https://github.com/1665169869/taobao-tmail-spider',
        icon: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABEhSURBVHhe1VsHlFTVGV6UIydYghIFYZcQwYLGHhNL5JyIxmOLJmpUmjSBZUFEkSYlFiyJcoiCoogaaxIssUWNggE0do0iNjRW0J2ZN7szs7O7U3b//P9/y/vve3cWgsbiOZ/3vlvevd/f7n/fMlX4H3SErp07wcCeXeDKg78PDw7qDutP7QH1Z+4KibMMenFp2mJ9nvavev5GfF513M6w5PBuULfXttB/h86wVSc/Hw+8jbBTl63g5iN25MXsgqIu222/IOMb93XO33DGrnD+PtvBNlt18vITcBs6IeoGbGsl7y5g6pU3ap6/LfPJOk7r+z2HYwThw9ZoNrf+3NW6LKNtDE/dN9bXxvDUfWN9bQxP3Td28aHdmJ/kq6EqpHlDXr0wlLJ8ZugF5CKyLsdHnxl6vJwj63J89Jmhx8s5si7Hy+cnj/2BTwiqQsFDDYy/jEoD2R7We3na3NJAtof1r2/+9Yd1iwuAAp4c6HtJWA8Xk33mOdonx6j6Nz8/EhOqYClGe2NW7mB/qeqhifGzbY+Pj5aq/s3NpxPCng50zptJZoAZbKVtnm17/MWy/bswfwoekSyAgT26cIN3om6P9ofj/P3fhfl0PHKyRBkeTTDSMYP8dTeyUmnbRZs7R9a/RfMH9+KMsYrSWzNQllyv1C7aov3OuErtoi3a74yr1C7aov3OuErtgxUm7Y1uYHL7cIKSkoHtE89hGUqUn0UbIZh8KCTO3m2L5zt94jkst2A+lUMUlmDeUyU75QR3YrhQtAzHuG31Z/WGtqZGaG9rg3LyM2h9YxXkn7gFcn+aDcHMYzc93+nbgvWdPj2f6qR9EsDQXrD6pJ1DAbgTXMgx9LLk2T3ViyJ9cn561i+hvb3di9wts+y4SvMTw/pA8pwBkJp4MCQnHAjJ4T/U/UhGjKs4X4DbtdknhuD8oVgOw1skosoOiJQSpi1zzY5Q3tAZoL0K2vOdoPmprpAc1dMZY8rcXZd6yZNVJEf25zFmfDDjGMjdPhfyK+6CwnsvQ1tzzj+3OQulz96D5tXLIXsbWtK0o2LrmlKCiNdbzSOQeGIYlsN3JQH4zUshlHbjgh0BoCqG4tvbqAUi84v/ecNLounuy9AUe0HjlYNRgHdAOfjcO25zQQLLLp4I9UNqnPUVFDeleYRDniw5YgFSGJIQofzF1l4BEBp/j5mkmE8a9W22tPEDjAFzobThfW//l0HhnRfQXX4S378lj3tjASCQfALJJ0agAKJEzbP0swSauY+4Qf7e7Zz5+ceXeTe5JWgrtHrbfShn05Ced3K4bzzr2edJAEg8ScTR7JNInJAYQS4gieq6FASXKMX2lk5e8oTsUkqm1PzU+P2grSXv3aAPZBXNq/4CuWXToeHiX0N6xiBITfopJMcMQI3V8PoUDNNzToTM4knQvOJOaC8VvO8ilBvqMWgeEGqeySNZ7fNk9kQ8ORKFMEq4gEOYyAh3oLJlRVcveQqGydpd7Lj8Yzd7N2bQls/gcXgrus1wJLaPXWNT61t/RgQooOaVd/MR61uD3CExvI8yee33TBzB2kfyiZEoBBKAWiDMneWiTjmyJxTWdomQ3wqJ7GTnB5MOgfaiXzsUFLNLL7QngLvWptc3kO1Nf77CuxYhs6iWyRuzZ5ytNJ8g7Y9WYAsw8C1iSq4jGi/vDrm7t4fsDd0gOa6H7SO0vrYitpGWFx6FhjknQKp2f2h5/hFoemgxZJZMgYa5J2Js2dOZv8n1ue5edFrW3Btbk1B47yVl+kxcaZ6CHmmdQQIYoy2AX2hKZzF/qer4QvHcdOclzgZKiU/QOoapsRiMWl990uknZK4eEb7PlPjOSuvK9cz6JMS2ClaXnne80roOeKz9UVgy+d7oguIUMAgXIGhpm2cx1owxZeMVZ3Ki0l4qQtODi3DR3bBdzW9afnVsc62vr2LLSM/7FTRceipa1hkssMYFoyFzbS1a2HkcGOnYbLpnPjTdezVbD50wzU/fA4nRe6n1ET7hEvJ/X8IC8GmeMbZ3pVTYNTNTUnQmUw7Huf3B9EGQnk7ZWTifInelYLWlaCu0oFX1VusisjdN8Y4rfrRWaF7BkkftCwFgpyBCZaw+uBr96hU84poghxolDVN/R/MziyYi+bJ3c18GlDLzWrQOHnfBtIHece3lEqTO6Ss0r8yekBqH9XHiGIyWXBfPZIby5SW84VE6W2n+lyKPbkTvp4yx+NE6KLz7Et8mm595gF2CLkq0jkpxiVw//3sQDXMHeTSPQPLJ8WgBZsO8eSaA2qSXa1B7cOEvKh5vlJgkhvV156N5Fte/asdQQMygb9P3gdTEQyBVh7e7sfvihgZ4hVT88E1nfX63eOa7B5Hn9BaBSU5briH2HkLmulFK+9rkibzRfqpWxIDoggbU1njVUL6F+RYgUOJB2ZqcT0lO8cO10PTAH9Fd+tm+aEnajr6P5pn30DijFH425M21loBnfWmDf3+5O6bhXrTps+ZD8slacQq4C7pQC+MN7ppRrB3fQq1r13CccOZSLm7m2xLbxDq+tJYEYPrDeRomt2fNE1DYeM5TwIu+h5B/4KpQ+0QczT45XgkgNUG4QLSUcPqQQGZRHZRTG2KLZW+eHs5HYbCZ1x7AGWJq8mEQXHAku1N65jGQvug4SM89yWsB9G667+fw6pxb/gc+VinFJnejxKflxUcw6XoKGq44nbVPiU5x/cux9xCaHlkIKW36RJzJI/HkBKzXcRDEF0TIU6mAfZ52qlNKG83CWl54xI5Lzz7O6ft/oOHSkzjJIRTeftY7Jv/EDaHZo/YN+VQd1idGLEAKw7TJOgnDaR/SB8qZlF2s5bmHbF/D/DOcjXzVKH7wmkpwKMvDc774vt8C8o8vtj7Pfi/IswAcQhqGLJe6z61rQQ2pUR8+9WIU8MzYzMJxzka8wHPa197W2oyEXkOtPocZ4z+h9eUnULh/g+bVf4X8P5ZB7vaZeL5jYOUsD60Rj7nSp29535V/GHMW4fOW/CSFzfseUKEte8NkZ7HMtePD/pF7QHDeYerYw/t5cuyPOW/nE2EonuM6QPpiAH3mMklOeNxhab/mIGnSPt3q9M2unPwk9h5C0/J5VvOsfa15Ih9MFi4QJReNDeaZgW10hpcbE+FiSISOws2dT+0EX5pceOdFJSDxQUNda7Gkez2ZPWqer7WU4qIA+B4SeQ8hd+dUr+ZT5yJIAGqDYe4uNy1LA/Pc8sz9zkKt/17pzA/O/RlG6cEQTB2IGusXm2/GyncYFN76Fx939ZGvOeo+Xw2Z68chIbQmneIGU/bzvoeQvXE0k6eIbwWA5En7wXnaAgx8m5SbVXU8Bq+bEFuIjkY5n44v2V/OBnyHkMKmo1KOMSi8ucZq3ph9cmQNZJbUYcLzLo9JzzxC5/e9UNB4nEbeYdBw2VFK+1rzgdZ8CskT2AJ4Q2LzIdl4mUK/ps9achF6Tg7/kTPfd0Wlb/80Ro0jcn1iYwita1dpn0eC4/fE/H8GlDa6X5Ib5p9o8/vssnOdPgt0r+C8fq7ZawEEU6oR1gVChBskaG3pZyLpywT5PhCZX9qwPjYus3CsMy45vG9sDKH19aeh4fLToOXZe/nq6xuTWTjUprjNK/xfocvBZ5CciKYf0TyRTyH54PzqSqmwMFNRNq+8x7sQfd6Kzi8lPo2Ny93xO+eddCJEx2wuskvrVHaHKH66zjum9dWHvZpX5BEXWAGgOepNhSTcevbG872LFD9eh/3x+aX6j2Nj25oyaM5zIH3xb/gqnV02IzbGh9LnH0Bh3RqnLbsYb3lIPph2gPckIeTuOt8Sl2af0uRTF4hjMFpyXT9Tzl7pDxS5W2Z657e8+Jh3/P8CuuBkb5qEx1w1krnItpezKdTiPpzh5e93v1NYoFDSsw/kaM/kKegRedI+kg+QfHAhWkCcMGoT2wzoM1i5MeldhL4OJUft4Z3fcNnp3jmbRLGAd4qH8Qp+Kic5/DEDkb1JnTzFj9difDhepbcT+6KrfRR/B6Lw9iqreeP35PNs+lOxnNob0tNEDDAwZLh95O64oD/FJOQx+HU0n250vkwvhrYyJj/PQ9Ndc5HUPjbJ4T9e8FFHRPZGjdGHFOX3dLHJP+wetRKNC0+JkMe6IE/aD6QAzKYtmSHVFb+2GtC1tuJ8DUqIcvctgMLa1VD85G305w/x6voKtLz0GN4dFkBmwQgI6vbViQ6SMymuTnKin7L4aw7m9rnb8Ogr+4VbWLdSJzpIUvi8MXtDPpguXCBW4pGXu2c+/63Nuwimq955upRw+qJfcyjZQfLyb3aJUdXQMO9ozOF30+TVcZesrcHz/1h0EcxCKwS+cvIjSF+0P2ueoX2eAh5r/0IsiTwLgIMgLughoYCLDuvLgS4a1TOLJtgxHc23pwM9a/IqxaU8AN9PWhfkSfPpmYerdZBkOb0RSl98gJazvmJOYFDOJlFAAzngkeajPm81Pw3rM6pxHbQA+vdy4aZDMpIQ14fW4NEzic2YLkF0o5NjOprPfZHLTZjfu+TJ7DOLx3gJdoSWF+/DqL8/m72N9uT3rPk4eUI9uQD90kJu2m7YlJIE1ZFkMOUI2276TN2ONSX1seYR+lrLmqfbnbnPE3k2fQQKID3jULzGXgKtrzwK5RQmVBW+G5Q2vAP5JxdD44KTbMDjoOdoHqHNPo2Eye9J84RnzukBVUsO62Y3as1VEJFltI3hqTtjjc+zABDa5+0fLIXmbdAjfyeYT1kT+kAw8yA076Oh4eIjIT3rICS2h5vhac3baG98nrQvfD5N2icBzKqGpad0hyr6dYifHG7O88zQ4+UcWecxZPJW86hlNnskxZonYDtFfNK6EYCJ+CbaI3nv1xxxrXXOetS8jfiseQ3SujZ71j6SDxCTDt0eqvpv3xk3HOb+koQsDWR7WI/MpxIFEP+ag4LQ5K3PE+hPVlrz5gtu9PO1/Zanb3b2ckPaF5cbRR7rTB41rs2e/V6QT8+ugf7dO0MV/YNhCoSGTJSkQ4zr8YuS7A+jPcKSR3Ja82z2+qx3NC/+eGHOev6UVauJG80LszfkTcR3Ap7WvCFPmmfiF9UgqiGBdf3Lsir+p+PGrCWZSqWqIwH5bMqYz6ugx9pn8thG2jc+L/0eybPPk/aJOJk9QZo9gYiTz+tz3vg8C4CIW58X5En7SDxApGdXw9Qjdwh/MEE/HvBZgdW2ebbt4Rg5lskL7Su/x3pE8zboRXzeaJ61r30++ilLkcdSRvuoz9NRh+St3wvNE/kE1rtsbX9Ox//jn5HEiEeIRtucfoL2eUvc0TxC/8MkOuqs1oXmvT6vP2gY07fkjdmTAEy0p+NOEo9oPkDy6Tk18Nt9uxryoQAI9IMiH7mwjpsX7VSagCcjftTsWQDR464jn4+avSWPJLTZhxGfiGO7MX2P2RvNE/kldPQJzojwgX5SRj8tY2JEUhC1hCNtRNyN9ljqiM+mT8FOa56IO9o35MnvRcCTZs/RnkBBz5LXxK3ZY539Xp/zBCKvoz37/ZxqWDl6l8o/mzOgAWQJTC5CWhLnspLmtc8bzcfOeUHeBLyONG+CHh93xuc70DxD+zybPYI03+EPJ6OgmEC/rlLEkUSMvAJfbEj7pHlt9ibJkZq3AoiYvQ14OugpAWCbDHr6nGftm5udJY/1iNmr4w5LRAIR8fkovI0MipT0A2QjCCUAJQxX8yQALMnnKdEh7cd8XoETHX3UVTJ7R+vC5938HqE1HzN7Ij6rho86Ee0rwdvogBKG3XfozL+xoZ+orz5hF9hoBEDECUScMjwR8Kzpa/Ic7Un7OsuzZm81jwSF2Yc+L0zfc7Orx/qzY3rATSfvxOnt7pjh6SRnE6iC/wJuuIxteaDpbwAAAABJRU5ErkJggg==",
        match: [
          "https://detail.tmall.com/item.htm*",
          "https://item.taobao.com/item.htm*",
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
