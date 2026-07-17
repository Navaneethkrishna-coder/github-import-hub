import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "@/data/projects";

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the interior design services offered by Neo Signature Interiors.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
