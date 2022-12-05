(() => {
  'use strict';
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

  const caseStudy = {
    init() {
      const model = { 
        index: 0,
        items: [
          {
            header: "Case Study Slide 1",
          },
          {
            header: "Case Study Slide 2",
          },
          {
            header: "Case Study Slide 3",
          }
        ]
      };

      const view = {
        init() {
          const slideControl = document.querySelector("#slide-control");
          const slides = controller.getData();
          // dynamically create slides
          this.slideButtons = [];
          for (let i = 0; i < slides.length; i++) {
            const slide = document.createElement("button");
            slide.classList.add("slide-button");
            this.slideButtons.push(slide);
            slide.addEventListener("click", () => {
              controller.setSlideIndex(i);
            })
            slideControl.appendChild(slide);
          }
          this.slideHeader = document.querySelector("#case-studies h2");
          this.render();
        },
        render() {
          this.slideButtons.forEach(button => {
            button.style.background = "white";
          });
          const index = controller.getIndex();
          const data = controller.getData();
          this.slideHeader.textContent = data[index].header;
          this.slideButtons[index].style.background = "black";
        }
      }

      const controller = {
        init() {
          view.init();
        },
        setSlideIndex(index) {
          model.index = index;
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
  caseStudy.init();
})();