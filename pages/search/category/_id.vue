<template>
  <section class="category">
    <p class="title">
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-cat"></use>
      </svg>{{ categoryName }}
    </p>
    <post-list
      v-for="post in postList"
      :post="post"
      :key="post.id"
    ></post-list>
    <LoadingMore
      :isNoMore="isNoMore"
      :isShowLoading="isShowLoading"
      @loadMore="loadMore"
    ></LoadingMore>
  </section>
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
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  head() {
    return {
      title: `${this.categoryName}`
    };
  },
  asyncData({ params }) {
    const pageNum = 10;
    return axios.get(`${api.api.category}${params.id}?page=1&pageNum=${pageNum}`).then(res => {
      if (res.data.success === 1) {
        let noMore = false;
        if (res.data.posts.length < pageNum) {
          noMore = true;
        }
        return {
          categoryId: params.id,
          categoryName: res.data.name,
          postList: res.data.posts,
          isNoMore: noMore,
          pageNum: pageNum
        };
      } else {
        return {
          categoryId: params.id,
          categoryName: '',
          postList: []
        };
      }
    });
  },
  name: '',
  data() {
    return {
      isShowLoading: false,
      isNoMore: false,
      page: 1,
    }
  },
  methods: {
    loadMore(){
      if (!this.isNoMore) {
        this.isShowLoading = true;
        this.page = this.page + 1;
        axios.get(`/post/category/${this.categoryId}?page=${this.page}&pageNum=${this.pageNum}`).then(res => {
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
  }
}
</script>

<style scoped lang='less'>
.title {
  margin-bottom: 0.5em;
  padding: 0.5em 0;
  font-size: 1.8em;
  color: #333;
  background-color: #fff;
  line-height: 2;
  text-align: center;

  .icon {
    width: 0.9em;
    height: 0.9em;
    vertical-align: -0.1em;
    margin-right: 0.3em;
  }
}
</style>
