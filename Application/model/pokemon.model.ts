

export class Pokemon  {
  private name: string;
  private speed?: number;
  private hp: number;
  private type: string;
  private attack: number;


  constructor(name: string, speed: number, hp: number, type: string, attack: number) {
    this.name = name;
    this.speed = speed;
    this.hp = hp;
    this.type = type;
    this.attack = attack;
  }

  isAlive(): boolean{
    return this.hp > 0;
  }
}
