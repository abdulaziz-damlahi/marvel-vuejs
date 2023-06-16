<script>
export default {
  name:'navbar',
  props:{
    extra: String
  }
}
</script>
<template>
  <body>
  <h1>app</h1>
  <li><router-link to="/">home</router-link></li>
  <li><router-link to="/comics">comics</router-link></li>
  <li><a href="#">{{extra}}</a></li>
  <router-view></router-view>
  </body>

</template>


