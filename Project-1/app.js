$(() => {
    const $nav = $('.nav')
    const $hambtn = $('#hamburger-btn')
    const $hambtn2 = $('#hamburger-btn2')
    const $nightbtn = $('#night-btn')
    const $lightbtn = $('#light-btn')

    const showNav = () => {
        $nav.slideDown()
        $hambtn.hide()
        $hambtn2.show()
    }
    const hideNav = () => {
        $nav.slideUp()
        $hambtn2.hide()
        $hambtn.show()
    }

    const lightShow = () => {
        $nightbtn.hide()
        $lightbtn.show()
    }

    const nightShow = () => {
        $nightbtn.show()
        $lightbtn.hide()
    }

    $nav.hide()
    $hambtn2.hide()
    $lightbtn.hide()

    $hambtn.on('click', showNav)
    $hambtn2.on('click', hideNav)
    $nightbtn.on('click', lightShow)
    $lightbtn.on('click', nightShow)

})