import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg">
  <path d="M1.006 30.479c.511-1.908.977-3.53.977-6.76v-4.341c0-2.84-.586-4.462-1.983-6.13v-.15l8.187-2.253v12.889c0 3.184.315 4.897.931 6.76v.075H1.006v-.09zm3.5-21.977c-1.862 0-3.334-1.517-3.334-3.38a3.337 3.337 0 013.334-3.334c1.863 0 3.41 1.517 3.41 3.334 0 1.863-1.547 3.38-3.41 3.38zM31.26 34.159c2.103.195 5.783.24 7.42-2.524l-5.678-14.09c-1.547-3.725-2.103-4.852-2.944-5.828v-.075h9.508v.075c-.706.886-1.006 3.455.046 6.053l2.328 6.054 2.569-6.129c1.126-2.794.39-5.092-.391-5.978v-.075h4.972v.075c-1.322 1.442-2.283 2.673-3.605 5.858l-5.242 12.543c-3.11 7.33-5.393 8.157-8.968 9.163V34.16h-.015zM46.792 21.12c0-5.393 4.732-10.094 10.44-10.094 5.708 0 10.44 4.701 10.44 10.094s-4.732 10.02-10.44 10.02c-5.708 0-10.44-4.627-10.44-10.02zm14.45 0c0-5.513-1.246-9.358-3.995-9.358-2.794 0-3.996 3.845-3.996 9.358 0 5.468 1.247 9.283 3.996 9.283 2.749 0 3.995-3.815 3.995-9.283zm7.406-3.575c-1.322-3.38-2.058-4.702-3.064-5.828v-.075h9.673v.075c-.706.886-.93 3.38 0 5.783l2.374 6.174 2.448-5.828c1.247-2.915.39-5.318-.24-6.13v-.074h4.852v.075c-1.322 1.442-2.253 2.643-3.605 5.858L75.528 30.81H74.01l-5.363-13.264zm23.989 10.56c-1.081 1.592-2.944 3.035-5.437 3.035-2.374 0-4.387-1.202-4.387-3.876 0-4.191 5.318-6.024 9.704-6.955v-2.403c0-2.284-.931-3.335-3.725-3.335-1.517 0-3.305.315-5.047 1.051l-.15-.27c1.862-2.313 4.881-4.326 9.117-4.326 4.191 0 6.054 2.013 6.054 5.092v9.974c0 .932.42 1.743 1.667 1.743.421 0 .977-.12 1.473-.466l.075.15c-.541 1.277-1.908 3.575-5.198 3.575-2.358 0-3.8-1.246-4.146-2.989zm-.12-.736V21.12c-2.764.736-4.236 2.283-4.236 4.116 0 1.517.886 2.524 2.599 2.524.63 0 1.172-.12 1.637-.39z" fill="#2F2C26"/><path d="M33.333 27.37a2.664 2.664 0 01-1.473.465c-1.246 0-1.667-.811-1.667-1.743v-9.674c0-3.304-2.403-5.392-5.828-5.392-3.455 0-5.468 2.058-6.52 3.725l-.15-.045v-3.875L9.66 13.084v.075c1.397 1.667 1.938 3.26 1.938 6.174l.045 4.386c0 3.26-.346 4.897-.977 6.76v.075h8.112v-.075c-.616-1.908-.931-3.53-.931-6.76v-7.886c.735-1.052 1.982-1.908 3.41-1.908 1.862 0 2.673 1.202 2.673 2.869v10.02c0 .33.06 1.006.12 1.276.346 1.743 1.788 2.99 4.161 2.99 3.305 0 4.657-2.284 5.198-3.576l-.075-.135z" fill="#2F2C26"/><path d="M129.2 20.97V0h-21.015c0 11.582 9.418 21 21 21h-21v21c11.596 0 21.015-9.403 21.015-21h21.015V0c-11.582 0-21 9.403-21.015 20.97z" fill="#EE3C15"/></svg>
`;

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
   }

  ngOnInit(): void {
  }

}