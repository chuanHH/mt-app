<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menu" :key="index" @mouseenter="enter">
        <i :class="item.type" />{{ item.name }} <span class="arrow" />
      </dd>
    </dl>
    <div
    v-if="kind"
    class="detail"
    @mouseenter="sover"
    @mouseleave="sout"
    >
      <template v-for="(item, index) in curDetail.child">
        <h4 :key="index">{{ item.tilte }}</h4>
        <span
        v-for="(v,idx) in item.child"
        :key="v+idx"> {{ v }}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: '',
      _timer: null,
      menu: [{
        type: 'food',
        name: '美食',
        child: [{
          tilte: '美食',
          child: ['代金券', '甜品', '火锅']
        }]
      },
      {
        type: 'takeout',
        name: '外卖',
        child: [{
          tilte: '外卖',
          child: ['代金券1', '甜品2', '火锅3']
        }]
      }
      ]
    }
  },
  computed: {
    curDetail() {
      return this.menu.filter(x => x.type === this.kind)[0]
    }
  },
  methods: {
    mouseleave() {
      this._timer = setTimeout(() => {
        this.kind = ''
      }, 150)
    },
    enter(e) {
      this.kind = e.target.querySelector('i').className
    },
    sover() {
      clearTimeout(this._timer)
    },
    sout() {
      this.kind = ''
    }
  }
}
</script>

