import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Babylonian from '../Babylonian';

export class Hammurabi extends Leader {
  static civilization(): typeof Civilization {
    return Babylonian;
  }

  name(): string {
    return 'Hammurabi';
  }
}

export default Hammurabi;
