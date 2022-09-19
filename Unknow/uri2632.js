const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split(/\s+/);
const loop = parseInt(values.shift());

const magicAndSword = (
  widthW,
  heightH,
  coordinateX0,
  coordinateY0,
  spell,
  spellLevel,
  coordinateCx,
  coordinateCy
) => {
  const spells = {
    fire: { dmg: 200, l1: 20, l2: 30, l3: 50 },
    water: { dmg: 300, l1: 10, l2: 25, l3: 40 },
    earth: { dmg: 400, l1: 25, l2: 55, l3: 70 },
    air: { dmg: 100, l1: 18, l2: 38, l3: 60 },
  };

  const spellType = spells[spell];
  const spellDmg = spellType.dmg;
  const spellNivel = spellType[`l${spellLevel}`];
  let zone = true;

  const distanceX0w = coordinateX0 + widthW;
  const distanceY0h = coordinateY0 + heightH;

  if (
    coordinateX0 <= coordinateCx <= distanceX0w &&
    coordinateY0 <= coordinateCy <= distanceY0h
  ) {
    zone = false;
  }

  console.log(spellType, spellDmg, spellNivel);

};

console.log(values);
