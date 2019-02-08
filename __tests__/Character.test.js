import Character from '../src/js/Character';

test('testing creation of a character', () => {
  const character = new Character('Вася', 1, 'Студент', 100, 200, 50);
  const expected = {
    name: 'Вася',
    type: 'Студент',
    level: 1,
    attack: 100,
    defence: 200,
    health: 50,
  };

  expect(character).toEqual(expected);
});

test('testing levelUp with a normal character', () => {
  const character = new Character('Вася', 1, 'Студент', 100, 200, 50);
  character.levelUp();

  const expected = {
    name: 'Вася',
    type: 'Студент',
    level: 2,
    attack: 120,
    defence: 200,
    health: 100,
  };

  expect(character).toEqual(expected);
});

test('levelUp on dead character should throw', () => {
  const deadPerson = new Character('John', 1, 'Студент', 100, 200, 0);
  const makeResult = () => deadPerson.levelUp();

  expect(makeResult).toThrow();
});
