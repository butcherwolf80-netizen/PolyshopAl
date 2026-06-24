import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Wallet, ShoppingBag, Heart, Settings, LogOut } from 'lucide-react'
import { useState } from 'react'

interface DashboardPageProps {
  user: any
}

export default function DashboardPage({ user }: DashboardPageProps) {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  if (!user) {
    navigate('/login')
    return null
  }

  const recentOrders = [
    { id: 1, produkt: 'Laptop Pro 15', cmimi: 1299, data: '2024-06-20', status: 'Dorëzuar' },
    { id: 2, produkt: 'Aurtikulare Wireless', cmimi: 199, data: '2024-06-18', status: 'Në dorëzim' },
  ]

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Pullo Ime, {user.emri}!
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {/* Stats Cards */}
          {[
            { icon: ShoppingBag, label: 'Porositë', value: '12', color: 'from-blue-500 to-cyan-500' },
            { icon: Heart, label: 'Të Preferuara', value: '8', color: 'from-red-500 to-pink-500' },
            { icon: Wallet, label: 'Saldo', value: `${user.saldo}L`, color: 'from-green-500 to-emerald-500' },
            { icon: User, label: 'Anëtarisësim', value: 'Premium', color: 'from-purple-500 to-indigo-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dark-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-dark-700">
          {[
            { id: 'overview', label: 'Përmblejhë' },
            { id: 'orders', label: 'Porositë' },
            { id: 'settings', label: 'Cilësimet' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium smooth-transition ${
                activeTab === tab.id
                  ? 'text-primary-400 border-b-2 border-primary-400'
                  : 'text-dark-400 hover:text-dark-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="glass-effect p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Informacioni Përdoruesit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-dark-400 text-sm mb-1">Emri</p>
                    <p className="text-white font-medium">{user.emri}</p>
                  </div>
                  <div>
                    <p className="text-dark-400 text-sm mb-1">Email</p>
                    <p className="text-white font-medium">{user.email}</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Porositë Të Fundit</h2>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="bg-dark-800 p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium">{order.produkt}</p>
                        <p className="text-dark-400 text-sm">{order.data}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">{order.cmimi} L</p>
                        <p className={`text-sm ${
                          order.status === 'Dorëzuar' ? 'text-green-400' : 'text-yellow-400'
                        }`}>
                          {order.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="glass-effect p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Të Gjitha Porositë Tuaja</h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="bg-dark-800 p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">{order.produkt}</p>
                      <p className="text-dark-400 text-sm">ID: #{order.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{order.cmimi} L</p>
                      <p className={`text-sm ${
                        order.status === 'Dorëzuar' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="glass-effect p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Cilësimet Llogarie</h2>
              <div className="space-y-4">
                <button className="w-full py-3 bg-dark-800 hover:bg-dark-700 text-white rounded-lg smooth-transition flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Ndryshoni Fjalëkalimin
                </button>
                <button className="w-full py-3 bg-dark-800 hover:bg-dark-700 text-white rounded-lg smooth-transition">
                  Hapni Njoftimet
                </button>
                <button className="w-full py-3 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg smooth-transition flex items-center gap-2">
                  <LogOut className="w-5 h-5" />
                  Dilni
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}