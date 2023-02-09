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
    if(blogs.length===0) return null

    const favBlog = blogs.reduce((fBlog,blog)=>{
        if(fBlog.likes<blog.likes){
            return blog
        }

        return fBlog
    },blogs[0])

    return favBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};
