

<template>

  <div >
    
    <input type="file" ref="fileInput" @change="onFileChange">
    <button @click="uploadFile">Upload</button>
  
  </div>
</template>

<script>



export default {

    name: 'DropZone',
  data() {
    return {
      file: null
    }
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    uploadFile() {
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/zip'];
      if (allowedTypes.includes(this.file.type)) {
        // your upload logic goes here
        console.log('File uploaded:', this.file);
      } else {
        console.log('Invalid file type. Please upload a JPEG, PNG, PDF, or ZIP file.');
      }
    }
  }
}
</script>

<style lang="scss">

.dropzone{


    background-color: red;
    width: 50%;
    border: 2px solid red;
}


</style>


