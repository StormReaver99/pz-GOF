// Призначення: Динамічне розширення властивостей об'єкта (встановлення глушника).
export interface Gun {
    getStats(): string;
}

export class BaseGun implements Gun {
    getStats(): string {
        return "Базова штурмова гвинтівка";
    }
}

export class SilencerDecorator implements Gun {
    private gun: Gun;

    constructor(gun: Gun) {
        this.gun = gun;
    }

    getStats(): string {
        return this.gun.getStats() + " + Глушник (не видно на радарі)";
    }
}