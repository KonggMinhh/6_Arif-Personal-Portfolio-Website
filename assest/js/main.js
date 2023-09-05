"use strict";
const $ = document.querySelector.bind(document);

const navbarMob = $("#navbar__list-mobile");
const navbarPc = $("#navbar__list-pc");


navbarMob.innerHTML = navbarPc.innerHTML;
