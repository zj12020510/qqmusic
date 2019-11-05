<template>
  <div class="bfq_liebiao">
    <div class="bfq_lb_header">共{{musiclist.length}}首歌</div>
    <ul>
      <li v-for="(item) of musiclist" :key="item.id">
        {{item.title}}
        <span>- {{item.zuozhe}}</span>
        <a class="del">x</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["musiclist"]
};
</script>

<style lang="stylus" scoped>
.bfq_liebiao {
  position: absolute;
  width: 100%;
  height: 80%;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;

  .bfq_lb_header {
    width: 100%;
    height: 3.75rem;
    line-height: 3.75rem;
    text-align: center;
    font-size: 1.25rem;
    border-bottom: 0.0625rem solid #333;
  }

  ul {
    width: 100%;
    flex: 1;
    overflow: scroll;

    li {
      width: 100%;
      height: 2.5rem;
      line-height: 2.5rem;
      border-bottom: 0.0625rem solid #333;
      padding: 0 5%;

      span {
        font-size: 0.875rem;
        color: #333;
        height: 2.5rem;
        line-height: 2.5rem;
      }

      .del {
        float: right;
        color: #333;
      }
    }
  }
}
</style>