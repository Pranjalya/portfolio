import React, { useState, useEffect, useRef } from 'react';
import BtnMenu from './BtnMenu';
import AnimateWhenVisible from './AnimateWhenVisible';
import './AppMenu.css';

const AppMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const animationRef = useRef(null);

  const scrolling = (event, href) => {
    event.preventDefault();

    if (animationRef.current) {
      animationRef.current.cancel();
    }

    const scrollToEl = document.querySelector(href);
    const pageY = window.pageYOffset;

    const animate = (options) => {
      const start =
        typeof performance === 'undefined' ? Date.now() : performance.now();
      let animationId;
      const animation = {
        cancel: () => animationId && window.cancelAnimationFrame(animationId),
      };

      animationId = window.requestAnimationFrame(function animate(time) {
        const currentTime = time || Date.now();
        let timeFraction = (currentTime - start) / options.duration;

        if (timeFraction > 1) {
          timeFraction = 1;
        }

        options.draw(options.easing(timeFraction));

        if (timeFraction < 1) {
          animationId = window.requestAnimationFrame(animate);
        } else {
          options.done();
        }
      });

      return animation;
    };

    animationRef.current = animate({
      duration: 600,
      easing: (p) => (p < 0.5 ? 4 * p ** 3 : 4 * (p - 1) ** 3 + 1),
      draw(progress) {
        window.scrollTo(
          0,
          pageY + progress * (scrollToEl.offsetTop - pageY)
        );
      },
      done() {
        window.location.hash = href;
      },
    });
  };

  return (
    <div>
      <BtnMenu
        onClick={() => setIsMenuVisible(!isMenuVisible)}
        active={isMenuVisible}
      />
      <nav
        className={`nav-bar ${isMenuVisible ? 'fade-enter-active' : ''}`}
        onClick={(event) =>
          scrolling(event, event.target.getAttribute('href'))
        }
      >
        <ul onClick={() => setIsMenuVisible(!isMenuVisible)}>
          <li>
            <AnimateWhenVisible name="fadeUp">
              <a href="#about">
                About Me<span></span>
              </a>
            </AnimateWhenVisible>
          </li>
          <li>
            <AnimateWhenVisible name="fadeUp" duration={1.3}>
              <a href="#experience">
                Experience<span></span>
              </a>
            </AnimateWhenVisible>
          </li>
          <li>
            <AnimateWhenVisible name="fadeUp" duration={1.6}>
              <a href="#portfolio">
                Portfolio<span></span>
              </a>
            </AnimateWhenVisible>
          </li>
          <li>
            <AnimateWhenVisible name="fadeUp" duration={1.8}>
              <a href="#contact">
                Contact<span></span>
              </a>
            </AnimateWhenVisible>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppMenu;