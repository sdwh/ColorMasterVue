<template>
  <p class="feedbackMsg">
    {{ buttonClickMsg }}
    <template v-if="correct">
        <button class="nextBtn" v-on:click="next">Next</button>
      <div style="margin-bottom: 10px"></div>
    </template>
  </p>


  <Btn v-for="color in jamming" v-bind:key="color" :color="color" @updatemsg="updatemsg"></Btn>

</template>

<script>
import Btn from "@/components/Btn.vue";

export default {
  name: "ColorBlock",
  emits: ["update"],
  data() {
    return {
      message: '',
      correct: false
    }
  },
  components: {
    Btn
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
    updatemsg(e) {
      if (e == this.option)
      {
        this.message = `${e} 🎨`
        this.correct = true
      }
      else
      {
        this.message = ''
        this.correct = false
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

.feedbackMsg{
  font-size: 1.5rem;
}
</style>
