import Email from "./Email";

export default function Footer({ items }) {
  if (!items.length)
    return (
      <footer>
        <p>Start adding some items to your packing list 🚀</p>
      </footer>
    );
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / totalItems) * 100);

  return (
    <>
      <footer>
        <p>
          {percentage === 100
            ? `You got everything! Ready to go ✈️`
            : `You have ${totalItems} item(s) in your list, and you already packed
        ${totalPacked}(${percentage}%)`}
        </p>
      </footer>
      <Email items={items} />
    </>
  );
}
