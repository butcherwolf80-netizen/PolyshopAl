import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Polyshop</h3>
            <p className="text-dark-400 text-sm">
              Platforma premium për e-commerce me teknologjinë më të fundit.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Lidhje Të Shpejta</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-dark-400 hover:text-primary-400 smooth-transition">
                  Shtëpia
                </Link>
              </li>
              <li>
                <Link to="/produktet" className="text-dark-400 hover:text-primary-400 smooth-transition">
                  Produktet
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark-400 hover:text-primary-400 smooth-transition">
                  Rreth
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Suporta</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-dark-400 hover:text-primary-400 smooth-transition">
                  Kontakt
                </Link>
              </li>
              <li>
                <a href="#" className="text-dark-400 hover:text-primary-400 smooth-transition">
                  Termat e Përdorimit
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-400 hover:text-primary-400 smooth-transition">
                  Politika e Privatësisë
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Na Kontaktoni</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-dark-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@polyshop.com</span>
              </div>
              <div className="flex items-center gap-2 text-dark-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+355 696 123 456</span>
              </div>
              <div className="flex items-center gap-2 text-dark-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Tiranë, Shqipëri</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 py-8 border-t border-dark-700">
          <a href="#" className="p-3 bg-dark-800 hover:bg-primary-600 rounded-lg smooth-transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-dark-800 hover:bg-primary-600 rounded-lg smooth-transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-dark-800 hover:bg-primary-600 rounded-lg smooth-transition">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-dark-500 text-sm">
          <p>&copy; 2024 Polyshop. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  )
}