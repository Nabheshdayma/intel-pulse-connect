
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our latest articles on AI in GxP manufacturing, compliance strategies, and operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.title}
              {...post}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full" 
            asChild
          >
            <Link to="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface BlogPostProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  isVisible: boolean;
  delay: number;
}

const BlogCard = ({ image, title, excerpt, date, isVisible, delay }: BlogPostProps) => {
  return (
    <Card 
      className={`overflow-hidden transition-all duration-700 border-0 rounded-lg shadow hover:shadow-lg
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105" />
      </div>
      <CardHeader>
        <CardDescription className="text-xs text-muted-foreground">{date}</CardDescription>
        <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="pl-0 group">
          <Link to="/blog">
            Read more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    title: "AI in Manufacturing Operations: Challenges and Opportunities",
    excerpt: "Discover the key challenges and opportunities of AI in manufacturing operations. See how it can enhance productivity, reduce downtime, and drive success.",
    date: "April 17, 2025"
  },
  {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80",
    title: "AI Challenges and Risks: Ensuring Compliance & Safety",
    excerpt: "Discover AI challenges, risks, and compliance strategies in today's evolving landscape. Learn to balance innovation with regulation while ensuring AI safety.",
    date: "April 3, 2025"
  },
  {
    image: "https://images.unsplash.com/photo-1581092923e-cc5123fd8e40?auto=format&fit=crop&q=80",
    title: "How xLM's World-Class SDLC Drives Operational Excellence",
    excerpt: "Discover how xLM's world-class SDLC, Agile practices, and AI solutions drive continuous operational excellence, innovation, and global success for your business",
    date: "March 27, 2025"
  }
];

export default BlogSection;
