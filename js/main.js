const changeCss = () => {
    const navElement = document.querySelector("nav");
    if (window.scrollY > 20) {
      navElement.style.backgroundColor = "rgb(250, 250, 250)";
    } else {
      navElement.style.backgroundColor = ""; 
    }
  };
  window.addEventListener("scroll", changeCss);
  