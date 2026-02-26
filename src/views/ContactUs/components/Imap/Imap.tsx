"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Loader2 } from 'lucide-react'
export default function Imap() {
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = mapRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="w-full h-[600px]" ref={mapRef}>
      {isVisible ? (
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13808.587703899299!2d85.32660403592598!3d27.738696232194172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ac64a25553%3A0xba0a2ed52c24aa6d!2sAarohi%20HR%20Solutions!5e1!3m2!1sen!2snp!4v1725000471542!5m2!1sen!2snp" 
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      )}
    </div>
  )
}
