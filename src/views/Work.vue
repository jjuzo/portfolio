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
      <div class="animate__animated animate__fadeInLeft box-shadow work-panels" id="first">
        <router-link class="links tooltip" to="/ladym">
          <span class="tooltiptext h1">Lady M Rebranding<span class="tooltip-subtext">Revamped Lady M's brand strategy to create dynamic identities in line with an overarching brand vision across all touchpoints.</span></span>
        </router-link>

      </div>
      <div class="animate__animated animate__fadeInLeft box-shadow work-panels" id="sec">
        <router-link class="links tooltip" to="/calia">
          <span class="tooltiptext">Calia Capstone Project<span class="tooltip-subtext">Developed a new merchandising strategy for the private label brand Calia, incorporating marketing materials and financial analysis.</span></span>
        </router-link>

      </div>
      <div class="animate__animated animate__fadeInLeft box-shadow work-panels" id="third">
        <router-link class="links tooltip" to="/sharp">
          <span class="tooltiptext">Sharp Homepage Redesign<span class="tooltip-subtext">Collaborated with Sharp Corporation to redesign their homepage, focusing on enhancing UX design and modernizing visuals.</span></span>
        </router-link>
      </div>

      <div id="spacing"></div>
    </div>
  </div>
  </div>
</template>
<router-view></router-view>

<style>

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@200&display=swap');

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

.links {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: all 200ms ease-in-out;
  color: rgba(255, 255, 255, 0.3);
}

.links:hover {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  position: relative;
  width: auto;
  padding-bottom: 8px;
  color: black;
  font-family: 'OPTIAlpineBold';
  z-index: 1;
  top: 20%;
  left: calc(100% + 8px);
  opacity: 0;
  font-size: 25px;
  transition: all 300ms ease-in-out;
  height: auto;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
  left: calc(100% + 16px);
}

.tooltip-subtext {
  margin-top: 2px;
  display: block;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  font-family: 'Sora', sans-serif;

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

#first,
#sec,
#third,
#fourth {
  height: calc(7vw + 100px); /* Adjusted to maintain aspect ratio */
  width: calc(13vw + 150px); /* Adjusted to maintain aspect ratio */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);
  border-radius: 20px;
  transition: all 300ms ease-in-out;
}

#first {
  background-image: url(/src/assets/ladym_cover.webp);

}

div#first:hover,
#sec:hover,
#third:hover,
#fourth:hover {
  filter: grayscale(0%);
}

#sec {
  background-image: url(/src/assets/calia_cover.webp);
}

#third {
  background-image: url(/src/assets/sharp_cover.webp);
}

#fourth {
  background-image: url(/src/assets/nissan_cover.webp);
}

#spacing {
  padding-bottom: 300px;
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

@media (max-width: 1620px) {
  .tooltip .tooltiptext{
top: 15%;
  }
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
        padding-bottom: 300px;
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
  }

.projects-container{
  width: 100%;
}

  .left-txt {
    text-align: center;
    font-size: 12px;
  }

  #first,
  #sec,
  #third,
  #fourth {
    height: 200px;
    width: 350px;
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
        padding-bottom: 60px;
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

#spacing{
  padding-bottom: 50px;
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

  #first,
  #sec,
  #third, 
  #fourth {
    height: 150px;
    width: 300px;
  }

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

  #spacing{
  padding-bottom: 0px;
  }
}

@media (max-width: 740px) {
.tooltip .tooltiptext {
    position: static;
  }

  .tooltip:hover .tooltiptext{
    opacity: 0;
  }

  .mobile{
    margin-top: 140px;
  }

  .projects{
    align-items: center;
    gap: 20px;
  }

  #first{
    margin-top: 24px;
  }
}



@media (max-width: 400px) {
  #first, #sec, #third, #fourth {
      width: 276px;
  }

  .prv-projects{
    font-size: 18px;
  }
}

</style>
