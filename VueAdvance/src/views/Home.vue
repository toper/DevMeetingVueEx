<template>
  <div class="home">
    <BaseButton @click="Fire" label="Big fucking BUTTON" :isLoading="loading">{{textValue}}</BaseButton>
    <br>
    <br>
    <VoteOptions :options="options">
      <template v-slot:item="{ el }">
        <div style="color: red;">- {{el.id}} {{el.text}}</div>
      </template>
    </VoteOptions>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BaseButton from "@/components/BaseButton.vue";
import VoteOptions from "@/components/VoteOptions.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    BaseButton,
    VoteOptions
  },
  data: () => ({
    textValue: "Nacisnij mnie",
    loading: false,
    options: [
      {
        id: 0,
        text: "Text1",
        createdAt: "2019-04-02T12:43:35.404Z"
      },
      {
        id: 1,
        text: "Text5",
        createdAt: "2019-04-02T12:43:35.404Z"
      }
    ]
  }),
  methods: {
    Fire() {
      console.log("fire");
      setTimeout(() => {
        this.loading = false;
      }, 3000);
      this.loading = true;
    }
  }
};
</script>
