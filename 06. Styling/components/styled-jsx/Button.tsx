export default function Button(props: React.PropsWithChildren) {
  return (
    <>
      <style jsx>{`
        .button {
          padding: 1rem;
          border-radius: 1rem;
          border: none;
          background: green;
          color: white;
        }
      `}</style>
      <button className="button">{props.children}</button>
    </>
  );
}
