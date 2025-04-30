
import { useState, useEffect } from "react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface ConferenceCountdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConferenceCountdown = ({ isOpen, onClose }: ConferenceCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("May 30, 2025 09:00:00").getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-blue-900 to-black border-accent text-white">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm">
              <Calendar className="w-8 h-8 text-accent" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center text-white">
            Xtelligent Summit Conference 2
          </DialogTitle>
          <DialogDescription className="text-lg text-center text-white/80">
            Join us on May 30th, 2025 for the industry's premier Xtelligent event!
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-4 gap-2 my-6">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center bg-blue-900/50 p-3 rounded-lg border border-blue-400/30 backdrop-blur-sm"
            >
              <span className="text-2xl sm:text-3xl font-bold text-accent">{item.value}</span>
              <span className="text-xs sm:text-sm text-white/70">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-blue-800/30 border border-blue-700/30 rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600/20 p-2 rounded-full">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-medium text-white">Event Highlights</h4>
              <p className="text-sm text-white/70 mt-1">
                Keynotes, workshops, networking opportunities and the latest in xLM innovations
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="sm:justify-center flex-col sm:flex-row gap-2">
          <Button 
            className="bg-accent text-secondary hover:bg-yellow-500 px-8 py-2 rounded-full"
            onClick={() => window.open('/register', '_blank')}
          >
            Register Now
          </Button>
          <Button 
            variant="outline" 
            className="border-white/20 text-black hover:bg-white/10 px-8 py-2 rounded-full"
            onClick={onClose}
          >
            Remind Me Later!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConferenceCountdown;
