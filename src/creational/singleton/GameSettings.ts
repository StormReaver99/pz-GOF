// Призначення: Гарантує наявність лише одного екземпляра налаштувань гри.
export class GameSettings {
    private static instance: GameSettings;
    public fov: number = 90;

    private constructor() {
        
    }

    public static getInstance(): GameSettings {
        if (!GameSettings.instance) {
            GameSettings.instance = new GameSettings();
        }
        return GameSettings.instance;
    }
}