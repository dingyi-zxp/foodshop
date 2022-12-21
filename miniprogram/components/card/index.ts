import { more as more_icon } from "../../utils/icons";

// card component
const prefix_color = "color-background-";
Component({
	options: {
		multipleSlots: true,
	},
	properties: {
		// letf and right of margin
		lr_margin: {
			type: String,
			value: "0px",
		},
		// up and down right of margin
		ud_margin: {
			type: String,
			value: "0px",
		},
		color_header: {
			type: String,
			value: "white",
		},
		color_body: {
			type: String,
			value: "white",
		},
		// logo
		logo: {
			type: String,
			value: "https://ssl-pubpic.51yund.com/1326697398.jpg",
		},
		title: {
			type: String,
			value: "很长的文字eeeee",
		},
		title_more: {
			type: Boolean,
			value: false,
		},
		title_bold: {
			type: Boolean,
			value: false,
		},
		// user model
		user_into: {
			type: Boolean,
			value: true,
		},
	},

	attached: function () {
		this.init_data();
		console.log(more_icon);
	},

	data: {
		colors: {
			header: "white",
			body: "white",
		},
	},

	methods: {
		/**
		 * init data
		 * - color
		 */
		init_data: function () {
			const data = this.data;
			let colors = {
				header: prefix_color + data.color_header,
				body: prefix_color + data.color_body,
			};

			this.setData({
				colors: colors,
				more_icon: more_icon,
			});
		},
	},
});
