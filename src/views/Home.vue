

<template>
  <div class="image-container">
  <img class ="animate__animated animate__fadeIn animate__delay-1s" src="/src/assets/home.gif">
</div>

</template>
<router-view></router-view>

<style>

body{
  background-color: #dfdfdf;
  background-image:
  repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.02) 0px, rgba(0, 0, 0, 0.02) 1px, transparent 1px, transparent 10px),
  repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.02) 0px, rgba(0, 0, 0, 0.02) 1px, transparent 1px, transparent 10px);
}


.image-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.image-container img {
  width: 100%;

}



/* .width{
  width: 90%;
} */



</style>
