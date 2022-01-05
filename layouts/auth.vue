<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>

  export default {
    middleware: 'guest',
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
        bodyAttrs: {
          'cz-shortcut-listen': 'true'
        },
        meta: [
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
            id: 'bootstrap-dark-style',
            type: 'text/css',
            rel: 'stylesheet',
            href: '/css/bootstrap-dark.min.css'
          },
          {
            id: 'bootstrap-style',
            type: 'text/css',
            rel: 'stylesheet',
            href: '/css/bootstrap.min.css'
          },
          {
            type: 'text/css',
            rel: 'stylesheet',
            href: '/css/icons.min.css'
          },
          {
            id: 'app-dark-style',
            type: 'text/css',
            rel: 'stylesheet',
            href: '/css/app-dark.min.css'
          },
          {
            id: 'app-style',
            type: 'text/css',
            rel: 'stylesheet',
            href: '/css/app.min.css'
          },
          {
            id: 'font-awesome',
            type: 'text/css',
            rel: 'stylesheet',
            href: '/css/font-awesome.min.css'
          },
          {
            type: 'text/css',
            rel: 'stylesheet',
            href: '/css/style.css'
          }
        ],
        script: [
          { src: '/js/jquery.min.js.download', defer: true, body: true },
          { src: '/js/bootstrap.bundle.min.js.download', defer: true, body: true },
          { src: '/js/simplebar.min.js.download', defer: true, body: true },
          { src: '/js/waves.min.js.download', defer: true, body: true },
          { src: '/js/app.js.download', defer: true, body: true }
        ]
      }
    }
  }

</script>

<style>

</style>
