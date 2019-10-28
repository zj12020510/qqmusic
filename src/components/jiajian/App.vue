<template>
  <div>
    <p><img src="./assets/logo192.png" alt srcset /></p>
    <p>你好</p> 
    <p>---count---:{{count}}</p>
    <p><button @click="jian">同步-</button>
    <button @click="jia">同步+</button></p> 
    <p>
      <button @click="del">异步-</button>
      <button @click="add">异步+</button>
    </p>
  </div>
</template>

<script>
export default {
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    jian(){
      this.$store.commit("JIAN",1)
    },
    jia(){
      this.$store.commit("JIA",1)
    },
    add(){
      this.$store.dispatch("JI","JIA")
    },
    del(){
      this.$store.dispatch("JI","JIAN")
    }
  }
};
</script>

<style>
div{
  width: 400px;
  margin: 0 auto;
}
p{
  text-align: center;
}
</style>
