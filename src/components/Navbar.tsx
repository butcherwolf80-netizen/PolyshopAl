import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShoppingCart, User, LogOut, Wallet } from 'lucide-react'

interface NavbarProps {
  isAuthenticated: boolean
  user: any
  onLogout: () => void
}

export default function Navbar({ isAuthenticated, user, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">Polyshop</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-dark-300 hover:text-primary-400 smooth-transition">
              Shtëpia
            </Link>
            <Link to="/produktet" className="text-dark-300 hover:text-primary-400 smooth-transition">
              Produktet
            </Link>
            <Link to="/about" className="text-dark-300 hover:text-primary-400 smooth-transition">
              Rreth
            </Link>
            <Link to="/contact" className="text-dark-300 hover:text-primary-400 smooth-transition">
              Kontakt
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated && user ? (
              <>
                <Link to="/wallet" className="flex items-center gap-2 text-dark-300 hover:text-primary-400 smooth-transition">
                  <Wallet className="w-5 h-5" />
                  <span>Depozito</span>
                </Link>
                <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 smooth-transition">
                  <User className="w-5 h-5" />
                  <span>{user.emri || 'Përdorues'}</span>
                </Link>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 text-red-400 hover:text-red-300 smooth-transition"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-dark-300 hover:text-primary-400 smooth-transition">
                  Hyr
                </Link>
                <Link to="/register" className="btn-primary">
                  Regjistrohu
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-dark-700 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slideDown">
            <Link to="/" className="block px-4 py-2 text-dark-300 hover:text-primary-400">
              Shtëpia
            </Link>
            <Link to="/produktet" className="block px-4 py-2 text-dark-300 hover:text-primary-400">
              Produktet
            </Link>
            <Link to="/about" className="block px-4 py-2 text-dark-300 hover:text-primary-400">
              Rreth
            </Link>
            <Link to="/contact" className="block px-4 py-2 text-dark-300 hover:text-primary-400">
              Kontakt
            </Link>
            {isAuthenticated && user ? (
              <>
                <Link to="/wallet" className="block px-4 py-2 text-dark-300 hover:text-primary-400">
                  Depozito
                </Link>
                <Link to="/dashboard" className="block px-4 py-2 text-dark-300 hover:text-primary-400">
                  Dashboard
                </Link>
                <button
                  onClick={onLogout}
                  className="block w-full text-left px-4 py-2 text-red-400"
                >
                  Dilni
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2 text-dark-300 hover:text-primary-400">
                  Hyr
                </Link>
                <Link to="/register" className="block px-4 py-2 text-primary-400">
                  Regjistrohu
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}