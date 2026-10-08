import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/site/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — PN Creation Web" },
      {
        name: "description",
        content:
          "Explore selected websites and products built by PN Creation Web, with project details, features and live demos.",
      },
      { property: "og:title", content: "Projects — PN Creation Web" },
      {
        property: "og:description",
        content: "Explore selected websites and products built by PN Creation Web.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="p-16 sm:pt-20">
      <Projects />
    </main>
  );
}
