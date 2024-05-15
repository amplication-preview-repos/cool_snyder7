import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImageConfigServiceBase } from "./base/imageConfig.service.base";

@Injectable()
export class ImageConfigService extends ImageConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
