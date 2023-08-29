

<template>
    <div class="drop-zone" @dragover.prevent @drop="handleFileDrop">
      <input type="file" ref="fileInput" accept=".jpeg, .jpg, .png, .pdf, .zip" @change="handleFileUpload" style="display: none;">
      <p class="drop-zone__p">Drag and drop or <span class="drop-zone__span" @click="openFileInput">browse to</span> choose file</p>
      <!-- Other UI elements for displaying file information -->
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name:'Fileupload',
    data() {
      return {
        uploadedFile: null,
        downloadLink: null
      };
    },
    methods: {
      openFileInput() {
        this.$refs.fileInput.click();
      },
      async handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.uploadedFile = file;
          try {
            const formData = new FormData();
            formData.append("file", file);
  
            const response = await axios.post("https://192.168.2.51/upload", formData);
            if (response.status === 200) {
              this.downloadLink = response.data.downloadLink;
            }
          } catch (error) {
            console.error("Error uploading file:", error);
          }
        }
      },
      handleFileDrop(event) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
          this.uploadedFile = file;
          // Similar to handleFileUpload, make an Axios request to upload and get download link
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling for the drop zone */
  </style>
  