class Character {
  constructor(name, level, type, attack, defence, health) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
  }

  levelUp() {
    if (this.health === 0) throw new Error('impossible to revive a dead character!');
    this.level += 1;
    this.attack *= 1.2;
    this.health = 100;
  }
}

export default Character;
