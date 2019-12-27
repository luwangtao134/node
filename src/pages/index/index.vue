<template>
  <div>
      我是首页{{ name }} -- {{ age }}

      <demo1 name="zbj" :age="age"></demo1>传值
  </div>
</template>

<script>
//导入componets里的demo组件
import Demo1 from '@/components/demo/index.vue'
export default {
    data(){
        return {
            name:'zbj',
            age:18
        }
    },
    //导入componets里的demo组件
    components:{
        Demo1
    }
}
</script>

<style>

</style>