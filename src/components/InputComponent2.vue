<template>
    <div class="inputtext" >
      <b-form-input v-model="text" placeholder="Enter your favourite name " class="formtxt"></b-form-input>
      <div class="mt-2"> {{  }}</div>
    </div>
  </template>

<script>
export default {
    name: 'InputComponent2',

    data() {
        return {
          text: ''
        }
      },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

.inputtext{

    transform: translateX(1.4rem);
  background-color: #f5f1f1;
  margin: 2rem ;
  width: 16.58rem;
}

#input__3[data-v-01caf037] {
    transform: translateX(1.2rem);
    background-color: #f5f1f1;
    margin-left: 5rem;
    width: 14rem;
}

.formtxt{

    background-color: #f5f1f1;
   


}
.formtxt:hover{

    background-color: #f5f1f1;
    border: 1px solid #00baba;
   


}
.formtxt:focus{

    background-color: #f5f1f1;
    border: 1px solid #00baba;
   


}


</style>


  
  