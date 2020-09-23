<template>
  <div>
    <h1>Json PlaceHolder Todos Data </h1>
    <b-table
        striped
        :fields="fields"
        id="my-table"
        :items="info"
        :per-page="perPage"
        :current-page="currentPage"
    >
      <template v-slot:cell(Options)>
        <b-button size="sm" variant="link"><b-link :to="'/view'">View</b-link></b-button>
        <b-button size="sm" variant="info"><b-link :to="'/edit'">Edit</b-link></b-button>
      </template>
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import axios from 'axios';

export default {
name: "JsonData",
  data () {
  return {
    info:null,
    currentPage:1,
    perPage:10,
    fields:[{key: 'id', sortable: true},'title',{key: 'userId', sortable: true},'body' , 'Options']

  }
  },
  mounted () {
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => (this.info = response.data ))
  },
  computed: {
    rows() {
      return this.info.length;
    }
  }
}
</script>
<style scoped>

</style>