import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Leaf, Users, TrendingDown, MapPin, BarChart3, HandHeart, Recycle } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Index = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "500+", label: "Children Fed Monthly" },
    { icon: <TrendingDown className="h-8 w-8" />, value: "30%", label: "Food Waste Reduced" },
    { icon: <HandHeart className="h-8 w-8" />, value: "50+", label: "Active Donors" },
    { icon: <Recycle className="h-8 w-8" />, value: "1000kg", label: "Food Rescued" }
  ];

  const features = [
    {
      icon: <HandHeart className="h-12 w-12" />,
      title: "Easy Food Donation",
      description: "Simple form to donate excess food with quick pickup scheduling and direct delivery to those in need."
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Find Nearby Organizations",
      description: "Interactive map showing orphanages and NGOs in your area that need food donations right now."
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Community Insights",
      description: "Help us understand food waste patterns by participating in our research and viewing community data."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center text-white">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-5xl md:text-7xl font-bold">Rescue Bites</h1>
                <div className="flex items-center space-x-2 mt-2">
                  <Leaf className="h-5 w-5 text-secondary" />
                  <span className="text-xl md:text-2xl font-medium text-white/90">Saving Food, Saving Lives</span>
                </div>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Join our community-driven mission to reduce food waste and fight hunger. 
              Every donation connects surplus food with orphanages and NGOs that need it most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/food-donation">
                <Button variant="donate" size="lg" className="text-lg px-8 py-4">
                  Donate Food Now
                </Button>
              </Link>
              <Link to="/community-survey">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                  Take the Survey
                </Button>
              </Link>
              <Link to="/nearby-orphanages">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Find Nearby Orphanages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/40">The Challenge</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Fighting Food Waste & Hunger
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              While tons of perfectly good food goes to waste daily, many children in orphanages 
              and NGOs struggle with food insecurity. We're here to bridge that gap.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">The Problem We're Solving</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-destructive/10 p-2 rounded-lg mt-1">
                    <TrendingDown className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">40% of food is wasted globally</p>
                    <p className="text-sm text-muted-foreground">Enough to feed millions of hungry people</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-secondary/10 p-2 rounded-lg mt-1">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">1 in 4 children face hunger daily</p>
                    <p className="text-sm text-muted-foreground">Especially in underfunded orphanages and shelters</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Recycle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Lack of efficient distribution</p>
                    <p className="text-sm text-muted-foreground">No easy way to connect donors with recipients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-secondary mb-6">Our Solution</h3>
              <p className="text-muted-foreground mb-6">
                Rescue Bites creates a seamless connection between food surplus and food need through:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Quick and easy food donation process</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm">Real-time matching with nearby organizations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Efficient pickup and delivery coordination</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm">Community engagement and awareness building</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-secondary border-secondary/40">How It Works</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Simple Steps, Big Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform makes food rescue easy and efficient for everyone involved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of community members who are already helping reduce food waste 
                and feed those in need. Every action counts!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/food-donation">
                  <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                    Start Donating Food
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
