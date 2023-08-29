<template>
   <div>
  <!-- Using modifiers -->
  <b-button v-b-toggle.collapse-2 class="m-1">Toggle Collapse</b-button>

  <!-- Using value -->


  <!-- Element to collapse -->
  <b-collapse id="collapse-2">
    <b-card>I am collapsible content!</b-card>
  </b-collapse>
</div>
  </template>
  
  <script>
  export default {

    name:'Collapse',
    data() {
      return {
       
      };
    },
    methods: {
      
    },
  };
  </script>
  
  <style>
  
  </style>
  