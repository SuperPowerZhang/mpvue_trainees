<template>
  <div class="counter-warp">
    <p>这里是详情页{{store.state.activity.name}}</p>
    <p>

      <button @click="joinIN">报名</button>
<!--      <button @click="decrement">-</button>-->
    </p>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  data: {
    store
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    joinIN () {
      console.log(store.state.activity.id)
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
