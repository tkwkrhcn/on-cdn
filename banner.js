// --- 1. 스타일 삽입 ---
const style = document.createElement('style');
style.textContent = `
  /* 공통 큐브 스타일 */
  #banner-cube-stage, #banner-cube-stage-2 {
    perspective: 700px;
    width: 200px;
    height: 200px;
    position: fixed;
    right: 80px;
    z-index: 99;
  }
  #banner-cube-stage {
    top: 300px;
  }
  #banner-cube-stage-2 {
    top: 600px;
  }
  #banner-cube-shape, #banner-cube-shape-2 {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    animation: rotateCube 15s infinite linear;
  }
  .cube-side, .cube-side-2 {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: transparent;
    backface-visibility: hidden;
  }
  @keyframes rotateCube {
    0% { transform: rotateY(0deg); }
    25% { transform: rotateY(90deg); }
    50% { transform: rotateY(180deg); }
    75% { transform: rotateY(270deg); }
    100% { transform: rotateY(360deg); }
  }

  /* 일반 배너 스타일 */
  #banner-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
  }
  #banner-container a {
    flex: 0 0 calc(50% - 10px);
    margin: 5px;
    text-align: center;
    display: block;
  }
  #banner-container img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  @media (max-width: 768px) {
    #banner-cube-stage,
    #banner-cube-stage-2 {
      display: none;
    }
    #banner-container a {
      flex: 0 0 100%;
      margin: 0 0 10px 0;
    }
    #banner-container {
      padding: 5px;
    }
  }
`;
document.head.appendChild(style);

// --- 큐브 배너 1 ---
const cubeBanners = [
  { url: "https://t.me/betwizptcs/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/d16c063c-5f85-40ea-1486-10329cc7b400/public", alt: "벳위즈" },
  { url: "https://t.me/ask1004/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/a54390cd-4825-45eb-97b2-9f7bd8985b00/public", alt: "아하" },
  { url: "https://t.me/betwizptcs/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/d16c063c-5f85-40ea-1486-10329cc7b400/public", alt: "벳위즈" },
  { url: "https://t.me/MUL114/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/d0640ad4-71ce-4581-bc83-bc22d4dbaf00/public", alt: "물음표" }
];
function renderCubeBanner() {
  const stage = document.createElement('div');
  stage.id = 'banner-cube-stage';
  document.body.appendChild(stage);
  const cube = document.createElement('div');
  cube.id = "banner-cube-shape";
  cubeBanners.forEach((banner, idx) => {
    const side = document.createElement('div');
    side.className = "cube-side";
    side.style.transform = `rotateY(${idx * 90}deg) translateZ(100px)`;
    const a = document.createElement('a');
    a.href = banner.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer nofollow";
    const img = document.createElement('img');
    img.src = banner.img;
    img.alt = banner.alt;
    img.width = 200;
    img.height = 200;
    a.appendChild(img);
    side.appendChild(a);
    cube.appendChild(side);
  });
  stage.appendChild(cube);
}
renderCubeBanner();

// --- 큐브 배너 2 ---
const cubeBanners2 = [
  { url: "https://t.me/kr1xbetpartner/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/d85ee81d-6726-4002-50fa-939f283f3500/public", alt: "1xbet-1" },
  { url: "https://t.me/krmelbet/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/9c45dcc9-e44e-4ec2-b4c5-01b05b6c1900/public", alt: "melbet-2" },
  { url: "https://t.me/kr1xbetpartner/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/d85ee81d-6726-4002-50fa-939f283f3500/public", alt: "1xbet-2" },
  { url: "https://t.me/krmelbet/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/9c45dcc9-e44e-4ec2-b4c5-01b05b6c1900/public", alt: "melbet-3" }
];
function renderSecondCubeBanner() {
  const stage = document.createElement('div');
  stage.id = 'banner-cube-stage-2';
  document.body.appendChild(stage);
  const cube = document.createElement('div');
  cube.id = "banner-cube-shape-2";
  cubeBanners2.forEach((banner, idx) => {
    const side = document.createElement('div');
    side.className = "cube-side-2";
    side.style.transform = `rotateY(${idx * 90}deg) translateZ(100px)`;
    const a = document.createElement('a');
    a.href = banner.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer nofollow";
    const img = document.createElement('img');
    img.src = banner.img;
    img.alt = banner.alt;
    img.width = 200;
    img.height = 200;
    a.appendChild(img);
    side.appendChild(a);
    cube.appendChild(side);
  });
  stage.appendChild(cube);
}
renderSecondCubeBanner();

// --- 일반배너 ---
const shuffledBanners = [
  { url: "https://t.me/betwizptcs/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/fdec73b4-ebd8-4449-4ca1-cf11f276a100/public", alt: "벳위즈" },
  { url: "https://t.me/MUL114/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/d11759ca-6c22-4b22-3ae0-3ed298893500/public", alt: "물음표" },
  { url: "https://t.me/ask1004/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/13fc4195-2db7-4ecc-6317-792330765800/public", alt: "아하" },
  { url: "https://t.me/kr1xbetpartner/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/3c899412-c689-4f4c-11bc-a7c1944f1e00/public", alt: "1xbet" },
  { url: "https://t.me/krmelbet/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/e2e9e4b7-dcd3-43e4-c082-ece47d34f100/public", alt: "멜벳" },
  { url: "http://rc337.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/e0968bca-1909-48b8-33f6-2f3d8e8ce600/public", alt: "룸카지노" },
  { url: "http://dg745.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/789d8ec7-07c9-49db-697b-77df509a3000/public", alt: "돌리고" }
];
const fixedBanners = [
  { url: "https://t.me/oncs114/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ad9b6afd-90a7-4fd1-82b0-d898534e7e00/public", alt: "총판모집" }
];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function displayBanners() {
  const container = document.getElementById('banner-container');
  if (!container) return;
  container.innerHTML = "";
  shuffle(shuffledBanners);
  const allBanners = [...shuffledBanners, ...fixedBanners];
  allBanners.forEach(banner => {
    const a = document.createElement('a');
    a.href = banner.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer nofollow";
    const img = document.createElement('img');
    img.src = banner.img;
    img.alt = banner.alt;
    img.loading = "lazy";
    a.appendChild(img);
    container.appendChild(a);
  });
}
document.addEventListener("DOMContentLoaded", displayBanners);
