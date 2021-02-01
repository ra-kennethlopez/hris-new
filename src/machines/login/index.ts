import {Machine} from "xstate";
import config from "./config";
import implementation from "./implementation";

const loginMachine = Machine(config, implementation);

export default loginMachine;