<template>
  <div class="view">
 
    <div class="body animate__animated animate__delay-1s animate__fadeInLeft">
      <div class="sub-head box-shadow">
        <div class="grouping">
          <h1 class="mobile-h1">Lady M Rebranding</h1>
        </div>
        <div class="grouping">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="flipped not-clickable"
          >
            <path d="M6 0l12 12-12 12z" />
          </svg>

          <router-link class="toggle-arrows-nxt" to="/calia">
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
        <p>Team: Maia Miranda, Juzo Morales, Laura Sanchez</p>
        <p>Duration: 15 weeks</p>
        <p>Role: Art Director, Designer, Motion</p>
      </div>

      <div class="images">
        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/Cover@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_1@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_2@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread4.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread5.webp"
          />
        </div>

        <div class="image-holder grid">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_3@2x.webp"
          />
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_4@2x.webp"
          />
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_5@2x.webp"
          />
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_6@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread7.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread8.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread9.webp"
          />
        </div>

        <div class="image-holder grid">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_7@2x.webp"
          />
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_8@2x.webp"
          />
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_9@2x.webp"
          />
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_10@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread10.webp"
          />
        </div>

        <div class="image-holder grid">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_11@2x.webp"
          />
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_12@2x.webp"
          />
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_13@2x.webp"
          />
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_14@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread14.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_15@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread16.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_17@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_18@2x.webp"
          />
        </div>

        <div class="image-holder">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread19.webp"
          />
        </div>

        <div class="image-holder margin-btm-32">
          <img
            loading="lazy"
            class="w-100 img-styling"
            src="/src/assets/LadyM/spread_20@2x.webp"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<router-view></router-view>

<style scoped>
:root {
  --animate-delay: 0.3s;
}
</style>

<style>
html {
  scroll-behavior: smooth;
}

.view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  justify-items: start;
}

.p-16 {
  padding: 16px;
}

.w-50 {
  width: 50%;
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

.images {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.w-100 {
  width: 100%;
  object-fit: cover;
}

p {
  font-size: 18px;
  font-family: "Typewalk1915-Thin";
  color: rgba(0, 0, 0, 0.7);
}

.body {
  width: 100%;
  height: auto;
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

.margin-btm-32 {
  margin-bottom: 32px;
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
