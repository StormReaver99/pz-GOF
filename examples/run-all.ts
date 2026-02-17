import { GameSettings } from '../src/creational/singleton/GameSettings';
import { SniperSpawner } from '../src/creational/factory-method/WeaponFactory';
import { LoadoutBuilder } from '../src/creational/builder/LoadoutBuilder';
import { GamepadAdapter } from '../src/structural/adapter/InputAdapter';
import { MatchmakingFacade } from '../src/structural/facade/MatchmakingFacade';
import { BaseGun, SilencerDecorator } from '../src/structural/decorator/WeaponDecorator';
import { Player, SprintStance, ProneStance } from '../src/behavioral/strategy/StanceStrategy';
import { MatchServer, Gamer } from '../src/behavioral/observer/Killfeed';
const settings = GameSettings.getInstance();
settings.fov = 100;
console.log(`Поточний FOV: ${GameSettings.getInstance().fov}`);

const sniperSpawn = new SniperSpawner();
sniperSpawn.spawn();

const myLoadout = new LoadoutBuilder()
    .setPrimary("M4A1")
    .setPerk("Спритність рук (Sleight of Hand)")
    .build();
myLoadout.show();

console.log("\n=== 2. STRUCTURAL ===");
const pcInput = new GamepadAdapter();
pcInput.clickMouse();

const matchmaking = new MatchmakingFacade();
matchmaking.play();

const myGun = new SilencerDecorator(new BaseGun());
console.log(`Екіпіровано: ${myGun.getStats()}`);

console.log("\n=== 3. BEHAVIORAL ===");
const player = new Player(new SprintStance());
player.performMovement();

player.setStance(new ProneStance());
player.performMovement();

const server = new MatchServer();
const player1 = new Gamer("Ghost");
const player2 = new Gamer("Soap");

server.join(player1);
server.join(player2);

server.registerKill("Ghost", "Снайпер");