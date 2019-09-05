<template>
  <div class="layout">
    <section class="left">
      <v-subject :sid="sid" :list="subjects" @select="selectSubjectHandle"></v-subject>
    </section>
    <section class="middle">
      <v-article :aidx="aidx" :list="articles" @select="selectArticleHandle"></v-article>
    </section>
    <section class="right">
      <v-preview :text="preview"></v-preview>
    </section>
    <v-btn @add="addSubjectHandle"></v-btn>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('index')

import Subject from './components/subject.vue'
import Article from './components/article.vue'
import Preview from './components/preview.vue'
import Btn from './components/btn.vue'

export default {
  name: 'index',

  components: {
    'v-subject': Subject,
    'v-article': Article,
    'v-preview': Preview,
    'v-btn': Btn
  },

  data() {
    return {}
  },

  computed: {
    ...mapState({
      sid: state => state.sid,
      aidx: state => state.aidx,
      preview: state => state.preview,
      subjects: state => state.subjects,
      articles: state => state.articles
    })
  },

  methods: {
    ...mapMutations({
      setPreview: 'setPreview',
      setAidx: 'setAidx'
    }),

    ...mapActions({
      getSubjects: 'getSubjects',
      getArticles: 'getArticles',
      postSubjects: 'postSubjects'
    }),

    selectArticleHandle(info, index) {
      const preview = `<blockquote>原文链接：<a href="${info.link}">${info.link}</a></blockquote>\n${info.content}`
      this.setPreview({ text: preview })
      this.setAidx({ aidx: index })
    },

    selectSubjectHandle(info) {
      this.getArticles({ sid: info._id })
    },

    addSubjectHandle(url) {
      this.postSubjects({ url })
    }
  },

  mounted() {
    this.getSubjects()
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
    display: inline-flex;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>