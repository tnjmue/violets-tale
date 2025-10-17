class Game {

    constructor(story) {
        this.story = story;
        this.currentIndex = 0;
        /* this.timer = timer; */

        this.nextBtn = document.getElementById("next");
        this.nextBtn.addEventListener("click", () => this.updateIndex(story));
        this.displayStory();
        


    }

    restartGame() {
        this.currentIndex = 0;
        this.displayStory();  // 🟢 redraw first story segment
    }

    updateIndex() {
        this.currentIndex++;
        this.displayStory();
    }

    displayStory() {
        const currentSegment = this.story[this.currentIndex];
        const storyView = document.getElementById("story-view");
        const container = document.getElementById("container");
        
        
        storyView.style.backgroundImage = currentSegment.image;
        storyView.style.backgroundSize = "cover";
        storyView.style.backgroundRepeat = "no-repeat";
        storyView.style.backgroundPosition = "center";
        document.getElementById("story-header").className = `${currentSegment.sin}-theme`;
        container.className = currentSegment.sin
        container.innerHTML = `<article>${currentSegment.text}</article></div>`;

        
        

        if (currentSegment.choices) {
            container.innerHTML += `
                <div class="choices">
                    <label><input type="radio" name="choice" value="0"> ${currentSegment.choices[0]}</label>
                    <label><input type="radio" name="choice" value="1"> ${currentSegment.choices[1]}</label>
                </div>
                <button class="game-btn" id="confirm-choice">confirm</button>
            `;

            const confirmBtn = document.getElementById("confirm-choice");
            confirmBtn.addEventListener("click", () => {
                const selected = container.querySelector('input[name="choice"]:checked');
                if (!selected) return; // do nothing if nothing is selected

                const choiceIndex = parseInt(selected.value);
                const correct = choiceIndex === currentSegment.validChoice;

                if (correct) {
                    //go to outro-right
                    this.currentIndex = this.story.findIndex(
                        segment => segment.sin === currentSegment.sin && segment.value === true
                    );

                } else {
                    // go to outro-wrong
                    this.currentIndex = this.story.findIndex(
                        segment => segment.sin === currentSegment.sin && segment.value === false
                     );
                }

                this.displayStory(); // update page
            });

        }


        // arrow button
        if ((currentSegment.type) === "intro" || (currentSegment.type === "outro")) {
            const arrowBtn = document.createElement("button");
            arrowBtn.className = "game-btn";
            arrowBtn.id = "arrow";
            arrowBtn.textContent = "→";
        
            arrowBtn.addEventListener("click", () => {
                this.currentIndex++;
                this.displayStory(); 
            });

            container.appendChild(arrowBtn);
        
        } 

             if (currentSegment.title === 'finished') {
               const backBtn = document.createElement("button");
                backBtn.className = "game-btn restart";
                backBtn.id = "start-again";
                backBtn.textContent = "restart game";
                backBtn.addEventListener("click", () => {
                document.getElementById("you-died").classList.add('hidden');
                document.getElementById("story-view").classList.add('hidden');
                document.getElementById("intro").classList.remove('hidden');   
                });

                container.appendChild(backBtn);
             }

        
    }

    typeText(element, text, speed = 25) {
  element.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

}



