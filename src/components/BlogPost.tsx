
import { motion } from "framer-motion";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    date: string;
    content: string;
    image: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-64 md:h-96 overflow-hidden">
        <img 
          src={post.image.replace('-thumb', '-compressed')} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl font-playfair text-gold mb-2">
          {post.title}
        </h2>
        <p className="text-gray-400 mb-6">{post.date}</p>
        
        <div 
          className="prose prose-invert max-w-none prose-headings:font-playfair prose-headings:text-gold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </motion.div>
  );
};

export default BlogPost;
