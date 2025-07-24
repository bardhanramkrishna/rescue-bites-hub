import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const steps = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Survey",
      description: "We conducted extensive surveys to understand food wastage patterns in our local community."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Data Analysis",
      description: "Analyzed the survey results to identify key causes and opportunities for food rescue."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Platform Development",
      description: "Created this platform to connect food donors with orphanages and NGOs in need."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Rescue Bites
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A student-led initiative dedicated to reducing food waste and fighting hunger in our community.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Clock className="h-6 w-6" />
                The Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Every day, tons of perfectly good food goes to waste in our community while many children 
                in orphanages and NGOs struggle with food insecurity.
              </p>
              <div className="bg-accent p-4 rounded-lg">
                <h4 className="font-semibold text-accent-foreground mb-2">Key Statistics:</h4>
                <ul className="space-y-1 text-sm text-accent-foreground">
                  <li>• 40% of food is wasted globally</li>
                  <li>• 1 in 4 children face hunger daily</li>
                  <li>• Most food waste happens at household level</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                <Target className="h-6 w-6" />
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Rescue Bites bridges the gap between food surplus and food need by creating a simple, 
                efficient platform for food donation and distribution.
              </p>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">Our Impact Goals:</h4>
                <ul className="space-y-1 text-sm text-secondary">
                  <li>• Reduce food waste by 30%</li>
                  <li>• Feed 500+ children monthly</li>
                  <li>• Connect 50+ donors with NGOs</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              To create a sustainable ecosystem where excess food finds its way to those who need it most, 
              fostering community spirit while reducing environmental impact through innovative technology 
              and grassroots engagement.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;