import type { MixedList } from "typeorm";
import { Sample } from "./Sample";

const entities: MixedList<Function> = [Sample];
export default entities;
