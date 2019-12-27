<template>
  <div>
      这是demo组件
      
      {{name}}---{{age}}传值
  </div>
</template>
<script type='text/javascript'>
export default {
  //传值
  props:["name","age"],
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>
<style type='text/css' scoped>
</style>