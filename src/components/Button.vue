<template>
    <div class="button" v-for="color in jamming" v-bind:key="color"
  v-on:click="check(color)">{{ color }}</div>

  <p>
    {{ buttonClickMsg }}
  </p>
</template>

<script>
// import _ from "lodash";

export default {
  name: "ColorBlock",
  data() {
    return {
      message: '',
    }
  },
  props: {
    option: String,
    jamming: Array,
  },
  // Computed Replace Filters
  computed: {
    style() {
      return "background-color: " + this.rgb;
    },
    buttonClickMsg() {
      return this.message;
    }
  },
  methods: {
    check(e) {
      this.message = e == this.option ? 
        `${e} is Correct 🎨` : `${e} isn't Correct ❌`
    }    
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  margin-right: 2rem;
  padding: 0.3rem;
  font-size: 2rem;
  border: 1px black solid;
  background-color: lightgrey;
  color: black;
  border-radius: 3px;
  display: inline-block;
  padding: 0.6rem 0.5rem;
}

@media (max-width: 1024px) {
  .button{
    display: block;
    margin-right: 0;
    margin-bottom: 10px;
  }
}

.button:hover{
  cursor: pointer;
}
</style>
