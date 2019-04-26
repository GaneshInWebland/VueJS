<template>
  <div class="container">
    <h2> {{title}} {{ganesh}} </h2>
    <childComponent></childComponent> 
    <GanSec></GanSec>
  </div>



</template>




<script>
  import GanSec from './components/GanSec.vue'

export default {
  name: 'app',
  components: {
    GanSec
  }, 

   data:function(){
     return{
        ganesh:'This is from Vue',
       title:"Hello, "
     }
    } 
  
 }
</script>


<style>
h2 {color:black;}  
p {
  font-family:"Segoe UI",Roboto,"Helvetica Neue","Fira Sans","Oxygen Sans","Droid Sans",Helvetica,Arial,sans-serif;
}
</style>