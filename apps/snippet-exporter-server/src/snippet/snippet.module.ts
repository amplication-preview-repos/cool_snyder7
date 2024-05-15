import { Module } from "@nestjs/common";
import { SnippetModuleBase } from "./base/snippet.module.base";
import { SnippetService } from "./snippet.service";
import { SnippetController } from "./snippet.controller";
import { SnippetResolver } from "./snippet.resolver";

@Module({
  imports: [SnippetModuleBase],
  controllers: [SnippetController],
  providers: [SnippetService, SnippetResolver],
  exports: [SnippetService],
})
export class SnippetModule {}
