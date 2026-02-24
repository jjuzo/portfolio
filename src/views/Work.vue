<template>
  <div class="previous-txt-box">
    <div class="left-txt animate__animated animate__fadeInLeft">
      <h1>Previous Projects:</h1>
    </div>
  </div>

  <div class="work">
    <div class="mobile animate__animated animate__fadeInLeft">
      <h1 class="prv-projects">Previous Projects:</h1>
    </div>
    <div class="projects-container">
      <div class="top-spacing"></div>
    <div class="projects">
      
      <div class="animate__animated animate__fadeInLeft box-shadow work-panels " id="zero">
    
   
        <router-link class="links tooltip" to="/soho">

          <span class="tooltiptext h1"> <h2 class="subtxt">Soho international Film Festival 2025</h2><span class="tooltip-subtext">A brand new design system for the Soho international Film Festival 2025. To make a timeless digial focused assets to enhance marketability</span></span>

        </router-link>

        

  
      </div>

              <div class="animate__animated animate__fadeInLeft box-shadow work-panels" id="sec">
        <router-link class="links tooltip" to="/ukg">
          <span class="tooltiptext"><h2 class="subtxt">UKG Rebrand 2025</h2><span class="tooltip-subtext"> Supported UKG’s rebrand with motion design across advertising content and UI animations, plus partner-facing brand guidelines.</span></span>
        </router-link>
      </div>


        <div class="animate__animated animate__fadeInLeft box-shadow work-panels" id="fifth">
        <router-link class="links tooltip" to="/belize">
          <span class="tooltiptext"><h2 class="subtxt">Belize: Estoy es Belicidad</h2><span class="tooltip-subtext">Helped develop the "Belize Estoy Es Belicidad" international campaign for the Belize Tourism Board, using Google Ads, video ads, paid social, and landing pages </span></span>
        </router-link>
      </div>



<div class="animate__animated animate__fadeInLeft box-shadow work-panels" id="third">
        <router-link class="links tooltip" to="/sharp">
          <span class="tooltiptext"><h2 class="subtxt ">Sharp Homepage Redesign</h2><span class="tooltip-subtext">Collaborated with Sharp Corporation to redesign their homepage, focusing on enhancing UX design and modernizing visuals.</span></span>
        </router-link>
      </div>

          <div class="animate__animated animate__fadeInLeft box-shadow work-panels " id="first">
    
   
        <router-link class="links tooltip" to="/ladym">
    
          <span class="tooltiptext h1"> <h2 class="subtxt">Lady M Rebranding</h2><span class="tooltip-subtext">Revamped Lady M's brand strategy to create dynamic identities in line with an overarching brand vision across all touchpoints.</span></span>

        </router-link>

  
      </div>
   
      
      
      <!-- <div class="animate__animated animate__fadeInLeft box-shadow work-panels" id="fourth">
        <router-link class="links tooltip" to="/sharp">
          <span class="tooltiptext"><h2 class="subtxt ">Amigo App Development</h2><span class="tooltip-subtext">Amigo is a geolocation-based mobile app developed using Flutter, designed to help users explore and discover local street art throughout New York City.</span></span>
        </router-link>
      </div> -->
     
    


      <div id="spacing">

        <div class="view-more ">
          <router-link class="view-more" to="/viewmore"> 
     View More
    </router-link>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<router-view></router-view>

<style>

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');


html {
  scroll-behavior: smooth;
}

.top-spacing{
  height: 40vh;
}

template {
  width: 100%;
  height: 100%;
}

.down{
  transform: rotate(-270deg);
}

.view-more{
  color: black;
  user-select: none;
  font-size: 16px;
  color: rgba(0, 0, 0,);
  font-family: 'Sora', sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.view-more:hover{
  background-color: transparent;
  font-weight: 400;
}


.links {
  position: relative;
}

.links::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -18px;
  transform: translateY(-50%) scale(0.6);
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #000;
  opacity: 0;
  transition: opacity 220ms ease, transform 220ms ease;
  pointer-events: none;
}

.links:hover::before {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}


.links {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: all 300ms ease-in-out;
  color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
}

    


.links:hover {
  background: rgba(255, 255, 255, 0.00);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 1.0);
  transform: translate3d(0, -2px, 0);

}

.subtxt{
  font-size: 24px;
  margin-bottom: 4px;
  font-weight: 300;
}

.tooltiptext {
  visibility: hidden;
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: max-content; 
  color: black;
  font-family: 'OPTIAlpineBold';
  z-index: 1;
  left: calc(100% + 8px);
  opacity: 0;
  transition: all 300ms ease-in-out;
  height: 100%;
  font-weight: 300;
  border: 0px;
  min-width: 250px;
  max-width: 400px;
  
}



.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
  left: calc(100% + 16px);
  border: 0px;
}

.tooltip-subtext {
  display: inline-block;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  font-family: 'Sora', sans-serif;
  font-weight: 300;
  width: max-content; 
  min-width: 250px;
  max-width: 400px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 4px 0px 0px 8px;
}

.work {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.work-panels {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile{
  display: none;
}

#zero,
#first,
#sec,
#third,
#fourth,
#fifth {
  width: clamp(300px, 22vw, 500px);  
  aspect-ratio: 16 / 9;       
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);
  border-radius: 20px;
  transition: all 300ms ease-in-out;
}

#zero{
  background-image: url(/src/assets/soho2.png);
}

#first {
  background-image: url(/src/assets/ladym_cover.webp);

}


#zero:hover,
div#first:hover,
#sec:hover,
#third:hover,
#fourth:hover,
#fifth:hover {
  filter: grayscale(0%);
}

#sec {
  background-image: url(/src/assets/UKGcover.webp);
}

#third {
  background-image: url(/src/assets/sharp_cover.webp);
}

#fourth {
  background-image: url(/src/assets/amigo_cover.webp);
}

#fifth {
  background-image: url(/src/assets/belize_cover.webp);
}

#spacing {
  padding-bottom: 248px;
}

.left-txt {
  position: fixed;
  width: 70%;
}

.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
}

.previous-txt-box {
  display: contents;
  width: 100%;
}

@media (max-width: 1440px) {

  .tooltip .tooltiptext{
      font-size: 21px;
    }

    .tooltip-subtext{
      font-size: 16px;
    }

    .top-spacing{
  height: 42vh;
}

.projects{
  gap: 60px;
    
  }

      #spacing{
        padding-bottom: 248px;
    }
}
    
  
@media (max-width: 1296px) {
  .previous-txt-box {
    display: none;
  }

  .top-spacing{
  height: 0vh;
}

  .mobile{
    margin-top: 40px;
    display: block;
  }

  .work {
    width: 65%;
    height: 95%;
    justify-content: flex-start;
    flex-direction: column;
    display: flex;
  }

.projects-container{
  width: 100%;
}

  .left-txt {
    text-align: center;
    font-size: 12px;
  }

  .projects{
    margin-top: 40px;
    width: 100%;
    margin-bottom: 0px;
    align-items: flex-start;
  }

.left-txt{
  position: absolute;
}

  .left-txt.animate__animated.animate__fadeIn.animate__delay-1s{
    padding-top: 64px;
  }

  #spacing{
        padding-bottom: 80px;
        display: flex;
        justify-content: center;
        width: 100%;
    }



}



@media (max-width: 1024px) {
  .work {
    width: 75%;
    height: auto;
  }
  }

  @media (max-width: 1012px) {
  .work {
    width: 85%;
  }
  }

  @media (max-width: 960px) {
  .work {
    width: 90%;
  }
  }

@media (max-width: 958px) {
  .work {
    width: 90%;
  }

.projects{
  gap: 40px;
}


}

@media (max-width: 876px) {
 .tooltip-subtext {
    display: none;
  }

  .projects{
    width: 100%;
  }
}


@media (max-width: 850px) {

  .prv-projects{
    font-size: 24px;
  }


  .left-txt {
    text-align: center;
    margin-bottom: 280px;
    font-size: 12px;
  }

  .left-txt.animate__animated.animate__fadeIn.animate__delay-1s{
    padding-top: 204px;
  }

  .work{
    width: 90%;
    justify-content: center;

  }

.previous-txt-box{
  margin-bottom: 144px;
}

  .projects{
    margin-top: 0px;
  }

  #first {
    padding-top: 0px;
    margin-top: 40px;
  }

}

@media (max-width: 740px) {

  
.work{
 display: flex; 
}

.mobile{
  margin-top: 0px;
}

.tooltip .tooltiptext {
    position: static;
  }

  .tooltip:hover .tooltiptext{
    opacity: 0;
  }

  .projects{
    align-items: center;
    gap: 20px;
  }

  #first{
    margin-top: 24px;
  }

  #spacing{
    padding-bottom: 0px;
  }
}



@media (max-width: 503px) {

.work{
  padding-top: 4rem;
}

    html, body {
  overflow-x: hidden;
}
  .prv-projects{
    font-size: 18px;
  }

#first{
  margin-top: 16px;
}
.mobile{
  margin-top: 0px;
}

#spacing{
  padding-bottom: 4rem;
}

}

@media (max-width: 380px) {
  #first,
  #sec,
  #third,
  #fourth,
  #fifth {
    width: 45vw; /* or tweak to 85vw if 90 feels too wide */
  }

  html, body {
  overflow-x: hidden;
}
}
</style>
