// Призначення: Механізм підписки для сповіщення гравців про події на сервері.
interface Observer {
    update(event: string): void;
}

export class MatchServer {
    private players: Observer[] = [];

    join(player: Observer): void {
        this.players.push(player);
    }

    registerKill(killer: string, victim: string): void {
        const msg = `[KILLFEED]: ${killer} ліквідував ${victim}`;
        
        this.players.forEach((player) => {
            player.update(msg);
        });
    }
}

export class Gamer implements Observer {
    private nickname: string;

    constructor(nickname: string) {
        this.nickname = nickname;
    }

    update(event: string): void {
        console.log(`[Екран гравця ${this.nickname}]: ${event}`);
    }
}