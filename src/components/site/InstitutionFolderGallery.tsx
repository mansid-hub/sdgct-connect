import { useState } from "react";
import { ArrowLeft, FolderOpen, Images } from "lucide-react";
import InstitutionGallery from "./InstitutionGallery";

interface Folder {
  name: string;
  images: string[];
}

interface Props {
  folders: Folder[];
  name: string;
}

const InstitutionFolderGallery = ({ folders, name }: Props) => {
  const [active, setActive] = useState<number | null>(null);

  if (active !== null) {
    const folder = folders[active];
    return (
      <div>
        <button
          type="button"
          onClick={() => setActive(null)}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-4"
        >
          <ArrowLeft size={16} /> Back to folders
        </button>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
          <Images className="text-accent" /> {folder.name}
        </h2>
        {folder.images.length > 0 ? (
          <div className="mt-6">
            <InstitutionGallery images={folder.images} name={`${name} — ${folder.name}`} />
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-border/60 bg-secondary/40 p-10 text-center text-muted-foreground">
            No photos in this folder yet.
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
        <Images className="text-accent" /> Gallery
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {folders.map((folder, i) => {
          const cover = folder.images[0];
          return (
            <button
              key={folder.name}
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary text-left"
            >
              {cover ? (
                <img
                  src={cover}
                  alt={folder.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <FolderOpen size={56} className="opacity-50" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                <div className="flex items-center gap-2">
                  <FolderOpen size={18} />
                  <span className="font-semibold text-base sm:text-lg">{folder.name}</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm opacity-80">
                  {folder.images.length} {folder.images.length === 1 ? "photo" : "photos"}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InstitutionFolderGallery;