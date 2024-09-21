
import { RouterLink } from 'vue-router';
<template>
  <div class="about">
    <div class="image-container">
  <img class ="animate__animated animate__fadeIn animate__delay-2s" src="/src/assets/about.gif">
</div>

<div class="text-container">
  <div class="title animate__animated animate__fadeInLeft animate__delay-1s">
    <h1 class="mobile-h1">about</h1>
  </div>
  <div class="context animate__animated animate__fadeInLeft animate__delay-1s">
    <p class="mobile-p">Welcome to my creative space online! I'm a passionate and detail-oriented designer driven by a love for transforming ideas into visually compelling stories. I passionately advocate for creating digital experiences that are seamlessly accessible to everyone. I believe in the power of collaboration and user-centric design principles to craft experiences that not only look aesthetically pleasing but are also intuitive and accessible for all users. </p>

    <p class="mobile-p">My goal is to make the web an inclusive space where everyone can navigate and engage effortlessly. If you'd like to delve deeper into my professional journey, feel free to access my resume by <a href="https://firebasestorage.googleapis.com/v0/b/images-port.appspot.com/o/Juzo%20M%20Resume.pdf?alt=media&token=b8838233-64e6-490d-863e-b3fa1621b4be" class="link-fixed" target="_blank">clicking here.</a></p>
  </div>
</div>
  </div>
  <router-view></router-view>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
}

h1{
  font-family: 'OPTIAlpineBold';
  color: black;
}

p{
  color: black;
}

.text-container{
  height: 35vh;
  width: 65%;
}

.image-container{
  margin-top: 0px;
  width: 35%;
}

.about{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.title,.context{
  padding-left: 16px;
}

@media only screen and (max-width: 1300px) {
  .about{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .image-container{
    width: 45%;
  }
  .text-container{
    width: 45%;
  }
}

@media only screen and (max-width: 956px) {
.text-container{
  height: auto !important;
}
}

@media only screen and (max-width: 500px) {
  
  .image-container{
    width: 60%;
  }
  .text-container{
    width: 60%;
  }
  
  .mobile-p{
    font-size: 14px;
  }

}

@media only screen and (max-width: 400px) {
  
  .image-container{
    width: 80%;
    padding-top: 40px;
  }
  .text-container{
    width: 75%;
    margin-bottom: 80px;
  }

  .tile .context{
  padding-left: 0px;
}

.title.animate__animated.animate__fadeInLeft.animate__delay-1s{
  padding-left: 0px;
}
}

</style>
