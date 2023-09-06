import Link from "next/link";

export async function generateMetadata({ params }) {
  return {
    title: "Lobby - QuizGame",
    description: "Join or create a room to play with your friends.",
  };
}

export default function Lobby() {
  return (
    <div>
      <h1>Lobby</h1>
    </div>
  );
}
