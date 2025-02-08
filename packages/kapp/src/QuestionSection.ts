import type Phaser from "phaser";
import type { UIConfig } from "./types";
import Section from "./Section";

// TODO: rename QuestionSection to TextSection and change this also in config
export default class QuestionSection extends Section {
	text: Phaser.GameObjects.Text;

	constructor(
		public scene: Phaser.Scene,
		uiConfig: UIConfig,
		questionStr = "",
	) {
		super();
		const rectColor = parseInt(uiConfig.questionRect.fillStyle.color);
		const rectAlpha = uiConfig.questionRect.fillStyle.alpha || 1;
		const rectX = 0;
		const rectY =
			scene.scale.height -
			uiConfig.answerRect.height -
			uiConfig.questionRect.height;
		const rectWidth =
			uiConfig.questionRect.width === "full"
				? scene.scale.width
				: uiConfig.questionRect.width;
		const rectHeight = uiConfig.questionRect.height;

		this.rect = scene.add
			.rectangle(rectX, rectY, rectWidth, rectHeight, rectColor, rectAlpha)
			.setOrigin(0);

		this.text = scene.add.text(
			rectX + uiConfig.questionText.positionRelativeToRectOrigin.x,
			rectY + uiConfig.questionText.positionRelativeToRectOrigin.y,
			questionStr,
			{
				fontSize: `${uiConfig.questionText.fontSizeNumber}px`,
				fill: uiConfig.questionText.color,
			},
		);
	}

	setQuestion(question: string) {
		this.text.setText(question);
	}
}
