<template>
  <div
    class="load-more"
  >
    <p
      class="has-more"
      v-show="!isNoMore && !isShowLoading"
      @click="loadMore"
    >加载更多</p>
    <p
      class="no-more"
      v-show="isNoMore"
    >没有更多了</p>
    <loading v-show="isShowLoading"></loading>
  </div>
</template>

<script>
import Loading from '~/components/loading/Loading';
export default {
  components: {
    Loading
  },
  props: {
    isNoMore: {
      type: Boolean,
      default: false,
      required: true
    },
    isShowLoading: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    loadMore(){
      this.$emit('loadMore');
    }
  }
};
</script>

<style lang="less" scoped>
.load-more {
  margin-bottom: 1em;
  padding: 0.5em 0;
  line-height: 2em;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  .no-more {
    cursor: default;
  }
}
</style>

