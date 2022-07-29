<template>
  <div class="pwa-demo">
    <h1> Hola chica </h1>
    <p>Welcome to pwa-demo! We will load below a bit of static text, some images from the internet and some fake api data</p>

    <hr>

    <h3> But first, user interaction </h3>

    <p> To enable pwa download, you need a user interation. So here's a button so can interact with this app 😅 </p>
    <button class="button-1" @click="handleBtnClick"> Click me </button>
    <p> Clicked: {{ clicked }} </p>

    <hr>

    <h3> Static text </h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin mollis finibus. Vestibulum luctus varius erat feugiat luctus. Mauris eget risus sit amet lectus cursus feugiat in non ex. Praesent imperdiet turpis felis, non ultricies tellus pellentesque sit amet. Pellentesque ut mi pretium, venenatis lorem sed, condimentum massa. Ut bibendum urna ut nisl semper, eget sodales nibh vehicula. Integer semper tincidunt viverra. Vivamus ex justo, vehicula et efficitur at, egestas at erat. Suspendisse at massa ultricies, faucibus diam eu, tempor augue. Quisque justo ante, malesuada eu ligula non, auctor euismod arcu. Pellentesque ornare sapien nulla, et consectetur enim viverra ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

    <hr>

    <h3> Images </h3>
    <p> This one is prefetched </p>
    <img :src="image1" width="1058" height="1342">

    <p> This one isn't </p>
    <img :src="image2" width="1058" height="1342">

    <hr>

    <h3> Api data </h3>
    <pre> {{ apiData }} </pre>
  </div>
</template>

<script>
export default {
  name: 'PwaDemo',

  data () {
    return {
      image1: 'https://images.unsplash.com/photo-1657556503874-fa174cdbe061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      image2: 'https://images.unsplash.com/photo-1657200193775-ed6bb6542311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80',
      apiData: null,
      clicked: 0
    }
  },

  created() {
    fetch('https://dummyjson.com/products/1')
      .then(res => res.json())
      .then(json => {
        console.log('Dummy api response', json)
        this.apiData = json;
      })
  },

  methods: {
    handleBtnClick() {
      this.clicked++;
    },
  }
}
</script>

<style scoped>
pwa-demo {
  padding: 64px 32px;
}

img {
  width: 50vw;
  height: auto;
}

hr {
  margin: 32px 0;
}

pre {
  width: 80vw;
  height: 400px;
  overflow: scroll;
  background: #2c3e50;
  color: white;
  padding: 16px 8px;
}
</style>
