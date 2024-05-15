import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FontConfigService } from "./fontConfig.service";
import { FontConfigControllerBase } from "./base/fontConfig.controller.base";

@swagger.ApiTags("fontConfigs")
@common.Controller("fontConfigs")
export class FontConfigController extends FontConfigControllerBase {
  constructor(protected readonly service: FontConfigService) {
    super(service);
  }
}
