<template>
  <div>
    <PostList
      v-for="post in postList"
      :post="post"
      :key="post.id"
    ></PostList>
    <LoadingMore
      :isNoMore="isNoMore"
      :isShowLoading="isShowLoading"
      @loadMore="loadMore"
    ></LoadingMore>
  </div>

</template>

<script>
import PostList from "~/components/index/Post"
import LoadingMore from "~/components/loading/LoadingMore"
import axios from 'axios';
import api from "~/http/api/index";
export default {
  components: {
    PostList,
    LoadingMore
  },
  name: '',
  head() {
    return {
      title: '首页'
    };
  },
  data() {
    return {
      isShowLoading: false,
      isNoMore: false,
      page: 1
    }
  },
  asyncData() {
    const pageNum = 10;
    return axios.get(`${api.api.index}?page=1&pageNum=${pageNum}`).then(res => {
      if (res.data.success === 1) {
        let noMore = false;
        if (res.data.posts.length < pageNum) {
          noMore = true;
        }
        return {
          postList: res.data.posts,
          isNoMore: noMore,
          pageNum: pageNum
        };
      } else {
        return { postList: [] };
      }
    })
  },
  methods: {
    loadMore(){
      if (!this.isNoMore) {
        this.isShowLoading = true;
        this.page = this.page + 1;
        axios.get(`post/getPostList?page=${this.page}&pageNum=${this.pageNum}`).then(res => {
          if (res.data.success === 1) {
            if (res.data.posts.length < this.pageNum) {
              this.isNoMore = true;
            }
            this.postList.push(...res.data.posts);
            this.isShowLoading = false;
          }
        });
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style scoped lang='less'>
</style>
