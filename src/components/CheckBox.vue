<template>
  <div class="check">
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
      class="d-flex justify-content-center"
      
      
    >
     <span class="zip__text"> Zip files</span>
    </b-form-checkbox>

    <div><strong>{{ }}</strong></div>
  </div>
</template>

<script>
  export default {
    name:'CheckBox',
    data() {
      return {
        status: 'not_accepted'
      }
    }
  }
</script>
<style scoped>

.check{

display: flex;
width: 10%;
padding: 1rem;
z-index: 3000;
font-size: 14px;
margin-left:12% ;
transform: translateY(-2.8rem);

}

.zip__text{
margin: 0.5rem;
display: flex;
width: 100%;

}


.custom-control-input:checked + .custom-control-label::before {
  border-color: #00BABA;
  background-color: #00BABA;
}


.custom-checkbox .custom-control-input:checked .custom-control-indicator {
  background-color: #00BABA;
}

</style>