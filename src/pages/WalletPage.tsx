import { motion } from 'framer-motion'
import { Wallet, Plus, Send, History } from 'lucide-react'
import { useState } from 'react'

interface WalletPageProps {
  user: any
}

export default function WalletPage({ user }: WalletPageProps) {
  const [depositAmount, setDepositAmount] = useState('')
  const [selectedMethod, setSelectedMethod] = useState('card')

  const transactions = [
    { id: 1, tip: 'Depozito', shumë: 500, data: '2024-06-20', statusi: 'Sukses' },
    { id: 2, tip: 'Pagesë', shumë: -199, data: '2024-06-18', statusi: 'Sukses' },
    { id: 3, tip: 'Depozito', shumë: 1000, data: '2024-06-15', statusi: 'Sukses' },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Depozito Ime
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Balance Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-primary-600 to-cyan-600 text-white">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold">Saldo Disponible</h2>
                <Wallet className="w-8 h-8" />
              </div>
              <div className="mb-4">
                <p className="text-dark-100 text-sm mb-1">Gjithsej</p>
                <p className="text-5xl font-bold">{user?.saldo || 0} L</p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="text-white/80 text-sm">Llogaria: **** **** **** 1234</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4 mt-8">
              {[
                { label: 'Të Ardhura', value: '2,500 L', icon: Plus },
                { label: 'Shpenzuar', value: '199 L', icon: Send },
                { label: 'Transaksione', value: '15', icon: History },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="glass-effect p-4 rounded-lg flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-dark-400 text-sm">{stat.label}</p>
                    <p className="text-white font-semibold">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Deposit Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Deposit Form */}
            <div className="glass-effect p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Shtoni Saldo</h2>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-white font-medium mb-3">Metoda e Pagesës</label>
                  <div className="space-y-2">
                    {[
                      { id: 'card', label: 'Kartë Krediti/Debiti' },
                      { id: 'bank', label: 'Transferim Bankar' },
                      { id: 'wallet', label: 'E-Wallet' },
                    ].map((method) => (
                      <label key={method.id} className="flex items-center gap-3 p-4 border border-dark-600 rounded-lg hover:border-primary-500 smooth-transition cursor-pointer">
                        <input
                          type="radio"
                          value={method.id}
                          checked={selectedMethod === method.id}
                          onChange={(e) => setSelectedMethod(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-white">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">Shumë (Lek)</label>
                  <input
                    type="number"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    className="input-field"
                    placeholder="Futni shumën..."
                    min="50"
                  />
                </div>

                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Shtoni {depositAmount || '0'} L
                </button>
              </div>
            </div>

            {/* Transactions History */}
            <div className="glass-effect p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Historia e Transaksioneve</h2>

              <div className="space-y-3">
                {transactions.map((tx) => (
                  <motion.div
                    key={tx.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-dark-800 p-4 rounded-lg flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        tx.tip === 'Depozito' ? 'bg-green-600/20' : 'bg-red-600/20'
                      }`}>
                        {tx.tip === 'Depozito' ? (
                          <Plus className="w-5 h-5 text-green-400" />
                        ) : (
                          <Send className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-medium">{tx.tip}</p>
                        <p className="text-dark-400 text-sm">{tx.data}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${
                        tx.shumë > 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {tx.shumë > 0 ? '+' : ''}{tx.shumë} L
                      </p>
                      <p className="text-dark-400 text-sm">{tx.statusi}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}