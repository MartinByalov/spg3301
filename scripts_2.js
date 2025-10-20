let clickCount = 0;
let key1Unlocked = false;

document.addEventListener('DOMContentLoaded', () => {

    const base64Message = "V2hhdCB5b3Ugc2VlayBpcyBub3Qgb3V0c2lkZSBidXQgaW5zaWRlLg==";
    const targetElement = document.getElementById('clickable-base64');
    const targetIndex = 17; 

    if (targetElement) {
        base64Message.split('').forEach((char, index) => {
            const span = document.createElement('span');

            span.style.cursor = 'pointer'; 
            span.style.padding = '0 1px'; 
            span.style.display = 'inline-block'; 
            
            span.addEventListener('click', function() {
                const clickedIndex = parseInt(this.dataset.index);

                if (clickedIndex === targetIndex) {
                    alert("Елементът е активиран! Преминаваш на следващ етап. 🗝️");
                    window.location.href = "stage2.html"; 
                } else {
                    span.style.backgroundColor = 'red';
                    setTimeout(() => { span.style.backgroundColor = ''; }, 200);
                }
            });

            targetElement.appendChild(span);
        });
    } else {
    }

    const inputField = document.getElementById('stage2Input'); 
    const checkButton = document.getElementById('stage2Check');

    const targetTextLine1 = "Only a cat of a different coat";
    const targetTextLine2 = "In a coat of gold or a coat of red";
    const targetText = (targetTextLine1 + ' ' + targetTextLine2).trim();
    
    const newBackgroundURL = 'https://www.nasa.gov/wp-content/uploads/2023/03/pillars_of_creation.jpg';

    function checkRainsOfCastamere() {
        if (!inputField) return; 

        let userInput = inputField.value.trim();
        
        const normalizedInput = userInput.replace(/,/g, '').toLowerCase(); 
        const normalizedTarget = targetText.replace(/,/g, '').toLowerCase(); 

        if (normalizedInput.includes(normalizedTarget)) {
            
            const puzzleContent = document.getElementById('puzzleContent');
            if (puzzleContent) {
                puzzleContent.style.display = 'none';
            }

            document.body.style.backgroundImage = `url('${newBackgroundURL}')`;
            document.body.style.backgroundSize = 'cover'; 
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundPosition = 'center center';
            document.body.style.backgroundAttachment = 'fixed'; 
            
            const resultDiv = document.getElementById('stage2Result');
            resultDiv.textContent = "Лъвът все още има нокти. Пренасочване...";
            resultDiv.style.display = 'block';

            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=4JZ-o3iAJv4";
            }, 2000); 
            

        } else if (userInput.length > 0) {
            
            const resultDiv = document.getElementById('stage2Result');
            resultDiv.textContent = "Змей... Опитай пак. Може би трябва да въведеш цитата в полето?";
        }
    }


    if (checkButton) {
        checkButton.addEventListener('click', checkRainsOfCastamere);
    }
    
    if (inputField) {
        inputField.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                checkRainsOfCastamere();
            }
        });
    }

});

function checkAnswer() {
    
    const input = document.getElementById("answerInput").value.trim(); 
    const correct = "What you seek is not outside but inside.";
    const keySpan = document.getElementById("keys");

    if (document.getElementById("answerInput")) { 
        if (input === correct && !key1Unlocked) {
            key1Unlocked = true;
            const newKey = document.createElement("span");
            newKey.textContent = "🔑";
            newKey.classList.add("key-animated");
            keySpan.appendChild(newKey);
            alert("Поздравления! Откри нов ключ.");
            document.getElementById("nextStage").style.display = "block";
        } else if (input === correct && key1Unlocked) {
            alert("Вече отключи този ключ.");
        } else {
            alert("Змей... Опитай пак.");
        }
    }
}


function copyBinary() {
    clickCount++;
    if (clickCount === 17) {
        
        alert("⛩️");
        window.location.href = "stage2.html"; 
    }
}

function goToStage2() {
    window.location.href = "stage2.html";
}

window.addEventListener('load', function () {
    if (localStorage.getItem('stage2_key_unlocked') === '1') {
        const keySpan = document.getElementById('keys');
        const newKey = document.createElement('span');
        newKey.textContent = '🔑';
        newKey.classList.add("key-animated");
        if(keySpan) keySpan.appendChild(newKey);
        localStorage.removeItem('stage2_key_unlocked');
    }
});