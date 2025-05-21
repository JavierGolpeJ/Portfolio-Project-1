const inspiration = ["To be grateful is to recognize the Love of God in everything He has given us - and He has given us everything. Every breath we draw is a gift of His love, every moment of existence is a grace, for it brings with it immense graces from Him. Gratitude therefore takes nothing for granted, is never unresponsive, is constantly awakening to new wonder and to praise of the goodness of God. For the grateful person knows that God is good, not by hearsay but by experience. And that is what makes all the difference.- Thomas Merton",
    "Write it on your heart that every day is the best day in the year. - Ralph Waldo Emerson",
    "Never let hard lessons harden your heart; the hard lessons of life are meant to make you better, not bitter. - Roy T. Bennett, The Light in the Heart",
    "Being happy doesn't mean that everything is perfect. It means that you've decided to look beyond the imperfections. - Gerard Way",
    "I long to accomplish a great and noble task, but it is my chief duty to accomplish small tasks as if they were great and noble. - Helen Keller",
    "Anything under God's control is never out of control. - Charles Swindoll",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "You have brains in your head. You have feet on your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The people who are crazy enough to think they can change the world are the ones who do. - Steve Jobs",
    "Be strong and take heart, all you who hope in the Lord. — Psalm 31:24",
    "Show me your ways, Lord, teach me your paths. — Psalm 25:4",
    "The Lord is my strength and my shield; my heart trusts in him, and he helps me. — Psalm 28:7",
    "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid? — Psalm 27:1",
    "The Lord is close to the brokenhearted and saves those who are crushed in spirit. — Psalm 34:18",
    "The Lord will fight for you; you need only to be still. — Exodus 14:14",
    "The Lord is good, a refuge in times of trouble. He cares for those who trust in him. — Nahum 1:7",
    "The Lord is my shepherd, I lack nothing. — Psalm 23:1",
    "The Lord is my strength and my song; he has become my salvation. — Exodus 15:2"
];

const jokes = [
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I would tell you a joke about an elevator, but it's an uplifting experience.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What does a baby computer call his father? Data.",
    "After an unsuccessful harvest, why did the farmer decide to try a career in music? Because he had a ton of sick beets.",
    "Which days are the strongest? Saturday and Sunday. The rest are weekdays.",
    "Why did the coffee file a police report? It got mugged.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "I don't trust stairs. They're always up to something.",
    "What did Yoda say when he saw himself in 4K? HDMI.",
    "How do you make a water bed bouncier? Add spring water.",
];

const distractions = [
    "Take a break and go for a walk outside.",
    "Try a short meditation or deep breathing exercise.",
    "Listen to your favorite song or a new podcast.",
    "Make a cup of tea or coffee and enjoy it mindfully.",
    "Do a quick workout or stretch to refresh your body.",
    "Read a few pages of a book you've been meaning to start.",
    "Watch a funny video or meme to lighten your mood.",
    "Call or text a friend for a quick chat.",
    "Try doodling or coloring in an adult coloring book.",
    "Spend some time organizing or decluttering your workspace.",
    "Play a quick online game or puzzle.",
    "Listen to ambiemt sounds or nature sounds to relax.",
];

const randomNum = num => Math.floor(Math.random() * num);

const collectiveWisdom = { inspiration: inspiration, jokes: jokes, distractions: distractions };

const wisdomGiven = [];

for (const key in collectiveWisdom) {
    let randomIndex = randomNum(collectiveWisdom[key].length);
    let randomItem = collectiveWisdom[key][randomIndex];
    // console.log(`key: ${key} randomIndex:${randomIndex} randomItem: ${randomItem}`);
    wisdomGiven.push(randomItem);
    // console.log(`key: ${key} wisdom:${collectiveWisdom[key]}:`);
}

// console.log(collectiveWisdom.inspiration[randomNum(collectiveWisdom.inspiration.length)]);

// console.log(wisdomGiven);

const format = (wisdom) => {
    let first = wisdom[0];
    let second = wisdom[1];
    let third = wisdom[2];

    let temp1 = `Hello hope youre having a great day here are some words of encouragement for today: ${first} \nIf this is not enough here is a joke: ${second} \nand if you need a distraction try this: ${third} Hope this helps you take a break and enjoy your day!`;
    let temp2 = `Hey there! Just wanted to send a little positivity your way. Here’s a thought to lift your spirits: ${first} \nNeed a smile? Try this joke: ${second} \nAnd if your mind needs a break, here’s something fun to do: ${third} \nTake it easy today — you’ve got this.`;
    let temp3 = `Just a gentle reminder for today: ${first} \nIf you need a moment of lightness, here's a joke to lift your mood: ${second} \nAnd if you're feeling overwhelmed, try this calming distraction: ${third} \nYou're doing better than you think.`;
    let temp4 = `Yo! Quick vibe check — here’s something to keep your spirits up: ${first} \nNeed a laugh? This one’s for you: ${second} \nAnd if you're bored or stressed, go try this random thing: ${third} \nCatch your breath, then go be awesome.`;

    let pick = randomNum(4) + 1;

    if (pick == 1) {
        console.log(temp1);
    }
    else if (pick == 2) {
        console.log(temp2);
    }
    else if (pick == 3) {
        console.log(temp3);
    }
    else if (pick == 4) {
        console.log(temp4);
    }
}

format(wisdomGiven);