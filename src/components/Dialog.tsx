import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function DialogDemo({ seats }: { seats: number }) {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [noOfSeat, setNoOfSeat] = useState<number>(0);
    const [sequence, setSequence] = useState<number[]>([]);
    function generateSequence(length: number) {
        const start = Math.floor(Math.random() * 100) + 1;
        const result = Array.from({ length: length }, (_, i) => start + i);

        return result;
    }


  const generateRandomNumbers = (): number[] => {
    const randomNumbers: number[] = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.floor(Math.random() * 100)); 
    }
    return randomNumbers;
  };

  const handleGenerate = () => {
    setNumbers(generateRandomNumbers());
  };

    const seatBooking = () => {
        if (!noOfSeat) {
            toast.error("please enter a number");
            return;
        } else if (noOfSeat > 10) {
            toast.error("You can book more than 10 seats");
            return;

        }
        setSequence(generateSequence(noOfSeat));
        handleGenerate();
        toast.success("Booking successfully");

    }
    return (
        <Dialog>
            {seats > 0 ? (
                <DialogTrigger asChild>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primaryhover transition-colors">
                        Book Now
                    </button>
                </DialogTrigger>
            ) : (
                <p className="text-red-500 cursor-not-allowed">Seat Not Available</p>
            )}
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Book your seats</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right md:whitespace-nowrap">
                            Seat Number
                        </Label>
                        <Input
                            id="name"
                            placeholder="how many seats you want to booking"
                            className="col-span-3"
                            type="number"
                            onChange={(e) => setNoOfSeat( parseInt(e.target.value))}
                        />
                    </div>
                        {sequence.length>0 && <p className="text-primary">Your seat number are</p>}
                        {sequence.length >1 &&
                        <textarea className="w-full border max-h-[2rem] outline-none" name="" value={sequence} id=""></textarea>
                        }
                           {sequence.length >1 &&
                       <span className="flex flex-wrap"> <p className="text-primary">Booking ID :</p>{numbers}</span>
                        }

                </div>
                <DialogFooter>
                    <Button onClick={() => seatBooking()} className="bg-primary hover:bg-primaryhover" type="submit">Book Seat</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
