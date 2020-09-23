<template>
  <h1>View of record</h1>
</template>

<script>
export default {
name: "View",
  data () {
  return{
    id:this.$route.params.id,
    rowData:{}
  }
},
  created() {
  // this.$http.get('')
  }
}
</script>

<style scoped>

</style>