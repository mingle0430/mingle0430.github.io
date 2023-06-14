(() => {
  const stepElems = document.querySelectorAll('.step');
  const graphicElems = document.querySelectorAll('.graphic-item');
  const scrollIndiElem = document.querySelector('.scroll-indicator');
  let currentItem = graphicElems[0];
  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1;
  });

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  function activate() {
    currentItem.classList.add('visible');
  }

  function inactivate() {
    currentItem.classList.remove('visible');
  }

  window.addEventListener('scroll', () => {
    // 스크롤 다운 처리
    if (window.scrollY <= 50) {
      scrollIndiElem.classList.add('visible');
    } else {
      scrollIndiElem.classList.remove('visible');
    }

    // 이미지 처리
    let step;
    let boundingRect;
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];
      if (!step) continue;
      boundingRect = step.getBoundingClientRect();

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        if (currentItem) {
          inactivate();
        }
        currentItem = graphicElems[step.dataset.index];
        activate();
      }
    }
  });

  activate();
})();

const text = 'WELCOME\nTO\nTHE\nMINGLE.';
const typingText = document.querySelector('.typing-text');
let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent +=
      text.charAt(index) === '\n' ? '\n' : text.charAt(index);
    index++;
    setTimeout(type, 200);
  } else {
    typingText.style.animation = 'none';
    typingText.style.borderRight = 'none';
  }
}

type();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
