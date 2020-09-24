<template>
  <div>
    <h1>View of record</h1>
    <h2>ID : {{rowData.id}}</h2>
    <h3>User ID : {{rowData.userId}}</h3>
    <h3>Title : {{rowData.title}}</h3>
    <p>{{rowData.body}}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
name: "view",
  data () {
  return{
    id:this.$route.params.id,
    rowData:{}
  }
},
  created() {
  axios.get('https://my-json-server.typicode.com/Muhammad-Muneeb-Zafar/Vuex-Pratice/posts/'+this.id)
      .then(response => (this.rowData = response.data ))
  }
}
</script>

<style scoped>

</style>