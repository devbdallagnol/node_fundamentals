import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const dataBase: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al-Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 87,
      Shooting: 93,
      Dribbling: 88,
      Defending: 35,
      Physical: 77,
    },
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Dribbling: 88,
      Defending: 61,
      Physical: 78,
    },
  },
  {
    id: 4,
    name: "Robert Lewandowski",
    club: "FC Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 78,
      Shooting: 93,
      Dribbling: 86,
      Defending: 44,
      Physical: 82,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return dataBase;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return dataBase.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  dataBase.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = dataBase.findIndex((p) => p.id === id);

  if (index !== -1) {
    dataBase.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel> => {
  //find player
  const playerIndex = dataBase.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    dataBase[playerIndex].statistics = statistics;
  }

  return dataBase[playerIndex];
};
