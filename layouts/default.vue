<template>
  <div>
  <el-header height="auto">
    <my-header />
  </el-header>
  <el-main><nuxt /></el-main>
  <el-footer>
    <my-footer/>
  </el-footer>
  </div>
</template>
<script>
import MyHeader from '@/components/public/header'
import MyFooter from '@/components/public/footer'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
</style>
