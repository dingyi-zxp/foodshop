Component({
	/**
	 * swipers: swiper of data;
	 * dots_location: dots icon display of location
	 * -left -center -right
	 */
	properties: {
		swipers: {
			type: Array,
		},
		dots_location: {
			type: String,
			value: "center",
		},
	},

	attached: function () {
		console.log(this.data.swipers);
		this.init_data();
	},

	data: {
		dots: 0, // dot nums
		autoplay: false, // swiper autoplay
		indicator_dots: false, // swiper indicator_dots
		interval: 5000, // swiper interval
		dots_loc: "c-swiper-dots-", // dots display of location
		swiper_current: 0, // dots current state
	},

	methods: {
		/*
		 * init data:
		 * autoplay: swipers of length greater than 1
		 * dots: swipers length
		 * dots_loc: dots location
		 * */
		init_data: function () {
			let data = this.data;
			let dots: number = data.swipers.length;

			let autoplay: boolean = dots > 1 ? true : false;
			let dots_loc: string = data.dots_loc + data.dots_location;
			this.setData({
				dots: dots,
				autoplay: autoplay,
				dots_loc: dots_loc,
			});
		},

		/*
		 * watch swiper current moitor
		 * */
		moitorCurrent: function (e: any) {
			let current = e.detail.current;

			this.setData({
				swiper_current: current,
			});
		},
	},
});
