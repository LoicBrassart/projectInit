import { Query, Resolver } from "type-graphql";
import { Sample } from "../entities/Sample";

@Resolver(Sample)
export default class SampleResolver {
  @Query(() => [Sample])
  getAllSamples() {
    return Sample.find();
  }
}
