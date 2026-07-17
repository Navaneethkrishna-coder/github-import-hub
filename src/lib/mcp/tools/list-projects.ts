import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/data/projects";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List completed interior design projects by Neo Signature Interiors. Optionally filter by category (commercial, showrooms, bedrooms, etc.).",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Optional category filter, e.g. 'commercial'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const filtered = category
      ? projects.filter((p) => p.category.toLowerCase() === category.toLowerCase())
      : projects;
    const summary = filtered.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      location: p.location,
      year: p.year,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: { projects: summary, count: summary.length },
    };
  },
});
