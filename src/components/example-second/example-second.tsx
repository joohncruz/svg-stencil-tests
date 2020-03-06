import { Component, Host, h } from '@stencil/core';
import { iconPath } from './svgs';

@Component({
  tag: "example-second",
  styleUrl: "example-second.css",
  shadow: true
})
export class ExampleSecond {

  render() {

    return (
      <Host>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="24"
          width="24"
          viewBox={`0 0 24 24`}
        >
          <path d={iconPath} />
        </svg>
      </Host>
    );
  }

}