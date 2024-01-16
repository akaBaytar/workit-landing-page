//  * date in copyright
const dateDOM = document.querySelector('#date');
const date = new Date().getFullYear();

dateDOM.textContent = date;

// * faqs - accordion
const FAQs = document.querySelectorAll('.faq');

const handleFAQ = (question) => question.classList.toggle('show');

FAQs.forEach((faq) => faq.addEventListener('click', () => handleFAQ(faq)));

// * scroll to top
const buttonDOM = document.querySelector('#scroll-to-top');

const scrollToTop = () => {
  // scroll button show - hide
  let scrollHeight = window.scrollY;

  scrollHeight >= 100
    ? (buttonDOM.style.display = 'block')
    : (buttonDOM.style.display = 'none');

  // calculate height and percentage
  const bodyHeight = document.body.clientHeight;
  const rootHeight = document.documentElement.clientHeight;
  const height = bodyHeight - rootHeight;

  let percent = (scrollHeight / height) * 100;

  // render percent indicator
  buttonDOM.style.background = `conic-gradient(var(--color-green) ${percent}%, var(--color-white) ${percent}%)`;
};

// scroll to top functionality
const clickHandler = () => {
  window.scroll(0, 0);
};

// event listeners
document.addEventListener('scroll', scrollToTop);
buttonDOM.addEventListener('click', clickHandler);
