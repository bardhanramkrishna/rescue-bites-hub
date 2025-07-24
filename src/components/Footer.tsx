import { Link } from 'react-router-dom';
import { Heart, Leaf, Facebook, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Survey', path: '/community-survey' },
    { name: 'Donate', path: '/food-donation' },
    { name: 'Contact', path: '/contact' }
  ];

  const partnerLogos = [
    'NGO Partner 1',
    'NGO Partner 2', 
    'NGO Partner 3',
    'NGO Partner 4'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-secondary p-2 rounded-lg">
                <Heart className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold">Rescue Bites</span>
                <div className="flex items-center space-x-1">
                  <Leaf className="h-3 w-3 text-secondary" />
                  <span className="text-xs text-primary-foreground/80">Saving Food, Saving Lives</span>
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              A student-led initiative dedicated to reducing food waste and fighting hunger 
              in our community through innovative technology and grassroots engagement.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@rescuebites.org</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-3 mb-6">
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60">
              Stay updated with our latest rescue missions and community impact.
            </p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-primary-foreground/20 py-8">
          <h3 className="text-center font-semibold mb-6">Our NGO Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <div className="w-full h-12 bg-primary-foreground/20 rounded flex items-center justify-center">
                  <span className="text-xs text-primary-foreground/60">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Rescue Bites. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;