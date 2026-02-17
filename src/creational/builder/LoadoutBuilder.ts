// Призначення: Покрокове конструювання складного об'єкта (збірки екіпіровки).
class Loadout {
    primary: string = "";
    perk: string = "";

    show(): void {
        console.log(`Клас створено: Зброя - ${this.primary}, Перк - ${this.perk}`);
    }
}

export class LoadoutBuilder {
    private loadout: Loadout = new Loadout();
    
    setPrimary(weapon: string): this {
        this.loadout.primary = weapon;
        return this; 
    }

    setPerk(perk: string): this {
        this.loadout.perk = perk;
        return this;
    }

    build(): Loadout {
        return this.loadout;
    }
}