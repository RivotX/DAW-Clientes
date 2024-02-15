<template>
  <div id="app">
    <h1>Probando VUE</h1>
    <input type="text" v-model="inputText" placeholder="Type something..." />
    <p v-if="inputText.length < 5">Texto corto (-5).</p>
    <p v-else-if="inputText.length >= 5 && inputText.length < 10">
      Texto mediano (5-10).
    </p>
    <p v-else>Texto largo (+10).</p>
    <button @click="toggleImage">Mostrar/ocultar imagen</button>
    <ImageComponent :isVisible="showImage" />
    <div id="divv">
      <div v-for="(image, index) in images" :key="index">
        <img class="img" :src="require(`./assets/${image}`)" :alt="image" />
      </div>
    </div>
  </div>
</template>

<script>
import ImageComponent from "./components/ImageComponent.vue";

export default {
  name: "App",
  components: {
    ImageComponent,
  },
  data() {
    return {
      showImage: true,
      inputText: "",
      images: ["perro.jpg", "mierdon.jpg", "puppy.jpg"], // replace with your actual images
    };
  },
  methods: {
    toggleImage() {
      this.showImage = !this.showImage;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
#divv {
  margin-top: 20px;
  display: flex;

  justify-content: center;
}
.img {
  width: 200px;
  height: 200px;
  margin: 10px;
}
</style>
