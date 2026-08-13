export type Page =
  | { id: "home" }
  | { id: "project"; slug: string };

export function pageToPath(page: Page): string {
  switch (page.id) {
    case "home":
      return "/";
    case "project":
      return `/projetos/${page.slug}`;
  }
}

export function pathToPage(pathname: string): Page {
  const parts = pathname.split("/").filter(Boolean);
  
  if (parts.length === 0) return { id: "home" };
  
  if (parts[0] === "projetos" && parts[1]) {
    return { id: "project", slug: parts[1] };
  }
  
  return { id: "home" };
}