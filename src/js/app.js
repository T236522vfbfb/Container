import Team from "./Team";
import Character from "./Character";

const newTeam = new Team();

const player_1 = new Character({name: "Name_1", age: "111"});
const player_2 = new Character({name: "Name_2", age: "222"});
const player_3 = new Character({name: "Name_3", age: "333"});

newTeam.add(player_3);
newTeam.addAll(player_1, player_2);
newTeam.toArray();