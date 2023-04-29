import Author from "@components/Author";
import Pagination from "@components/Pagination";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";

// blog pagination
const AuthorPagination = ({
  authorIndex,
  authors,
  currentPage,
  pagination,
}) => {
  const indexOfLastAuthor = currentPage * pagination;
  const indexOfFirstAuthor = indexOfLastAuthor - pagination;
  const totalPages = Math.ceil(authors.length / pagination);
  const sortedAuthors = sortByDate(authors);
  const currentAuthors = sortedAuthors.slice(
    indexOfFirstAuthor,
    indexOfLastAuthor
  );
  const { frontmatter, content } = authorIndex;
  const { title } = frontmatter;

  return (
    <Base title={title}>
      <section className="section">
        <div className="container text-center">
          {markdownify(title, "h1", "h2 mb-16")}
          <div className="row justify-center">
            {currentAuthors.map((author, i) => (
              <div className="col-12 mb-8 sm:col-6 md:col-4" key={`key-${i}`}>
                <Author author={author} />
              </div>
            ))}
          </div>
          <Pagination
            section={"authors"}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </section>
    </Base>
  );
};

export default AuthorPagination;

// get authors pagination slug
export const getStaticPaths = () => {
  const getAllSlug = getSinglePage("content/authors");
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

// get authors pagination content
export const getStaticProps = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const authors = getSinglePage("content/authors");
  const authorIndex = await getListPage("content/authors/_index.md");

  return {
    props: {
      pagination: pagination,
      authors: authors,
      currentPage: currentPage,
      authorIndex: authorIndex,
      mdxContent: authorIndex.mdxContent,
    },
  };
};
