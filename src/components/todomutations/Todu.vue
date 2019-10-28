<template>
  <div>
    <p><input type="text" v-model="txt" /><button @click="add">提交</button></p>
    <ul>
      <li v-for="(item,index) of list" :key="index" :class="{'xian': item.done}"  >
        <input type="checkbox" :checked="item.done" @click="change(index)" />
        <p>{{item.title}}</p>
        <button @click="del(item.id)">×</button>
      </li>
    </ul>
    <div class="foot">
      共 {{list.length}} 条任务----已做 {{$store.getters.yz.length}} 条 -----未作 {{$store.getters.wz.length}} 条
      <button @click="yizuo">显示已做</button>
      <button @click="weizuo">显示未做</button>
      <button @click="quanbu">显示全部</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      txt:"",
      isshow:"all"
    }
  },
  computed:{
    list(){
      if(this.isshow === "all"){
        return this.$store.state.list
      }else if(this.isshow === "yz"){
        return this.$store.getters.yz
      }else if(this.isshow === "wz"){
        return this.$store.getters.wz
      }
    }
  },
  methods:{
    add(){
      let arr=this.list;
      let id=new Date().getTime();
      arr.push({
        id:id,
        title: this.txt,
        done: false
      })
      console.log(arr)
      this.$store.commit("ADD",arr);
      this.txt=""
    },
    change(index){
      let arr=this.list;
      arr[index].done = !arr[index].done
      this.$store.commit("CHANGE",arr)
    },
    del(id){
      let arr=this.list;
      arr = arr.filter(item => item.id !== id)
      this.$store.commit("DEL",arr)
    },
    quanbu(){
      this.isshow="all"
    },
    weizuo(){
      this.isshow="wz"
    },
    yizuo(){
      this.isshow="yz"
    }
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
div{
  width: 600px;
  border: 1px solid #333;
  margin: 0 auto;
}
div>p{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
p button{
  width: 10%;
  height: 45px;
  outline: none;
  border-radius: 5px;
  background: green;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
p input{
  width: 80%;
  height: 40px;
  margin: 10px 5px;
  text-indent: 10px;
  outline: none;
}
ul{
  list-style: none;
  width: 100%;
}
li{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
li p{
  width: 90%;
}
li button{
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  background: red;
  outline: none;

}
li input{
  flex: 1;
  outline: none;
}
.xian{
  position: relative;
}
.xian::after{
  content: "";
  position: absolute;
  top:50%;
  left: 0;
  width: 100%;
  height: 1px;
  color: #666;
  background: #666;
  overflow: hidden;
}
.foot{
  text-indent: 10px;
}
.foot button{
  margin: 10px;
}
</style>