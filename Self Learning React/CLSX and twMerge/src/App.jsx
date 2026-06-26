import Button from "./componets/Button";

export default function App() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold text-center capitalize">
        Tailwind marge and clsx
      </h1>

      <Button
        className={
          "bg-amber-700 disabled:bg-black cursor-pointer disabled:cursor-not-allowed"
        }
        disabled={false}
      >
        Click me
      </Button>


      <Button variant="primary" size="md">
        Save
      </Button>

      <Button variant="danger" className="bg-black">
        Delete
      </Button>

      <Button disabled>Disabled</Button>
    </div>
  );
}
