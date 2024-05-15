import * as graphql from "@nestjs/graphql";
import { SnippetResolverBase } from "./base/snippet.resolver.base";
import { Snippet } from "./base/Snippet";
import { SnippetService } from "./snippet.service";

@graphql.Resolver(() => Snippet)
export class SnippetResolver extends SnippetResolverBase {
  constructor(protected readonly service: SnippetService) {
    super(service);
  }
}
