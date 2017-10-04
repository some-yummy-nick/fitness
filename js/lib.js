;(function(global) {

	var createElement = function(cls, parent) {
		var obj = document.createElement('div');
		obj.className = cls;
		if (parent) {
			parent.appendChild(obj);
		}
		return obj;
	}

	function Popup() {

		this.tags = {};
		this.tags.popup = createElement('popup', document.body);
		this.tags.popup__table = createElement('popup__table', this.tags.popup);
		this.tags.popup__cell = createElement('popup__cell', this.tags.popup__table);
		this.tags.popup__block = createElement('popup__block', this.tags.popup__cell);
		this.tags.popup__close = createElement('popup__close', this.tags.popup__block);
		this.tags.popup__change = createElement('popup__change', this.tags.popup__block);

		this.eventsTrigger = "click";

		this.events();
		this.scrollWidth = this.scrollWidthElement();

		this.defaults = {
			closeShow: true,
			background: '',
			closeButtons: '',
			offsetY: 0,
			offsetX: 0,
			coordElement: ''
		};

	}

	Popup.prototype = {

		options: function(opts) {

			this.defaults = this.extend({
				closeShow: true,
				background: '',
				closeButtons: '',
				offsetY: 0,
				offsetX: 0,
				coordElement: ''
			}, opts);

			if (this.defaults.background) {
				this.tags.popup.style.background = this.defaults.background;
			}

			return this;

		},

		extend: function(defaults, source) {

			for (var key in source) {
				if (source.hasOwnProperty(key)) {
					defaults[key] = source[key];
				}
			}

			return defaults;
		},

		addCloseButtons: function() {

			var obj = this;
			var buttons = (this.defaults.closeButtons).split(',');

			buttons.forEach(function(item, index) {

				var selectors = document.querySelectorAll(item.replace(/\s+/g, ''));

				Array.prototype.forEach.call(selectors, function(element, i) {

					element.addEventListener(obj.eventsTrigger, function() {

						obj.close();

						return false;

					}, false);

				});

			});

		},

		coordSet: function() {

			var obj = this;
			var button = document.querySelector(this.defaults.coordElement);

			this.coords = button.getBoundingClientRect();

			this.tags.popup__block.style.left = this.coords.left + this.defaults.offsetX + 'px';
			this.tags.popup__block.style.top = this.coords.top + this.defaults.offsetY + 'px';
			this.tags.popup__block.style.position = 'absolute';

			return this;

		},

		coordReset: function() {

			this.defaults = {
				closeShow: true,
				background: '',
				closeButtons: '',
				offsetY: 0,
				offsetX: 0,
				coordElement: ''
			};

			this.tags.popup.style.background = '';

			this.tags.popup__block.style.left = '';
			this.tags.popup__block.style.top = '';
			this.tags.popup__block.style.position = '';
			return this;
		},

		setBodyStyle: function() {

			var trigger = window.innerHeight < document.body.scrollHeight;

			document.body.classList.add('popup__body_hidden');

			if(trigger) {
				document.body.style.paddingRight = this.scrollWidth + 'px';
			}
			return this;

		},

		clearBodyStyle: function() {

			document.body.classList.remove('popup__body_hidden');
			document.body.style.paddingRight = '';
			return this;

		},

		html: function(response, callback) {

			if(this.defaults.closeShow) {
				this.tags.popup__close.style.display = 'block';
			}
			else {
				this.tags.popup__close.style.display = 'none';
			}

			this.setBodyStyle();

			if(this.defaults.coordElement) {

				this.coordSet();

			}

			this.tags.popup__change.innerHTML = response;

			if(callback) {
				callback();
			}

			if (this.defaults.closeButtons) {
				this.addCloseButtons();
			}

			return this;

		},

		append: function(response, callback) {

			if(this.defaults.closeShow) {
				this.tags.popup__close.style.display = 'block';
			}
			else {
				this.tags.popup__close.style.display = 'none';
			}

			this.setBodyStyle();

			if(this.defaults.coordElement) {

				this.coordSet();

			}

			this.tags.popup__change.innerHTML += response;

			if(callback) {
				callback();
			}

			if (this.defaults.closeButtons) {
				this.addCloseButtons();
			}

			return this;
		},

		clear: function() {

			this.tags.popup__change.innerHTML = '';
			return this;

		},

		show: function(callback) {

			this.tags.popup.classList.add('popup_active');

			if(callback) {
				callback();
			}

			return this;

		},

		close: function(callback) {

			this.tags.popup.classList.remove('popup_active');
			this.clear();


			this.defaults = {
				closeShow: true,
				background: '',
				closeButtons: '',
				offsetX: 0,
				offsetY: 0,
				coordElement: ''
			};

			if(callback) {
				callback();
			}

			this.clearBodyStyle();

			return this;

		},

		events: function() {

			var obj = this;
			var trigger = false;

			this.tags.popup__close.addEventListener(this.eventsTrigger, function() {

				obj.close();
				return false;

			}, false);

			this.tags.popup__change.addEventListener(this.eventsTrigger, function(e) {
				e.stopPropagation();
			});

			this.tags.popup.addEventListener('touchstart', function() {
				trigger = false;
			}, false);

			this.tags.popup.addEventListener('touchmove', function() {
				trigger = true;
			}, false);

			this.tags.popup.addEventListener(this.eventsTrigger, function() {

				if(!trigger) {
					obj.close();
				}
				return false;

			}, false);

			document.addEventListener('keydown', function(e) {

				if (e.which == 27) {
					obj.close();
				}

			}, false);

		},

		scrollWidthElement: function() {

			var div = document.createElement("div");
			div.style.overflowY = "scroll";
			div.style.width = "50px";
			div.style.height = "50px";
			div.style.visibility = "hidden";

			document.body.appendChild(div);
			var scrollWidth = div.offsetWidth - div.clientWidth;
			document.body.removeChild(div);

			return scrollWidth;

		}
	}

	window.Popup = Popup;

})(window);
