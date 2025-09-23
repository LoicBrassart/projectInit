import type { NonEmptyArray } from "type-graphql";
import SampleResolver from "./SampleResolver";

const resolvers: NonEmptyArray<Function> = [SampleResolver];
export default resolvers;
