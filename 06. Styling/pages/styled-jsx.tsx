import Button from "@/components/styled-jsx/Button";
import FancyButton from "@/components/styled-jsx/FancyButton";
import Highlight from "@/components/styled-jsx/Highlight";

export default function StyledJsxPage() {
  return (
    <main>
      <Button>일반 버튼</Button>
      <FancyButton>Fancy 버튼</FancyButton>
      <Highlight text="하이라이트" />
      <span>헬로우</span>
      <p>피피피</p>
    </main>
  );
}
