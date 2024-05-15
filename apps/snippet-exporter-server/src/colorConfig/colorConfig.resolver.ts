import * as graphql from "@nestjs/graphql";
import { ColorConfigResolverBase } from "./base/colorConfig.resolver.base";
import { ColorConfig } from "./base/ColorConfig";
import { ColorConfigService } from "./colorConfig.service";

@graphql.Resolver(() => ColorConfig)
export class ColorConfigResolver extends ColorConfigResolverBase {
  constructor(protected readonly service: ColorConfigService) {
    super(service);
  }
}
