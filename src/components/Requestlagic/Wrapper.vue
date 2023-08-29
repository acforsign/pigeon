
<template>
    <div class="container">
      <!-- ... other content ... -->
      <FileUpload @uploadComplete="handleUploadComplete" />
      <div v-if="downloadLink">
        <a :href="downloadLink" target="_blank">Download Link</a>
      </div>
      <!-- ... other content ... -->
    </div>
  </template>
  
  <script>
  import Fileupload from "./Fileupload.vue";
  
  export default {
    name:'Wrapper',
    components: {
        Fileupload
    },
    data() {
      return {
        downloadLink: null
      };
    },
    methods: {
      handleUploadComplete(downloadLink) {
        this.downloadLink = downloadLink;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling for the main component */
  .container{

    width: 100px;
    height: 100px;
    background: red;

  }

  </style>
  