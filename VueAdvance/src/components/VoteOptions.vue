<template>
  <label>
    {{label}}
    <ul>
      <slot v-for="el in options" name="item" :el="el">
        <li :key="el.id">{{ el.text }}</li>
      </slot>
    </ul>
  </label>
</template>

<script>
export default {
  Name: "VoteOptions",
  inheritAttrs: false,
  components: {},
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Default label"
    },
    options: {
      type: Array,
      default: () => [
        {
          id: 0,
          text: "Eat pizza",
          createdAt: "2019-02-02T12:43:35.404Z"
        },
        {
          id: 1,
          text: "Eat burger",
          createdAt: "2019-02-02T12:43:35.404Z"
        }
      ]
    }
  },
  data: () => ({}),
  computed: {
    // listeners() {
    //   const { click, ...listeners } = this.$listeners;
    //   return listeners;
    // },
  },
  methods: {
    //3/ 8. Input is explicitly defined to properly update value binded as v-model
    customInput(event) {
      this.$emit("click", event.target.value);
    }
  }
};
</script>