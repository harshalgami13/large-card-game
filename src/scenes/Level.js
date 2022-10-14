
// You can write more code here
const tempArry = []

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.i
		this.card
		this.cardBack
		this.text
		this.temp
		this.arryX = [434, 695, 956, 1217, 1478]
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// game_bg
		const game_bg = this.add.image(960, 540, "game-bg");
		game_bg.scaleX = 1.5;
		game_bg.scaleY = 1.5;

		// main_panel
		const main_panel = this.add.image(960, 716, "main-panel");
		main_panel.scaleY = 0.8;

		// Card1
		const card1 = this.add.container(0, 0);

		// card_Back_1
		const card_Back_1 = this.add.image(435, 751, "Card-Back");
		card_Back_1.scaleX = 0;
		card_Back_1.scaleY = 0.25;
		card1.add(card_Back_1);

		// text_1
		const text_1 = this.add.text(431.5, 751, "", {});
		text_1.scaleX = 0;
		text_1.setOrigin(0.5, 0.5);
		text_1.setStyle({ "fontFamily": "Sans-serif", "fontSize": "80px", "fontStyle": "bold" });
		card1.add(text_1);

		// card_Front_1
		const card_Front_1 = this.add.image(961, 211, "Card-Front");
		card_Front_1.scaleX = 0.25;
		card_Front_1.scaleY = 0.25;
		card1.add(card_Front_1);

		// Card2
		const card2 = this.add.container(0, 0);

		// card_Back_2
		const card_Back_2 = this.add.image(695, 751, "Card-Back");
		card_Back_2.scaleX = 0;
		card_Back_2.scaleY = 0.25;
		card2.add(card_Back_2);

		// text_2
		const text_2 = this.add.text(695, 751, "", {});
		text_2.scaleX = 0;
		text_2.setOrigin(0.5, 0.5);
		text_2.setStyle({ "fontFamily": "Sans-serif", "fontSize": "80px", "fontStyle": "bold" });
		card2.add(text_2);

		// card_Front_2
		const card_Front_2 = this.add.image(960, 211, "Card-Front");
		card_Front_2.scaleX = 0.25;
		card_Front_2.scaleY = 0.25;
		card2.add(card_Front_2);

		// Card3
		const card3 = this.add.container(0, 0);

		// card_Back_3
		const card_Back_3 = this.add.image(956, 751, "Card-Back");
		card_Back_3.scaleX = 0;
		card_Back_3.scaleY = 0.25;
		card3.add(card_Back_3);

		// text_3
		const text_3 = this.add.text(956, 751, "", {});
		text_3.scaleX = 0;
		text_3.setOrigin(0.5, 0.5);
		text_3.setStyle({ "fontFamily": "Sans-serif", "fontSize": "80px", "fontStyle": "bold" });
		card3.add(text_3);

		// card_Front_3
		const card_Front_3 = this.add.image(960, 211, "Card-Front");
		card_Front_3.scaleX = 0.25;
		card_Front_3.scaleY = 0.25;
		card3.add(card_Front_3);

		// Card4
		const card4 = this.add.container(0, 0);

		// card_Back_4
		const card_Back_4 = this.add.image(1217, 751, "Card-Back");
		card_Back_4.scaleX = 0;
		card_Back_4.scaleY = 0.25;
		card4.add(card_Back_4);

		// text_4
		const text_4 = this.add.text(1217, 751, "", {});
		text_4.scaleX = 0;
		text_4.setOrigin(0.5, 0.5);
		text_4.setStyle({ "fontFamily": "Sans-serif", "fontSize": "80px", "fontStyle": "bold" });
		card4.add(text_4);

		// card_Front_4
		const card_Front_4 = this.add.image(960, 211, "Card-Front");
		card_Front_4.scaleX = 0.25;
		card_Front_4.scaleY = 0.25;
		card4.add(card_Front_4);

		// Card5
		const card5 = this.add.container(0, 0);

		// card_Back_5
		const card_Back_5 = this.add.image(1478, 751, "Card-Back");
		card_Back_5.scaleX = 0;
		card_Back_5.scaleY = 0.25;
		card5.add(card_Back_5);

		// text_5
		const text_5 = this.add.text(1478, 751, "", {});
		text_5.scaleX = 0;
		text_5.setOrigin(0.5, 0.5);
		text_5.setStyle({ "fontFamily": "Sans-serif", "fontSize": "80px", "fontStyle": "bold" });
		card5.add(text_5);

		// card_Front_5
		const card_Front_5 = this.add.image(960, 211, "Card-Front");
		card_Front_5.scaleX = 0.25;
		card_Front_5.scaleY = 0.25;
		card5.add(card_Front_5);

		this.card_Back_1 = card_Back_1;
		this.text_1 = text_1;
		this.card_Front_1 = card_Front_1;
		this.card_Back_2 = card_Back_2;
		this.text_2 = text_2;
		this.card_Front_2 = card_Front_2;
		this.card_Back_3 = card_Back_3;
		this.text_3 = text_3;
		this.card_Front_3 = card_Front_3;
		this.card_Back_4 = card_Back_4;
		this.text_4 = text_4;
		this.card_Front_4 = card_Front_4;
		this.card_Back_5 = card_Back_5;
		this.text_5 = text_5;
		this.card_Front_5 = card_Front_5;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	card_Back_1;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Image} */
	card_Front_1;
	/** @type {Phaser.GameObjects.Image} */
	card_Back_2;
	/** @type {Phaser.GameObjects.Text} */
	text_2;
	/** @type {Phaser.GameObjects.Image} */
	card_Front_2;
	/** @type {Phaser.GameObjects.Image} */
	card_Back_3;
	/** @type {Phaser.GameObjects.Text} */
	text_3;
	/** @type {Phaser.GameObjects.Image} */
	card_Front_3;
	/** @type {Phaser.GameObjects.Image} */
	card_Back_4;
	/** @type {Phaser.GameObjects.Text} */
	text_4;
	/** @type {Phaser.GameObjects.Image} */
	card_Front_4;
	/** @type {Phaser.GameObjects.Image} */
	card_Back_5;
	/** @type {Phaser.GameObjects.Text} */
	text_5;
	/** @type {Phaser.GameObjects.Image} */
	card_Front_5;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();

		this.i = 0
		for (var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], i = a.length; i--;) {
			if (this.i < 5) {
				this.checkAction((this.i))
				this.txt = this.text
				this.txt.text = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
				console.log(this.txt.text)
				tempArry.push(parseInt(this.txt.text))
				this.i++
			}
		}

		for (this.i = 0; this.i < 5; this.i++) {
			this.checkAction(this.i)
			let tween = this.tweens.add({
				targets: this.card,
				ease: 'Back',
				// duration: 800,
				repeat: 0,
				x: this.arryX[this.i],
				y: 751,
				delay: (this.i) * 200
			});
		}

		setTimeout(() => {
			for (this.i = 0; this.i < 5; this.i++) {
				this.checkAction(this.i)
				let tween = this.tweens.add({
					targets: this.card,
					props: {
						// duration: 800,
						scaleX: 0
					},
					repeat: 0,
					delay: (this.i) * 500,
					// onComplete: this.tweenComplete(this.i),
				})
			}
		}, 1000)

		setTimeout(() => {
			for (this.i = 0; this.i < 5; this.i++) {
				this.checkAction(this.i)
				let tweenText = this.tweens.add({
					targets: this.text,
					props: {
						// duration: 100,
						scaleX: 1
					},
					repeat: 0,
					delay: (this.i) * 500
				})
			}
			for (this.i = 0; this.i < 5; this.i++) {
				this.checkAction(this.i)
				let tweenCard = this.tweens.add({
					targets: this.cardBack,
					props: {
						// duration: 100,
						scaleX: 0.25
					},
					repeat: 0,
					delay: (this.i) * 500
				})
			}
		}, 2000)


		setTimeout(() => {
			const index = tempArry.indexOf(Math.max(...tempArry));
			this.i = index
			this.checkAction(this.i)
			let tweenMaxCard = this.tweens.add({
				targets: this.cardBack,
				props: {
					duration : 1000,
					ease: 'Linear',
					x : 960,
					y: 211
				},
				repeat: 0,
				delay: 2000
			})
			let tweenMaxCardText = this.tweens.add({
				targets: this.text,
				props: {
					duration : 1000,
					ease: 'Linear',
					x : 960,
					y: 211
				},
				repeat: 0,
				delay: 2000
			})
		}, 3500)
	}


	checkAction(i) {
		if (this.i === 0) this.card = this.card_Front_1
		else if (this.i === 1) this.card = this.card_Front_2
		else if (this.i === 2) this.card = this.card_Front_3
		else if (this.i === 3) this.card = this.card_Front_4
		else if (this.i === 4) this.card = this.card_Front_5

		if (this.i === 0) this.text = this.text_1
		else if (this.i === 1) this.text = this.text_2
		else if (this.i === 2) this.text = this.text_3
		else if (this.i === 3) this.text = this.text_4
		else if (this.i === 4) this.text = this.text_5

		if (this.i === 0) this.cardBack = this.card_Back_1
		else if (this.i === 1) this.cardBack = this.card_Back_2
		else if (this.i === 2) this.cardBack = this.card_Back_3
		else if (this.i === 3) this.cardBack = this.card_Back_4
		else if (this.i === 4) this.cardBack = this.card_Back_5

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
