<script setup>
import{ref} from "vue"
</script>

<template>
 

<div class="header-text">
    <h2 class="animate__animated animate__fadeInLeft animate__delay-1s top-left">Juzo Morales</h2>
    <h2 id="typewalk" class="animate__animated animate__fadeInLeft animate__delay-1s top-leftv2">Designer + Developer</h2>
</div>

    <transition name="fade-in-left">
<nav class="animate__animated animate__fadeInLeft padding">
</nav>
</transition>


  

  <main>
 
   
  <transition name="fade-in-up">
    <div id="sideLeft" class="animate__animated animate__fadeInUp">
      
    </div>
    </transition>

    <transition name="fade-in-up">
    <div id="sideRight" class="animate__animated animate__fadeInUp">
      <button id ="menu"  :class="{'rotated': isOpen}" @click="toggleContent" >+</button>
    
    </div>
  </transition>

  <transition name="fade-in-left">
    <div id="bottom" class="animate__animated animate__fadeInLeft">
    </div>
  </transition>


  <transition name="fade-in-left">
    <div v-if="isOpen" class="content animate__animated animate__fadeIn" :class="{'animate__fadeOutLeft': fadeOut}">
    <router-link  @click.native="closeMenu" to="/" class="animate__animated animate__fadeInLeft">Home</router-link>
    <router-link  @click.native="closeMenu" to="/work" class="animate__animated animate__fadeInLeft">Work</router-link>
    <router-link  @click.native="closeMenu" to="/about" class="animate__animated animate__fadeInLeft">About</router-link>
    <router-link  @click.native="closeMenu" to="/contact" class="animate__animated animate__fadeInLeft">Contact</router-link>
    </div>
  </transition>
</main>
<router-view></router-view>

</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      fadeOut: false,
    };
  },
  
  methods: {
    toggleContent() {
      if (this.isOpen) {
        this.fadeOut = true;
        setTimeout(() => {
          this.isOpen = false;
          this.fadeOut = false;
        }, 300); // Adjust the duration to match the fade-out animation duration
      } else {
        this.isOpen = true;
      }
    },

    closeMenu() {
      if (this.isOpen) {
        this.fadeOut = true;
        setTimeout(() => {
          this.isOpen = false;
          this.fadeOut = false;
        }, 300); // Adjust the duration to match the fade-out animation duration
      }
    }
  },
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

:root{
  --animate-delay: 0.5s;
}


*{
    margin: 0;
    padding: 0;
}

@font-face {
  font-family: 'OPTIAlpineBold'; 
  src: url('/src/assets/OPTIAlpineBold-Primer.otf') format('opentype'); 
}

@font-face {
  font-family: 'Typewalk1915-Thin'; 
  src: url('/src/assets/Typewalk1915-Thin-Demo.otf') format('opentype'); 
}

h2{
  font-family: OPTIAlpineBold;
  color: black;
}

#typewalk{
  font-family: Typewalk1915-Thin;
  color: black;
  font-size: 25px;
}
/* 
h3{
  font-family: Typewalk1915-Thin;
  color: black;
} */

.top-left{
  position: fixed;
  top: 5px;
  left: 64px;
}

.top-leftv2{
position: fixed;
top: 4px;
left: 216px;
}

body{
  background-color: #dfdfdf;
}
nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    border-bottom: 1px solid black;
    background-color: #dfdfdf;
  }

.padding{
  padding: 24px 60px;
}

.content {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 80px;
  top: 65px;
  font-family: 'OPTIAlpineBold';
  z-index: 200;
  background-color: #dfdfdf;
  box-shadow: 0 0 80px 160px #dfdfdf;
  z-index: 2;
}

.content a {
  color: black;
  margin-bottom: 20px;
}

.content a:hover{
  background-color: transparent;
  color: #dfdfdf;
 
}

.content a.router-link-active {
  position: relative;

}

.content a.router-link-active::before {
  content: '';
  position: absolute;
  left: -18px;
  top: 32%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  animation-duration: .4s;
    animation-name: fadeInLeft;
}


.animate__fadeOutLeft {
    animation-duration: 1s;
    animation-name: fadeOutLeft;
    animation-fill-mode: forwards;
  }

#sideLeft{
  height: 100%;
  position: fixed;
  /* width: calc(50% - 900px); */
  min-width: 50px; /* Adjust the minimum width as needed */
  left: 0;
  top: 0;
  border-right: 1px solid black;
  background-color: transparent;
  z-index: 200;
}

#sideRight{
  display: flex;
  align-items: top;
  justify-content: flex-end;
  height: 100%;
  position: fixed;
  width: calc(100% - 50px);
  left: 0;
  top: 0;
  z-index: 200;
  border-right: 1px solid black;
  background-color: transparent;
  pointer-events: none;
}

#bottom{
width: 100%;
height: 50px;
position: fixed;
left: 0;
bottom: 0;
z-index: 100;
border-top: 1px solid black ;
background-color: #dfdfdf;
}

#menu{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: black;
  color: white;
  font-size: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  pointer-events: auto;
right: -49px;
top: 55px;
transition: transform 0.3s ease;
}

.rotated {
  transform: rotate(45deg);
}

.header-text{
  position: absolute;
  z-index: 100;
}



@media only screen and (max-width:503px) {
  .header-text {

    display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center; /* Vertical centering */
  }
    
    #typewalk{
  display: none;
    }

 .top-left {
  position: fixed;
  top: 7px;
    left: auto;
  transform: translate(-50%, -50%);
}




  }





</style>
