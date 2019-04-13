<template>
  <div class="home">
    
    <BaseButton @click="Fire" label="Big fucking BUTTON" :isLoading="loading">
      {{textValue}}
    </BaseButton>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    BaseButton
  },
  data: () => ({
    textValue: 'Nacisnij mnie',
    loading: false
  }),
  methods: {
    Fire() {
      console.log("fire");
      setTimeout(()=>{
        this.loading = false
      }, 3000);
      this.loading = true;
    }
  }
}
</script>
