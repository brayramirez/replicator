<template>
  <div>
    <div class="mdl-card__title mdl-color--teal mdl-color-text--white">
      <h3>Replicator Warships</h3>
    </div>
    <div class="mdl-card__supporting-text">
      <div class="mdl-grid">
        <div v-for="warship in sortedActiveWarships" :key="warship" class="mdl-cell mdl-cell--1-col-desktop mdl-cell--1-col-phone mdl-cell--1-col-tablet">
          <active-warship v-bind:initial-value=warship v-on:destroyShip='_destroyShip(warship)'></active-warship>
        </div>
      </div>
    </div>
    <div>
      <button v-on:click='addWarship' class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color--red add-warship">Add Warship</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialValue: Number
  },

  created: function() {
    this._resetWarships();
  },

  data: function() {
    return {
      defaultWarships: [5, 5, 5, 6, 6, 7, 7, 8, 8, 8],
      warships: [],
      activeWarships: []
    }
  },

  computed: {
    sortedActiveWarships: function() {
      return this.activeWarships.sort();
    },

    _noWarships: function() {
      return this.activeWarships.length === 0 && this.warships.length === 0
    }
  },

  watch: {
    _noWarships: function() {
      this._resetWarships();
    }
  },

  methods: {
    addWarship: function() {
      if (this.warships.length === 0) {
        alert('No warships to generate!');
        return;
      }

      let _warships = this.warships,
          selectedIndex = Math.floor(Math.random() * _warships.length),
          generatedWarship = _warships[selectedIndex];

      this.warships.splice(selectedIndex, 1);
      this.activeWarships.push(generatedWarship);
    },

    _destroyShip: function(warship) {
      let index = this.activeWarships.indexOf(warship);

      this.activeWarships.splice(index, 1)
    },

    _resetWarships: function() {
      this.warships = this.defaultWarships.slice();
    }
  }
}
</script>

<style lang="scss" scoped>
  .add-warship {
    width: 100%;
  }
</style>
