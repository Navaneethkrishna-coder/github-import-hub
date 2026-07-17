import { defineMcp } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import getProjectTool from "./tools/get-project";
import listServicesTool from "./tools/list-services";

export default defineMcp({
  name: "neo-signature-interiors-mcp",
  title: "Neo Signature Interiors",
  version: "0.1.0",
  instructions:
    "Public tools for browsing Neo Signature Interiors' portfolio of interior design projects and services. Use list_projects to browse, get_project for details, and list_services for the service catalog.",
  tools: [listProjectsTool, getProjectTool, listServicesTool],
});
