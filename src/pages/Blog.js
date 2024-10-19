import React from "react";
import NavBar from "../components/NavBar"; // Import the NavBar component
import Footer from "../components/Footer"; // Import the Footer component
import "../styles/Blog.css";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Easy Web Testing with Open Source Tools",
      summary:
        "Have you ever been impressed by the seamless user experience (UX) of modern websites and apps? The reason for this smooth performance is that they undergo rigorous testing using top-tier tools. Join me as I guide you with code snippets through how you can achieve the same level of quality for your own website or app.",
      content:
        "By using open-source tools like Selenium, you can build a solid, scalable, and cost-effective web testing solution",
      link: "https://casblog.hashnode.dev/easy-web-testing-with-open-source-tools",
    },
    {
      title:
        "How to Use React Components – Props, Default Props, and PropTypes Explained",
      summary:
        "As React continues to evolve, staying updated with the latest documentation and best practices is essential. With the knowledge of components, props, default props, and PropTypes, you're well-equipped to embark on your React journey.",
      content:
        "If you're curious about web development, you've probably heard the buzz about React.",
      link: "https://www.freecodecamp.org/news/how-to-use-react-components/",
    },
    {
      title: "HTML for Beginners – HTML Basics With Code Examples",
      summary:
        "Imagine a tree: its roots anchor and nourish the entire plant. Similarly, HTML, the root of web development, provides the foundation for every webpage. Understanding HTML's role is like grasping a tree's roots, it forms the fundamental basis for comprehending how web pages come to life.",
      content:
        "You can create well-structured, accessible, and maintainable HTML code that contributes to the overall quality and usability of your web projects.",
      link: "https://www.freecodecamp.org/news/introduction-to-html-basics/",
    },
    {
      title:
        "Introduction to Data Structures: Tips and Tricks for Efficient Programming",
      summary:
        "Mastering data structures empowers developers to solve complex problems, improve efficiency, and create scalable applications. With their significance in software development, data structures remain an essential topic for programmers of all levels, enabling them to unlock the full potential of their code.",
      content:
        "Data structures are the foundation of efficient programming and play a critical role in organizing and manipulating data effectively",
      link: "https://casblog.hashnode.dev/introduction-to-data-structures-tips-and-tricks-for-efficient-programming",
    },
    {
      title: "# Bridging the Gap from BASIC to Modern Frameworks",
      summary:
        "While BASIC served as a popular language in the early days of computing, transitioning to modern frameworks can unlock a world of possibilities and empower developers to create robust and sophisticated applications. This article serves as a guide for individuals who are familiar with BASIC, helping them bridge the gap and transition to frameworks.",
      content:
        "Transitioning from knowing the BASIC computer language to modern frameworks requires commitment, a willingness to keep learning, and lots of practice.",
      link: "https://casblog.hashnode.dev/bridging-the-gap-from-basic-to-modern-frameworks",
    },
  ];

  return (
    <div className="main-container">
      <NavBar />
      <div className="blog-container">
        <h2>Blogs</h2>
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <a
              href={post.link}
              className="read-more-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}

        <div className="more-blogs">
          <p>Want to read more of my articles? Visit:</p>
          <ul>
            <li>
              <a
                href="https://www.freecodecamp.org/news/author/Casmir/"
                target="_blank"
                rel="noopener noreferrer"
              >
                freeCodeCamp News
              </a>
            </li>
            <span>or</span>
            <li>
              <a
                href="https://casblog.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Casblog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
