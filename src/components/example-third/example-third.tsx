// import { Component, Host, h, State, getAssetPath } from '@stencil/core';

// @Component({
//   tag: "example-third",
//   assetsDirs: ['assets'],
//   styleUrl: "example-third.css",
//   shadow: true
// })
// export class ExampleThird {
//   @State() private svgContent?: string;

//   connectedCallback() {
//     this.loadIconPathData();
//   }

//   private async loadIconPathData(): Promise<void> {
//     const icon = 'user'
//     const path = getAssetPath(`./svg/${icon}.svg`);
//     console.log('LIB TRACE: loadIconPathData path', path);
//     const response = await import(/* webpackMode: "eager" */ path);
//     console.log('LIB TRACE: loadIconPathData response', response);

//     console.log(path);
//   }

//   render() {
//     return (
//       <Host role="img" class="example-icon">{(
//         (this.svgContent)
//           ? <div class="icon-inner" innerHTML={this.svgContent}></div>
//           : <div class="icon-inner"></div>
//       )}
//       </Host>
//     );
//   }

// }