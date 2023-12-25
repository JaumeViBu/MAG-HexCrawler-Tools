let lastGeneratedHex = document.querySelector('input[name="rbtn-prev-hex"]:checked').value;;

const TERRAINS = [
  'Grassland',
  'Hills',
  'Woods',
  'Mountains',
];
const NEW_TERRAIN_MAP = [
  [3, 2, 1],
  [3, 0, 2],
  [3, 0, 1],
  [0, 1, 2],
]
function toggleTab(e) {

  turnOffAllTabs();
  e.target.classList.add('tab-active')
  const tabIdFragments = e.target.id.split('-');
  const tabPlainId = tabIdFragments[tabIdFragments.length - 1];
  const targetContainer = document.querySelector(`#tab-container-${tabPlainId}`);
  targetContainer.classList.add('tab-container-active');
}

function turnOffAllTabs() {
  const tabList = document.querySelectorAll('.nav-tab');

  for (const tab of tabList) {

    tab.classList.remove('tab-active');
  }
  const containerList = document.querySelectorAll('.tab-container');
  for (const container of containerList) {

    container.classList.remove('tab-container-active');
  }
}

function getFeature() {

  let res = '';
  const featureRoll = rando(1, 8);

  res += 'Feature}\n\n<hr/>\n';
  res += `Feature: {d8:${featureRoll}:`;

  switch (featureRoll) {
    case 1:
      res += 'Water}\n'
      break;
    case 2:
      res += 'Ravine}\n'
      break;
    case 3:
      res += 'Rock formation}\n'
      break;
    case 4:
      res += 'Crater}\n'
      break;
    case 5:
      res += 'Pass}\n'
      break;
    case 6:
      res += 'Odd tree/plant}\n'
      break;
    case 7:
      res += 'Dead vegetation}\n'
      break;
    case 8:
      res += 'Hot Spring}\n'
      break;
  }
  return res;
}

function getHazard() {
  const hazardRoll = rando(1, 8);
  let res = '';
  res += 'Hazard}\n\n<hr/>\n';
  res += `Hazard: {d8:${hazardRoll}:`;

  switch (hazardRoll) {
    case 1:
      res += 'Unstable Environment}\n';
      break;
    case 2:
      res += 'Poison}\n';
      break;
    case 3:
      res += 'Fire}\n';
      break;
    case 4:
      res += 'Trap}\n';
      break;
    case 5:
      res += 'Lost Resources}\n';
      break;
    case 6:
      res += 'Lost}\n';
      break;
    case 7:
      res += 'Broken Gear}\n';
      break;
    case 8:
      res += 'Illness}\n';
      break;
  }
  return res;
}

function getOmen() {
  let res = '';
  const omenRoll = rando(1, 8);

  res += 'Omen}\n\n<hr/>\n';
  res += `Omen: {d8:${omenRoll}:`;

  switch (omenRoll) {
    case 1:
      res += 'Sky}\n';
      break;
    case 2:
      res += 'Creature encounter:Animal}\n';
      res += 'Think bear, hawk, wolf, giant centipede, giant lizard, giant rat';
      const encDifRoll = rando(1, 6);
      res += `Difficulty: {d6:${encDifRoll}:`;
      switch (encDifRoll) {
        case 1:
        case 2:
          res += 'Easy}\n'
          break;
        case 3:
        case 4:
          res += 'Moderate}\n'
          break;
        case 5:
          res += 'Hard}\n'
          break;
        case 6:
          res += 'Very Hard}\n'
          break;
      }
      break;
    case 3:
      res += 'Weather}\n';
      break;
    case 4:
      res += 'Mirage}\n';
      break;
    case 5:
      res += 'Voice}\n';
      break;
    case 6:
      res += 'NPC}\n';
      break;
    case 7:
      res += 'Temperature}\n';
      break;
    case 8:
      res += 'Injury}\n';
      break;
  }
  return res;
}

function getLocation() {
  let res = '';
  const locationRoll = rando(1, 8);

  res += 'Location}\n\n<hr/>\n';
  res += `Location: {d8:${locationRoll}:`;

  switch (locationRoll) {
    case 1:
      res += 'Tower}\n';
      break;
    case 2:
      res += 'Cave}\n';
      break;
    case 3:
      res += 'Tomb}\n';
      break;
    case 4:
      res += 'Lair}\n';
      break;
    case 5:
      res += 'Hut}\n';
      break;
    case 6:
      res += 'Outpost}\n';
      break;
    case 7:
      res += 'Hideout}\n';
      break;
    case 8:
      res += 'Ruin}\n';
      break;
  }
  return res;
}

function getSettlement() {
  let res = '';
  const settlementRoll = rando(1, 6);

  res += 'Settlement}\n\n<hr/>\n';
  res += `Settlement: {d8:${settlementRoll}:`;

  switch (settlementRoll) {
    case 1:
    case 2:
      res += 'Camp}\n';
      break;
    case 3:
    case 4:
      res += 'Village}\n';
      break;
    case 5:
    case 6:
      res += 'Town}\n';
      break;
  }
  const descriptionRoll = rando(1, 6);
  const subDescriptionRoll = rando(1, 3);
  res += `\n<hr/>\nSettlement Description:{d6:${descriptionRoll}:`;

  switch (descriptionRoll) {
    case 1:
      switch (subDescriptionRoll) {
        case 1:
          res += 'Abandoned}\n';
          break;
        case 2:
          res += 'Diseased}\n';
          break;
        case 3:
          res += 'Haunted}\n';
          break;
      }
      break;
    case 2:
      switch (subDescriptionRoll) {
        case 1:
          res += 'Unfriendly}\n';
          break;
        case 2:
          res += 'Lawless}\n';
          break;
        case 3:
          res += 'Monster Invasion}\n';
          break;
      }
      break;
    case 3:
      switch (subDescriptionRoll) {
        case 1:
          res += 'Poverty-Stricken}\n';
          break;
        case 2:
          res += 'Struggling}\n';
          break;
        case 3:
          res += 'Blighted}\n';
          break;
      }
      break;
    case 4:
      switch (subDescriptionRoll) {
        case 1:
          res += 'Prosperous}\n';
          break;
        case 2:
          res += 'Innovative}\n';
          break;
        case 3:
          res += 'Mercantile}\n';
          break;
      }
      break;
    case 5:
      switch (subDescriptionRoll) {
        case 1:
          res += 'Affluent}\n';
          break;
        case 2:
          res += 'Nobles}\n';
          break;
        case 3:
          res += 'Domineering}\n';
          break;
      }
      break;
    case 6:
      switch (subDescriptionRoll) {
        case 1:
          res += 'Otherworldly}\n';
          break;
        case 2:
          res += 'Magical}\n';
          break;
        case 3:
          res += 'Mysterious}\n';
          break;
      }
      break;
  }

  return res;
}

function getDiscovery() {
  let res = '';
  const discoveryRoll = rando(1, 6);

  res += 'Discovery}\n\n<hr/>\n';
  res += `Discovery: {d6:${discoveryRoll}:`;

  switch (discoveryRoll) {
    case 1:
    case 2:
      res += getLocation();
      break;
    case 3:
    case 4:
      res += getSettlement();
      break;
    case 5:
    case 6:
      res += getFeature();
      break;
  }
  return res;
}

function getAction() {
  const table = [
    ['Scheme', 'Clash', 'Weaken', 'Initiate', 'Create', 'Swear',],
    ['Avenge', 'Guard', 'Defeat', 'Control', 'Break', 'Risk',],
    ['Surrender', 'Inspect', 'Raid', 'Evade', 'Assault', 'Deflect',],
    ['Threaten', 'Attack', 'Leave', 'Preserve', 'Manipulate', 'Remove',],
    ['Eliminate', 'Withdraw', 'Abandon', 'Investigate', 'Hold', 'Focus',],
    ['Eliminate', 'Withdraw', 'Abandon', 'Investigate', 'Hold', 'Focus',],
    ['Hunt', 'Share', 'Destroy', 'Avoid', 'Reject', 'Demand',],
    ['Explore', 'Bolster', 'Seize', 'Mourn', 'Reveal', 'Gather',],
  ];
  const d8 = rando(0, 7);
  const d6 = rando(0, 5);
  return `Action: {d8,d6:${d8 + 1},${d6 + 1}:${table[d8][d6]}}\n`
}

function getTheme() {
  const table = [
    ['Risk', 'Ability', 'Price', 'Ally', 'Battle', 'Safety',],
    ['Survival', 'Weapon', 'Wound', 'Shelter', 'Leader', 'Fear',],
    ['Time', 'Duty', 'Secret', 'Innocence', 'Renown', 'Direction',],
    ['Death', 'Honor', 'Labor', 'Solution', 'Tool', 'Balance',],
    ['Love', 'Barrier', 'Creation', 'Decay', 'Trade', 'Bond',],
    ['Hope', 'Superstition', 'Peace', 'Deception', 'History', 'World',],
    ['Vow', 'Protection', 'Nature', 'Opinion', 'Burden', 'Vengeance',],
    ['Opportrreunity', 'Faction', 'Danger', 'Corruption', 'Freedom', 'Debt',],
  ];
  const d8 = rando(0, 7);
  const d6 = rando(0, 5);
  return `Theme: {d8,d6:${d8 + 1},${d6 + 1}:${table[d8][d6]}}\n`
}

function getCreatureEncounter(currentHex) {
  const table = [
    ['human', 'human', 'animal', 'animal', 'humanoid', 'monster(S)',],
    ['human', 'animal', 'humanoid', 'monster(S)', 'monster(L)', 'unnatural',],
    ['human', 'animal', 'humanoid', 'monster(S)', 'monster(L)', 'unnatural',],
    ['human', 'animal', 'humanoid', 'unnatural', 'monster(L)', 'monster(L)',],
  ];

  let res = '';
  const d6 = rando(0, 5);
  const creature = table[currentHex][d6];
  res += 'Creature Encounter}\n\n<hr/>\n';
  res += `Creature Encounter: {Current Terrain,d6:${TERRAINS[currentHex]},${d6 + 1}:${creature}}\n`;
  res += 'Think ';
  switch (creature) {
    case 'human':
      res += 'bandit, soldier, rival adventurer, mage, priest\n';
      break;
    case 'animal':
      res += 'bear, hawk, wolf, giant centipede, giant lizard, giant rat\n';
      break;
    case 'humanoid':
      res += 'gnoll, kobold, troll, orc, giant, goblin\n';
      break;
    case 'monster(S)':
      res += 'ogre, harpy, wearat, werewolf, spider, ooze\n';
      break;
    case 'monster(L)':
      res += 'gargoyle, statue, golem, manticore, hydra, dragon\n';
      break;
    case 'unnatural':
      res += 'skeleton, zombie, ghoul, demon, elemental, wraith\n';
      break;
  }
  const difRoll = rando(1, 6);
  res += `Difficulty: {d6:${difRoll}:`;
  switch (difRoll) {
    case 1:
    case 2:
      res += 'Easy}\n'
      break;
    case 3:
    case 4:
      res += 'Moderate}\n'
      break;
    case 5:
      res += 'Hard}\n'
      break;
    case 6:
      res += 'Very Hard}\n'
      break;
  }

  return res;

}

function getPassive() {
  let res = '';
  const passiveRoll = rando(1, 8);

  res += 'Passive Encounter}\n\n<hr/>\n';
  res += `Passive Encounter: {d8:${passiveRoll}:`;

  switch (passiveRoll) {
    case 1:
    case 2:
    case 3:
    case 4:
      res += 'Area Encounter}\n';
      res += getAction();
      res += getTheme();
      break;
    case 5:
      res += getCreatureEncounter(lastGeneratedHex);
      break;
    case 6:
      res += 'NPC}\n';
      break;
    case 7:
      res += getLocation();
      break;
    case 8:
      res += getSettlement();
      break;
  }
  return res;
}

function getHostile() {
  let res = '';
  const hostileRoll = rando(1, 8);

  res += 'Hostile Encounter}\n\n<hr/>\n';
  res += `Hostile Encounter: {d8:${hostileRoll}:`;

  switch (hostileRoll) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      res += getCreatureEncounter(lastGeneratedHex);
      break;
    case 7:
      res += getLocation();
      break;
    case 8:
      res += getSettlement();
      break;
  }
  return res;
}



function travelTile(isKnown = false) {

  const isNewTile = !isKnown;
  const activeContainer = document.querySelector('.tab-container-active');
  let res = '';
  const prevHex = document.querySelector('input[name="rbtn-prev-hex"]:checked').value;

  if (isNewTile) {
    const newHexVal = rando(1, 6);
    res += `New Hex: {d6:${newHexVal}} `

    if (newHexVal <= 4) {
      res += `${TERRAINS[prevHex]}\n\n<hr/>\n`;

    }
    else {

      const newTerrainRoll = rando(1, 6);
      const newTerrainVal = NEW_TERRAIN_MAP[prevHex][newTerrainRoll == 1 ? 0 : newTerrainRoll < 5 ? 1 : 2];
      const newTerrainTag = TERRAINS[newTerrainVal];
      res += `New terrain:${TERRAINS[prevHex]}:{d6:${newTerrainRoll}:${newTerrainTag}}\n\n<hr/>\n`;
      document.querySelector('input[name="rbtn-prev-hex"]:checked').checked = false;
      const rbtnList = document.querySelectorAll('input[name="rbtn-prev-hex"]');
      rbtnList[newTerrainVal].checked = true;
    }
    lastGeneratedHex = document.querySelector('input[name="rbtn-prev-hex"]:checked').value;
  }

  const travelRoll = rando(1, 8);
  res += `Travel: {d8:${travelRoll}:`;
  switch (travelRoll) {
    case 1:
      res += 'nothing}\n';
      break;
    case 2:
      res += getFeature();
      break;
    case 3:
      res += getHazard();
      break;
    case 4:
      res += getOmen();
      break;
    case 5:
      res += getDiscovery();
      break;
    case 6:
      res += getPassive();
      break;
    case 7:
    case 8:
      res += getHostile();
      break;
  }

  const tileInfo = activeContainer.querySelector('pre');
  tileInfo.classList.remove('inactive')
  tileInfo.innerHTML = res;
}

const tabList = document.querySelectorAll('.nav-tab');
for (const tab of tabList) {

  tab.addEventListener('click', (e) => toggleTab(e));
  tab.addEventListener('touchstart', (e) => toggleTab(e));
}

