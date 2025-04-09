
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Our Trip to Paris',
    date: 'June 10, 2023',
    category: 'travel',
    excerpt: 'Exploring the romantic streets of Paris together and finding hidden gems...',
    content: `
      <h2>Our Magical Paris Adventure</h2>
      <p>Paris, the city of love, became even more special as we wandered its charming streets together. We spent our first day exploring the iconic Eiffel Tower, watching it sparkle at night while sharing a bottle of wine on Champ de Mars.</p>
      <p>The next day, we visited the Louvre, getting lost among the countless masterpieces. The Mona Lisa was smaller than we expected, but the experience was nevertheless magical.</p>
      <h3>Hidden Gems We Discovered</h3>
      <p>Away from the tourist spots, we found a small patisserie in the Montmartre district that served the most delicious croissants we've ever tasted. The elderly baker told us his family had been baking there for three generations.</p>
      <p>One rainy afternoon, we ducked into Shakespeare and Company bookstore, spending hours browsing through old books and imagining the literary legends who had visited before us.</p>
      <h3>The Proposal</h3>
      <p>On our final evening, we took a sunset cruise along the Seine. As the boat passed under Pont des Arts, with Notre Dame glowing in the distance, we made a promise to return to Paris someday with our children.</p>
    `,
    image: '/images/thumbnails/blog1-thumb.jpg',
  },
  {
    id: 2,
    title: 'Beach Getaway in Bali',
    date: 'December 15, 2023',
    category: 'travel',
    excerpt: 'Sun-soaked days and romantic nights on the beautiful beaches of Bali...',
    content: `
      <h2>Paradise Found in Bali</h2>
      <p>Our Bali trip was everything we dreamed it would be and more. From the moment we arrived, we were embraced by the island's warm hospitality and stunning natural beauty.</p>
      <p>We stayed in a small villa overlooking the rice terraces in Ubud, waking each morning to the sounds of nature and enjoying breakfast on our private balcony.</p>
      <h3>Spiritual Awakening</h3>
      <p>The temples of Bali captivated us. At Tirta Empul, we participated in a traditional purification ceremony, emerging feeling refreshed and spiritually renewed.</p>
      <p>We watched the sunset at Tanah Lot Temple, perched dramatically on a rock formation in the sea. As the sky turned shades of orange and pink, we felt truly grateful for the chance to experience such beauty together.</p>
      <h3>Adventures and Relaxation</h3>
      <p>Our days were filled with adventure - hiking the Mt. Batur volcano at sunrise, exploring underwater worlds while snorkeling at Amed, and braving the famous Bali swing with its breathtaking views.</p>
      <p>But we also made time for relaxation, enjoying couples massages on the beach and long, lazy days reading books by the pool.</p>
    `,
    image: '/images/thumbnails/blog2-thumb.jpg',
  },
  {
    id: 3,
    title: 'Our Wedding Planning Journey',
    date: 'January 20, 2025',
    category: 'wedding',
    excerpt: 'The ups and downs of planning our perfect wedding day...',
    content: `
      <h2>Planning Our Dream Wedding</h2>
      <p>They say planning a wedding is stressful, but for us, it became a beautiful journey of decisions made together, compromises, and excitement building toward our special day.</p>
      <p>We started with the venue - we knew we wanted something that reflected both our personalities. After visiting twelve different places, we walked into the thirteenth and immediately knew it was the one.</p>
      <h3>Personalized Touches</h3>
      <p>Instead of traditional wedding favors, we decided to donate to a charity close to our hearts. We made small cards informing our guests of the donation, which were tied with ribbons matching our color scheme.</p>
      <p>We spent countless evenings handcrafting elements for our wedding - from the invitation designs to the table centerpieces. Each item was infused with our love and excitement.</p>
      <h3>Challenges and Victories</h3>
      <p>Of course, there were challenges. The cake baker cancelled two weeks before the wedding, sending us into a panic. But sometimes life's detours lead to better destinations - we found an amazing pastry chef who created a cake even more beautiful than we had originally planned.</p>
      <p>As the big day approached, we realized that all the planning details mattered less than the commitment we were making to each other. Our wedding wasn't just a day to plan, but the beginning of a lifetime to build together.</p>
    `,
    image: '/images/thumbnails/blog3-thumb.jpg',
  },
  {
    id: 4,
    title: 'Honeymoon in Santorini',
    date: 'February 20, 2025',
    category: 'wedding',
    excerpt: 'White-washed buildings, blue domes, and breathtaking sunsets in Greece...',
    content: `
      <h2>Santorini: Our Perfect Honeymoon</h2>
      <p>After months of wedding planning and the beautiful whirlwind of our ceremony, Santorini welcomed us with open arms for our honeymoon. The contrast of white buildings against the deep blue sea was even more stunning in person than in photos.</p>
      <p>We stayed in a cave hotel built into the caldera cliff, with our own private terrace and plunge pool overlooking the sea. Waking up to that view every morning felt like a dream.</p>
      <h3>Culinary Adventures</h3>
      <p>The food in Santorini was a revelation. We took a cooking class where we learned to make authentic Greek dishes using local ingredients. The chef taught us his grandmother's moussaka recipe, which we've since made at home many times.</p>
      <p>Each evening, we tried a different restaurant, savoring fresh seafood, creamy fava, and white eggplant dishes unique to the island. Of course, always accompanied by delicious local wine.</p>
      <h3>Unforgettable Moments</h3>
      <p>We hiked from Fira to Oia along the caldera edge, stopping at small churches and taking in breathtaking views along the way. The hike took several hours, but the memories will last a lifetime.</p>
      <p>On our last night, we splurged on a private sunset sailing cruise. As the sun dipped below the horizon, painting the sky in shades of orange and pink, we toasted to our new marriage and all the adventures that lay ahead.</p>
    `,
    image: '/images/thumbnails/blog4-thumb.jpg',
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const [activePost, setActivePost] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back to Map
          </Button>
        </div>

        <h1 className="text-4xl text-center text-gold mb-8 font-playfair">Our Journey Blog</h1>
        
        {activePost ? (
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setActivePost(null)}
              className="mb-4"
            >
              Back to all posts
            </Button>
            <BlogPost post={blogPosts.find(p => p.id === activePost)!} />
          </div>
        ) : (
          <>
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="w-full max-w-md mx-auto bg-black/20">
                <TabsTrigger 
                  value="all" 
                  onClick={() => setActiveCategory("all")}
                  className="flex-1"
                >
                  All Posts
                </TabsTrigger>
                <TabsTrigger 
                  value="travel" 
                  onClick={() => setActiveCategory("travel")}
                  className="flex-1"
                >
                  Travel
                </TabsTrigger>
                <TabsTrigger 
                  value="wedding" 
                  onClick={() => setActiveCategory("wedding")}
                  className="flex-1"
                >
                  Wedding
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map(post => (
                <Card 
                  key={post.id} 
                  className="bg-white/5 backdrop-blur-sm border-none hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => setActivePost(post.id)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-xs text-gray-400 mb-1">{post.date}</div>
                    <CardTitle className="text-gold">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="link" className="text-rose-light p-0">
                      Read more
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Blog;
