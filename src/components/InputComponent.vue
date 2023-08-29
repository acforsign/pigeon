<template>
    <div class="enter">
      <b-form-select v-model="selected" :options="options" class="custom-select"></b-form-select>
      <div class="mt-3"><strong>{{  }}</strong></div>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          selected: null,
          options: [
            { value: null, text: 'for example:6 month' },
            { value: 'a', text: 'unlimited' },
            { value: 'b', text: '1 day' },
            { value: { C: '3PO' }, text: '1 month ' },
            { value: 'd', text: '6 month' },
            { value: 'd', text: '1 year' },
            { value: 'e', text: 'This one is disabled', disabled: true }
            
          ]
        };
      }
    };
  </script>
  
  <style lang="scss" scoped>
  .enter {
    text-align: center; /* Center-align the surrounding div's content */
  }
  
  .custom-select {
    background-color: #f5f1f1; /* Set the background color */
    border: none; /* Remove the border around the select */
    appearance: none; /* Remove default appearance */
    padding: 0.375rem 2.25rem 0.375rem 0.75rem; /* Adjust padding as needed */
    text-align: center; /* Center-align the text */
  }
  
  .custom-select:focus {
    box-shadow: none; /* Remove focus box-shadow */
  }
  
  .custom-select option {
    border: none; /* Remove the border around the select options' text */
  }
  
  .custom-select option:selected {
    border: none; /* Remove the border around the selected option */
  }


  .custom-select[data-v-62be3503] {
    background-color: #f5f1f1;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0.375rem 0.25rem 0.375rem 0.75rem;
    text-align: center;
  }

 

  
  </style>
  