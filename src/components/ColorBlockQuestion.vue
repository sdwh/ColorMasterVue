<template>
  <div class="colorBlock">
    <div class="colorDisplay" :style=style></div>
    <div class="colorRGBString"> {{ rgbDisplay }}</div>
  </div>
</template>

<script>
export default {
  name: 'ColorBlock',
  props: {
    rgb: String,
  },
  computed: {
    style(){
      return 'background-color: ' + this.rgb
    },
    rgbDisplay(){
      return this.rgb;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2
{
  text-align: center;
}

.colorBlock{
  margin-top: 10px;
}

.colorDisplay
{
  width: 100%;
  height: 150px;
}

.colorRGBString
{
  font-size: 1.25rem;
  margin-top: 5px;
}
</style>
