<template>
    <div class="view">
  
      <div class="body animate__animated animate__delay-1s animate__fadeInLeft">
        <div style="background-color: #dfdfdf;" class="sub-head box-shadow">
          <div class="grouping">
            <h1 class="mobile-h1">Belize: Esto Es Belicidad</h1>
          </div>
          <div class="grouping">
            <router-link class="toggle-arrows-prv" to="/ukg">
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
  
          <router-link class="toggle-arrows-nxt" to="/sharp">
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
          <p>Team: Jacy Lin, Juzo Morales, Matthew Heckart, Sigvard Alacron, Thais Lima</p>
          <p>Duration: 16 weeks</p>
          <p>Role: Digital Consultant, Digital Designer</p>
        </div>
  
        
  
        <div class="images">
  

            <div class="image-holder">
            <img
              loading="lazy"
              class="w-100 img-styling"
              src="/src/assets/Belize/belize_1.webp"
            />
          </div>
  
          <div class="text-holder-callout">
          <h1 class="mobile-h1 w-100">About this project</h1>
          <p>
            The Belize Tourism Board launched a digital ad campaign with the goal of increasing travel from Latin America by showcasing the country’s rich culture, vibrant landscapes, and warm hospitality. Centered around the message "Estoy Es Belicidad," the campaign aimed to spark curiosity and inspire new audiences to see Belize as a must-visit destination—authentic, welcoming, and full of unforgettable experiences.</p>
        </div>

        <div class="image-holder">
        
        <video  class="w-100 img-styling" autoplay loop muted playsinline>
<source src="https://www.dropbox.com/scl/fi/c70c6kxrjkyvatop7uodj/AQM5ogEzXCBmZcOFrPiKIa6HZygCVxTB43gk-tJGiRrh_MD0tWkhathwN_QDLsObpagchbejxd8AxqasKxmbsqJc.mp4?rlkey=keb64fhbjt0rxizx6diyczm41&st=4flv2rlm&raw=1" type="video/mp4">
</video>
      </div>
  
  
    
  
          <div class="text-holder-callout">
          <h1 class="mobile-h1 w-100">The Deliverables </h1>
          <p>A suite of digital deliverables was created to support the Belize Esto Es Belicidad campaign, including video ads optimized for YouTube, Meta, and Instagram, as well as static display ads for Google and Meta. To support the campaign’s visual identity and reach its Latin American audience, custom landing pages and social content were translated into multiple languages beyond English. Additional assets included responsive web components, and social media-ready visuals to ensure consistency and cultural relevance across all digital touchpoints.</p>
        </div>

        <div class="image-holder">
            <img
              loading="lazy"
              class="w-100 img-styling"
              src="/src/assets/Belize/belize_2.webp"
            />
          </div>
  

          <div class="image-holder">
        
        <video  class="w-100 img-styling" autoplay loop muted playsinline>
<source src="https://www.dropbox.com/scl/fi/ymrgkhp9p4tyjtrwrsiis/belize.mp4?rlkey=ksctyi7ii0t1lmx028jop2ibf&st=ia5gnhbj&raw=1" type="video/mp4">
</video>
      </div>
    
          <div class="image-holder">
            <img
              loading="lazy"
              class="w-100 img-styling"
              src="/src/assets/Belize/belize_3.webp"
            />
          </div>
  
          <div class="image-holder">
            <img
              loading="lazy"
              class="w-100 img-styling"
              src="/src/assets/Belize/belize_4.webp"
            />
          </div>
  
          <div class="text-holder-callout">
          <h1 class="mobile-h1 w-100">The Statistics </h1>
          <p>The Belize Estoy Es Belicidad campaign delivered measurable results, reflecting a strong increase in regional interest and travel intent. Compared to the previous year, the campaign drove a 21% increase in overall engagement, signaling growing momentum for Belize as a top travel destination. Performance also exceeded the 2019 benchmark year by 11.8%, highlighting the effectiveness of its refreshed creative and targeted strategy.</p>
        </div>
  
  
        <div class="image-holder">
            <img
              loading="lazy"
              class="w-100 img-styling"
              src="/src/assets/Belize/belize_5.webp"
            />
          </div>

          <div class="image-holder">
            <img
              loading="lazy"
              class="w-100 img-styling"
              src="/src/assets/Belize/belize_6.webp"
            />
          </div>
  
          <div class="image-holder margin-btm-56">
            <img
              loading="lazy"
              class="w-100 img-styling"
              src="/src/assets/Belize/belize_7.webp"
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