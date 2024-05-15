import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FontConfigServiceBase } from "./base/fontConfig.service.base";

@Injectable()
export class FontConfigService extends FontConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
