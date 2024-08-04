const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
  {
    id: 1,
    title: "HODDIE",
    price: 1999,
    colors: [
      {
        code: "black",
        img: "./img/air2.png",
      },
      {
        code: "white",
        img: "./img/air.png",
      },
    ],
  },
  {
    id: 2,
    title: "SNEAKERS",
    price: 1149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "#3CB371",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "JACKET",
    price: 2100,
    colors: [
      {
        code: "#D2691E",
        img: "./img/blazer.png",
      },
      {
        code: "black",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "CARGO",
    price: 999,
    colors: [
      {
        code: "#DEB887",
        img: "./img/cargo2.png",
      },
      {
        code: "black",
        img: "./img/cargo.png",
      },
    ],
  },
  {
    id: 5,
    title: "SHIRT",
    price: 1199,
    colors: [
      {
        code: "#483D8B",
        img: "./img/shirt.png",
      },
      {
        code: "#B22222",
        img: "./img/shirt2.png",
      },
    ],
  },
];
let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price +"৳";
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});