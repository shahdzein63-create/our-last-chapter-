const letters = {
    aya: {
        title: "Dear Aya,",
        flower: "✿",
        text: `I don’t know exactly how life will look after graduation, but I know I’ll always be grateful that our paths crossed in this chapter. 🤍

I hope you never forget how much you deserve good things: peaceful days, people who choose you, dreams that come true, and little reasons to smile even when life feels heavy.

One day, we’ll probably miss the ordinary days more than we expect — the random conversations, the laughter, and all the tiny moments that didn’t feel special until they became memories.

Wherever life takes you, I’m wishing you a future that feels like you: beautiful, safe, and full of things you love.

I’m really glad you’re part of this story. ♡`
    },

    asmaa: {
        title: "Dear Asmaa,",
        flower: "❀",
        text: `Here’s a little reminder for you: you’re part of a chapter I’ll always look back on with a soft spot in my heart. 🥹🤍

I hope the future surprises you in the loveliest ways. I hope you get the opportunities you dream about, meet people who appreciate you, and become proud of the person you’re growing into.

And when university becomes a memory and life gets busy, I hope we still find little ways to check on each other, laugh about old days, and say “remember that?” like no time has passed.

Thank you for being one of the people who make this chapter what it is. May life be gentle with you, and may your happiest days still be ahead.

You’ll always have a little place in these memories. ♡`
    }
};

const notes = {
    miss: {
        title: "For when you miss us…",
        text: "Take a breath and remember: the best parts of friendship don’t disappear when the timetable ends. Some memories stay warm no matter how much time passes. And there are still so many stories we haven’t made yet. 🤍"
    },

    sad: {
        title: "A little hug for you",
        text: "You don’t have to have everything figured out today. You’re allowed to rest, start again, and take life one small step at a time. I hope you speak to yourself with the same kindness you give to the people you love. Imagine the biggest hug right now. 🫂"
    },

    laugh: {
        title: "Emergency laugh department 😂",
        text: "Remember that we survived lectures, deadlines, confusing instructions, and saying “I’ll start tomorrow” approximately one million times. If we survived all that, we can survive almost anything. Please drink water and stop stressing for at least five minutes. 😭"
    },

    dream: {
        title: "In case you forgot… ✨",
        text: "You are allowed to want more for yourself. You are allowed to change your mind, begin again, and take a path that looks different from everyone else’s. Keep going at your own pace. I’m rooting for the beautiful things waiting for you."
    }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

function openModal(title, text, flower = "♡") {
    modalTitle.textContent = title;
    modalText.textContent = text;
    document.querySelector(".modal-flower").textContent = flower;
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}

document.querySelectorAll("[data-letter]").forEach(card => {
    card.addEventListener("click", () => {
        const letter = letters[card.dataset.letter];
        openModal(letter.title, letter.text, letter.flower);
    });
});

document.querySelectorAll("[data-note]").forEach(button => {
    button.addEventListener("click", () => {
        const note = notes[button.dataset.note];
        openModal(note.title, note.text);
    });
});

document.getElementById("closeModal").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal();
    }
});

const loveMessages = [
    "You are allowed to grow at your own pace. ♡",
    "Someone is lucky to know you. Never forget that. 🤍",
    "You have made it through hard days before. One step at a time.",
    "You don’t need to be perfect to be deeply loved. 🌷",
    "Your future self is going to be so proud of you. ✨",
    "A gentle reminder: you matter, exactly as you are. 🫶"
];

let loveIndex = -1;

document.getElementById("loveButton").addEventListener("click", () => {
    loveIndex = (loveIndex + 1) % loveMessages.length;
    document.getElementById("loveMessage").textContent = loveMessages[loveIndex];
});

const questions = [
    "Say “I’m on my way” while still getting ready?",
    "Laugh at the worst possible time?",
    "Say “I’ll study early this time” and then panic before the exam?",
    "Send a voice note that somehow becomes a podcast?",
    "Turn a tiny story into a whole dramatic episode?"
];

let questionIndex = 0;

document.getElementById("nextQuestion").addEventListener("click", () => {
    questionIndex = (questionIndex + 1) % questions.length;
    document.getElementById("question").textContent = questions[questionIndex];
    document.getElementById("result").textContent = "";

    document.querySelectorAll(".option").forEach(option => {
        option.classList.remove("selected");
    });
});

document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", () => {
        document.querySelectorAll(".option").forEach(item => {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

        const name = option.textContent;

        if (name === "Honestly… all of us") {
            document.getElementById("result").textContent =
                "Correct answer. The evidence is overwhelming. 😭";
        } else {
            document.getElementById("result").textContent =
                `${name}? The committee would like to hear the defense. 😂`;
        }
    });
});

document.getElementById("hugButton").addEventListener("click", () => {
    closeModal();
    alert("Sending you the biggest hug! ♡ 🫂");
});