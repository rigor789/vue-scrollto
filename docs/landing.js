function landing() {
    return function (ctx) {
        ctx.router.afterEach(to => {
            const isLanding = to.meta && (to.meta.name === 'landing')

            if (isLanding) {
                buildLanding()
            }
        })
    }
}

function buildLanding() {
    const div = document.createElement('div')
    div.id = 'landing'
    let sections = `
            <div class="section-container">
                <div class="section">
                    <div class="window"></div>
                    <div class="window"></div>
                    <div class="window"></div>
                </div>
            </div>
        `.repeat(20)

    div.innerHTML = `
        <div class="top section-container">
            <div id="roof" class="roof"></div>
        </div>
        <div class="section-container">
            <div class="section">
                <div class="window"></div>
                <div class="window"></div>
            </div>
        </div>
        ${sections}
        <div class="section-container">
            <div class="section">
                <div id="element">
                    <h1>You found me!</h1>
                    <a href="#/docs" class="btn">Go to docs</a>
                </div>
            </div>
        </div>
        ${sections}
        <div class="copy">
            &copy; Igor Randjelovic
        </div>
    `
    document.body.appendChild(div)

    let roof = document.getElementById('roof')
    let roof_clone = roof.cloneNode(true)
    roof.parentNode.replaceChild(roof_clone, roof)

    roof_clone.addEventListener('click', (e) => {
        e.preventDefault()
        VueScrollTo.scrollTo('#element', {
            offset: -(window.innerHeight * 0.5),
            duration: 2000,
            easing: 'ease-in-out',
            onDone() {
                let element = document.getElementById('element')

                element.classList.remove('spin')
                element.classList.add('spin')
            }
        })
    })

    let windows = document.getElementsByClassName('window')
    let i = 0
    Array.prototype.forEach.call(windows, win => {
        if (++i % 2 == 0) {
            i % 3 == 0 ? win.classList.toggle('window--crooked_left')
                : win.classList.toggle('window--crooked_right')
        }
    })
}
