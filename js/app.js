//! ============================ Cursor =============================
const elementCircle = document.createElement("div");
elementCircle.classList.add("circle");
document.body.append(elementCircle);

window.addEventListener('mousemove', (e) => {
    elementCircle.style.top = `${e.clientY}px`;
    elementCircle.style.left = `${e.clientX}px`;
});



//! ========================== Layer Of Menu ==========================
const layerOfMenu = document.createElement('div');
layerOfMenu.classList.add('fullscreen');
document.body.prepend(layerOfMenu);

layerOfMenu.addEventListener('click', (e) => {
    layerOfMenu.style.display = 'none';
});



//! ========================== Contextmenu ==========================
const menu = document.createElement('div');
menu.classList.add('contextmenu');
layerOfMenu.prepend(menu);

menu.addEventListener('click', (e) => {
    e.stopPropagation()
})

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    document.body.prepend(layerOfMenu);

    layerOfMenu.style.display = 'block';
    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;
});



//! =================== Color Buttons ===================
const redBtn = document.createElement('div');
const greenBtn = document.createElement('div');
const blueBtn = document.createElement('div');

redBtn.className = 'btns redbtn';
redBtn.innerText = 'red';

greenBtn.className = 'btns greenbtn';
greenBtn.innerText = 'green';

blueBtn.className = 'btns bluebtn';
blueBtn.innerText = 'blue';

menu.append(redBtn);
menu.append(greenBtn);
menu.append(blueBtn);

const colorBtns = document.querySelectorAll('.btns');
colorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.body.style.backgroundColor = [e.target.innerText]
    });
});

const btns = document.querySelectorAll('.btns');
btns.forEach(el => {
    el.addEventListener('mouseover', () => {
        elementCircle.classList.add('pickaxe')
    })
    el.addEventListener('mouseout', () => {
        elementCircle.classList.remove('pickaxe')
    })
});

const whiteBack = document.querySelector('.white-back');
whiteBack.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgb(29, 29, 29)';
});
whiteBack.addEventListener('mouseover', () => {
    elementCircle.classList.add('pickaxe')
})
whiteBack.addEventListener('mouseout', () => {
    elementCircle.classList.remove('pickaxe')
})

//! ======================== KEYBOARD keysBox ================================
const theKeyBoard = document.querySelector('#theKeyBoard') //* main shit


//! ======================== KEYBOARD (row1) ================================
const topKey = document.querySelectorAll('.box1');
// console.log(topKey[0].innerText);
window.addEventListener("keydown", (event) => {
    event.preventDefault(); //~ wnkdbwabdjlbahjbdiabiwb
    console.log(event);
    switch (event.key) {
        case 'Escape':
            topKey[0].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F1':
            topKey[1].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F2':
            topKey[2].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F3':
            topKey[3].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F4':
            topKey[4].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F5':
            topKey[5].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F6':
            topKey[6].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F7':
            topKey[7].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F8':
            topKey[8].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F9':
            topKey[9].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F10':
            topKey[10].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F11':
            topKey[11].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'F12':
            topKey[12].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'PrintScreen':
            topKey[13].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Delete':
            topKey[14].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Home':
            topKey[15].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'PageUp':
            topKey[16].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'PageDown':
            topKey[17].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'End':
            topKey[18].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Unidentified':
            topKey[19].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        default:
            break;
    }
});

window.addEventListener("keyup", (event) => {
    event.preventDefault()
    console.log(event);

    switch (event.key) {
        case 'Escape':
            topKey[0].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F1':
            topKey[1].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F2':
            topKey[2].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F3':
            topKey[3].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F4':
            topKey[4].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F5':
            topKey[5].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F6':
            topKey[6].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F7':
            topKey[7].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F8':
            topKey[8].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F9':
            topKey[9].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F10':
            topKey[10].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F11':
            topKey[11].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'F12':
            topKey[12].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'PrintScreen':
            topKey[13].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Delete':
            topKey[14].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Home':
            topKey[15].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'PageUp':
            topKey[16].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'PageDown':
            topKey[17].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'End':
            topKey[18].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Unidentified':
            topKey[19].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        default:
            break;
    }
});




//! ======================== KEYBOARD (row2) ================================
const row2 = document.querySelectorAll('.box2');

window.addEventListener("keydown", (e) => {
    e.preventDefault();

    switch (e.code) {
        case "Backquote":
            row2[0].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case "Digit1":
            row2[1].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Digit2':
            row2[2].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Digit3':
            row2[3].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Digit4':
            row2[4].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Digit5':
            row2[5].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Digit6':
            row2[6].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Digit7':
            row2[7].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Digit8':
            row2[8].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Digit9':
            row2[9].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Digit0':
            row2[10].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Minus':
            row2[11].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Equal':
            row2[12].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Backspace':
            row2[13].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'NumLock':
            row2[14].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'NumpadDivide':
            row2[15].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'NumpadMultiply':
            row2[16].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'NumpadSubtract':
            row2[17].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        default:
            break;
    }
});

window.addEventListener("keyup", (e) => {
    e.preventDefault()

    switch (e.code) {
        case "Backquote":
            row2[0].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case "Digit1":
            row2[1].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Digit2':
            row2[2].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Digit3':
            row2[3].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Digit4':
            row2[4].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Digit5':
            row2[5].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Digit6':
            row2[6].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Digit7':
            row2[7].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Digit8':
            row2[8].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Digit9':
            row2[9].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Digit0':
            row2[10].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Minus':
            row2[11].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Equal':
            row2[12].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Backspace':
            row2[13].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'NumLock':
            row2[14].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'NumpadDivide':
            row2[15].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'NumpadMultiply':
            row2[16].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'NumpadSubtract':
            row2[17].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        default:
            break;
    }
});


//! ======================== KEYBOARD (row3) ================================
const row3 = document.querySelectorAll('.box3');

window.addEventListener("keydown", (e) => {
    e.preventDefault();

    switch (e.code) {
        case "Tab":
            row3[0].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case "KeyQ":
            row3[1].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyW':
            row3[2].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyE':
            row3[3].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyR':
            row3[4].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyT':
            row3[5].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyY':
            row3[6].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyU':
            row3[7].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyI':
            row3[8].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyO':
            row3[9].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyP':
            row3[10].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'BracketLeft':
            row3[11].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'BracketRight':
            row3[12].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Backslash':
            row3[13].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Numpad7':
            row3[14].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Numpad8':
            row3[15].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Numpad9':
            row3[16].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'NumpadAdd':
            row3[17].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        default:
            break;
    }
});


window.addEventListener("keyup", (e) => {
    e.preventDefault()
    switch (e.code) {
        case "Tab":
            row3[0].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case "KeyQ":
            row3[1].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyW':
            row3[2].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyE':
            row3[3].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyR':
            row3[4].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyT':
            row3[5].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyY':
            row3[6].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyU':
            row3[7].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyI':
            row3[8].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyO':
            row3[9].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyP':
            row3[10].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'BracketLeft':
            row3[11].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'BracketRight':
            row3[12].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Backslash':
            row3[13].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Numpad7':
            row3[14].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Numpad8':
            row3[15].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Numpad9':
            row3[16].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'NumpadAdd':
            row3[17].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        default:
            break;
    }
});



//! ======================== KEYBOARD (row4) ================================
const row4 = document.querySelectorAll('.box4');

window.addEventListener("keydown", (e) => {
    e.preventDefault();

    switch (e.code) {
        case "CapsLock":
            row4[0].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case "KeyA":
            row4[1].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyS':
            row4[2].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyD':
            row4[3].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyF':
            row4[4].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyG':
            row4[5].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyH':
            row4[6].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyJ':
            row4[7].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyK':
            row4[8].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyL':
            row4[9].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Semicolon':
            row4[10].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Quote':
            row4[11].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Enter':
            row4[12].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Numpad4':
            row4[13].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Numpad5':
            row4[14].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Numpad6':
            row4[15].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        default:
            break;
    }
});


window.addEventListener("keyup", (e) => {
    e.preventDefault()
    switch (e.code) {
        case "CapsLock":
            row4[0].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case "KeyA":
            row4[1].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyS':
            row4[2].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyD':
            row4[3].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyF':
            row4[4].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyG':
            row4[5].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyH':
            row4[6].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyJ':
            row4[7].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyK':
            row4[8].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyL':
            row4[9].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Semicolon':
            row4[10].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Quote':
            row4[11].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Enter':
            row4[12].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Numpad4':
            row4[13].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Numpad5':
            row4[14].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Numpad6':
            row4[15].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;

        default:
            break;
    }
});



//! ======================== KEYBOARD (row5) ================================
const row5 = document.querySelectorAll('.box5');

window.addEventListener("keydown", (e) => {
    e.preventDefault();

    switch (e.code) {
        case "ShiftLeft":
            row5[0].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case "KeyZ":
            row5[1].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyX':
            row5[2].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyC':
            row5[3].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyV':
            row5[4].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyB':
            row5[5].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyN':
            row5[6].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'KeyM':
            row5[7].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Comma':
            row5[8].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Period':
            row5[9].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Slash':
            row5[10].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'ShiftRight':
            row5[11].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'ArrowUp':
            row5[12].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Numpad1':
            row5[13].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Numpad2':
            row5[14].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Numpad3':
            row5[15].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'NumpadEnter':
            row5[16].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        default:
            break;
    }
});


window.addEventListener("keyup", (e) => {
    e.preventDefault()
    switch (e.code) {
        case "ShiftLeft":
            row5[0].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case "KeyZ":
            row5[1].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyX':
            row5[2].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyC':
            row5[3].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyV':
            row5[4].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyB':
            row5[5].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyN':
            row5[6].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'KeyM':
            row5[7].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Comma':
            row5[8].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Period':
            row5[9].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Slash':
            row5[10].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'ShiftRight':
            row5[11].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'ArrowUp':
            row5[12].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Numpad1':
            row5[13].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Numpad2':
            row5[14].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Numpad3':
            row5[15].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'NumpadEnter':
            row5[16].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        default:
            break;
    }
});



//! ======================== KEYBOARD (row6) ================================
const row6 = document.querySelectorAll('.box6');

window.addEventListener("keydown", (e) => {
    e.preventDefault();

    switch (e.code) {
        case "ControlLeft":
            row6[0].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case "Fn":
            row6[1].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'MetaLeft':
            row6[2].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'AltLeft':
            row6[3].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Space':
            row6[4].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'AltRight':
            row6[5].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'ContextMenu':
            row6[6].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'ControlRight':
            row6[7].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'ArrowLeft':
            row6[8].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'ArrowDown':
            row6[9].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'ArrowRight':
            row6[10].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'Numpad0':
            row6[11].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        case 'NumpadDecimal':
            row6[12].style = `box-shadow: 2px 2px 1px 0.5px rgb(115, 0, 0);
            transform: translate(4px, 4px);`
            break;
        default:
            break;
    }
});


window.addEventListener("keyup", (e) => {
    e.preventDefault()
    switch (e.code) {
        case "ControlLeft":
            row6[0].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case "Fn":
            row6[1].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'MetaLeft':
            row6[2].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'AltLeft':
            row6[3].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Space':
            row6[4].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'AltRight':
            row6[5].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'ContextMenu':
            row6[6].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'ControlRight':
            row6[7].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'ArrowLeft':
            row6[8].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'ArrowDown':
            row6[9].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'ArrowRight':
            row6[10].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'Numpad0':
            row6[11].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        case 'NumpadDecimal':
            row6[12].style = `box-shadow: 3px 3px 2px 3px rgb(115, 0, 0);
  transform: translate(0px, 0px);`
            break;
        default:
            break;
    }
});



