const BASE_URL = "https://api.thecatapi.com/v1/images/search";
const catButon = document.getElementById("change-cat");

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json[0].url;
  } catch (err) {
    console.log(err.message);
  }
};

const loadImg = async () => {
  const catImage = document.getElementById("cat");
  catImage.src = await getCats();
};

catButon.addEventListener("click", loadImg);
loadImg();
