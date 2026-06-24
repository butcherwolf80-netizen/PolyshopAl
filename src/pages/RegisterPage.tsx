import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react'

interface RegisterPageProps {
  setIsAuthenticated: (value: boolean) => void
  setUser: (user: any) => void
}

export default function RegisterPage({ setIsAuthenticated, setUser }: RegisterPageProps) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    emri: '',
    email: '',
    telefon: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Fjalëkalimet nuk përputhen')
      return
    }

    setLoading(true)
    setTimeout(() => {
      const user = { emri: formData.emri, email: formData.email, saldo: 0 }
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
            <h1 className="text-3xl font-bold text-white mb-2">Krijoni Llogarinë Tuaj</h1>
            <p className="text-dark-400">Bashkohuni me komunitetin Polyshop</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-4 bg-red-600/20 border border-red-600 rounded-lg text-red-300">
                {error}
              </div>
            )}

            <div>
              <label className="block text-white font-medium mb-2">Emri</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-dark-500" />
                <input
                  type="text"
                  value={formData.emri}
                  onChange={(e) => setFormData({ ...formData, emri: e.target.value })}
                  className="input-field pl-10"
                  placeholder="Emri Juaj"
                  required
                />
              </div>
            </div>

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
              <label className="block text-white font-medium mb-2">Telefon</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-dark-500" />
                <input
                  type="tel"
                  value={formData.telefon}
                  onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                  className="input-field pl-10"
                  placeholder="+355 6XX XXX XXX"
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

            <div>
              <label className="block text-white font-medium mb-2">Ripërsëritni Fjalëkalimin</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-dark-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="input-field pl-10 pr-10"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded" required />
              <span className="text-dark-400 text-sm">
                Pajtohem me Termat dhe Kushtet
              </span>
            </label>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? 'Po krijon...' : 'Regjistrohu'}
            </motion.button>
          </form>

          <div className="text-center">
            <p className="text-dark-400">
              Keni tashmë llogari?{' '}
              <Link to="/login" className="text-primary-400 hover:text-primary-300 font-medium">
                Hyri
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}