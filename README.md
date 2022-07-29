# mvcc-component-js

"A class for building components and custom tags.

It has many advantages over React.js

* No build tools are needed
* No JSX is needed
* No root element or Fragment is needed
* Lightweight and faster

## Skill Prerequisites

A basic understanding of the following skills are necessary to use this project.

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Tool Dependencies

Install the following tools to use this project in your local development environment.

* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com/)
* [GitHub Desktop](https://desktop.github.com/)

## Installing

Follow these steps to install this project.

	git clone https://github.com/mvcc-component-js/mvcc-component.git
	cd mvcc-component
	npm install
	npm build

## Building

Use the following CL commands to test or compile this project:

| Name          | Description                                          |
| ------------- | ---------------------------------------------------- |
| npm run build | Build the project                                    |

## Quick Example

**JS**

	class Example extends MvccComponent {
		render(state, props) {
			return `
				<div>
					Hello ${props.name}
				</div>
			`;
		}
	}

	Example.register("my-example", Example);

**HTML**

	<my-example name="World"> </my-example>

## Documentation

All documentation can be found on our [Canvas course](https://canvas.morainevalley.edu/enroll/JE48AC).

## Contributing

Pull requests are encouraged and welcome.

## License

MIT
