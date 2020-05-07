import { Resolver, Query } from "type-graphql";

@Resolver()
export class AuthResolver {
    @Query(() => String)
    hello() {
        return "Hello World!!!";
    }
}
