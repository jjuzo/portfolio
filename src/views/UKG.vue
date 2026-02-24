<template>
  <div class="view">

    <div class="body animate__animated animate__delay-1s animate__fadeInLeft">
      <div style="background-color: #dfdfdf;" class="sub-head box-shadow">
        <div class="grouping">
          <h1 class="mobile-h1">UKG Rebrand</h1>
        </div>
        <div class="grouping">
              <router-link class="toggle-arrows-prv" to="/soho">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="flipped"
            >
              <path d="M6 0l12 12-12 12z" />
            </svg>
          </router-link>

          <router-link class="toggle-arrows-nxt" to="/belize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6 0l12 12-12 12z" />
            </svg>
          </router-link>
        </div>
      </div>

      <div class="text-holder">
        <p>Team:  Colin Menchin, Emily Golden, Josh Davis, Juzo Morales</p>
        <p>Duration: 8 weeks</p>
        <p>Role: Graphic/Motion Designer</p>
      </div>

      

    <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/UKG/ukg_1.webp"
          />
        </div>

        <div class="text-holder-callout">
        <h1 class="mobile-h1 w-100">About this project</h1>
        <p>
       This project supported UKG’s broader rebranding effort, focused on evolving the brand into a more modern, flexible system across digital and product experiences. The initiative emphasized clarity, consistency, and scalability, ensuring the refreshed identity could translate seamlessly across marketing, UI, and partner-facing touchpoints. Motion played a key role in reinforcing the new brand language, helping define how the system behaves in motion and how it is experienced across screens.</p>
      </div>

    

          <div class="image-holder">
       <video  class="w-100 img-styling" autoplay loop muted playsinline>
<source src="https://www.dropbox.com/scl/fi/o2qnyfxjiqv1hwygmbp0w/ukg_final.mp4?rlkey=lq976h22inlwcqd5f9a39insc&st=o2uedpyg&raw=1" type="video/mp4">
</video>
        </div>

    <div class="text-holder-callout">
        <h1 class="mobile-h1 w-100">The Deliverables </h1>
        <p>The deliverables focused on translating the new brand system into motion and digital experiences. This included UI animation prototypes for the redesigned product interface, helping define how the rebrand behaves within the product itself. Short-form motion content was developed to unveil the rebrand across digital channels, alongside motion assets used for advertising and broader brand communication. Partner brand guidelines were also created to ensure consistent adoption and implementation of the new system across external teams and touchpoints.</p>
      </div>

  

                <div class="image-holder">
             <video  class="w-100 img-styling" autoplay loop muted playsinline>
<source src="https://www.dropbox.com/scl/fi/6u77bl079xj16f4f8hfgi/Dashboard-pair-1.mp4?rlkey=975u08vzoqqdx0ekmm6ohn57g&st=64tpr00q&raw=1" type="video/mp4">
</video>
        </div>

        <div class="image-holder">
             <video  class="w-100 img-styling" autoplay loop muted playsinline>
<source src="https://www.dropbox.com/scl/fi/498v1y62utmpedttvn6nk/Dashboard-pair-2.mp4?rlkey=2jb5ytso39qr8b1cu5qck3utz&st=3kjg3wut&raw=1" type="video/mp4">
</video>
        </div>

    <div class="image-holder">
             <video  class="w-100 img-styling" autoplay loop muted playsinline>
<source src="https://www.dropbox.com/scl/fi/qzfynps71bdvbqixibphk/Dashboard-pair-3.mp4?rlkey=w656ds5xzx10z01j9s524dh7r&st=rxug033v&raw=1" type="video/mp4">
</video>
        </div>

       
 <div class="image-holder">
            <img
            loading="lazy"
            class="w-100 img-styling" 
            src="/src/assets/UKG/UKG_2.webp"
          />
        </div>

    

       <div class="image-holder margin-btm-56">
            <img
            loading="lazy"
            class="w-100 img-styling" 
            src="/src/assets/UKG/UKG_3.webp"
          />
        </div>
       


      </div>
    </div>

</template>
<router-view></router-view>

<style>

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@200&display=swap');

:root {
  --animate-delay: 0.6s;
}

html {
  scroll-behavior: smooth;
}

p {
  font-size: 16px;
  font-family: 'Sora', sans-serif;
  color: rgba(0, 0, 0, 0.8);
}

.btm-primary {
  height: 34px;
  width: 120px;
  border: 1px solid black;
}

.flipped {
  transform: rotate(180deg);
}

.sub-head {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  justify-content: space-between;
}

.not-clickable {
  opacity: 0.7;
}

.body {
  width: 100%;
  margin-top: 80px;
}

.text-holder {
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding-left: 32px;
  margin-left: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-image: linear-gradient(90deg, transparent 12px, rgba(72, 70, 61, 0.5) 12px, transparent 16px), linear-gradient(90deg, rgba(72, 70, 61, 0.5) 6px, transparent 0px);
}

.margin-btm-8 {
  margin-bottom: 8px;
}

.margin-btm-56{
  margin-bottom: 56px;
}

.img-styling {
  transition: all 200ms ease-in-out;
  border-radius: 20px;
}
.img-styling:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.18);
  transform: scale(1.01);
}

.mobile-h1{
  font-size: 25px;
  user-select: none;
}

@media screen and (max-width: 1500px) {
  .body {
    width: 75%;
    height: 75%;
  }
}

@media (max-width: 1368px) {
  .mobile-h1 {
    font-size: 21px;
  }

  p{
    font-size: 15px;
  }

}

@media screen and (max-width: 958px) {
.text-holder-callout{
    flex-direction: column;
    margin-bottom: 32px;
    margin-top: 32px;
    gap: 8px;
  }
}


@media screen and (max-width: 946px) {
  .header {
    width: 85%;
    height: 22%;
  }
  .body {
    width: 90%;
    height: 75%;
  }
}

@media screen and (max-width: 847px) {
svg{
    height: 18px;
}

a.toggle-arrows-prv, a.toggle-arrows-nxt{
display: flex;
}


.grouping{
  align-items: center;
}


  .body {
    padding: 0%;
    width: 84%;
  }

  .mobile-h1 {
    font-size: 16px;
  }

  .images {
    gap: 8px;
  }

  .text-holder {
    margin-bottom: 32px;
    margin-top: 32px;
    gap: 4px;
  }

  .text-holder p {
    font-size: 14px;
  }

  .text-holder-callout{
      margin-bottom: 32px;
      margin-top: 32px;
    }

}

@media only screen and (max-width:503px) {

.mobile-h1 {
  font-size: 14px;
}

.text-holder-callout{
    margin-bottom: 16px;
    margin-top: 16px;
  }

  .text-holder p, .text-holder-callout p {
  font-size: 12px;
}


.text-holder {
  margin-bottom: 16px;
  margin-top: 16px;
}

.body {
  width: 100%;
}

.margin-btm-32{
    margin-bottom: 76px;
  }
}
</style>
