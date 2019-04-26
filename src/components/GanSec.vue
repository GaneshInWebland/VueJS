<template>
  <div class="hello">

    
    <p>{{ para }}</p>

    <ul v-for="item in list">
        <li class="btn btn-primary">
          <span  class="badge badge-pill badge-warning">{{item.id}}</span> 
         {{item.first_name}}
     
         <span class="badge badge-light">{{item.email}}</span>
        </li>
    </ul>  
     
     
  </div>
</template>

<script>
	var dtz = [{
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2"
  }, {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "gender": "Male",
    "ip_address": "229.179.4.212"
  }, {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "gender": "Female",
    "ip_address": "180.66.162.255"
  }, {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "gender": "Male",
    "ip_address": "67.76.188.26"
  }];

export default {
  name: 'GanSec',
  data:function(){ 
    return {
      para:"Ga's Component texts...",
      list:dtz
    }
  }
  // props: { 4938
  //   para:String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 30px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding:4px 12px;
}
a {
  color: #42b983;
}
</style>
