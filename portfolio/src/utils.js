export function group(items, field = 'slug') {
    return items.reduce((acc, item) => {
      acc[item[field]] = item;
      return acc;
    }, {});
  }
  
  export function animate(options) {
    const start =
      typeof performance === 'undefined' ? Date.now() : performance.now();
    let animationId;
  
    const animation = {
      cancel: () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      },
    };
  
    function animateStep(time) {
      const currentTime = time || Date.now();
      let timeFraction = (currentTime - start) / options.duration;
  
      if (timeFraction > 1) {
        timeFraction = 1;
      }
  
      options.draw(options.easing(timeFraction));
  
      if (timeFraction < 1) {
        animationId = requestAnimationFrame(animateStep);
      } else {
        options.done && options.done();
      }
    }
  
    animationId = requestAnimationFrame(animateStep);
    return animation;
  }