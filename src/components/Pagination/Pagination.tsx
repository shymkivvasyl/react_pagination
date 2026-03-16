interface Props {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = (props: Props) => {
  const pagesCount = Math.ceil(props.total / props.perPage) || 0;

  const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);

  return (
    <ul className="pagination">
      <li className={`page-item ${props.currentPage === 1 ? 'disabled' : ''}`}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={props.currentPage === 1}
          onClick={event => {
            event.preventDefault();
            if (props.currentPage > 1) {
              props.onPageChange(props.currentPage - 1);
            }
          }}
        >
          «
        </a>
      </li>
      {pages.map(page => {
        return (
          <li
            className={`page-item ${page === props.currentPage ? 'active' : ''}`}
            key={page}
          >
            <a
              data-cy="pageLink"
              className="page-link"
              href={`#${page}`}
              onClick={event => {
                event.preventDefault();
                if (page !== props.currentPage) {
                  props.onPageChange(page);
                }
              }}
            >
              {page}
            </a>
          </li>
        );
      })}
      <li
        className={`page-item ${props.currentPage === pagesCount ? 'disabled' : ''}`}
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={props.currentPage === pagesCount}
          onClick={event => {
            event.preventDefault();
            if (props.currentPage < pagesCount) {
              props.onPageChange(props.currentPage + 1);
            }
          }}
        >
          »
        </a>
      </li>
    </ul>
  );
};
