const listHelper = require("../utils/list_helper");

describe("total likes", () => {
  const blogWithOnePost = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0,
    },
  ];
  const blogWithNoPost = [];

  const blogWithMultiplePost = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0,
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0,
    },
  ];
  test("blog with one post", () => {
    const result = listHelper.totalLikes(blogWithOnePost);
    expect(result).toBe(7);
  });

  test("blog with 0 post", () => {
    const result = listHelper.totalLikes(blogWithNoPost);
    expect(result).toBe(0);
  });

  test("blog with multiple post", () => {
    const result = listHelper.totalLikes(blogWithMultiplePost);
    expect(result).toBe(24);
  });
});
