<template>
  <div
    class="mask"
    @click="$emit('hide-menu')"
    v-if="isShow"
  >
    <section
      class="side-menu"
      v-if="isShow"
    >
      <div class="don-info">
        <img
          src="/logo.png"
          alt="logo"
        >
      </div>
      <nav class="menu-list">
        <nuxt-link
          to="/"
          class="no-underline"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-home"></use>
          </svg>首页
        </nuxt-link>
        <nuxt-link
          to="/archive"
          class="no-underline"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-archive"></use>
          </svg>档案
        </nuxt-link>
        <nuxt-link
          to="/laboratory"
          class="no-underline"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-lab"></use>
          </svg>我的项目
        </nuxt-link>
        <nuxt-link
          to="/about"
          class="no-underline"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-about"></use>
          </svg>关于
        </nuxt-link>
        <a
          href="https://github.com/dirkhe1051931999"
          target="_blank"
          class="no-underline"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-github"></use>
          </svg>Github
        </a>
        <a
         class="no-underline"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-sf"></use>
          </svg>segmentfault
        </a>
        <a
          class="no-underline juejin"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-juejin"></use>
          </svg>掘金
        </a>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
@import "~assets/less/index";
.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9998;
}
.side-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 60%;
  max-width: 20em;
  background: #fff;
  z-index: 9999;
  .don-info {
    width: 100%;
    height: 5em;
    border-bottom: 1px solid rgba(238, 238, 238, 0.6);
    text-align: center;
    img {
      margin-top: 1em;
      width: 3em;
      height: 3em;
    }
  }
  a {
    display: block;
    padding-left: 1em;
    height: 4em;
    font-size: 1.2em;
    color: #666;
    line-height: 4em;
    border-bottom: 1px solid rgba(238, 238, 238, 0.6);

    &.nuxt-link-exact-active {
      color: @base-color;
      background-color: #fff;
    }
    &.juejin {
      .icon {
        vertical-align: -0.05em;
      }
    }
  }
  .icon {
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
  }
}
</style>
