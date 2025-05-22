import React from "react";

function BookCard({ book }) {
  const {
    title,
    author_name,
    first_publish_year,
    cover_i,
    key,
    subject,
    edition_count,
  } = book;

  const imageUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : "https://via.placeholder.com/128x193?text=No+Cover";

  return (
    <div className="card bg-base-100 shadow-md flex flex-row overflow-hidden rounded-xl">
      {/* Cover image */}
      <figure className="p-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-28 h-40 object-cover rounded-md shadow-sm"
        />
      </figure>

      {/* Book details */}
      <div className="card-body px-4 py-4 flex-1 justify-between">
        <div className="space-y-1">
          <h2 className="card-title text-base-content text-lg">{title}</h2>

          {author_name && (
            <p className="text-sm text-base-content/70">
              {author_name.join(", ")}
            </p>
          )}

          {first_publish_year && (
            <p className="text-sm text-base-content/60">
              First published: {first_publish_year}
            </p>
          )}

          {/* Edition count */}
          {edition_count && (
            <div className="text-xs text-base-content/60 mt-2">
              📚 {edition_count} editions
            </div>
          )}

          {/* Subject tags */}
          {subject && (
            <div className="flex flex-wrap gap-1 mt-2">
              {subject.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="badge badge-outline badge-sm text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTA button */}
        <div className="flex justify-end mt-4">
          <a
            href={`https://openlibrary.org${key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            View Book
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
