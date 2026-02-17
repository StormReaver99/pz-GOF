// Призначення: Спрощення доступу до складної підсистеми пошуку лобі та завантаження.
class ServerAuth {
    login(): void {
        console.log("Підключення до IWNet... Авторизація успішна.");
    }
}

class LobbySearch {
    findMatch(): void {
        console.log("Пошук лобі для Team Deathmatch...");
    }
}

class MapLoader {
    load(): void {
        console.log("Завантаження карти Rust...");
    }
}

export class MatchmakingFacade {
    private auth: ServerAuth = new ServerAuth();
    private search: LobbySearch = new LobbySearch();
    private map: MapLoader = new MapLoader();

    play(): void {
        this.auth.login();
        this.search.findMatch();
        this.map.load();
        console.log("Матч знайдено. Приготуватися до бою!");
    }
}