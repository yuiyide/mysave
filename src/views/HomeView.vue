<template>
<div>
      <top-head></top-head>
      <aside-menu>
      </aside-menu>
</div>

</template>

<script>
// @ is an alias to /src
import AsideMenu from '../components/AsideMenu.vue'
import TopList from '../components/TopList.vue'

export default {
  name: 'HomeView',
  components:{
    AsideMenu,
    TopList,
}
}
</script>

<style scoped>
</style>
