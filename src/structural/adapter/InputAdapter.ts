// Призначення: Адаптація старого інтерфейсу (геймпад) до нового (ПК-управління).
class Gamepad {
    pressTrigger(): void {
        console.log("Натиснуто правий тригер (RT) на геймпаді");
    }
}

export interface PCInput {
    clickMouse(): void;
}

export class GamepadAdapter implements PCInput {
    private controller: Gamepad = new Gamepad();

    clickMouse(): void {
        this.controller.pressTrigger();
    }
}