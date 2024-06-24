export default function ServiceCard({
  icon,
  heading,
  text,
}: {
  icon: string;
  heading: string;
  text: string;
}) {
  return (
    <div>
      <div>{text}</div>
    </div>
  );
}
