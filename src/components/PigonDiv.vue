<template>
    

    <div>
      <div id="box"></div>
    <b-container>
      <b-row>
        <b-col cols="5" class="rund2"></b-col>
        <b-col cols="1" class="rund1"></b-col>
        <b-col   cols="2" class="bg-white img__wrapper d-flex justify-content-evenly">
          <div class="logo__wrapper">
          <img src="../assets/logo.png" alt="Image" class="logo">
        </div>
          <h4 class="logo__wrapper-h4">Pigeon</h4>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </template>
  
  <script >
  export default {
    name: 'PigonDiv',
    props: {
  
    },
  }
  </script>
  
  <style lang="scss">
  /* Your SCSS styles here */


.logo__wrapper{

width: 20%;

position: absolute;
margin-top:5%;
}



  .img__wrapper{
   
   transform:translateX(-17rem);
    border-radius: 1.5rem;
    transform: translateY(1.6rem);
    z-index: 20;
    margin-left: 10%;
    height: 5rem;
    position: fixed;
    
    
  }

  .rund1{
     background-color: #0B3A42; 
  

     z-index: 50;
     height: 3rem;
    
     transform: translateY(1.9rem);
     position: absolute;
     left: 21rem;
     border-bottom-right-radius:1.08rem ;
     
   
    

  }

  .rund2{

    @extend .rund1; 
    border-bottom-left-radius:1.5rem ;
  
    left:50.14rem;
    position: absolute;
    height: 2.9rem;
    
    
    
  }

  .logo{
   
    position: absolute;
    right: 5rem;
  }

  .logo__wrapper-h4{
  
font-weight: bold;
position: absolute;
top: 1.1rem;
right:7rem;
  }



 
  </style>
  