import {Machine} from "xstate";
import config from "./config";
import implementation from "./implementation";

const loginManagerMachine = Machine(config, implementation);

export default loginManagerMachine;