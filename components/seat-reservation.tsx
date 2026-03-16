'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from '@/components/ui/alert-dialog';

interface Seat {
  id: string;
  seatNumber: number;
  status: 'available' | 'reserved' | 'selected';
}

const ROWS = 6;
const SEATS_PER_ROW = 6;

export function SeatReservation() {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Initialize seats
  useEffect(() => {
    const initializeSeats: Seat[] = [];
    let seatNumber = 1;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < SEATS_PER_ROW; col++) {
        const randomReserved = Math.random() < 0.3; // 30% reserved
        initializeSeats.push({
          id: `${row}-${col}`,
          seatNumber: seatNumber,
          status: randomReserved ? 'reserved' : 'available',
        });
        seatNumber++;
      }
    }

    setSeats(initializeSeats);
  }, []);

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'available') {
      setSelectedSeat(seat);
    }
  };

  const handleConfirmSeat = () => {
    if (selectedSeat) {
      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.id === selectedSeat.id
            ? { ...seat, status: 'selected' }
            : seat
        )
      );
      setShowConfirmation(false);
      // Simulate confirmation
      setTimeout(() => {
        setSelectedSeat(null);
        alert(`Seat ${selectedSeat.seatNumber} confirmed! We can't wait to see you there.`);
      }, 500);
    }
  };

  const getSeatColor = (status: Seat['status']) => {
    switch (status) {
      case 'available':
        return 'bg-secondary/50 hover:bg-secondary border-accent/30 hover:border-accent/60 cursor-pointer';
      case 'reserved':
        return 'bg-muted border-muted-foreground/20 cursor-not-allowed opacity-60';
      case 'selected':
        return 'bg-primary border-primary text-primary-foreground';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-8">
      {/* Seat Grid */}
      <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-lg p-6 sm:p-8 border border-accent/20">
        <div className="mb-6">
          <h3 className="text-xl font-serif text-foreground mb-4">Select Your Seat</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-secondary/50 border border-accent/30" />
              <span className="text-sm text-muted-foreground font-light">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted border border-muted-foreground/20 opacity-60" />
              <span className="text-sm text-muted-foreground font-light">Reserved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary border border-primary" />
              <span className="text-sm text-muted-foreground font-light">Your Selection</span>
            </div>
          </div>
        </div>

        {/* Seats */}
        <div className="space-y-4 max-w-md mx-auto">
          {Array.from({ length: ROWS }).map((_, row) => (
            <div key={row} className="flex justify-center gap-2">
              {seats
                .filter((_, idx) => Math.floor(idx / SEATS_PER_ROW) === row)
                .map((seat) => (
                  <button
                    key={seat.id}
                    onClick={() => handleSeatClick(seat)}
                    disabled={seat.status === 'reserved'}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded border transition-all ${getSeatColor(
                      seat.status
                    )}`}
                    title={`Seat ${seat.seatNumber}`}
                  >
                    <span className="text-xs font-light">{seat.seatNumber}</span>
                  </button>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Seat Info & Confirm Button */}
      {selectedSeat && (
        <div className="text-center">
          <p className="text-lg font-serif text-foreground mb-4">
            You have selected Seat {selectedSeat.seatNumber}
          </p>
          <Button
            onClick={() => setShowConfirmation(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-light"
          >
            Confirm Seat
          </Button>
        </div>
      )}

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogTitle>Confirm Your Seat</AlertDialogTitle>
          <AlertDialogDescription>
            You are about to reserve Seat {selectedSeat?.seatNumber}. This will confirm your attendance at our wedding.
          </AlertDialogDescription>
          <div className="flex gap-4 justify-end">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmSeat}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Confirm
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
