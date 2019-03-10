<template>
  <div class="main">
    <Header></Header>
    <div class="container">
      <Menu></Menu>
      <div class="main-container">
        <nuxt />
      </div>
    </div>
    <Footer></Footer>
    <div class="top-bar">
      <div class="container">
        <span
          class="to-top"
          v-show="isShowTopTop"
          @click="goToTop"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-toTop"></use>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/layouts/default/Header.vue';
import Menu from '~/components/layouts/default/Menu.vue';
import Footer from '~/components/layouts/default/Footer.vue';
import { timeout } from 'q';
export default {
  components: {
    'Header': Header,
    'Menu': Menu,
    'Footer': Footer
  },
  name: '',
  data() {
    return {
      $docElement: null,
      $body: null,
      isShowTopTop: false,
      timer: null
    }
  },
  mounted() {
    this.$docElement = document.documentElement;
    this.$body = document.body;
    this.pageToTop();
    window.addEventListener('scroll', this.debounce(this.pageToTop));
  },
  methods: {
    pageToTop() {
      let scrollTop = this.$body.scrollTop + this.$docElement.scrollTop;
      if (scrollTop > 200) {
        this.isShowTopTop = true;
      } else {
        this.isShowTopTop = false;
      }
      if (scrollTop == 0) {
        clearInterval(this.timer)
      }
    },
    goToTop() {
      this.timer = setInterval(() => {
        let scrollTop = this.$body.scrollTop + this.$docElement.scrollTop;
        let speed = Math.floor(scrollTop / 6);
        this.$body.scrollTop = this.$docElement.scrollTop = scrollTop - (speed < 1 ? 1 : speed);
      }, 30)
    },
    debounce(fn, delay, timeout) {
      let timer = null;
      let last = new Date().getTime();
      delay = delay || 300;
      timeout = timeout || 300;
      return () => {
        if (timer) {
          clearInterval(timer)
        }
        timer == setTimeout(fn, delay);
        if (new Date().getTime() > last + timeout) {
          fn.apply(this, [].slice.call(Array, arguments));
          last = new Date().getTime();
          clearTimeout(timer);
        }
      }

    }
  }
}
</script>

<style scoped lang='less'>
@import "~assets/less/index";
.main {
  position: relative;
  box-sizing: border-box;

  .main-container {
    position: relative;
    margin-top: 5.2em;
    // margin-left: 15em;
    min-height: @minHeight;
  }
  .top-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 10em;
  }
  .to-top {
    position: absolute;
    z-index: 9999;
    bottom: 0;
    right: 0;
    cursor: pointer;

    .icon {
      width: 3em;
      height: 3em;
    }
    &:hover {
      color: @base-color;
    }
  }
}
</style>
