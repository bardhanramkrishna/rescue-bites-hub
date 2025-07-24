import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, BarChart3, TrendingUp } from 'lucide-react';

const SurveyInsights = () => {
  const insights = [
    {
      title: "What People Do With Leftovers",
      findings: [
        "45% throw leftovers away",
        "30% store them but forget to eat",
        "20% give to pets",
        "5% donate to others"
      ],
      icon: <PieChart className="h-6 w-6" />
    },
    {
      title: "Main Causes of Food Waste",
      findings: [
        "Over-purchasing (40%)",
        "Poor meal planning (25%)",
        "Forgetting about food (20%)",
        "Not knowing how to use leftovers (15%)"
      ],
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: "Types of Food Wasted Most",
      findings: [
        "Fresh vegetables (35%)",
        "Bread and baked goods (25%)",
        "Fruits (20%)",
        "Cooked meals (20%)"
      ],
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Survey Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding food waste patterns in our community through comprehensive research.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  {insight.icon}
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Chart Visualization</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Key Findings:</h4>
                    <ul className="space-y-1">
                      {insight.findings.map((finding, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          {finding}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Survey Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">250+</div>
                <p className="text-muted-foreground">Survey Respondents</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">Want to Reduce Waste</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">70%</div>
                <p className="text-muted-foreground">Willing to Donate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SurveyInsights;