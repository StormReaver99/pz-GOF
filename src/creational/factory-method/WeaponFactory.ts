// Призначення: Передає відповідальність за створення конкретної зброї підкласам.
interface Weapon {
    fire(): void;
}

class AssaultRifle implements Weapon {
    fire(): void {
        console.log("Стрільба чергою з M4A1: Тра-та-та!");
    }
}

class SniperRifle implements Weapon {
    fire(): void {
        console.log("Постріл з Intervention: Бам!");
    }
}

export abstract class WeaponSpawner {
    abstract createWeapon(): Weapon;

    spawn(): void {
        const weapon = this.createWeapon();
        weapon.fire();
    }
}

export class AssaultSpawner extends WeaponSpawner {
    createWeapon(): Weapon {
        return new AssaultRifle();
    }
}

export class SniperSpawner extends WeaponSpawner {
    createWeapon(): Weapon {
        return new SniperRifle();
    }
}