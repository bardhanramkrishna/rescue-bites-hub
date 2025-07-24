import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { ClipboardList, Users, BarChart3 } from 'lucide-react';

const CommunitySurvey = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    ageGroup: '',
    occupation: '',
    leftoverFrequency: '',
    leftoverAction: '',
    wasteCauses: [] as string[],
    awarenessLevel: '',
    willingness: '',
    suggestions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for participating!",
      description: "Your responses help us understand community food waste patterns better.",
    });
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      wasteCauses: checked 
        ? [...prev.wasteCauses, value]
        : prev.wasteCauses.filter(cause => cause !== value)
    }));
  };

  const wasteCauseOptions = [
    "Over-purchasing groceries",
    "Poor meal planning",
    "Forgetting about stored food",
    "Not knowing how to use leftovers",
    "Food spoiling too quickly",
    "Buying in bulk when not needed",
    "Cooking too much food"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Community Food Wastage Survey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us understand food waste patterns in our community. Your responses will guide our rescue efforts.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Survey Form */}
          <div className="lg:col-span-3">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <ClipboardList className="h-6 w-6" />
                  Survey Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name (Optional)</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="ageGroup">Age Group *</Label>
                        <Select value={formData.ageGroup} onValueChange={(value) => setFormData(prev => ({ ...prev, ageGroup: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="18-25">18-25 years</SelectItem>
                            <SelectItem value="26-35">26-35 years</SelectItem>
                            <SelectItem value="36-50">36-50 years</SelectItem>
                            <SelectItem value="51+">51+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="occupation">Occupation *</Label>
                      <Select value={formData.occupation} onValueChange={(value) => setFormData(prev => ({ ...prev, occupation: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occupation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="working-professional">Working Professional</SelectItem>
                          <SelectItem value="homemaker">Homemaker</SelectItem>
                          <SelectItem value="business-owner">Business Owner</SelectItem>
                          <SelectItem value="retired">Retired</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Food Waste Questions */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-primary">Food Waste Patterns</h3>
                    
                    <div>
                      <Label className="text-base font-medium">How often do you have leftover food? *</Label>
                      <RadioGroup value={formData.leftoverFrequency} onValueChange={(value) => setFormData(prev => ({ ...prev, leftoverFrequency: value }))}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="daily" id="daily" />
                          <Label htmlFor="daily">Daily</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="weekly" id="weekly" />
                          <Label htmlFor="weekly">2-3 times a week</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">Once a week</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="rarely" id="rarely" />
                          <Label htmlFor="rarely">Rarely</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium">What do you usually do with leftovers? *</Label>
                      <RadioGroup value={formData.leftoverAction} onValueChange={(value) => setFormData(prev => ({ ...prev, leftoverAction: value }))}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="store-eat-later" id="store-eat-later" />
                          <Label htmlFor="store-eat-later">Store and eat later</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="throw-away" id="throw-away" />
                          <Label htmlFor="throw-away">Throw away</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="give-pets" id="give-pets" />
                          <Label htmlFor="give-pets">Give to pets</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="donate" id="donate" />
                          <Label htmlFor="donate">Donate to others</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">What are the main causes of food waste in your household? (Select all that apply)</Label>
                      <div className="space-y-3">
                        {wasteCauseOptions.map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <Checkbox
                              id={option}
                              checked={formData.wasteCauses.includes(option)}
                              onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                            />
                            <Label htmlFor={option} className="text-sm">{option}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Awareness Questions */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-primary">Donation Awareness</h3>
                    
                    <div>
                      <Label className="text-base font-medium">Are you aware of food donation platforms or services? *</Label>
                      <RadioGroup value={formData.awarenessLevel} onValueChange={(value) => setFormData(prev => ({ ...prev, awarenessLevel: value }))}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="very-aware" id="very-aware" />
                          <Label htmlFor="very-aware">Very aware</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="somewhat-aware" id="somewhat-aware" />
                          <Label htmlFor="somewhat-aware">Somewhat aware</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="not-aware" id="not-aware" />
                          <Label htmlFor="not-aware">Not aware at all</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Would you use an app/platform to donate excess food? *</Label>
                      <RadioGroup value={formData.willingness} onValueChange={(value) => setFormData(prev => ({ ...prev, willingness: value }))}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="definitely" id="definitely" />
                          <Label htmlFor="definitely">Definitely yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="probably" id="probably" />
                          <Label htmlFor="probably">Probably yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="maybe" id="maybe" />
                          <Label htmlFor="maybe">Maybe</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="probably-not" id="probably-not" />
                          <Label htmlFor="probably-not">Probably not</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="definitely-not" id="definitely-not" />
                          <Label htmlFor="definitely-not">Definitely not</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="suggestions">Any suggestions for reducing food waste in our community?</Label>
                    <Textarea
                      id="suggestions"
                      value={formData.suggestions}
                      onChange={(e) => setFormData(prev => ({ ...prev, suggestions: e.target.value }))}
                      placeholder="Share your ideas and suggestions..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Submit Survey
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="text-lg text-secondary flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Why This Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  Your responses help us understand community food waste patterns and design better solutions.
                </p>
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <p className="text-secondary font-medium">250+ responses collected so far!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">Survey Results</h3>
                <p className="text-sm text-muted-foreground">
                  View aggregated survey insights and community patterns.
                </p>
                <Button variant="outline" size="sm" className="mt-3">
                  View Insights
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySurvey;