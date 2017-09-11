// open chrome extension, see something in console
console.log('I\'m running!')

// Create array of nicknames
const nicknames = ['Adolf Twitler', 'Agent Orange', 'The Angry Creamsicle', 'Barbecued Brutus', 'Benedict Donald', 'Boss Tweet', 

'Bratman', 'Cheeto Benito', 'Cheeto-In-Chief', 'The Combover Con Artist', 'Comrade Cheetolino', 'Creep Throat', 'Crown Prince of Politwits', 'Darth Hater', 'Donald Chump', 'Donnie Bratso', 'Donnie TicTac', 'Draft Dodger Don', 'Dumbelldore', 'The Fanta Fascist', 'The Fraud of Fifth Avenue', 'Fuckface Von Clownstick',
'Genghis Can\’t',
'The Golden Wrecking Ball',
'The Great White Dope',
'Hair Furher',
'The Human Tanning Bed Warning Label',
'The Infuriator',
'Last Of The Mango Mohawkans',
'Little Lady Fingers',
'King Leer',
'The Lone DeRanger',
'The Lyin King',
'Macho McGrump',
'Mango Mussolini',
'President Gold Man Sucks',
'President If-Urine-You’re-In',
'President Rancid Velveeta',
'Prima Donald',
'Pudgy McTrumpcake',
'Putin’s Papaya-Flavored Pawn',
'Short-Fingered Vulgarian',
'Sir Sissypants',
'The Talking Yam',
'Tangerine Tornado',
'Tie-Coon',
'Trumplethinskin',
'Trumpty Dumpty',
'Vanilla ISIS',
'The White Pride Piper',
'Con Don',
'The Orange Mephistopheles.',
]
// find all mentions of Donald Trump

function randoName() {
    return (nicknames[Math.floor(Math.random() * nicknames.length)]);
}
// for each mention, replace the text with random selecton from the array of nicknames
const myExpression = /Donald Trump|Donald J Trump|Donald J\. Trump|DonaldJTrump|Donald John Trump|DonaldTrump|Trump/gi;

document.body.innerHTML = document.body.innerHTML.replace(myExpression, randoName);



