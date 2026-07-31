type DoodlesProps = {
  variant?: "stars" | "swirl" | "hearts";
  className?: string;
};

export default function Doodles({
  variant = "stars",
  className = "",
}: DoodlesProps) {
  if (variant === "hearts") {
    return (
      <div className={`doodle doodle-hearts ${className}`} aria-hidden="true">
        ♡ <span>♥</span> ♡
      </div>
    );
  }

  if (variant === "swirl") {
    return (
      <div className={`doodle doodle-swirl ${className}`} aria-hidden="true">
        ∿﹏∿
      </div>
    );
  }

  return (
    <div className={`doodle doodle-stars ${className}`} aria-hidden="true">
      ✦ <span>⋆</span> ✧
    </div>
  );
}
