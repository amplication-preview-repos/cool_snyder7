import * as graphql from "@nestjs/graphql";
import { ImageConfigResolverBase } from "./base/imageConfig.resolver.base";
import { ImageConfig } from "./base/ImageConfig";
import { ImageConfigService } from "./imageConfig.service";

@graphql.Resolver(() => ImageConfig)
export class ImageConfigResolver extends ImageConfigResolverBase {
  constructor(protected readonly service: ImageConfigService) {
    super(service);
  }
}
