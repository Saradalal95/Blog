const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "http://saras-blog.herokuapp.com";
export default baseUrl;
