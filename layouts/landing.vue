<template>
  <div class="container-fluid">
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
          type: 'text/css',
          rel: 'stylesheet',
          href: '/css/font-awesome.min.css'
        }
      ],
      script: [

      ]
    }
  }
}

</script>

<style>

  .container-fluid{
    padding: 0
  }

</style>
