<template>
<div class="search-panel">
    <el-row class="m-header-searchbar">
       <el-col
        :span="3"
        class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
          v-model="search"
          placeholder="搜索商家或地点"
          @focus="focus"
          @blur="blur"
          @input="input"
          />
          <el-button type="primary"><i class="el-icon-search" /></el-button>
        <dl v-if="isHotPlace" class="hotPlace">
          <dt>热门搜索</dt>
          <dd v-for="(item,index) in hotPlace" :key="index">{{ item }}}</dd>
        </dl>
        <dl v-if="isSearchList" class="searchList">
          <dd v-for="(item,index) in searchList" :key="index">{{ item }}</dd>
        </dl>
        </div>
        <p class="suggest">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
        </p>
        <ul class="nav">
          <li><nuxt-link
            to="/"
            class="takeout">美团外卖</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="movie">猫眼电影</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="hotel">美团酒店</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="apartment">民宿/公寓</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="business">商家入驻</nuxt-link></li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right">
        <ul class="security">
          <li><i class="refund"/><p class="txt">随时退</p></li>
          <li><i class="single"/><p class="txt">不满意免单</p></li>
          <li><i class="overdue"/><p class="txt">过期退</p></li>
        </ul>
      </el-col>
    </el-row>
</div>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      hotPlace: ['火锅', '火锅', '火锅'],
      searchList: ['故宫', '故宫', '故宫']
    }
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus() {
      this.isFocus = true
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input(value) {
      console.log('value', value)
    }
  }
}
</script>

