<template>
  <div>
    <h1>Json PlaceHolder Posts Data </h1>
    <b-table
        striped
        :fields="fields"
        id="my-table"
        :items="info"
        :per-page="perPage"
        :current-page="currentPage"
        :primary-key="info.id"
    >
      <template v-slot:cell(id)="data">
        <b-button size="sm" variant="link"><b-link :to="'/post/'+data.value">View</b-link></b-button>
        <b-button size="sm" variant="link"><b-link :to="'/edit/'+data.value">Edit</b-link></b-button>
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
    info:[],
    currentPage:1,
    perPage:5,
    fields:[{key: 'userId', sortable: true},'title','body',{key: 'id', label: "Options"}]

  }
  },
  mounted () {
    axios
        .get('https://my-json-server.typicode.com/Muhammad-Muneeb-Zafar/Vuex-Pratice/posts')
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