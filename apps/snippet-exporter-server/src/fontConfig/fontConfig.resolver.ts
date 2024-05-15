import * as graphql from "@nestjs/graphql";
import { FontConfigResolverBase } from "./base/fontConfig.resolver.base";
import { FontConfig } from "./base/FontConfig";
import { FontConfigService } from "./fontConfig.service";

@graphql.Resolver(() => FontConfig)
export class FontConfigResolver extends FontConfigResolverBase {
  constructor(protected readonly service: FontConfigService) {
    super(service);
  }
}
