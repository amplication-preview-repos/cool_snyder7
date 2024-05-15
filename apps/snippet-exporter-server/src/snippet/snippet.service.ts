import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SnippetServiceBase } from "./base/snippet.service.base";

@Injectable()
export class SnippetService extends SnippetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
