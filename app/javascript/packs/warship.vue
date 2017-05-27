<template>
  <span class="mdl-chip mdl-chip--deletable">
    <span class="mdl-chip__text">{{value}}</span>
    <button v-on:click='_destroyShip' class="mdl-chip__action"">
      <i class="material-icons">cancel</i></a>
    </button>
  </span>
</template>

<script>
export default {
  props: {
    initialValue: Number
  },
  data: function() {
    return {
      value: this.initialValue
    }
  },
  methods: {
    _destroyShip: function() {
      this.$emit('destroyShip');
    }
  }
}
</script>
