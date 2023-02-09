const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const likes = blogs.reduce((count, blog) => {
    return count + blog.likes;
  }, 0);

  return likes;
};

module.exports = {
  dummy,
  totalLikes
};
