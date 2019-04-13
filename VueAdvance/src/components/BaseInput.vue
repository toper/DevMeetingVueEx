<template>
    <label>{{label}}
        <input v-bind="$attrs" v-on="$listeners"></input>
    </label>
</template>

<script>

export default {
  Name: 'BaseButton',
  inheritAttrs: false,
  components: {
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Default label',
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    //4/ 6. If you want to bind each object property,
    
  }),
  computed: {
    // listeners() {
    //   const { click, ...listeners } = this.$listeners;
    //   return listeners;
    // },
  },
  methods: {
    //3/ 8. Input is explicitly defined to properly update value binded as v-model
    customInput(event) {
      this.$emit('click', event.target.value);
    },
  },
};
</script>