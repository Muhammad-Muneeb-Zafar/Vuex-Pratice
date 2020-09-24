<template>
  <div>
  <h1>Edit the record</h1>
    <b-form>
      <b-form-group
          id="input-group-1"
          label="Title"
          label-for="input-1"
          description=""
      >
        <b-form-input
            id="input-1"
            v-model=rowData.title
            placeholder="Title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Body" label-for="input-2">
        <b-form-textarea
            id="textarea"
            v-model=rowData.body
            placeholder="Body"
            rows="3"
            max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button @click="updateData()" size="lg" variant="outline-primary"><b-link :to="'/'">Submit</b-link></b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Edit",
  data() {
    return {
      rowData: {},
      id: this.$route.params.id,
    }
  },
  created() {
    axios.get('https://my-json-server.typicode.com/Muhammad-Muneeb-Zafar/Vuex-Pratice/posts/' + this.id)
        .then(response => (this.rowData = response.data))
  },
  methods: {
    updateData() {
      axios.post('https://my-json-server.typicode.com/Muhammad-Muneeb-Zafar/Vuex-Pratice/posts/',  this.rowData,
          {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
          })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }
  }
}
</script>

<style scoped>

</style>