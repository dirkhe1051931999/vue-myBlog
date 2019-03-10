<template>
  <section class="about">
    <h2 class="title">
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-about"></use>
      </svg>关于
    </h2>
    <p class="small-screen-indent">我就是我，你不让你省心的烟火</p>
    <p class="indent-1 small-screen-indent">自己开发博客的好处是可以随意捣鼓，按照自己的想法去实现。当然也会存在一些不足</p>
    <p class="small-screen-indent">如果有什么好的建议和意见，欢迎和我联系！</p>
  </section>

</template>

<script>
export default {
  head() {
    return {
      title: '关于'
    };
  },
  name: '',
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
@import "~assets/less/index";
.about {
  padding: 2em;
  min-height: @minHeight;
  background-color: #fff;
  box-sizing: border-box;
  .title {
    margin-bottom: 1.2em;
    font-size: 2.5em;
    color: #333;
    line-height: 1;
    text-align: center;

    .icon {
      width: 0.9em;
      height: 0.9em;
      vertical-align: -0.05em;
      margin-right: 0.3em;
    }
  }
  p {
    font-size: 1em;
    line-height: 2;
    color: #333;

    a {
      color: @base-color;
      margin-left: 0.5em;
    }
  }
  .indent-1 {
    text-indent: 2em;
  }
  .indent-2 {
    text-indent: 4em;
  }
  .indent-3 {
    text-indent: 6em;
  }
  .indent-4 {
    text-indent: 8em;
  }
  .contact {
    margin-top: 2em;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;

    .icon {
      width: 8em;
      height: 8em;
    }
    .qrcode {
      width: 10em;
      height: 14em;
    }
  }
}
</style>
