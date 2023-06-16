<template>
  <body>
<h1>app</h1>
  <navbar extra="extraa" />
  </body>

</template>

<script>
import navbar from "@/components/navbar.vue";
import router from '../src/index.js'
export default {
  components:{
    navbar
  },
  name:'App',
  router
}
</script>