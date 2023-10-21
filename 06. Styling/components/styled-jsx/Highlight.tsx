type Props = {
  children?: React.ReactNode;
  text: string;
};

export default function Highlight(props: Props) {
  return (
    <>
      <span className="highlight">{props.text}</span>
      <style jsx>{`
        .highlight {
          background-color: purple;
        }
      `}</style>
      <style jsx global>{`
        span {
          background: yellow;
          font-weight: bold;
        }
        p {
          background: red;
          font-size: 20px;
        }
      `}</style>
    </>
  );
}
