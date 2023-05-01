$(() => {
    const $nav = $('.nav')
    const $hambtn = $('#hamburger-btn')
    const $hambtn2 = $('#hamburger-btn2')
    const $nightbtn = $('#night-btn')
    const $lightbtn = $('#light-btn')
    const $home = $('#home')
    const $homePage = $('#home-page')
    const $resume = $('#resume')
    const $resumePage = $('#resume-page')
    const $skills = $('#skills')
    const $skillsPage = $('#skills-page')
    const $projects = $('#projects')
    const $projectsPage = $('#projects-page')
    const $project1 = $('#carousel-1')
    const $project2 = $('#carousel-2')
    const $project3 = $('#carousel-3')
    const $project4 = $('#carousel-4')
    const $carouselLeft = $('#carousel-btn')
    const $carouselRight = $('#carousel-btn2')
    const $nightButton = $('#night-mode')
    const $lightButton = $('#light-mode')


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

    const home = () => {
        $homePage.fadeIn()
        $resumePage.fadeOut()
        $skillsPage.fadeOut()
        $projectsPage.fadeOut()
    }
    
    const resume = () => {
        $homePage.fadeOut()
        $resumePage.fadeIn()
        $skillsPage.fadeOut()
        $projectsPage.fadeOut()
    }

    const skills = () => {
        $homePage.fadeOut()
        $resumePage.fadeOut()
        $skillsPage.fadeIn()
        $projectsPage.fadeOut()
    }

    const projects = () => {
        $homePage.fadeOut()
        $resumePage.fadeOut()
        $skillsPage.fadeOut()
        $projectsPage.fadeIn()
    }

    const carouselRight = () => {
        if ($project1.css('display') == 'none' && $project2.css('display') == 'block') {
            $project3.fadeIn()
            $project2.fadeOut()
        } else if ($project2.css('display') == 'none' && $project3.css('display') == 'block') {
            $project4.fadeIn()
            $project3.fadeOut()
        } else if ($project3.css('display') == 'none' && $project4.css('display') == 'block') {
            $project1.fadeIn()
            $project4.fadeOut()
        } else if ($project4.css('display') == 'none' && $project1.css('display') == 'block') {
            $project2.fadeIn()
            $project1.fadeOut()
        } else {}
    }

    const carouselLeft = () => {
        if ($project1.css('display') == 'none' && $project2.css('display') == 'block') {
            $project1.fadeIn()
            $project2.fadeOut()
        } else if ($project2.css('display') == 'none' && $project3.css('display') == 'block') {
            $project2.fadeIn()
            $project3.fadeOut()
        } else if ($project3.css('display') == 'none' && $project4.css('display') == 'block') {
            $project3.fadeIn()
            $project4.fadeOut()
        } else if ($project4.css('display') == 'none' && $project1.css('display') == 'block') {
            $project4.fadeIn()
            $project1.fadeOut()
        } else {}
    }

    const nightMode = () => {
        $('body').addClass('dark-mode')
    }

    const lightMode = () => {
        $('body').removeClass()    
    }

    $nav.hide()
    $hambtn2.hide()
    $lightbtn.hide()
    $resumePage.hide()
    $skills.hide()
    $projects.hide()
    $skillsPage.hide()
    $projectsPage.hide()
    $project2.hide()
    $project3.hide()
    $project4.hide()


    $hambtn.on('click', showNav)
    $hambtn2.on('click', hideNav)
    $nightbtn.on('click', lightShow)
    $lightbtn.on('click', nightShow)
    $home.on('click', home)
    $resume.on('click', resume)
    $skills.on('click', skills)
    $projects.on('click', projects)
    $carouselRight.on('click', carouselRight)
    $carouselLeft.on('click', carouselLeft)
    $nightButton.on('click', nightMode)
    $lightButton.on('click', lightMode)
})

