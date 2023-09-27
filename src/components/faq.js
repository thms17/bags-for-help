/* eslint-disable object-shorthand */
import { gsap } from 'gsap'

function faqAccordion () {
  const faqElements = document.querySelectorAll('[faq-accordion="component"]')

  if (faqElements.length === 0) return

  faqElements.forEach(function (accordion) {
    accordion.addEventListener('click', function () {
      const panel = accordion.querySelector('[faq-accordion="panel"]')
      const icon = accordion.querySelector('[faq-accordion="icon"]')
      const ease = 'power2.inOut'
      if (gsap.getProperty(panel, 'display') === 'none') {
        gsap.set(panel, {
          display: 'block'
        })
        gsap.to(panel, {
          height: 'auto',
          duration: 0.3,
          ease: ease
        })
        gsap.to(icon, {
          rotation: 180,
          duration: 0.3,
          ease: ease
        })
      } else {
        gsap.to(panel, {
          height: 0,
          onComplete: function () {
            gsap.set(panel, { display: 'none' })
          },
          duration: 0.2,
          ease: ease
        })
        gsap.to(icon, {
          rotation: 0,
          duration: 0.2,
          ease: ease
        })
      }
    })
  })
}
faqAccordion()
