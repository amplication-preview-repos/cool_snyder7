import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SnippetService } from "./snippet.service";
import { SnippetControllerBase } from "./base/snippet.controller.base";

@swagger.ApiTags("snippets")
@common.Controller("snippets")
export class SnippetController extends SnippetControllerBase {
  constructor(protected readonly service: SnippetService) {
    super(service);
  }
}
