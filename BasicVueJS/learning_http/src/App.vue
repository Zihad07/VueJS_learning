<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-6">
        <div class="card card-body p-2">
          <div class="card-header">
            <strong>Http Request and Response Handle</strong>
          </div>

          <div class="form-group">
            <input type="text" name="name" class="form-control" v-model="user.name" placeholder="User name...">
          </div>

          <div class="form-group">
            <input type="text" name="email" class="form-control" v-model="user.email" placeholder="Email">
          </div>

          <div class="form-group">
            <button class="btn btn-sm btn-primary" @click="submit">Submit</button>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <button class="btn btn-primary" @click="fetchData">Get Data</button>

        <ul class="list-group my-2">
          <li class="list-group-item" v-for="u in users">
            <strong>{{u.name}}</strong> and his Email address <strong>{{u.email}}</strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        email: ''
      },
      users:[]
    }
  },
  methods: {
    submit() {
        // console.table(this.users);
      this.$http.post('https://vuejs-http-19763.firebaseio.com/data.json',this.user)
      .then(response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
      )
    },

    fetchData() {
      this.$http.get('https://vuejs-http-19763.firebaseio.com/data.json')
      .then(response=>{
        // console.log(response.json());
        return response.json();
      })
      .then(data=> {
        // console.log(data);
        let resultArray = [];

        for(let key in data){
          resultArray.push(data[key]);
        }

        // console.log(resultArray);

        this.users = resultArray;

      })
    }


  }
}
</script>

<style>

</style>
