<template>
  <div class="home">Setting</div>
</template>

<script>
// @ is an alias to /src
import store from '../store.js'

export default {
  name: "setting",
  components: {
    //  HelloWorld
  },
  beforeRouteEnter(to, from, next) {
    console.log('Restriction area', to);
    if (store.isAdmin) { 
        console.log("Witamy");
    }
    else {
        next({
            path: '/',
        });
    }
  },
};
</script>
