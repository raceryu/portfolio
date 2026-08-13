import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { Project } from "../data/projects";

type ProjectStickerProps = {
  project: Project;
  index: number;
  showDetails?: boolean;
};

const withBasePath = (imagePath: string) =>
  imagePath
    ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${
        imagePath.startsWith("/") ? imagePath : `/${imagePath}`
      }`
    : null;

// Wrap text in single asterisks to italicize it, for example: *this is italic*.
const formatProjectText = (text: string): ReactNode[] =>
  text.split(/(\*[^*]+\*)/g).map((part, partIndex) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={`${part}-${partIndex}`}>{part.slice(1, -1)}</em>
    ) : (
      part
    ),
  );

export default function ProjectSticker({
  project,
  index,
  showDetails = false,
}: ProjectStickerProps) {
  const imageSource = withBasePath(project.image);
  const hasProjectDetails = project.showProjectDetails !== false;

  return (
    <article
      className={`project-sticker project-sticker--${project.tone} ${
        index % 2 === 1 ? "project-sticker--reverse" : ""
      }`}
      id={project.id}
    >
      <div className="project-sticker-number" aria-hidden="true">
        no. {project.number}
      </div>
      <figure className="project-sticker-media">
        <div
          className={`project-sticker-visual ${
            imageSource ? "project-sticker-visual--has-image" : ""
          }`}
          role={imageSource ? undefined : "img"}
          aria-label={imageSource ? undefined : `Placeholder image for ${project.title}`}
        >
          {imageSource ? (
            <Image
              className="project-sticker-image"
              src={imageSource}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 699px) 90vw, 42vw"
            />
          ) : (
            <>
              <div className="sticker-browser">
                <span />
                <span />
                <span />
                <i />
              </div>
              <p>drop project image here</p>
            </>
          )}
        </div>
        <figcaption>{project.imageCaption}</figcaption>
      </figure>
      <div className="project-sticker-copy">
        <p className="project-sticker-kicker">FILE_{project.number}.HTML</p>
        <h3>{project.title}</h3>
        <p>{formatProjectText(project.description)}</p>
        <ul aria-label="Project tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {!showDetails && hasProjectDetails && (
          <Link href={`/projects#${project.id}`}>
            [ MORE DETAILS ] <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>

      {showDetails && hasProjectDetails && (
        <details className="project-details">
          <summary>EXPAND PROJECT FILE</summary>
          <div className="project-details-content">
            <div className="project-gallery" aria-label={`${project.title} image gallery`}>
              {project.gallery.map((galleryImage, galleryIndex) => {
                const gallerySource = withBasePath(galleryImage.image);

                return (
                  <section
                    className="project-gallery-entry"
                    key={`${galleryImage.imageAlt}-${galleryIndex}`}
                  >
                    <figure>
                      <div
                        className={`project-gallery-image ${
                          gallerySource ? "project-gallery-image--loaded" : ""
                        }`}
                      >
                        {gallerySource ? (
                          <Image
                            src={gallerySource}
                            alt={galleryImage.imageAlt}
                            fill
                            sizes="(max-width: 699px) 88vw, 36vw"
                          />
                        ) : (
                          <span>drop gallery image {galleryIndex + 1} here</span>
                        )}
                      </div>
                      <figcaption>{galleryImage.caption}</figcaption>
                    </figure>
                    <div className="project-gallery-copy">
                      <p className="project-gallery-label">
                        {galleryImage.detailLabel ??
                          `DETAIL_${project.number}_${String(galleryIndex + 1).padStart(2, "0")}.TXT`}
                      </p>
                      {galleryImage.description.map((paragraph, paragraphIndex) => (
                        <p key={`${project.id}-detail-${galleryIndex}-${paragraphIndex}`}>
                          {formatProjectText(paragraph)}
                        </p>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </details>
      )}
    </article>
  );
}
