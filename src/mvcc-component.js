/**
 * Utility class to return an object from array values.
 */
function mvccArrayToObject(values) {
	let items = [... values];

	return Object.fromEntries(
		items.map((item) => {
			return [item. name, item. value];
		}
	));
}

/**
 * Build a custom component or tag.
 * @extends HTMLElement
 */
class MvccComponent extends HTMLElement {
	/**
	 * The constructor function. Default state can be passed in super.
	 * @param state {object} The initial state.
	 */
	constructor(state = {}) {
		super();

		/**
		 * Returns the state object that contains internal states.
		 * @return {object} The state.
		 */
		this.state = state;

		/**
		 * Returns the props object that contains HTML attributes.
		 * @return {object} The state.
		 */
		this.props = mvccArrayToObject(this.attributes);

		/**
		 * Returns the root of the shadow DOM.
		 * @return {object} The root.
		 */
		this.root = this.attachShadow({mode: "open"});

		//
		// Perform an initial render.
		//
		this._render();

		//
		// Invoke the created lifecycle hook.
		//
		this.created();
	}

	/**
	 * Internal function to render the component.
	 */
	_render() {
		//
		// Remove the hidden attribute that has
		// been repurposed to hide the component
		// while it is being rendered to the DOM.
		//
		this.removeAttribute("hidden");

		//
		// Convert the attributes to properties.
		//
		this.props = mvccArrayToObject(this.attributes);

		//
		// Render the component to the shadow root.
		//
		if(this.rendering() == true) {
			this.shadowRoot.innerHTML = this.render(this.state, this.props);
		}
	}

	/**
	 * Update the component's internal state.
	 * @param name    {string} The tag name.
	 * @param element {object} The component.
	 */
	update(newState) {
		//
		// Define the previous component state.
		//
		const prevState = this.state;

		//
		// Invoke the updating lifecycle hook.
		//
		if(this.updating(prevState) == true) {
			//
			// Update the component's state.
			//
			this.state = {...this.state, ...newState};

			//
			// Render the component to the DOM.
			//
			//
			this._render();
		}
	}

	/**
	 * Registers a component with the DOM.
	 * @param name    {string} The tag name.
	 * @param element {object} The component.
	 */
	static register(name, element) {
		window.customElements.define(name, element);
	}

	/**
	 * Invoked after the component was created. Used mainly to add listeners.
	 */
	created() {}

	/**
	 * Invoked before the component renders and determines if it can.
	 * @param  {object} state - The state.
	 * @param  {object} props - The props.
	 * @return {boolean} Determines if the component should render.
	 */
	rendering(state, props) { return true; }

	/**
	 * Invoked during the component render.
	 * @param  {object} state - The state.
	 * @param  {object} props - The props.
	 * @return {string} The templated string.
	 */
	render(state, props) { return ""; }

	/**
	 * Invoked before the component is updated.
	 * @param  {object}  prev - The previous state.
	 * @return {boolean} Boolean - Determines if the component should update.
	 */
	updating(prev) {return true; }
}
