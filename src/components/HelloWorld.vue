<template>
  <div class="hello">
  <div>这是我测试的vuex:{{myTestNum}}</div>
    <div><input type="button" value="增加数字" @click="addnum"></div>
    <div><input type="button" value="减小数字" @click="getData({num:1})"></div>
  </div>
</template>

<script>
  import { mapGetters,mapMutations, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    addnum(){
      this.CHANGE_QUESTION_LIST(10)
    },
    ...mapActions(['getData']),
    ...mapMutations({
      CHANGE_QUESTION_LIST:'CHANGE_QUESTION_LIST'
    })

  },
  computed:{
    ...mapGetters({
      myTestNum:'myTestNum'
    })
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
