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
:root {
  --animate-delay: 0.6s;
}

html {
  scroll-behavior: smooth;
}

p {
  font-size: 18px;
  font-family: "Typewalk1915-Thin";
  color: rgba(0, 0, 0, 0.7);
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
  .body {
    width: 73%;
    height: 75%;
  }
}

@media screen and (max-width: 946px) {
  .header {
    width: 85%;
    height: 22%;
  }
  .body {
    width: 70%;
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
