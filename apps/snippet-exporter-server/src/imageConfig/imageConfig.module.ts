import { Module } from "@nestjs/common";
import { ImageConfigModuleBase } from "./base/imageConfig.module.base";
import { ImageConfigService } from "./imageConfig.service";
import { ImageConfigController } from "./imageConfig.controller";
import { ImageConfigResolver } from "./imageConfig.resolver";

@Module({
  imports: [ImageConfigModuleBase],
  controllers: [ImageConfigController],
  providers: [ImageConfigService, ImageConfigResolver],
  exports: [ImageConfigService],
})
export class ImageConfigModule {}
