import { Component, Host, h } from "@stencil/core";

@Component({
  assetsDirs: ["svg"],
  tag: "example-first",
  styleUrl: "example-first.css",
  shadow: true
})
export class ExampleFirst {

  render() {
    const iconPath = "M18 16v-5.087A5.91 5.91 0 0 0 13.59 5.2a2 2 0 1 0-3.18 0A5.91 5.91 0 0 0 6 10.913V16a3 3 0 0 1-3 3v1h18v-1a3 3 0 0 1-3-3zM12 3a1 1 0 1 1-1 1 1.001 1.001 0 0 1 1-1zM5.643 19A3.992 3.992 0 0 0 7 16v-5.087A4.919 4.919 0 0 1 11.913 6h.174A4.919 4.919 0 0 1 17 10.913V16a3.992 3.992 0 0 0 1.357 3zM13 21h1a2 2 0 0 1-4 0h1a1 1 0 0 0 2 0z";

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