<template>
  <div class="layout">
    <section class="left">
      <v-subject :list="subjects"></v-subject>
    </section>
    <section class="middle">
      <v-article :list="articles"></v-article>
    </section>
    <section class="right">
      <v-preview></v-preview>
    </section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('index')

import Subject from './components/subject.vue'
import Article from './components/article.vue'
import Preview from './components/preview.vue'

export default {
  components: {
    'v-subject': Subject,
    'v-article': Article,
    'v-preview': Preview
  },

  data() {
    return {}
  },

  computed: {
    ...mapState({
      subjects: state => state.subjects,
      articles: state => state.articles
    })
  },

  mounted() {
    window.ipc.send('asynchronous-message', 'ping')
  }
}
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .left {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 14%;
    height: 100%;
  }

  .middle {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 20%;
    height: 100%;
  }

  .right {
    display: flex;
    width: 100%;
    height: 100%;
  }
}
</style>