// banner.js (깃허브에 저장)
// JS 삽입만으로 배너 자동 노출, HTML엔 남지 않음

(function() {
  const style = document.createElement("style");
  style.textContent = `
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

  // 배너 데이터
  const shuffledBanners = [
    { url: "https://t.me/partnerbetwiz/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/ba0039b8-ff2f-4dec-e179-1af43dd91500/public", alt: "토토사이트 벳위즈 토토총판" },
    { url: "https://t.me/MUL114/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/d11759ca-6c22-4b22-3ae0-3ed298893500/public", alt: "토토사이트 물음표 토토총판" },
    { url: "https://t.me/ask1004/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/13fc4195-2db7-4ecc-6317-792330765800/public", alt: "토토사이트 아하 토토총판" },
    { url: "https://t.me/ms5887/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/2198069c-7068-42c4-48cd-47f8a486de00/public", alt: "토토사이트 식스틴 토토총판" },
    { url: "http:rc337.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/e0968bca-1909-48b8-33f6-2f3d8e8ce600/public", alt: "토토사이트 룸카지노 토토총판" },
    { url: "http:dg745.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/789d8ec7-07c9-49db-697b-77df509a3000/public", alt: "토토사이트 돌리고 토토총판" }
  ];
  const fixedBanners = [
    { url: "https://t.me/oncs114/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ad9b6afd-90a7-4fd1-82b0-d898534e7e00/public", alt: "총판모집 총판사이트" },
    { url: "https://t.me/oncs114/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/efd3207f-adc7-45ba-525a-da89fe6af200/public", alt: "총판모집 총판사이트" }
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
  displayBanners();
})();
