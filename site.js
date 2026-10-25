(() => {
  const bar = document.querySelector('.mobile-purchase');
  const heroButton = document.querySelector('.hero-button');
  const offerButton = document.querySelector('.offer-button');
  if (!bar || !heroButton || !offerButton || !('IntersectionObserver' in window)) return;
  let passedHero = false;
  let offerVisible = false;
  const updateBar = () => {
    const visible = passedHero && !offerVisible;
    bar.classList.toggle('visible', visible);
    bar.setAttribute('inert', '');
    if (visible) bar.removeAttribute('inert');
  };
  new IntersectionObserver(([entry]) => {
    passedHero = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
    updateBar();
  }).observe(heroButton);
  new IntersectionObserver(([entry]) => {
    offerVisible = entry.isIntersecting;
    updateBar();
  }).observe(offerButton);
})();
