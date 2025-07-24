import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Users } from 'lucide-react';

const NearbyOrphanages = () => {
  const [searchLocation, setSearchLocation] = useState('');

  const orphanages = [
    {
      name: "Hope Children's Home",
      address: "123 Care Street, Downtown",
      phone: "+1 234-567-8901",
      email: "contact@hopechildren.org",
      distance: "2.5 km",
      capacity: "50 children",
      needs: ["Cooked Meals", "Fruits", "Dairy Products"],
      hours: "8 AM - 6 PM"
    },
    {
      name: "Sunshine Orphanage",
      address: "456 Happy Lane, Suburbs",
      phone: "+1 234-567-8902",
      email: "info@sunshineorphanage.org",
      distance: "4.2 km",
      capacity: "35 children",
      needs: ["Breakfast Items", "Vegetables", "Snacks"],
      hours: "7 AM - 7 PM"
    },
    {
      name: "Little Angels Shelter",
      address: "789 Angel Road, East Side",
      phone: "+1 234-567-8903",
      email: "support@littleangels.org",
      distance: "6.8 km",
      capacity: "75 children",
      needs: ["Dinner Meals", "Baked Goods", "Fresh Produce"],
      hours: "9 AM - 5 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Find Nearby Orphanages & NGOs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover local organizations in need of food donations in your area.
          </p>
        </div>

        {/* Search and Map Section */}
        <div className="mb-12">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                Location Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <Input
                  placeholder="Enter your city or area..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="flex-1"
                />
                <Button variant="hero">Search</Button>
                <Button variant="outline">Use My Location</Button>
              </div>
              
              {/* Map Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">Google Maps integration showing nearby orphanages and NGOs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orphanages List */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8">Nearby Organizations</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {orphanages.map((orphanage, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-primary">{orphanage.name}</CardTitle>
                    <Badge variant="secondary">{orphanage.distance}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <p className="text-muted-foreground">{orphanage.address}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">{orphanage.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm">{orphanage.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{orphanage.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{orphanage.hours}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-primary mb-2">Current Needs:</p>
                    <div className="flex flex-wrap gap-2">
                      {orphanage.needs.map((need, idx) => (
                        <Badge key={idx} variant="outline" className="border-secondary/40 text-secondary">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="hero" size="sm" className="flex-1">
                      Donate Now
                    </Button>
                    <Button variant="outline" size="sm">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're constantly adding new partner organizations. If you know of an orphanage or NGO 
              that should be listed here, please let us know.
            </p>
            <Button variant="donate" size="lg">
              Suggest an Organization
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NearbyOrphanages;