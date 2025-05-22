// --- 1. 스타일 삽입 ---
const style = document.createElement('style');
style.textContent = `
  /* Cube styles */
  #banner-cube-stage {
    perspective: 700px;
    width: 200px;
    height: 200px;
    position: fixed;
    right: 80px;
    top: 300px;
    z-index: 99;
  }
  #banner-cube-shape {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    animation: rotateCube 15s infinite linear;
  }
  .cube-side {
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
  /* Banner styles */
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
    #banner-cube-stage { display: none; }
    #banner-container a { flex: 0 0 100%; margin: 0 0 10px 0; }
    #banner-container { padding: 5px; }
  }
`;
document.head.appendChild(style);

// --- 2. 큐브 배너 데이터 ---
const cubeBanners = [
  { url: "https://t.me/betwizptcs/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/d16c063c-5f85-40ea-1486-10329cc7b400/public", alt: "토토사이트 벳위즈 총판모집" },
  { url: "https://t.me/ask1004/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/a54390cd-4825-45eb-97b2-9f7bd8985b00/public", alt: "토토사이트 아하 총판모집" },
  { url: "https://t.me/betwizptcs/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/d16c063c-5f85-40ea-1486-10329cc7b400/public", alt: "토토사이트 벳위즈 총판모집" },
  { url: "https://t.me/MUL114/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/d0640ad4-71ce-4581-bc83-bc22d4dbaf00/public", alt: "토토사이트 물음표 총판모집" }
];

// --- 3. 큐브 배너 랜더링 ---
function renderCubeBanner() {
  const stage = document.getElementById('banner-cube-stage');
  if (!stage) return;
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

// --- 4. 일반 랜덤 배너 데이터 ---
const shuffledBanners = [
  { url: "https://t.me/betwizptcs/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/fdec73b4-ebd8-4449-4ca1-cf11f276a100/public", alt: "토토사이트 벳위즈 토토총판" },
  { url: "https://t.me/MUL114/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/d11759ca-6c22-4b22-3ae0-3ed298893500/public", alt: "토토사이트 물음표 토토총판" },
  { url: "https://t.me/ask1004/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/13fc4195-2db7-4ecc-6317-792330765800/public", alt: "토토사이트 아하 토토총판" },
  { url: "http:rc337.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/e0968bca-1909-48b8-33f6-2f3d8e8ce600/public", alt: "토토사이트 룸카지노 토토총판" },
  { url: "http:dg745.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/789d8ec7-07c9-49db-697b-77df509a3000/public", alt: "토토사이트 돌리고 토토총판" }
];

const fixedBanners = [
  { url: "https://t.me/oncs114/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ad9b6afd-90a7-4fd1-82b0-d898534e7e00/public", alt: "총판모집 총판사이트" }
];

// --- 5. 랜덤배너 셔플 & 랜더링 ---
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
displayBanners();
