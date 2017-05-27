<template>
  <div>
    <div class="mdl-card__title mdl-color--teal mdl-color-text--white">
      <h3>{{label}}</h3>
    </div>
    <div class="mdl-card__supporting-text">
      <h1 class="mdl-typography--text-center">{{value}}</h1>
    </div>
    <div class="mdl-card__actions mdl-card--border mdl-typography--text-center">
      <button v-on:click='increment' class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-color--green">
         <i class="material-icons">add</i>
      </button>
      <button v-on:click='decrement' class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-color--red">
        <i class="material-icons">remove</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    initialValue: Number
  },
  data: function() {
    return {
      value: this.initialValue
    }
  },
  methods: {
    increment: function() {
      this.value += 1;
    },

    decrement: function() {
      this.value -= 1;
    }
  }
}
</script>
