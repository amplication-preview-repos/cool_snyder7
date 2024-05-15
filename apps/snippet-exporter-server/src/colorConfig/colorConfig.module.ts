import { Module } from "@nestjs/common";
import { ColorConfigModuleBase } from "./base/colorConfig.module.base";
import { ColorConfigService } from "./colorConfig.service";
import { ColorConfigController } from "./colorConfig.controller";
import { ColorConfigResolver } from "./colorConfig.resolver";

@Module({
  imports: [ColorConfigModuleBase],
  controllers: [ColorConfigController],
  providers: [ColorConfigService, ColorConfigResolver],
  exports: [ColorConfigService],
})
export class ColorConfigModule {}
