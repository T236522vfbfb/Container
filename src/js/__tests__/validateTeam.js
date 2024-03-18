import Team from "../Team";
import Character from "../Character";

test("Check add", () => {
    const newTeam = new Team();
    const player = new Character({ name: "name", age: 111 });  
    newTeam.add(player);
  
    const newSet = new Set();
    newSet.add({ name: "name", age: 111 });
  
    expect(newTeam.members).toEqual(newSet);
  });


test('Check add error', () => {
    const newTeam = new Team();
    const player = new Character({name: "Name_1", age: "111"});
    expect(function () {
        newTeam.add(player);
    }).toThrow("Игрок уже есть в команде");
})

test('Проверка дубликатов', () => {
    const newTeam = new Team();
  
    const player_1 = new Character({ name: "Name_1", age: 11 });
    const player_2 = new Character({ name: "Name_2", age: 22 });
    const player_3 = new Character({ name: "Name_3", age: 33 });
  
    newTeam.addAll(player_1, player_2, player_3, player_3);  
  
    expect(newTeam.members.size).toEqual(3);
  });
  
test("Set to Array", () => {
    const newTeam = new Team();

    const player_1 = new Character({ name: "Name_1", age: 11 });
    const player_2 = new Character({ name: "Name_2", age: 22 });
    const player_3 = new Character({ name: "Name_3", age: 33 });

    newTeam.addAll(player_1, player_2, player_3); 

    newTeam.toArray();

    const sampleArray = [
        { name: "Name_1", age: 11 },
        { name: "Name_2", age: 22 },
        { name: "Name_3", age: 33 }
    ];

    expect(newTeam.members).toEqual(sampleArray);
});