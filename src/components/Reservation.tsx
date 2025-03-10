
import React, { useState } from 'react';
import FadeIn from './animations/FadeIn';
import { useToast } from "@/components/ui/use-toast";

const Reservation: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation form submitted:', formData);
    
    toast({
      title: "Reservation Request Received",
      description: "We'll contact you shortly to confirm your reservation.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: '',
    });
  };

  return (
    <section id="reserve" className="py-20 bg-white dark:bg-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[4/5] relative z-10 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Restaurant interior" 
                  className="object-cover w-full h-full hover-scale"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-36 h-36 border-8 border-gold"></div>
              <div className="absolute -top-4 -right-4 w-36 h-36 border-8 border-gold"></div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-sm">Join Us</span>
              <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-6">Make a Reservation</h2>
              <p className="text-muted-foreground mb-8">
                Reserve your table and experience the finest culinary journey. For special events or 
                large group bookings, please contact us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-muted rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-muted rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-muted rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-muted rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Person' : 'People'}
                        </option>
                      ))}
                      <option value="9+">9+ People</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-muted rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-2">
                      Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-muted rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition"
                    >
                      <option value="">Select a time</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-muted rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-sm tracking-wide transition-all duration-300 inline-block"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
