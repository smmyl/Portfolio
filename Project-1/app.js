$(() => {
    const $nav = $('.nav')
    const $btn = $('.icon')
    const $btn2 = $('.icon-2')
    
    const showNav = () => {
        $nav.show()
        $btn.hide()
        $btn2.show()
    }
    const hideNav = () => {
        $nav.hide()
        $btn2.hide()
        $btn.show()
    }

    $nav.hide()
    $btn2.hide()

    $btn.on('click', showNav)
    $btn2.on('click', hideNav)

})