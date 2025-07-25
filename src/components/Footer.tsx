import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = ({ isFixedIncome = false }: { isFixedIncome?: boolean }) => {
  return (
    <footer className={`${isFixedIncome ? 'bg-navy-900' : 'bg-black'} text-gray-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <img 
                  src="/lovable-uploads/1472ad70-7fe5-477b-88d5-67ae021f7dc8.png" 
                  alt="Australia"
                  className="w-5 h-4 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                The <span className="font-ink-free">Rate</span> Move
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering Australian investors with cutting-edge tools, expert insights, 
              and secure trading platforms to build lasting wealth.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gold transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Trading</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Mobile App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gold transition-colors">Education Hub</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Market News</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>1800 INVEST (1800 468 378)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>support@theratem0ve.com.au</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                <span>Level 42, Governor Phillip Tower<br />1 Farrer Place, Sydney NSW 2000</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 The Rate Move. All rights reserved. AFSL 123456. 
              The Rate Move Pty Ltd is regulated by ASIC.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
