<template>

  <div class="about">
    <div class="image-container">
  <img class ="animate__animated animate__fadeIn animate__delay-2s" src="/src/assets/contact.gif">
</div>

<div class="text-container">
  <div class="title animate__animated animate__fadeInLeft animate__delay-1s">
    <h1 class="mobile-h1">contact</h1>
  </div>
  <div class="context animate__animated animate__fadeInLeft animate__delay-1s">
    <p class="mobile-p">For business inquiries, please contact me at:<a class="link-fixed" href="mailto:juzo_morales@fitnyc.edu" target="_blank"> juzo_morales@fitnyc.edu</a></p>
    <p class="mobile-p">Connect with me via LinkedIn: <a class="link-fixed" href="https://www.linkedin.com/in/juzo-morales-17499a191/" target="_blank">https://www.linkedin.com/in/juzo-morales-17499a191/</a></p>
    <p class="mobile-p">For more of my work, follow my Instagram: <a class="link-fixed" href="https://www.instagram.com/juzo.css/" target="_blank">@juzo.css</a></p>

    <p class="mobile-p">©2023</p>
 
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

.context{
  flex-direction: column;
  display: flex;
  gap: 8px;
}

.link-fixed{
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.7);
  transition: all 300ms ease-in-out;
}

.link-fixed:hover{
  background-color: transparent;
  color: rgba(0, 0, 0, 0.4);
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

.tile,.context{
  padding-left: 16px;
}


@media only screen and (max-width: 1300px) {
  .about{
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .image-container{
    width: 45%;
  }
  .text-container{
    width: 45%;
  }

  .context{
    gap: 4px;
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
  }
  .text-container{
    width: 75%;
  }


  .tile,.context{
  padding-left: 0px;
}
}

</style>
