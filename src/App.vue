<template>
  <div id="app">
  <sheader></sheader>
<div class="yqFrame-doc">
<div class="yqFrame-bd">
<snav></snav>
  <div class="yqFrame-right">
    <div class="yqFrame-right-cont">
      <LatestDynamic></LatestDynamic>
    </div>
  </div>
</div>
</div>
<sfooter>
</sfooter>
  </div>
</template>

<script>
import sheader from './components/header/header'
import sfooter from './components/footer/footer'
import snav from './components/common/nav'
import LatestDynamic from './page/latestDynamic/latestDynamic'
export default {
  name: 'app',
  components: {
    LatestDynamic,
    sheader,
    sfooter,
    snav
  }
}
</script>

<style scoped="">

</style>
