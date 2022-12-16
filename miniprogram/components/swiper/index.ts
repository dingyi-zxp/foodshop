Component({
	attached: function () {
		console.log(this.data.swipers);

		this.init_data();
	},
	properties: {
		swipers: {
			type: Array,
		},
	},

	data: {
		dots: 0,
		autoplay: false,
		indicator_dots: true,
	},

	methods: {
		init_data: function () {
			// init dot
			this.data.dots = this.data.swipers.length;
		},
	},
});
