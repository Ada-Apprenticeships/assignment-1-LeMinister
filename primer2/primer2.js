
// TODO: Write a function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1)
// that simulates shuffling and dealing a deck of cards.
// function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1) {

//     const number = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//     const suit = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];


//     function createDeck() {
//         let deck = [];
//         for (let i = 0; i < numDecks; i++) {  // Create multiple decks if numDecks > 1
//             for (let suits of suit) {
//                 for (let numbers of number) {
//                     deck.push(`${numbers} of ${suits}`);
//                 }
//             }
//         }
//         return deck;
//     }


//     function fisherYatesShuffle(deck) {
//         for (let i = deck.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap
//         }
//     }


//     function validateInputs(deck) {
//         const deckSize = deck.length;
//         if (typeof numPlayers !== 'number' || numPlayers == null || numPlayers <= 0 || !Number.isInteger(numPlayers)) {
//             throw new Error('Number of players must be a positive integer.');
//         }
//         if (typeof cardsPerPlayer !== 'number' || cardsPerPlayer <= 0 || !Number.isInteger(cardsPerPlayer)) {
//             throw new Error('Cards per player must be a positive integer.');
//         }
//         if (numPlayers * cardsPerPlayer > deckSize & numPlayers * cardsPerPlayer >0 ) {
//             throw new Error('invalid cards per hand');
//         }
//     }


//     function dealCards(deck) {
//         let hands = [];
//         for (let i = 0; i < numPlayers; i++) {
//             hands.push(deck.splice(0, cardsPerPlayer));
//         }
//         return hands;
//     }



function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1) {

    const number = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const suit = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];

        
        if (typeof numPlayers !== 'number' || numPlayers == null || numPlayers <= 0 || !Number.isInteger(numPlayers)) {
            throw new Error('Number of players must be a positive integer.');
        }
        if (typeof cardsPerPlayer !== 'number' || cardsPerPlayer == null || cardsPerPlayer <= 0 || !Number.isInteger(cardsPerPlayer)) {
            throw new Error('Cards per player must be a positive integer.');
        }

        let deck = [];
        for (let i = 0; i < numDecks; i++) {  
            for (let suits of suit) {
                for (let numbers of number) {
                    deck.push(`${numbers} of ${suits}`);
                }
            }
        }

        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        const deckSize = deck.length;
        if (numPlayers * cardsPerPlayer > deckSize) {
            throw new Error('Not enough cards in the deck to deal.');
        }

        let hands = [];
        for (let i = 0; i < numPlayers; i++) {
            hands.push(deck.splice(0, cardsPerPlayer));
        }


        console.log(`Deck shuffled and cards dealt to ${numPlayers} players from ${numDecks} deck(s):\n`);
        return hands;

    } 



export default shuffleAndDeal;



// TODO: Create a standard 52-card deck (or 104 if numDecks is 2).

// TODO: Implement input validation to handle invalid inputs:
//       -  numPlayers should be a positive integer.
//       -  cardsPerPlayer should be a positive integer.
//       -  Throw an error if the requested cards exceed the deck size.

// TODO: Shuffle the deck using a suitable algorithm
//       -  Consider time complexity and randomness.

// TODO: Deal cards to the specified number of players.

// TODO: Return the hands dealt as an array of arrays.

// TODO: Test the function with various inputs, including edge cases:
//       -  Dealing the entire deck.
//       -  Single player.
//       -  Minimum cards per hand.


