function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1) {

    const number = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const suit = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];

        // validates if parameters given are in correct format
        if (typeof numPlayers !== 'number' || numPlayers == null || numPlayers <= 0 || !Number.isInteger(numPlayers)) {
            throw new Error('Number of players must be a positive integer.');
        }
        if (typeof cardsPerPlayer !== 'number' || cardsPerPlayer == null || cardsPerPlayer <= 0 || !Number.isInteger(cardsPerPlayer)) {
            throw new Error('Cards per player must be a positive integer.');
        }

        //loops through the lists to creat each individual card
        let deck = [];
        for (let i = 0; i < numDecks; i++) {  
            for (let suits of suit) {
                for (let numbers of number) {
                    deck.push(`${numbers} of ${suits}`);
                }
            }
        }

        // shuffling technique known as fisher-yates method
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        //validate that there is a correct amount of cards to deal for x number of players
        const deckSize = deck.length;
        if (numPlayers * cardsPerPlayer > deckSize) {
            throw new Error('Not enough cards in the deck to deal.');
        }

        let hands = [];
        for (let i = 0; i < numPlayers; i++) {
            hands.push(deck.splice(0, cardsPerPlayer));
        }


    
        return hands;

    } 



export default shuffleAndDeal;
