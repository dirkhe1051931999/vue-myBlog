<template>
  <section class="laboratory">
    <h2 class="title">
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-lab"></use>
      </svg>我的项目
    </h2>
    <div class="proj-list">
      <Project
        class="lab-project"
        v-for="(project, index) in projectList"
        :project="project"
        :position="`${index % 2 === 0 ? 'left' : 'right'}`"
        :key="project.id"
      ></Project>
    </div>
  </section>

</template>

<script>
import axios from 'axios';
import api from "~/http/api/index";
import Project from '~/components/laboratory/Project.vue';
export default {
  components: {
    Project
  },
  head() {
    return {
      title: '我的项目'
    };
  },
  name: '',
  data() {
    return {
    }
  },
  asyncData() {
    return axios.get(`${api.api.laboratory}`).then(res => {
      if (res.data.success === 1) {
        return {
          projectList: res.data.posts
        };
      } else {
        return { projectList: [] };
      }
    });
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
@import "~assets/less/index";
.laboratory {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: @minHeight;
  background-color: #fff;
  box-sizing: border-box;
  padding: 2em 0;

  .title {
    margin-bottom: 1.2em;
    font-size: 2.5em;
    color: #333;
    line-height: 1;
    text-align: center;

    .icon {
      width: 0.9em;
      height: 0.9em;
      vertical-align: -0.1em;
      margin-right: 0.3em;
    }
  }
}
</style>
