<template>
  <div class="view">

    <div class="body animate__animated animate__delay-1s animate__fadeInLeft">
      <div style="background-color: #dfdfdf;" class="sub-head box-shadow">
        <div class="grouping">
          <h1 class="mobile-h1">Soho International Film Festival 2025</h1>
        </div>
        <div class="grouping">
          <router-link class="toggle-arrows-prv" to="/calia">
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
        <p>Team:  Joffre Noguera, Juzo Morales, Sibyl Reymundo-Santiago, Wiletzie Sanchez</p>
        <p>Duration: 4 weeks</p>
        <p>Role: Graphic/Motion Designer</p>
      </div>

      

    <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/Soho/soho_1.webp"
          />
        </div>

        <div class="text-holder-callout">
        <h1 class="mobile-h1 w-100">About this project</h1>
        <p>
         A new design system created for the 2025 Soho International Film Festival, built to support a timeless, digitally-driven identity. The system prioritizes flexibility, consistency, and scalability to enhance the festival’s presence and marketability across modern digital touchpoints.</p>
      </div>

    

          <div class="image-holder">
       <video  class="w-100 img-styling" autoplay loop muted playsinline>
<source src="https://www.dropbox.com/scl/fi/58j224v9f1re91sr7xq2a/Cover.mp4?rlkey=l1v51o8kdhztnl991ittutcgp&st=vdcdpcj2&raw=1" type="video/mp4">
</video>
        </div>

    <div class="text-holder-callout">
        <h1 class="mobile-h1 w-100">The Deliverables </h1>
        <p>A completely new logo design is accompanied by a dynamic design system that reflects the various products offered by LadyM. Alongside the brand new logo, there is a brand style guide and brand architecture to ensure consistency across different touchpoints. Other deliverables include typography pairing, a brand color palette, and an iconography package.</p>
      </div>
        <div class="image-holder">
         <video  class="w-100 img-styling" autoplay loop muted playsinline>
<source src="https://www.dropbox.com/scl/fi/awsgianv8tytdfqndfuom/Whole-Graphic-View_2.mp4?rlkey=ejddpv6rmwi1du93a4pchsc2b&st=e4b00bnk&raw=1" type="video/mp4">
</video>
        </div>

    

        <div class="image-holder">
                   <video  class="w-100 img-styling" autoplay loop muted playsinline>
<source src="https://www.dropbox.com/scl/fi/eads6waylkiclgevrjpt7/Main-Intro-13-secs.mp4?rlkey=vf22fatecvyt72ghro7x83udw&st=2u26wiv2&raw=1" type="video/mp4">
</video>
        </div>

        <div class="image-holder">
             <video  class="w-100 img-styling" autoplay loop muted playsinline>
<source src="https://www.dropbox.com/scl/fi/va3s9e2yf3nt3p4th3umn/overlay.mp4?rlkey=wbqgv54ktdoby78qfzbj3f957&st=wl4u6vy6&raw=1" type="video/mp4">
</video>
        </div>

        <div class="image-holder">
            <img
            loading="lazy"
            class="w-100 img-styling" 
            src="/src/assets/Soho/soho_2.webp"
          />
        </div>

       

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling" 
            src="/src/assets/Soho/soho_3.webp"
          />
        </div>

       
        <div class="image-holder">
           <img
            loading="lazy"
            class="w-100 img-styling" 
            src="/src/assets/Soho/soho_4.webp"
          />
        </div>

        <div class="image-holder margin-btm-56">
           <img
            loading="lazy"
            class="w-100 img-styling" 
            src="/src/assets/Soho/soho_5.webp"
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
  width: 88%;
}

.margin-btm-32{
    margin-bottom: 76px;
  }
}
</style>
