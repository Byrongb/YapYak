const dropdowns = document.querySelectorAll(".dropdown-container"),
      inputLanguageDropdown = document.querySelector("#input-language"),
      outputLanguageDropdown = document.querySelector("#output-language");

function populateDropdown(dropdown, options) {
    dropdown.querySelector("ul").innerHTML = "";
    options.forEach((option) => {
        const li = document.createElement("li");
        li.textContent = `${option.name} (${option.native})`;
        li.dataset.value = option.code;
        li.classList.add("option");
        dropdown.querySelector("ul").appendChild(li);
    });
}

populateDropdown(inputLanguageDropdown, languages);
populateDropdown(outputLanguageDropdown, languages);

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });

    dropdown.querySelectorAll(".option").forEach(item => {
        item.addEventListener("click", () => {
            dropdown.querySelectorAll(".option").forEach(option => {
                option.classList.remove("active");
            });
            item.classList.add("active");
            const selected = dropdown.querySelector(".selected");
            selected.textContent = item.textContent;
            selected.dataset.value = item.dataset.value;
            translate();
        });
    });
});

document.addEventListener("click", e => {
    if (!e.target.matches('.dropdown-container, .dropdown-container *')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("active");
        });
    }
});

const swapBtn = document.querySelector(".swap-position"),
      inputTextElem = document.querySelector("#input-text"),
      outputTextElem = document.querySelector("#output-text");

swapBtn.addEventListener("click", () => {
    [inputLanguageDropdown, outputLanguageDropdown].forEach(dropdown => {
        const selected = dropdown.querySelector(".selected");
        const activeOption = dropdown.querySelector(".option.active");
        if (activeOption) {
            activeOption.classList.remove("active");
        }
        const swapTarget = dropdown === inputLanguageDropdown ? outputLanguageDropdown : inputLanguageDropdown;
        const swapTargetSelected = swapTarget.querySelector(".selected");
        selected.textContent = swapTargetSelected.textContent;
        selected.dataset.value = swapTargetSelected.dataset.value;
    });

    [inputTextElem.value, outputTextElem.value] = [outputTextElem.value, inputTextElem.value];
    translate();
});

function translate() {
    const inputText = inputTextElem.value;
    const inputLanguage = inputLanguageDropdown.querySelector(".selected").dataset.value;
    const outputLanguage = outputLanguageDropdown.querySelector(".selected").dataset.value;
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURIComponent(inputText)}`;
    
    fetch(url)
        .then(response => response.json())
        .then(json => {
            outputTextElem.value = json[0].map(item => item[0]).join("");
        })
        .catch(error => console.error('Error in translation:', error));
}

inputTextElem.addEventListener("input", () => {
    if (inputTextElem.value.length > 5000) {
        inputTextElem.value = inputTextElem.value.slice(0, 5000);
    }
    document.querySelector("#input-chars").textContent = inputTextElem.value.length;
    translate();
});

// Voice recognition setup
const startVoiceRecognitionBtn = document.getElementById('start-voice-recognition');
let isRecognizing = false;
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    if (event.results[0].isFinal) {
        inputTextElem.value += transcript + ' ';
        translate();
    }
};

startVoiceRecognitionBtn.addEventListener('click', () => {
    if (isRecognizing) {
        recognition.stop();
    } else {
        recognition.start();
    }
    isRecognizing = !isRecognizing;
});

recognition.onend = () => {
    isRecognizing = false;
};
