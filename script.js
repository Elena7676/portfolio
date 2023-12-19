/*arrow up */

const up = document.querySelector('.up');
up.addEventListener('mouseover', upOver);
function upOver(){
    gsap.to('.up', {scale:1.5, duration:2, opacity:1})
}
up.addEventListener('mouseout', upOut);
function upOut(){
    gsap.to('.up', {scale:1, duration:2})
}

/*tel */
const tel = document.querySelector('.tel');

tel.addEventListener('mouseover', telOver);
function telOver(){
    gsap.to('.tel', {scale:1.2, duration:2, opacity:1})
}
tel.addEventListener('mouseout', telOut);
function telOut(){
    gsap.to('.tel', {scale:1, duration:2})
}

/*mail */
const mail = document.querySelector('.mail');

mail.addEventListener('mouseover', mailOver);
function mailOver(){
    gsap.to('.mail', {scale:1.2, duration:2, opacity:1})
}
mail.addEventListener('mouseout', mailOut);
function mailOut(){
    gsap.to('.mail', {scale:1, duration:2})
}

gsap.to('.hr-shelf', {y:410, duration:4, opacity:1, delay:3})
gsap.to('.offer__title', {y:20, delay:1, opacity:1, duration:2})
gsap.to('.offer__text', {y:-20, delay:1, opacity:1, duration:2})