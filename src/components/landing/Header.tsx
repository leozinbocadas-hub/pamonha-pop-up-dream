import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState(114); // 01:54 in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-[#e4231b] text-white py-2 px-4 flex items-center justify-center gap-2 font-bold text-sm sm:text-base fixed top-0 left-0 w-full z-[100] shadow-md">
      <Timer className="w-4 h-4" />
      <span className="uppercase tracking-tight">Não feche! Desconto expira em</span>
      <span className="bg-white text-[#e4231b] px-2 py-0.5 rounded ml-1 font-mono">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
};

export default Header;
