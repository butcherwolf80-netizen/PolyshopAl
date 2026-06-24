import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

interface LoginPageProps {
  setIsAuthenticated: (value: boolean) => void
  setUser: (user: any) => void
}

export default function LoginPage({ setIsAuthenticated, setUser }: LoginPageProps) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      const user = { emri: 'Përdorues', email: formData.email, saldo: 5000 }
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      setIsAuthenticated(true)
      setLoading(false)
      navigate('/dashboard')
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass-effect p-8 rounded-2xl space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Mirë Se Erdhët Përsëri</h1>
            <p className="text-dark-400">Hyrni në llogarinë tuaj Polyshop</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-dark-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field pl-10"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Fjalëkalimi</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-dark-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input-field pl-10 pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-dark-500 hover:text-dark-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-dark-400 text-sm">Mbaje mua të lidhur</span>
              </label>
              <a href="#" className="text-primary-400 hover:text-primary-300 text-sm">
                Humbja fjalëkalimin?
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? 'Po hyrim...' : 'Hyri'}
            </motion.button>
          </form>

          <div className="text-center">
            <p className="text-dark-400">
              S'ke llogari?{' '}
              <Link to="/register" className="text-primary-400 hover:text-primary-300 font-medium">
                Regjistrohu
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}