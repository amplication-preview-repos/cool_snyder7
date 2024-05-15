import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ColorConfigService } from "./colorConfig.service";
import { ColorConfigControllerBase } from "./base/colorConfig.controller.base";

@swagger.ApiTags("colorConfigs")
@common.Controller("colorConfigs")
export class ColorConfigController extends ColorConfigControllerBase {
  constructor(protected readonly service: ColorConfigService) {
    super(service);
  }
}
