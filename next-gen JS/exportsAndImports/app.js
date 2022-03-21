import person from "./person";
import per from './person'; // default exports import can be any name 

import { PI  } from "./utils"; // Named exports can't be any name , must be exported name
import { clean as nameClean } from "./utils"; // you can add alias to named export name with as keyword;
import * as utils from './utils'; // multiple named exports import with * (all) import with alias , use utils.PI, utils.clean()