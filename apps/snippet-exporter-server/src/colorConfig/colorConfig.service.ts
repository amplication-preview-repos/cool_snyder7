import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ColorConfigServiceBase } from "./base/colorConfig.service.base";

@Injectable()
export class ColorConfigService extends ColorConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
