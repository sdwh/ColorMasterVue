<template>
  <ColorBlock v-for="color in colors" v-bind:key="color" :color="color.color" :rgb="color.rgb" />
</template>

<script>
import ColorBlock from "@/components/ColorBlock.vue";
import json from "@/data/Colors.json";

export default {
  name: "App",
  data() {
      return {
        colors: json
      };
  },
  components: {
    ColorBlock,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 30px;
}
</style>
