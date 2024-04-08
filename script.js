'use strict'
const headerItem1 = document.querySelectorAll('.header__content-item--1')
const headerItem2 = document.querySelectorAll('.header__content-item--2')
const btn = document.querySelector('.btn--1')

const nav = document.querySelector('.nav')

let curSlide = 0
const totalSlide = headerItem1.length - 1

// 0% 100% 200%
const transformItem = function (varName, curSlide) {
  varName.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - curSlide)}%)`
  })
}

const changeSlidePosition = function (e) {
  const btnNext = e.target.closest('.btn__next')
  const btnPrev = e.target.closest('.btn__prev')

  if (btnNext) {
    if (curSlide >= totalSlide) curSlide = 0
    else curSlide++
  }

  if (btnPrev) {
    if (curSlide === 0) curSlide = totalSlide
    else curSlide--
  }


  transformItem(headerItem1, curSlide)
  transformItem(headerItem2, curSlide)
}

const toggleMenu = function (e) {
  if (!e.target.closest('.menu')) return

  e.target.closest('.menu').querySelector('path').classList.toggle('fill-gray')
  document.querySelector('.nav__list').classList.toggle('nav__list-display')
}


const init = function () {
  transformItem(headerItem1, curSlide)
  transformItem(headerItem2, curSlide)
  btn.addEventListener('click', changeSlidePosition)
  nav.addEventListener('click', toggleMenu)
}

init()