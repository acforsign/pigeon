<template>
    <div>
<div class="drop-zone" id="dropZone">
  <input type="file" id="fileInput" accept=".jpeg, .jpg, .png, .pdf, .zip">
  <p>Drag and drop files here or click to upload</p>
</div>
    </div>
</template>

<script>
export default {
    name: 'Zone',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" >

.drop-zone {
  border: 2px dashed #20c7c1;
  background-color: #ffffff;
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
}

.drop-zone p {
  text-align: center;
  color: #999999;
  font-family: Arial, sans-serif;
}

</style>