<template>
  <div id="app">
    <router-view/>

    <div v-if="deferredPrompt" class="install-prompt">
      <p> You can install this amazing pwa on your phone 🌈  </p>
      <div class="buttons">
        <button class="button-2" @click="handleDismiss"> Cancel </button>
        <button class="button-1" @click="handleInstallApp"> Install app </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      deferredPrompt: null,
    }
  },

  mounted() {
    window.addEventListener("beforeinstallprompt", e => {
      console.log('before install prompt', e)
      e.preventDefault();
      this.deferredPrompt = e;
    });


    window.addEventListener("appinstalled", () => {
      console.log('app installed')
      this.deferredPrompt = null;
    });
  },

  methods: {
    handleInstallApp() {
      this.deferredPrompt.prompt();
    },

    handleDismiss() {
      this.deferredPrompt = e;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.install-prompt {
  padding: 16px;
  box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
  position: fixed;
  bottom: 30px;
  background: white;
  width: 80vw;
  left: 0;
  right: 0;
  margin: auto;
}

.install-prompt .buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

<style>
button {
  align-items: center;
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Codec cold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: .4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-1 {
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
}
.button-2 {
  background: #2c3e50;
}

button:active {
  outline: 0;
}

button:hover {
  outline: 0;
}

button span {
  transition: all 200ms;
}

button:hover span {
  transform: scale(.9);
  opacity: .75;
}

@media screen and (max-width: 991px) {
  button {
    font-size: 15px;
    height: 50px;
  }

  button span {
    line-height: 50px;
  }
}
</style>
