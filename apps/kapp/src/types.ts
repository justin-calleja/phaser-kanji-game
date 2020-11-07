export interface UIConfig {
  questionRect: Rect;
  questionText: Text;
  answerRect: Rect;
  answerText: Text;
}

type FillStyle = {
  color: string;
  alpha?: number;
};

type Vect2 = {
  x: number;
  y: number;
};

interface Rect {
  height: number;
  width?: number | 'full';
  fillStyle: FillStyle;
}

interface Text {
  fontSize: number;
  color: string;
  positionRelativeToRectOrigin: Vect2;
}
