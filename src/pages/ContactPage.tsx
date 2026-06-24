import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ emri: '', email: '', mesazhi: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ emri: '', email: '', mesazhi: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Na Kontaktoni</h1>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Kemi një pyetje apo sugjerim? Kontaktojnë ekipin tonë të ndihmës dhe ne do t'ju përgjigjem sa më shpejt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          {[
            {
              icon: Mail,
              label: 'Email',
              value: 'info@polyshop.com',
              desc: 'Dërgoni një email',
            },
            {
              icon: Phone,
              label: 'Telefon',
              value: '+355 696 123 456',
              desc: 'Na telefononi',
            },
            {
              icon: MapPin,
              label: 'Lokacioni',
              value: 'Tiranë, Shqipëri',
              desc: 'Vizitoni zyren tonë',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
              <p className="text-primary-300 font-semibold mb-2">{item.value}</p>
              <p className="text-dark-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto glass-effect p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Dërgoni Një Mesazh</h2>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-600/20 border border-green-600 text-green-300 rounded-lg mb-6"
            >
              ✓ Mesazhi juaj është dërguar me sukses! Do t'ju përgjigjem në brendi të 24 orëve.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">Emri</label>
                <input
                  type="text"
                  value={formData.emri}
                  onChange={(e) => setFormData({ ...formData, emri: e.target.value })}
                  className="input-field"
                  placeholder="Emri juaj"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Mesazhi</label>
              <textarea
                value={formData.mesazhi}
                onChange={(e) => setFormData({ ...formData, mesazhi: e.target.value })}
                className="input-field min-h-32 resize-none"
                placeholder="Shkruani mesazhin tuaj këtu..."
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Dërgoni Mesazhin
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}