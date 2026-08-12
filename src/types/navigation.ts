export type Page =
  | { id: "home" }
  | { id: "notes" }
  | { id: "note"; slug: string }
  | { id: "project"; slug: string };

/** Converte uma Page para o caminho de URL correspondente. */
export function pageToPath(page: Page): string {
  switch (page.id) {
    case "home":
      return "/";
    case "notes":
      return "/notas";
    case "note":
      return `/notas/${page.slug}`;
    case "project":
      return `/projetos/${page.slug}`;
  }
}

/** Converte um pathname de URL de volta para uma Page. */
export function pathToPage(pathname: string): Page {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return { id: "home" };
  if (parts[0] === "notas") {
    return parts[1] ? { id: "note", slug: parts[1] } : { id: "notes" };
  }
  if (parts[0] === "projetos" && parts[1]) {
    return { id: "project", slug: parts[1] };
  }
  return { id: "home" };
}
