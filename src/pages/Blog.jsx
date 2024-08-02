import Header from "../components/Header";
const Blog = () => {
  return (
    <div className="container ">
      <div id="head" className="h-[18%] w-[100%] fixed">
        <Header />
      </div>
      <div className="max-w-4xl mx-auto pt-[8%]">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-gray-700 mb-6">In this blog post, we're excited to share more about our company and our site. We aim to provide valuable insights and information to our readers.</p>
        <h2 className="text-xl font-bold mb-2">About Our Company</h2>
        <p className="text-gray-700 mb-6">Our company is dedicated to [insert brief description of your company here]. We strive to [insert mission or values of your company here].</p>
        <h2 className="text-xl font-bold mb-2">About Our Site</h2>
        <p className="text-gray-700 mb-6">Our website serves as a platform to [insert purpose of your website here]. We aim to [insert goals or objectives of your website here].</p>
        <h2 className="text-xl font-bold mb-2">Latest Updates</h2>
        <p className="text-gray-700 mb-6">Stay tuned for our latest updates and news. We'll be sharing [insert upcoming events, product launches, or announcements here].</p>
        <h2 className="text-xl font-bold mb-2">Join Our Community</h2>
        <p className="text-gray-700 mb-6">We invite you to join our community and be part of the conversation. Follow us on social media and subscribe to our newsletter for regular updates.</p>
        <p className="text-gray-700">Thank you for visiting our blog. We hope you find our content valuable and insightful. If you have any questions or feedback, please don't hesitate to reach out to us.</p>
      </div>
    </div>
  );
};
export default Blog;
