import { Button } from "@/components/button/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">QuizGame</h1>
      <div>
        <Button variant="primary">Leave</Button>
      </div>
    </nav>
  );
}
