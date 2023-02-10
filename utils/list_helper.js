const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const likes = blogs.reduce((count, blog) => {
    return count + blog.likes;
  }, 0);

  return likes;
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;

  const favBlog = blogs.reduce((fBlog, blog) => {
    if (fBlog.likes < blog.likes) {
      return blog;
    }

    return fBlog;
  }, blogs[0]);

  return favBlog;
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null;

  const authorMap = blogs.reduce((authorMap, blog) => {
    if (authorMap[blog.author]) {
      authorMap[blog.author] = authorMap[blog.author] + 1;
    } else {
      authorMap[blog.author] = 1;
    }

    return authorMap;
  }, {});

  console.log(authorMap);

  const authors = Object.keys(authorMap);

  const popularAuthor = authors.reduce(
    (popularAuthor, author) => {
      if (popularAuthor.blogs < authorMap[author]) {
        return {
          author: author,
          blogs: authorMap[author],
        };
      }
      return popularAuthor;
    },
    {
      author: authors[0],
      blogs: authorMap[authors[0]],
    }
  );

  console.log(popularAuthor);

  return popularAuthor;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
