"use client";

import { useState, useEffect } from 'react';

export function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setUTCHours(23, 59, 59, 999);
      
      const difference = endOfDay.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)));
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0'),
        });
      } else {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center space-x-2 md:space-x-4 mt-2 font-mono" aria-label="Tempo restante da oferta">
      <div className="text-center p-2 bg-primary text-primary-foreground rounded-lg min-w-[60px]">
        <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs">Horas</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="text-center p-2 bg-primary text-primary-foreground rounded-lg min-w-[60px]">
        <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs">Minutos</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="text-center p-2 bg-primary text-primary-foreground rounded-lg min-w-[60px]">
        <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs">Segundos</div>
      </div>
    </div>
  );
}
