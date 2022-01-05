<template>

    <Nuxt />

</template>

<script>

export default {
  middleware: 'auth',
  data() {
    return {
      title: 'Enjoy The Experience',
      lang: process.env.LOCALE,
      dir: process.env.LOCALE == 'ar' ? 'rtl' : 'ltr'
    }
  },
  head() {
    return {
      title: this.title,
      titleTemplate: '%s | ' + process.env.APP_NAME,
      htmlAttrs: {
        lang: this.lang,
        dir: this.dir,
        amp: true
      },
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: process.env.DESCRIPTION || 'Realtime Chat Application. Send text, images, voice. Voice Call, Video Call'
        },
        {
          hid: 'author',
          name: 'author',
          content: process.env.AUTHOR || 'Mahmoud Mosaad'
        },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        },
        {
          hid: 'content-type',
          'http-equiv': 'Content-Type',
          content: 'text/html; charset=UTF-8'
        },
      ],
      link: [
        {
          rel: 'shortcut icon',
          href: '/favicon.ico'
        },
        {
          type: 'text/css',
          rel: 'stylesheet',
          href: '/css/materialdesignicons.min.css'
        }
      ],
      script: [
        // { src: '/js/app.js.download', defer: true, body: true }
      ]
    }
  }
}

</script>

<style>

</style>
