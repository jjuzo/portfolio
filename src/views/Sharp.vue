<template>
  <div class="view">

    <div class="body animate__animated animate__delay-1s animate__fadeInLeft">
      <div class="sub-head box-shadow">
        <div class="grouping">
          <h1 class="mobile-h1">Sharp Homepage Redesign</h1>
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

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="not-clickable"
          >
            <path d="M6 0l12 12-12 12z" />
          </svg>
        </div>
      </div>

      <div class="text-holder">
        <p>Team: Erika Bartels, Juzo Morales</p>
        <p>Duration: 16 weeks</p>
        <p>Role: UI/UX Designer, Intern Web Developer</p>
      </div>

      

      <div class="images">

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/Sharp/sharp_first.webp"
          />
        </div>

        <div class="text-holder-callout">
        <h1 class="mobile-h1 w-100">About this project</h1>
        <p>
          The Sharp Electronics homepage had remained stagnant since 2010, lagging behind the company's recent rebranding efforts and presenting an outdated appearance. Recognizing the need for a rejuvenation, the project aimed to breathe new life into the homepage with a fresh, modern aesthetic, in line with the updated look of the rest of the website.</p>
      </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/Sharp/sharp_cover.webp"
          />
        </div>

        


        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/Sharp/SharpMockup_2@2x.webp"
          />
        </div>

        <div class="text-holder-callout">
        <h1 class="mobile-h1 w-100">The Deliverables </h1>
        <p>A completely new logo design is accompanied by a dynamic design system that reflects the various products offered by LadyM. Alongside the brand new logo, there is a brand style guide and brand architecture to ensure consistency across different touchpoints. Other deliverables include typography pairing, a brand color palette, and an iconography package.</p>
      </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/Sharp/SharpMockup_3@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/Sharp/SharpMockup_5@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/Sharp/SharpMockup_6@2x.webp"
          />
        </div>

        <div class="text-holder-callout">
        <h1 class="mobile-h1 w-100">The Scalability </h1>
        <p>One of the primary concerns with the existing homepage was its lack of scalability. The current mobile version was outdated and presented significant usability challenges. Recognizing the importance of accessibility across all devices, the team sought after a solution that would ensure ease of use and optimal functionality regardless of screen size. This initiative aimed to address these issues and facilitate growth by providing a seamless and user-friendly browsing experience on any device.</p>
      </div>


        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/Sharp/SharpMockupMobile_1@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/Sharp/SharpMockupMobile_2@2x.webp"
          />
        </div>

        <div class="image-holder margin-btm-56">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/Sharp/SharpMockupMobile_3@2x.webp"
          />
        </div>
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
  padding-left: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
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
    margin-bottom: 16px;
    margin-top: 16px;
    gap: 4px;
  }

  .text-holder p {
    font-size: 15px;
  }



}
</style>
