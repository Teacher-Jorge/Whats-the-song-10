let wordBeen = document.getElementById("wordBeen")
let btnBe = document.getElementById('btnBe')
let btnBeing = document.getElementById('btnBeing')

let btnBeen = document.getElementById('btnBeen')
let btnTranslate = document.getElementById('translate')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Você sempre foi um estranho? Ou algo causa a mudança? Se este não é o novo você, Eu absolutamente nunca te conheci.'
    btnTranslate.style.boxShadow = '1px 1px 1px black'
    setTimeout(function()
    {
        btnTranslate.innerHTML = 'Translate'
        btnTranslate.style.boxShadow = '2px 2px 3px black'
    }, 8000)

})

btnBeen.addEventListener('click', function() {
    let songAudio = document.getElementById('song')
    songAudio.play()
    let audio = document.getElementById('click')
    audio.play()
    wordBeen.innerHTML = 'Been'
    wordBeen.style.color = 'lime'
    btnBeen.style.background = 'lawngreen'
    btnBeen.style.color = 'green'
    btnBeen.disabled = 'true'
    btnBe.disabled = 'true'
    btnBe.disabled = 'true'
})

btnBe.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordBeen.innerHTML = 'Be'
    wordBeen.style.color = 'red'
    btnBe.style.background = 'red'
    btnBe.disabled = 'true'
})

btnBeing.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordBeen.innerHTML = 'Being'
    wordBeen.style.color = 'red'
    btnBeing.style.background = 'red'
    btnBeing.disabled = 'true'
})