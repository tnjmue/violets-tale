document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const story = document.getElementById("story-view");
    const death = document.getElementById("you-died");
    const pageView = [intro, story, death];

    const startBtn = document.getElementById("start");
    const nextBtn = document.getElementById("next");
    const killBtn = document.getElementById("kill");
    const backBtns = document.querySelectorAll(".restart")


    function showSections(screen) {
        intro.classList.add('hidden');
        story.classList.add('hidden');
        death.classList.add('hidden');

        screen.classList.remove('hidden');
    }

        
    

   /*  function showSection(sectionToShow) {
        pageView.forEach(view => {
            if (view === sectionToShow) {
            view.style.display = "flex";
            } else {
            view.style.display = "none";
            }
        })
    } */

    startBtn.addEventListener("click", () => showSections(story));
    nextBtn.addEventListener("click", () => showSections(story));
    killBtn.addEventListener("click", () => showSections(death));

    backBtns.forEach(btn => {
         btn.addEventListener("click", () => showSections(intro));
    });
   
    showSections(intro);
    

    const newGame = new Game(storySegments)

    // get story segments displayed


});