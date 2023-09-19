let currentSlide = 0;
const slides = document.querySelectorAll('#slider .slide');
const totalSlides = slides.length - 1;
const slideInterval = setInterval(nextSlide, 3000);

document.getElementById('nextSlide').addEventListener('click', nextSlide);
document.getElementById('prevSlide').addEventListener('click', prevSlide);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  currentSlide = (n + totalSlides) % totalSlides;
  document.getElementById('slider').style.transform = `translateX(-${
    currentSlide * 50
  }%)`;
}

const ctx = document.getElementById('satisfactionChart').getContext('2d'); // canvas 요소의 컨텍스트 가져오기
new Chart(ctx, {
  type: 'doughnut', // 차트 타입 지정
  data: {
    labels: [
      '아주 만족!! 친구한테도 알려주고 싶다.',
      '적당히 만족!! 다음에 시간 되면 오고 싶다.',
    ], // 라벨들
    datasets: [
      {
        data: [200, 120], // 데이터 지정
        backgroundColor: ['red', 'blue'], // 각각의 데이터에 대한 배경색 지정
        hoverOffset: 4, // 호버 시 차트 부풀어오름 크기 지정
      },
    ],
  },
  options: {
    responsive: true, // 반응형으로 설정
    plugins: {
      legend: {
        display: true, // 범례 표시 설정
        position: 'bottom', // 범례 위치 설정
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.parsed + '명'; // 툴팁 표시 형식 지정
          },
        },
      },
    },
  },
});

//Get the button
const mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const aboutItem = document.getElementById('about-item');
const acordionItems = document.querySelectorAll('header .acordion-item');
const hamburgerBtn = document.getElementById('hamburger-button');
const removeBtn = document.getElementById('remove-btn');
const mobileMenu = document.querySelector('header .mobile-nav ul');
hamburgerBtn?.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});
removeBtn?.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

aboutItem.addEventListener('click', () => {
  acordionItems.forEach((item) => {
    item.classList.toggle('clicked');
  });
});
