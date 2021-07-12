<template>
  <p>
    {{ buttonClickMsg }}
  </p>

  <template v-if="correct">
    <div class="splitline"/>
    <div style="margin-bottom: 10px">
      <button class="nextBtn" v-on:click="next">Next</button>
    </div>
  </template>

    <div class="button" v-for="color in jamming" v-bind:key="color"
  v-on:click="check(color)">{{ color }}</div>

</template>

<script>

export default {
  name: "ColorBlock",
  data() {
    return {
      message: '',
      correct: false
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
      if (e == this.option)
      {
        this.message = `${e} is correct 🎨`
        this.correct = true
      }
      else
      {
        this.message = `${e} isn't correct ❌`
      }
    },

    next(){
      this.message = ""
      this.correct = false
      this.$emit('update')
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
  background-color: ivory;
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

.nextBtn{
  padding: 10px;
  font-size: 1.5rem;
}
</style>
