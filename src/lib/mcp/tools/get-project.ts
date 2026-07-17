import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/data/projects";

export default defineTool({
  name: "get_project",
  title: "Get project details",
  description:
    "Get full details for a Neo Signature Interiors project by id, including description, location, year, and image URLs.",
  inputSchema: {
    id: z.number().int().describe("Project id."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const project = projects.find((p) => p.id === id);
    if (!project) {
      return {
        content: [{ type: "text", text: `No project found with id ${id}.` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});
