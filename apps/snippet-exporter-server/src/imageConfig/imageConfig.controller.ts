import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImageConfigService } from "./imageConfig.service";
import { ImageConfigControllerBase } from "./base/imageConfig.controller.base";

@swagger.ApiTags("imageConfigs")
@common.Controller("imageConfigs")
export class ImageConfigController extends ImageConfigControllerBase {
  constructor(protected readonly service: ImageConfigService) {
    super(service);
  }
}
