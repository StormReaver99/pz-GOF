// Призначення: Інкапсуляція алгоритмів руху для їх швидкої заміни в рантаймі.
export interface StanceStrategy {
    move(): void;
}

export class SprintStance implements StanceStrategy {
    move(): void {
        console.log("Тактичний спринт! Швидке переміщення.");
    }
}

export class ProneStance implements StanceStrategy {
    move(): void {
        console.log("Лягає на землю... Рух по-пластунськи (drop shot).");
    }
}

export class Player {
    private stance: StanceStrategy;

    constructor(stance: StanceStrategy) {
        this.stance = stance;
    }

    setStance(stance: StanceStrategy): void {
        this.stance = stance;
    }

    performMovement(): void {
        this.stance.move();
    }
}