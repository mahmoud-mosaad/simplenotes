
<template>

    <div class="phone">

        <div class="icon">
            <img src="~/assets/logo.svg" alt="Icon" />
        </div>
        <div class="shadow"></div>
        <h1 class="title"> Simple Notes</h1>
        <h2 class="subtitle"> Easy to use </h2>

        <button onclick="location.href = '/login'" class="sign-in">Sign in</button>
            
        <p class="legal">Organize Your Notes Professionaly</p>  

        <section>
            <div class="wrapper">
                <a href="https://www.facebook.com/mahmoud.mosaad.17/">
                    <div class="button">
                        <div class="icon">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <span>mahmoud.mosaad17</span>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/mahmoudmosaad50/">
                    <div class="button">
                        <div class="icon">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <span>mahmoudmosaad50</span>
                    </div>
                </a>

                <a href="https://github.com/mahmoud-mosaad">
                    <div class="button">
                        <div class="icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <span>mahmoud-mosaad</span>
                    </div>
                </a>
            </div>
        </section>

    </div>

</template>

<script>

  export default {
    layout: 'landing',
    head() {
      return {
        title: 'Simple Notes | Organize Your Notes',
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto'
          },
          {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css?family=Poppins:400,500,700&amp;display=swap'
          },
          {
              rel: 'stylesheet',
              href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          }
        ]
      }
    }
  }

</script>

<style lang="scss">


    @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

// social
    // html,
    // body {
    //     width: 100%;
    //     height: 100vh;
    //     display: grid;
    //     place-items: center;
    //     background: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
    // }

    $COLOR_NOTES_BLUE: #4173ce;
    $COLOR_NOTES_BLUE_LIGHT: #ecf1fa;
    $COLOR_NOTES_DARK_FONT: #38383D;


    body {
        display: flex;
        height: 100vh;
        // background: black;
        align-items: center;
        justify-content: center;
    }

    .phone {
        width: 641px;
        // height: 731px;
        height: auto;
        // background: linear-gradient(135deg, $COLOR_NOTES_BLUE_LIGHT, white, $COLOR_NOTES_BLUE_LIGHT);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        justify-content: center;
        // we should just use whatever the stock android font is.
        font-family: roboto, sans-serif;
    }

    .title,
    .subtitle,
    p {
        text-align: center;
        max-width: 240px;
        margin: 0;
    }

    .title {
        font-size: 24px;
        color: $COLOR_NOTES_DARK_FONT;
        margin-top: 32px;
    }

    .title,
    .subtitle,
    .sign-in,
    .legal {
        margin-bottom: 32px;
    }

    .subtitle {
        font-size: 18px;
        line-height: 28px;
    }

    .icon {
        width: 128px;
        height: 148px;
        position: relative;
        z-index: 2;
    }

    .shadow {
        width: 180px;
        height: 40px;
        background: $COLOR_NOTES_BLUE;
        opacity: .1;
        border-radius: 50%;
        position: relative;
        margin-top:-20px;
        z-index: 1;
    }

    .sign-in {
        border-radius: 25px;
        padding: 5px 15px;
        font-size: 16px;
        color: white;
        height: 50px;
        border: 0;
        background: $COLOR_NOTES_BLUE;
        min-width: 160px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, .2);
        outline: none;
        cursor: pointer;
    }

    .legal {
        max-width: 280px;
        margin: 10px 0 20px;
        font-size: 14px;
        line-height: 20px;
        opacity: .8;
    }

    a {
        color: $COLOR_NOTES_BLUE;
        font-size: 14px;
    }


    // social 


    .button {
        float: left;
        width: 60px;
        height: 60px;
        cursor: pointer;
        background: #fff;
        overflow: hidden;
        border-radius: 50px;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    }

    .button span {
        font-size: 20px;
        font-weight: 500;
        line-height: 60px;
        margin-left: 10px;
    }

    .button:hover {
        width: 300px;
    }

    .button:nth-child(1):hover .icon {
        background: #4267b2;
    }

    .button:nth-child(2):hover .icon {
        background: #0e76a8;
    }

    .button:nth-child(3):hover .icon {
        background: #333;
    }

    .button:nth-child(1) span {
        color: #4267b2;
    }

    .button:nth-child(2) span {
        color: #0e76a8;
    }

    .button:nth-child(3) span {
        color: #333;
    }

    .button .icon {
        width: 60px;
        height: 60px;
        text-align: center;
        border-radius: 50px;
        display: inline-block;
        transition: all 0.3s ease-in-out;
    }

    .button .icon i {
        font-size: 25px;
        line-height: 60px;
        transition: all 0.3s ease-in-out;
    }

    .button:hover i {
        color: #fff;
    }


</style>
