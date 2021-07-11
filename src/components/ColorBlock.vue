<template>
  <div class="colorBlock">
    <h2>{{ capitalized }}</h2>
    <div class="colorDisplay" :style=style></div>
    <div class="colorRGBString"> {{ rgb }}</div>
  </div>
</template>

<script>
export default {
  name: 'ColorBlock',
  props: {
    color: String,
    rgb: String
  },
  // Computed Replace Filters
  computed: {
    capitalized(){
      return this.color.charAt(0).toUpperCase() + this.color.slice(1)
    },
    style(){
      return 'background-color: ' + this.rgb
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
  display: inline-block;
  margin-right: 30px;
  border: 2px solid grey;
  margin-bottom: 10px;
}

.colorDisplay
{
  width: 300px;
  height: 100px;
}

@media (max-width: 1024px) {
  .colorBlock{
    margin-right: 0;
    display: block;
    margin: 5% 2%;
  }
  .colorDisplay
  {
    width: 100%;
  }
}

.colorRGBString
{
  font-size: 1.25rem;
  margin-top: 5px;
}
</style>
