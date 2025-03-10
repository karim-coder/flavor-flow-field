
import React from 'react';
import FadeIn from './animations/FadeIn';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="right">
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-sm">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-6">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Whether you have a question about our menus, private dining, or special events, 
                our team is ready to assist you and make your dining experience exceptional.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <MapPin className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground">35 Spital Square, London E1 6DY</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <Phone className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Telephone</h3>
                    <p className="text-muted-foreground">+44 (0)20 7299 0400</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <Mail className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <Clock className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Opening Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 12pm - 2:30pm, 5:30pm - 10:30pm</p>
                      <p>Saturday: 5:30pm - 10:30pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gold hover:text-gold-dark transition-colors font-medium"
                >
                  View on Google Maps
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="h-full">
              <div className="aspect-[4/3] overflow-hidden h-full rounded-sm">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.07948592348972515!3d51.517731579638454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761db3f7c2b0e3%3A0x5ce3a97e89d77a93!2sSpital%20Square%2C%20London%20E1%206DY%2C%20UK!5e0!3m2!1sen!2sus!4v1682706795151!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
