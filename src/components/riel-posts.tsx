import { Media } from "@/components/media";
import type { Plataforma, Post } from "@/content/posts";

type RielPostsProps = {
  posts: readonly Post[];
};

const nombrePlataforma: Record<Plataforma, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
};

/** Posts de redes como imágenes verticales con desplazamiento CSS. Cada uno abre el post original. */
export function RielPosts({ posts }: RielPostsProps) {
  return (
    <div
      role="region"
      aria-label="Publicaciones destacadas en redes"
      tabIndex={0}
      className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento sm:-mx-8 sm:px-8"
    >
      {posts.map((post) => (
        <a
          key={post.imagen}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-52 shrink-0 snap-start sm:w-60"
        >
          <Media
            src={post.imagen}
            alt={post.alt}
            proporcion="aspect-[9/16]"
            sizes="240px"
            className="rounded-2xl border border-linea"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-fondo/80 px-3 py-1 text-xs font-semibold text-texto backdrop-blur transition-colors group-hover:bg-acento group-hover:text-fondo">
            Ver en {nombrePlataforma[post.plataforma]}
          </span>
        </a>
      ))}
    </div>
  );
}
