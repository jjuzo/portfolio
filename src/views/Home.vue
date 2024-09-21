

<template>
  <div class="image-container">
  <img class ="animate__animated animate__fadeIn animate__delay-1s" src="/src/assets/home.gif">
</div>

</template>
<router-view></router-view>

<style>

body{
  background-color: #dfdfdf;
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
