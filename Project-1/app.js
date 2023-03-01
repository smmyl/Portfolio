$(() => {
    const $nav = $('.nav')
    const $hambtn = $('#hamburger-btn')
    const $hambtn2 = $('#hamburger-btn2')
    const $nightbtn = $('#night-btn')
    const $lightbtn = $('#light-btn')
    const $home = $('#home')
    const $homepage = $('#home-page')
    const $resume = $('#resume')
    const $resumePage = $('#resume-page')
    const $skills = $('#skills')
    const $skillsPage = $('#skills-page')
    const $projects = $('#projects')
    const $projectsPage = $('#projects-page')
    const $resumeP = $('.resumep')

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
        $homepage.fadeIn()
        $resumePage.fadeOut()
        $skillsPage.fadeOut()
        $projectsPage.faceOut()
    }
    
    const resume = () => {
        $homepage.fadeOut()
        $resumePage.fadeIn()
        $skillsPage.fadeOut()
        $projectsPage.faceOut()
    }

    const skills = () => {
        $homepage.fadeOut()
        $resumePage.fadeOut()
        $skillsPage.fadeIn()
        $projectsPage.faceOut()
    }

    const projects= () => {
        $homepage.fadeOut()
        $resumePage.fadeOut()
        $skillsPage.fadeOut()
        $projectsPage.faceIn()
    }

    $nav.hide()
    $hambtn2.hide()
    $lightbtn.hide()
    $resumePage.hide()
    $skills.hide()
    $projects.hide()
    $skillsPage.hide()
    $projectsPage.hide()

    $hambtn.on('click', showNav)
    $hambtn2.on('click', hideNav)
    $nightbtn.on('click', lightShow)
    $lightbtn.on('click', nightShow)
    $home.on('click', home)
    $resume.on('click', resume)
    $skills.on('click', skills)
    $projects.on('click', projects)
})