document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const story = document.getElementById("story-view");
    const death = document.getElementById("you-died");

    const startBtn = document.getElementById("start");
    const nextBtn = document.getElementById("next");
    const killBtn = document.getElementById("kill");
    const backBtns = document.querySelectorAll(".restart")

    let game = new Game(storySegments);


    function showSections(screen) {
        intro.classList.add('hidden');
        story.classList.add('hidden');
        death.classList.add('hidden');

        screen.classList.remove('hidden');
    }

        

    startBtn.addEventListener("click", () => {
        showSections(story);
        game.restartGame();   // 🟢 reset to beginning
        
    });

    nextBtn.addEventListener("click", () => showSections(story));
    killBtn.addEventListener("click", () => showSections(death));

    backBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            showSections(intro);
        });
    });
   
    showSections(intro);
    

   /*  const newGame = new Game(storySegments)

    if (!game) {
    game = new Game(story);
    } else {
    game.restartGame();
    game.displayStory();
    } */


});