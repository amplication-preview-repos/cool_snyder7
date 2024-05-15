import { Module } from "@nestjs/common";
import { FontConfigModuleBase } from "./base/fontConfig.module.base";
import { FontConfigService } from "./fontConfig.service";
import { FontConfigController } from "./fontConfig.controller";
import { FontConfigResolver } from "./fontConfig.resolver";

@Module({
  imports: [FontConfigModuleBase],
  controllers: [FontConfigController],
  providers: [FontConfigService, FontConfigResolver],
  exports: [FontConfigService],
})
export class FontConfigModule {}
