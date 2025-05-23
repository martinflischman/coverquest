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
    <div className="card bg-base-100 shadow-md flex flex-col sm:flex-row overflow-hidden rounded-xl">
      {/* Cover image - Centered on mobile, left-aligned on larger screens */}
      <figure className="p-3 sm:p-4 flex justify-center sm:justify-start">
        <img
          src={imageUrl}
          alt={title}
          className="w-20 h-28 sm:w-28 sm:h-40 object-cover rounded-md shadow-sm"
        />
      </figure>

      {/* Book details */}
      <div className="card-body px-3 sm:px-4 py-3 sm:py-4 flex-1 justify-between">
        <div className="space-y-1 sm:space-y-2">
          <h2 className="card-title text-base-content text-sm sm:text-base lg:text-lg leading-tight">
            {title.length > 60 ? `${title.substring(0, 60)}...` : title}
          </h2>

          {author_name && (
            <p className="text-xs sm:text-sm text-base-content/70">
              {author_name.slice(0, 2).join(", ")}
              {author_name.length > 2 && ` +${author_name.length - 2} more`}
            </p>
          )}

          {first_publish_year && (
            <p className="text-xs sm:text-sm text-base-content/60">
              First published: {first_publish_year}
            </p>
          )}

          {/* Edition count */}
          {edition_count && (
            <div className="text-xs text-base-content/60 mt-1 sm:mt-2">
              📚 {edition_count} editions
            </div>
          )}

          {/* Subject tags - Show fewer on mobile */}
          {subject && (
            <div className="flex flex-wrap gap-1 mt-2">
              {subject.slice(0, window.innerWidth < 640 ? 2 : 4).map((tag) => (
                <span
                  key={tag}
                  className="badge badge-outline badge-sm text-xs"
                >
                  {tag.length > 15 ? `${tag.substring(0, 15)}...` : tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTA button */}
        <div className="flex justify-center sm:justify-end mt-3 sm:mt-4">
          <a
            href={`https://openlibrary.org${key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary text-xs sm:text-sm w-full sm:w-auto"
          >
            View Book
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
