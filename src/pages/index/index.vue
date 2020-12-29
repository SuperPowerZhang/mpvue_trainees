<template>
  <div class="index">
<!--    <header>-->
<!--      <a href="/pages/counter/main" class="counter">-->
<!--        到{{store.getters.languageText}}-->
<!--        <span>&gt;</span>-->
<!--      </a>-->
<!--      <a>{{test}}</a>-->
<!--    </header>-->
    <main>
      <!--      原文：<textarea v-model={q}   @change="changeText" />-->
      <!--      译文：：<textarea v-model={result}     />-->
    </main>
    <button @click="greet">test</button>

  </div>
</template>

<script>
  import card from '@/components/card'
  import store from '../../store/store'

export default {
    store,
    components: {
      card
    },

    methods: {
      changeText () {
        console.log(555)
      },
      greet () {
        store.commit('turn')
        console.log(11111)
        console.log(this.$store.state.q)
      }
    },

    created () {
      console.log('created')
      console.log(this.$store.getters.languageText)
      // let app = getApp()
    }
  }
</script>

<style>
  .index {
    margin: 20px;
  }

  header a {
    border: 1px solid red;
    background-color: #f1f8ff;
    padding: 4px;
  }

  header a span {
    border-bottom: 1px solid green;
    transform: rotate(90deg);
  }


</style>
