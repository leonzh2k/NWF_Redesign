(() => {
  'use strict';
  // const carouselController = {
    
  // }
  const carousel = {
    init() {
      const model = { 
        index: 0,
        items: [
          {
            imgSrc: "./assets/carousel01.png",
            headline: "Leveraging innovation for the campaigns of tomorrow",
            aside: "Contact Us"
          },
          {
            imgSrc: "./assets/carousel02.png",
            headline: "Careers",
            aside: "Apply Now"
          }
        ]
      };

      const view = {
        init() {
          const carouselNextButton = document.querySelector("#carousel-next-js");
          carouselNextButton.addEventListener("click", () => {
            controller.next();
          });

          const carouselPrevButton = document.querySelector("#carousel-prev-js");
          carouselPrevButton.addEventListener("click", () => {
            controller.prev();
          });

          this.carouselHeadline = document.querySelector("#carousel-content h1");
          this.carouselAside = document.querySelector("#carousel-content a");
          this.carouselImg = document.querySelector("#hero-image");
        },
        render() {
          const index = controller.getIndex();
          const data = controller.getData();
          // console.log(data[index]);
          this.carouselHeadline.textContent = data[index].headline;
          this.carouselAside.textContent = data[index].aside;
          this.carouselImg.src = data[index].imgSrc;
        }
      }

      const controller = {
        init() {
          view.init();
        },
        next() {
          if (++model.index > model.items.length - 1) {
            model.index = 0;
          }
          view.render();
        },
        prev() {
          if (--model.index < 0) {
            model.index = model.items.length - 1;
          }
          view.render();
        },
        getIndex() {
          return model.index;
        },
        getData() {
          return model.items;
        }
      }
      controller.init();
    }
  }
  
  carousel.init();
})();