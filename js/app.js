document.querySelectorAll('.reviews').forEach((reviewSection) => {
  const slider = reviewSection.querySelector('.slider')
  const slides = slider.querySelectorAll('.slide')
  const dotsContainer = reviewSection.querySelector('.slider-dots')
  let currentIndex = 0

  // Create dots dynamically
  slides.forEach((_, index) => {
    const dot = document.createElement('span')
    dot.classList.add('dot')
    if (index === 0) dot.classList.add('active') // First dot is active
    dot.dataset.index = index
    dotsContainer.appendChild(dot)
  })

  const dots = dotsContainer.querySelectorAll('.dot')

  function updateSlider(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none'
    })
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index)
    })
  }

  // Add click event to dots
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.dataset.index)
      updateSlider(currentIndex)
    })
  })

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length
    updateSlider(currentIndex)
  }, 15000)

  // Show the first slide initially
  updateSlider(currentIndex)
})

let hamberger = document.querySelector('.hamberger')
let times = document.querySelector('.times')
let mobileNav = document.querySelector('.mobile-nav')

hamberger.addEventListener('click', function () {
  mobileNav.classList.add('open')
})

times.addEventListener('click', function () {
  mobileNav.classList.remove('open')
})
// Wait for jQuery to be loaded
$(document).ready(function () {
  const textArray = [
    'Software Engineer',
    'Business Development Specialist',
    'Freelancer',
  ]
  let currentIndex = 0
  let charIndex = 0
  let typing = true
  const typewriterText = document.getElementById('typewriter-text')

  function typeWriterEffect() {
    if (typing) {
      if (charIndex < textArray[currentIndex].length) {
        typewriterText.textContent += textArray[currentIndex].charAt(charIndex)
        charIndex++
        setTimeout(typeWriterEffect, 150)
      } else {
        typing = false
        setTimeout(typeWriterEffect, 2000)
      }
    } else {
      if (charIndex > 0) {
        typewriterText.textContent = textArray[currentIndex].substring(
          0,
          charIndex - 1
        )
        charIndex--
        setTimeout(typeWriterEffect, 50)
      } else {
        typing = true
        currentIndex = (currentIndex + 1) % textArray.length
        setTimeout(typeWriterEffect, 500)
      }
    }
  }

  // Start the typewriter effect
  typeWriterEffect()
})

document.addEventListener('DOMContentLoaded', function () {
  // Initialize - hide all full text paragraphs on page load
  const fullTexts = document.querySelectorAll('.full-text')
  fullTexts.forEach((text) => {
    text.style.display = 'none'
  })

  // Set up click handlers for all Read More buttons
  const readMoreBtns = document.querySelectorAll('.read-more')
  readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      event.preventDefault()

      // Find the related text elements
      const cardContent = this.parentElement
      const shortText = cardContent.querySelector('.short-text')
      const fullText = cardContent.querySelector('.full-text')

      // Toggle visibility
      if (fullText.style.display === 'none') {
        // Show full text, hide short text
        shortText.style.display = 'none'
        fullText.style.display = 'block'
        this.textContent = 'Read Less'
      } else {
        // Hide full text, show short text
        fullText.style.display = 'none'
        shortText.style.display = 'block'
        this.textContent = 'Read More'
      }
    })
  })
})

document.getElementById('year').textContent = new Date().getFullYear()
