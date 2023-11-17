module.exports = async function (context, req) {
const player1 = {
        hitpoints: req.body.player1.hitpoints,
        attack: req.body.player1.attack,
        defense: req.body.player1.defense,
    };

    const player2 = {
        hitpoints: req.body.player2.hitpoints,
        attack: req.body.player2.attack,
        defense: req.body.player2.defense,
    };

    const winner = battle(player1, player2);

    context.res = {
        status: 200,
        body: winner,
    };
};

context.res = {
        // status: 200, /* Defaults to 200 */
        body: winner
    
}


function battle(player1, player2) {
    if(Number.isIntger(player1.hitpoints) && Number.isIntger(player1.attack) && Number.isIntger(player1.defense)&& Number.isIntger(player2.hitpoints) && Number.isIntger(player2.attack) && Number.isIntger(player2.defense))
    if(player1.hitpoints <=0 || player1.attack <=0 || player1.defense <=0 || player2.hitpoints <=0 || player2.attack <=0 || player2.defense <=0){
        return 'negativer wert übergeben'
    }
    while (player1.hitpoints > 0 && player2.hitpoints > 0) {
        // Berechne die Angriffe gleichzeitig
        const player1Damage = Math.max(0, player1.attack - player2.defense);
        const player2Damage = Math.max(0, player2.attack - player1.defense);

        // Aktualisiere die Hitpoints gleichzeitig
        player1.hitpoints -= player2Damage;
        player2.hitpoints -= player1Damage;

        // Überprüfen, ob einer der Spieler noch am Leben ist
        if (player1.hitpoints <= 0 && player2.hitpoints <= 0) {
            return 'Unentschieden!';
        } else if (player1.hitpoints <= 0) {
            return 'Player 2 gewinnt!';
        } else if (player2.hitpoints <= 0) {
            return 'Player 1 gewinnt!';
        }
    }

    // Falls wir aus der Schleife herauskommen, sollte dies nicht passieren.
    return 'Ungültiges Spielende!';
}


    