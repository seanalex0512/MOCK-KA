// ── HASH UTILITY ──
// Answers are stored as SHA-256 hashes so students cannot read them from source
async function hashAnswer(qId, key) {
  const encoder = new TextEncoder();
  const data = encoder.encode("mockka2026" + qId + key);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  const arr = Array.from(new Uint8Array(buffer));
  return arr.map(function(b) { return b.toString(16).padStart(2, "0"); }).join("").substring(0, 16);
}

// Find the correct answer key by checking all options against the hash
async function findCorrectKey(qId, hash) {
  var keys = ["A", "B", "C", "D"];
  for (var i = 0; i < keys.length; i++) {
    var h = await hashAnswer(qId, keys[i]);
    if (h === hash) return keys[i];
  }
  return null;
}

// ── MCQ DATA ──
const mcqQuestions = [
  {
    id: 1,
    text: "Choose the HTML tag used to create the largest heading on a webpage.",
    options: [
      { key: "A", text: "<code>&lt;h6&gt;</code>" },
      { key: "B", text: "<code>&lt;title&gt;</code>" },
      { key: "C", text: "<code>&lt;h1&gt;</code>" },
      { key: "D", text: "<code>&lt;header&gt;</code>" }
    ],
    answer: "510eeabe7749d115",
    explanation: "The <code>&lt;h1&gt;</code> tag defines the largest and most important heading in HTML. <code>&lt;h6&gt;</code> is the smallest heading."
  },
  {
    id: 2,
    text: "Select the correct HTML tag used to make text appear in italic.",
    options: [
      { key: "A", text: "<code>&lt;strong&gt;</code>" },
      { key: "B", text: "<code>&lt;em&gt;</code>" },
      { key: "C", text: "<code>&lt;b&gt;</code>" },
      { key: "D", text: "<code>&lt;u&gt;</code>" }
    ],
    answer: "09a205f3ba4d17f6",
    explanation: "The <code>&lt;em&gt;</code> tag is used to emphasize text, which browsers typically render in italic."
  },
  {
    id: 3,
    text: "Select the HTML tag used to create a hyperlink.",
    options: [
      { key: "A", text: "<code>&lt;link&gt;</code>" },
      { key: "B", text: "<code>&lt;href&gt;</code>" },
      { key: "C", text: "<code>&lt;a&gt;</code>" },
      { key: "D", text: "<code>&lt;url&gt;</code>" }
    ],
    answer: "93312af347ef1837",
    explanation: "The <code>&lt;a&gt;</code> (anchor) tag is used to create hyperlinks. The <code>href</code> attribute specifies the URL, but it is not a tag itself."
  },
  {
    id: 4,
    text: "Select the HTML element used to define an unordered list.",
    options: [
      { key: "A", text: "<code>&lt;ol&gt;</code>" },
      { key: "B", text: "<code>&lt;li&gt;</code>" },
      { key: "C", text: "<code>&lt;ul&gt;</code>" },
      { key: "D", text: "<code>&lt;list&gt;</code>" }
    ],
    answer: "178c8f3ea3cbf75f",
    explanation: "The <code>&lt;ul&gt;</code> tag defines an unordered (bulleted) list. <code>&lt;ol&gt;</code> is for ordered (numbered) lists."
  },
  {
    id: 5,
    text: "Select the CSS property used to change the text color of an element.",
    options: [
      { key: "A", text: "font-color" },
      { key: "B", text: "text-color" },
      { key: "C", text: "color" },
      { key: "D", text: "foreground-color" }
    ],
    answer: "e0cc64136fb1b32b",
    explanation: "The CSS <code>color</code> property sets the text color. There is no <code>font-color</code> or <code>text-color</code> property in CSS."
  },
  {
    id: 6,
    text: "Select the CSS property used to change the background color of an element.",
    options: [
      { key: "A", text: "color" },
      { key: "B", text: "bg-color" },
      { key: "C", text: "background-color" },
      { key: "D", text: "font-color" }
    ],
    answer: "d33dc2e42a3d4b91",
    explanation: "The <code>background-color</code> property sets the background color. <code>color</code> only affects text color."
  },
  {
    id: 7,
    text: "Choose the correct HTML attribute used to apply a CSS class to an element.",
    options: [
      { key: "A", text: "id" },
      { key: "B", text: "style" },
      { key: "C", text: "class" },
      { key: "D", text: "name" }
    ],
    answer: "bca7d01f6f52df5f",
    explanation: "The <code>class</code> attribute is used to apply one or more CSS classes to an HTML element."
  },
  {
    id: 8,
    text: "Select the correct CSS property used to add space between an element's border and its content.",
    options: [
      { key: "A", text: "margin" },
      { key: "B", text: "border-spacing" },
      { key: "C", text: "padding" },
      { key: "D", text: "gap" }
    ],
    answer: "382488e63fa27455",
    explanation: "The <code>padding</code> property adds space inside an element, between its content and its border. <code>margin</code> adds space outside the border."
  },
  {
    id: 9,
    text: "Select the HTML tag used to embed an image on a webpage.",
    options: [
      { key: "A", text: "<code>&lt;img&gt;</code>" },
      { key: "B", text: "<code>&lt;image&gt;</code>" },
      { key: "C", text: "<code>&lt;picture&gt;</code>" },
      { key: "D", text: "<code>&lt;src&gt;</code>" }
    ],
    answer: "23f5466be7936307",
    explanation: "The <code>&lt;img&gt;</code> tag is the standard HTML element for embedding images. It uses the <code>src</code> attribute to specify the image source."
  },
  {
    id: 10,
    text: "Select the purpose of Google Web Fonts.",
    options: [
      { key: "A", text: "To optimize website performance" },
      { key: "B", text: "To provide a library of free fonts for web projects" },
      { key: "C", text: "To validate HTML and CSS code" },
      { key: "D", text: "To create custom animations" }
    ],
    answer: "8f9b169a4ff9f526",
    explanation: "Google Web Fonts (Google Fonts) provides a large library of free, open-source fonts that can be used in web projects."
  },
  {
    id: 11,
    text: "Select the CSS property that controls the size of text on a webpage.",
    options: [
      { key: "A", text: "text-size" },
      { key: "B", text: "font-weight" },
      { key: "C", text: "font-style" },
      { key: "D", text: "font-size" }
    ],
    answer: "0538046c5f0a9046",
    explanation: "The <code>font-size</code> property controls the size of text. <code>font-weight</code> controls boldness and <code>font-style</code> controls italic."
  },
  {
    id: 12,
    text: "Choose the CSS property used to make text bold without using an HTML tag.",
    options: [
      { key: "A", text: "font-style: bold" },
      { key: "B", text: "text-decoration: bold" },
      { key: "C", text: "font-weight: bold" },
      { key: "D", text: "text-transform: bold" }
    ],
    answer: "daabaf31f0df3b41",
    explanation: "The <code>font-weight: bold</code> CSS declaration makes text bold. <code>font-style</code> is for italic, not bold."
  },
  {
    id: 13,
    text: "Select the type of CSS positioning that removes an element from the normal document flow and positions it relative to its nearest positioned ancestor.",
    options: [
      { key: "A", text: "static" },
      { key: "B", text: "relative" },
      { key: "C", text: "absolute" },
      { key: "D", text: "sticky" }
    ],
    answer: "52ca17eb4bef3a81",
    explanation: "Absolute positioning removes the element from normal flow and positions it relative to the nearest ancestor that has a position value other than static."
  },
  {
    id: 14,
    text: "Select the correct class that set the font size of an element to the largest size using Bootstrap's text utilities.",
    options: [
      { key: "A", text: ".fs-1" },
      { key: "B", text: ".fs-3" },
      { key: "C", text: ".fs-6" },
      { key: "D", text: ".fs-max" }
    ],
    answer: "fd8cca33c0235e03",
    explanation: "In Bootstrap, <code>.fs-1</code> sets the largest font size and <code>.fs-6</code> sets the smallest. There is no <code>.fs-max</code> class."
  },
  {
    id: 15,
    text: "Select the correct Bootstrap class used to create a container that spans the full width of the viewport.",
    options: [
      { key: "A", text: ".container" },
      { key: "B", text: ".container-fluid" },
      { key: "C", text: ".container-full" },
      { key: "D", text: ".container-wide" }
    ],
    answer: "4d9a40ddf5c7404a",
    explanation: "The <code>.container-fluid</code> class creates a full-width container that spans the entire viewport width."
  },
  {
    id: 16,
    text: "Select the default value of the <code>flex-direction</code> property in a Flexbox layout.",
    options: [
      { key: "A", text: "row" },
      { key: "B", text: "row-reverse" },
      { key: "C", text: "column" },
      { key: "D", text: "column-reverse" }
    ],
    answer: "f346269d3017f111",
    explanation: "The default value of <code>flex-direction</code> is <code>row</code>, which places flex items horizontally from left to right."
  },
  {
    id: 17,
    text: "Choose the CSS property used to align flex items along the cross axis (vertically in a row layout).",
    options: [
      { key: "A", text: "justify-content" },
      { key: "B", text: "align-items" },
      { key: "C", text: "flex-align" },
      { key: "D", text: "vertical-align" }
    ],
    answer: "47f5980f531671d3",
    explanation: "The <code>align-items</code> property aligns flex items along the cross axis. <code>justify-content</code> aligns along the main axis."
  },
  {
    id: 18,
    text: "Choose the correct Bootstrap class prefix used to target medium-sized screens (tablets).",
    options: [
      { key: "A", text: ".col-sm-" },
      { key: "B", text: ".col-md-" },
      { key: "C", text: ".col-lg-" },
      { key: "D", text: ".col-xl-" }
    ],
    answer: "ea970a8b9d0e0b6c",
    explanation: "The <code>.col-md-</code> prefix targets medium-sized screens (tablets, typically 768px and up)."
  },
  {
    id: 19,
    text: "Choose the correct purpose of adding a breakpoint to a column class in Bootstrap.",
    options: [
      { key: "A", text: "To change the color of column" },
      { key: "B", text: "To make the column non-responsive" },
      { key: "C", text: "To create a fixed-width column" },
      { key: "D", text: "To make the column responsive at specific screen widths" }
    ],
    answer: "72a3643654539f79",
    explanation: "Breakpoints in Bootstrap column classes (e.g. <code>col-md-6</code>) make the column behave responsively at specific screen widths."
  },
  {
    id: 20,
    text: "Choose the correct method to create a grid container in CSS.",
    options: [
      { key: "A", text: "display: block;" },
      { key: "B", text: "display: flex;" },
      { key: "C", text: "display: grid;" },
      { key: "D", text: "display: inline;" }
    ],
    answer: "ac9875aa9dc7227e",
    explanation: "Setting <code>display: grid</code> on a container creates a CSS Grid layout. <code>display: flex</code> creates a Flexbox layout instead."
  },
  {
    id: 21,
    text: "Select the HTML tags used to create a table header cell and a table data cell.",
    options: [
      { key: "A", text: "<code>&lt;th&gt;</code> and <code>&lt;td&gt;</code>" },
      { key: "B", text: "<code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code>" },
      { key: "C", text: "<code>&lt;table&gt;</code> and <code>&lt;tr&gt;</code>" },
      { key: "D", text: "<code>&lt;tr&gt;</code> and <code>&lt;tfoot&gt;</code>" }
    ],
    answer: "881400b4ea6bc8c7",
    explanation: "<code>&lt;th&gt;</code> defines a table header cell (bold and centered by default) and <code>&lt;td&gt;</code> defines a standard data cell."
  },
  {
    id: 22,
    text: "Select the difference between the <code>space-between</code> and <code>space-around</code> values of the justify-content property in Flexbox.",
    options: [
      { key: "A", text: "space-between aligns elements at the container edges, while space-around aligns them at the center." },
      { key: "B", text: "space-between evenly distributes space between elements, while space-around distributes space around elements." },
      { key: "C", text: "space-between allows elements to wrap onto multiple lines, while space-around prevents wrapping." },
      { key: "D", text: "space-between distributes space in reverse order, while space-around distributes space in normal order." }
    ],
    answer: "736ce651a6d8fa32",
    explanation: "<code>space-between</code> places the first item at the start and last at the end, distributing space between them. <code>space-around</code> gives each item equal space on both sides."
  },
  {
    id: 23,
    text: "Select the starting index for elements in an array in JavaScript.",
    options: [
      { key: "A", text: "-1" },
      { key: "B", text: "0" },
      { key: "C", text: "1" },
      { key: "D", text: "2" }
    ],
    answer: "b1d6aef1e6fa4014",
    explanation: "Arrays in JavaScript are zero-indexed, meaning the first element is at index 0."
  },
  {
    id: 24,
    text: "Choose the correct keyword used to create a conditional statement in JavaScript.",
    options: [
      { key: "A", text: "switch" },
      { key: "B", text: "for" },
      { key: "C", text: "if" },
      { key: "D", text: "while" }
    ],
    answer: "f5d761a77690a875",
    explanation: "The <code>if</code> keyword creates a conditional statement. <code>for</code> and <code>while</code> are loops, and <code>switch</code> is a multi-case selector."
  },
  {
    id: 25,
    text: "Select the data type used to represent true or false values in JavaScript.",
    options: [
      { key: "A", text: "String" },
      { key: "B", text: "Number" },
      { key: "C", text: "Boolean" },
      { key: "D", text: "Object" }
    ],
    answer: "e9e8219bba1cad1f",
    explanation: "The Boolean data type has only two values: <code>true</code> and <code>false</code>."
  },
  {
    id: 26,
    text: "Choose the CSS selector that can be used to select all elements that are direct children of a specified element.",
    options: [
      { key: "A", text: "Descendant selector" },
      { key: "B", text: "Child selector" },
      { key: "C", text: "Adjacent sibling selector" },
      { key: "D", text: "Attribute selector" }
    ],
    answer: "cbed2ccc764a07da",
    explanation: "The child selector (<code>&gt;</code>) selects only direct children. The descendant selector (space) selects all nested elements at any depth."
  },
  {
    id: 27,
    text: "Select the correct way to declare a variable in JavaScript that cannot be reassigned.",
    options: [
      { key: "A", text: "var" },
      { key: "B", text: "let" },
      { key: "C", text: "const" },
      { key: "D", text: "fixed" }
    ],
    answer: "76b0a64cd667bc9f",
    explanation: "<code>const</code> declares a variable that cannot be reassigned. <code>let</code> allows reassignment, and <code>var</code> is function-scoped."
  },
  {
    id: 28,
    text: "Choose the correct CSS unit that is relative to the font size of the root element.",
    options: [
      { key: "A", text: "px" },
      { key: "B", text: "em" },
      { key: "C", text: "rem" },
      { key: "D", text: "vh" }
    ],
    answer: "731f6f1bd21ab825",
    explanation: "<code>rem</code> stands for 'root em' and is relative to the root element's font size. <code>em</code> is relative to the parent element's font size."
  },
  {
    id: 29,
    text: "Select the CSS property used to create space outside of an element's border.",
    options: [
      { key: "A", text: "padding" },
      { key: "B", text: "margin" },
      { key: "C", text: "border" },
      { key: "D", text: "gap" }
    ],
    answer: "fa025a4aeb673a82",
    explanation: "<code>margin</code> creates space outside an element's border. <code>padding</code> creates space inside the border."
  },
  {
    id: 30,
    text: "Choose the output of the following code.",
    code: "const colors = ['red', 'green', 'blue', 'yellow'];\nconst result = colors.slice(0, 2);\nconsole.log(result);",
    options: [
      { key: "A", text: "['red', 'green']" },
      { key: "B", text: "['green', 'blue']" },
      { key: "C", text: "['red', 'green', 'blue']" },
      { key: "D", text: "['red']" }
    ],
    answer: "bb03586cdf49a630",
    explanation: "<code>slice(0, 2)</code> extracts elements from index 0 up to (but not including) index 2, which gives <code>['red', 'green']</code>."
  },
  // ROMAN NUMERAL QUESTIONS (31-40)
  {
    id: 31,
    text: "Determine the correct descriptions of units of measurement in CSS for typography:",
    statements: [
      "I. Pixels (px) is an absolute unit of measurement that specifies the exact size of an element on the screen.",
      "II. Ems (em) is a relative unit of measurement that is based on the font size of the parent element.",
      "III. Rems (rem) is a relative unit of measurement based on the font size of the root element.",
      "IV. Percentage (%) is an absolute unit of measurement that cannot scale."
    ],
    options: [
      { key: "A", text: "I, II, III" },
      { key: "B", text: "I, II, IV" },
      { key: "C", text: "I, III, IV" },
      { key: "D", text: "II, III, IV" }
    ],
    answer: "669954a0f5f376e9",
    explanation: "Statements I, II, and III are correct. Percentage (%) is actually a relative unit that scales with the parent element, so IV is incorrect."
  },
  {
    id: 32,
    text: "Choose the correct statements about the <code>'fr'</code> unit in CSS Grid:",
    statements: [
      "I. 'fr' stands for \"fractional unit.\"",
      "II. The 'fr' unit is used to divide the available space in the grid container evenly between the grid tracks.",
      "III. The 'fr' unit can be used to set the size of grid gaps.",
      "IV. The 'fr' unit can only be used with the 'grid-template-columns' property."
    ],
    options: [
      { key: "A", text: "I, II, III" },
      { key: "B", text: "I, II, IV" },
      { key: "C", text: "II, III, IV" },
      { key: "D", text: "I, III, IV" }
    ],
    answer: "b7d4eae7a7492fa5",
    explanation: "I and II are correct. III is wrong because the <code>fr</code> unit cannot be used for grid gaps (gaps use px, em, etc.). IV is wrong because <code>fr</code> can also be used with <code>grid-template-rows</code>."
  },
  {
    id: 33,
    text: "Select the correct statements about the <code>&lt;meta name=\"viewport\"&gt;</code> tag:",
    statements: [
      "I. It helps make a website responsive on different devices like smartphones, tablets, and computers.",
      "II. The width=device-width sets the width of the page to match the screen width of the device.",
      "III. The initial-scale=1.0 sets the initial zoom level when the page is first loaded.",
      "IV. The viewport meta tag is used to define the character encoding for the webpage."
    ],
    options: [
      { key: "A", text: "I, II, III" },
      { key: "B", text: "I, II, IV" },
      { key: "C", text: "I, III, IV" },
      { key: "D", text: "II, III, IV" }
    ],
    answer: "052f682809e7514f",
    explanation: "I, II, and III are correct. IV is wrong — character encoding is set by <code>&lt;meta charset=\"UTF-8\"&gt;</code>, not the viewport tag."
  },
  {
    id: 34,
    text: "Determine the correct descriptions of JavaScript data types:",
    statements: [
      "I. Strings are used to represent text and are enclosed in single or double quotes.",
      "II. Numbers are used for mathematical computations and can represent integers or floating-point values.",
      "III. Booleans can only hold the values true or false.",
      "IV. Arrays are a primitive data type in JavaScript that cannot hold multiple values."
    ],
    options: [
      { key: "A", text: "I, II, III" },
      { key: "B", text: "I, II, IV" },
      { key: "C", text: "I, III, IV" },
      { key: "D", text: "II, III, IV" }
    ],
    answer: "8d1f0e4a824dc404",
    explanation: "I, II, and III are correct. IV is wrong — Arrays are objects (not primitive) and they can hold multiple values."
  },
  {
    id: 35,
    text: "Choose the correct statements about CSS Flexbox:",
    statements: [
      "I. justify-content aligns items along the main axis.",
      "II. align-items aligns items along the cross axis.",
      "III. flex-wrap: wrap allows flex items to wrap onto multiple lines.",
      "IV. flex-direction: column arranges items from left to right."
    ],
    options: [
      { key: "A", text: "I, II, III" },
      { key: "B", text: "I, II, IV" },
      { key: "C", text: "I, III, IV" },
      { key: "D", text: "II, III, IV" }
    ],
    answer: "ac84a89a41a84e14",
    explanation: "I, II, and III are correct. IV is wrong — <code>flex-direction: column</code> arranges items from top to bottom, not left to right."
  },
  {
    id: 36,
    text: "Determine the correct descriptions of Media Queries:",
    statements: [
      "I. Media Queries provide a way to apply different styles to a webpage based on the characteristics of the device it's being viewed on.",
      "II. Media Queries can be used to adjust layout, typography, and other design elements based on the device being viewed on.",
      "III. The basic syntax of a Media Query is: @media media-type and (media-feature-rule) { /* CSS rules go here */ }",
      "IV. Media Queries can only target screen width and no other device characteristics."
    ],
    options: [
      { key: "A", text: "I, II, III" },
      { key: "B", text: "I, II, IV" },
      { key: "C", text: "I, III, IV" },
      { key: "D", text: "II, III, IV" }
    ],
    answer: "e26116b0b75cc2bd",
    explanation: "I, II, and III are correct. IV is wrong — Media Queries can target many characteristics including height, orientation, resolution, and more."
  },
  {
    id: 37,
    text: "Determine the accurate statements about the following code:",
    code: "let i = 1;\nlet sum = 0;\nwhile (i <= 10) {\n    sum += i;\n    i++;\n}\nconsole.log(sum);",
    statements: [
      "I. The code calculates the sum of the numbers from 1 to 10.",
      "II. The output will be 55.",
      "III. The loop will execute 9 times.",
      "IV. The loop will execute 10 times."
    ],
    options: [
      { key: "A", text: "I, II, III" },
      { key: "B", text: "I, II, IV" },
      { key: "C", text: "I, III, IV" },
      { key: "D", text: "II, III, IV" }
    ],
    answer: "4a74972d8ed70f37",
    explanation: "I, II, and IV are correct. The loop runs from i=1 to i=10 (10 iterations), summing 1+2+...+10 = 55. III is wrong — the loop executes 10 times, not 9."
  },
  {
    id: 38,
    text: "Choose the correct statements about CSS Grid:",
    statements: [
      "I. grid-template-columns defines the number and size of columns in a grid container.",
      "II. grid-template-rows defines the number and size of rows in a grid container.",
      "III. The fr unit stands for \"fractional unit\" and divides available space proportionally.",
      "IV. CSS Grid and Flexbox are exactly the same and can be used interchangeably."
    ],
    options: [
      { key: "A", text: "I, II, III" },
      { key: "B", text: "I, II, IV" },
      { key: "C", text: "I, III, IV" },
      { key: "D", text: "II, III, IV" }
    ],
    answer: "38d29e447e363b41",
    explanation: "I, II, and III are correct. IV is wrong — CSS Grid is for two-dimensional layouts while Flexbox is for one-dimensional layouts. They serve different purposes."
  },
  {
    id: 39,
    text: "Select the correct statements about block-level and inline elements in HTML:",
    statements: [
      "I. Block-level elements take up the full width of their container.",
      "II. Inline elements only take up as much width as necessary for their content.",
      "III. <code>&lt;div&gt;</code> is an example of a block-level element.",
      "IV. <code>&lt;span&gt;</code> is an example of a block-level element."
    ],
    options: [
      { key: "A", text: "I, II, III" },
      { key: "B", text: "I, II, IV" },
      { key: "C", text: "I, III, IV" },
      { key: "D", text: "II, III, IV" }
    ],
    answer: "685195e89b202cd6",
    explanation: "I, II, and III are correct. IV is wrong — <code>&lt;span&gt;</code> is an inline element, not a block-level element."
  },
  {
    id: 40,
    text: "Determine the correct descriptions of the <code>&lt;!DOCTYPE html&gt;</code> declaration:",
    statements: [
      "I. The <!DOCTYPE html> declaration must be the first line of an HTML document.",
      "II. The <!DOCTYPE html> declaration informs the browser that the document is written in HTML5.",
      "III. The <!DOCTYPE html> declaration is used to define the character encoding for the webpage.",
      "IV. The <!DOCTYPE html> declaration is a self-closing tag and doesn't require a closing tag."
    ],
    options: [
      { key: "A", text: "I, II, III" },
      { key: "B", text: "I, II, IV" },
      { key: "C", text: "I, III, IV" },
      { key: "D", text: "II, III, IV" }
    ],
    answer: "a83352b6fa076c53",
    explanation: "I, II, and IV are correct. III is wrong — the character encoding is defined by the <code>&lt;meta charset&gt;</code> tag, not the DOCTYPE declaration."
  }
];

// ── SUBJECTIVE DATA ──
const subjectiveQuestions = [
  {
    id: "Q1",
    title: "Question 1: Create a basic webpage using HTML and CSS that includes formatting and styling.",
    totalMarks: 20,
    parts: [
      {
        label: "Part I",
        marks: 10,
        text: "Create an HTML structure that includes a heading (h2) with the text \"My Hobbies\", an ordered list (<code>&lt;ol&gt;</code>) with three hobbies, and a paragraph below the list. Add a class called <code>\"highlight\"</code> to the second list item.",
        scaffold: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Hobbies</title>\n</head>\n<body>\n\n<!-- Only change code below this line -->\n\n\n\n<!-- Only change code above this line -->\n</body>\n</html>",
        fieldId: "subj-1-1"
      },
      {
        label: "Part II",
        marks: 6,
        text: "Create an internal CSS stylesheet for the HTML structure. Apply the following styling:<br>a. Set the background color of the entire page to <code>#f0f0f0</code>.<br>b. Set the font size for the <code>h2</code> element to <code>20px</code> and the font color to <code>darkgreen</code>.",
        scaffold: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Hobbies</title>\n  <style>\n    /* Only change code below this line */\n\n\n\n    /* Only change code above this line */\n  </style>\n</head>\n<body>\n  <!-- (HTML structure from Part I) -->\n</body>\n</html>",
        fieldId: "subj-1-2"
      },
      {
        label: "Part III",
        marks: 4,
        text: "Using the class selector, set the background color to <code>yellow</code> and the font weight to <code>bold</code> for the <code>\"highlight\"</code> class.",
        scaffold: "/* Only change code below this line */\n\n\n\n/* Only change code above this line */",
        fieldId: "subj-1-3"
      }
    ]
  },
  {
    id: "Q2",
    title: "Question 2: Explain the basic Usage of Bootstrap Components",
    totalMarks: 20,
    parts: [
      {
        label: "Part I",
        marks: 6,
        text: "Using Bootstrap's grid system, create a row with four equal columns. In each column, place a paragraph (<code>&lt;p&gt;</code>) with any text you prefer.",
        scaffold: "<div class=\"row\">\n\n\n\n</div>",
        fieldId: "subj-2-1"
      },
      {
        label: "Part II",
        marks: 4,
        text: "Explain how you would implement and use the following Bootstrap component in a web project:<br>a. A button with a primary color",
        scaffold: "",
        fieldId: "subj-2-2"
      },
      {
        label: "Part III",
        marks: 5,
        text: "Design the HTML using CSS. Given an <code>&lt;h1&gt;</code> element with an id of <code>page-title</code>, target this id and apply the following styles:<br>- Set the text color to navy.<br>- Set the font size to 32px.<br>- Add a bottom border of 2px solid gray.<br>- Set the text alignment to center.<br>- Add bottom margin of 15px.",
        scaffold: "// Write your code below this line\n\n",
        fieldId: "subj-2-3"
      },
      {
        label: "Part IV",
        marks: 5,
        text: "Write the HTML for a footer section with the following requirements:<br>- It contains three links: Privacy Policy, Terms of Service, and Contact Us.<br>- Use an unordered list (<code>&lt;ul&gt;</code>) to structure the links.",
        scaffold: "// Write your code below this line\n\n",
        fieldId: "subj-2-4"
      }
    ]
  },
  {
    id: "Q3",
    title: "Question 3: Implement a simple program using loops and arrays in JavaScript",
    totalMarks: 20,
    parts: [
      {
        label: "Part I",
        marks: 4,
        text: "Create an array called <code>colors</code> containing the following strings: <code>\"red\"</code>, <code>\"blue\"</code>, <code>\"green\"</code>, <code>\"yellow\"</code>, and <code>\"purple\"</code>.",
        scaffold: "",
        fieldId: "subj-3-1",
        autoCheck: true,
        testFn: function(code) {
          try {
            var fn = new Function(code + "\nreturn colors;");
            var result = fn();
            var expected = ["red", "blue", "green", "yellow", "purple"];
            if (Array.isArray(result) && JSON.stringify(result) === JSON.stringify(expected)) {
              return { pass: true };
            }
            return { pass: false, msg: "Expected the array <code>colors</code> to be <code>[\"red\", \"blue\", \"green\", \"yellow\", \"purple\"]</code> but got <code>" + JSON.stringify(result) + "</code>." };
          } catch (e) {
            return { pass: false, msg: "Code error: " + e.message };
          }
        }
      },
      {
        label: "Part II",
        marks: 4,
        text: "Using a <code>for</code> loop, iterate over the <code>colors</code> array and print each element (using <code>console.log</code>) in the following format: <code>\"Color [index]: [color name]\"</code>. For example, the first line should read <code>\"Color 1: red\"</code>.",
        scaffold: "",
        fieldId: "subj-3-2",
        autoCheck: true,
        testFn: function(code) {
          try {
            var logs = [];
            var mockConsole = { log: function(msg) { logs.push(msg); } };
            var fullCode = "const colors = ['red', 'blue', 'green', 'yellow', 'purple'];\n" + code;
            var fn = new Function("console", fullCode);
            fn(mockConsole);
            var expected = [
              "Color 1: red",
              "Color 2: blue",
              "Color 3: green",
              "Color 4: yellow",
              "Color 5: purple"
            ];
            if (JSON.stringify(logs) === JSON.stringify(expected)) {
              return { pass: true };
            }
            return { pass: false, msg: "Expected output:<br><code>" + expected.join("<br>") + "</code><br><br>Your output:<br><code>" + (logs.length > 0 ? logs.join("<br>") : "(no output)") + "</code>" };
          } catch (e) {
            return { pass: false, msg: "Code error: " + e.message };
          }
        }
      },
      {
        label: "Part III(a)",
        marks: 3,
        text: "Add the string <code>\"orange\"</code> to the end of the <code>colors</code> array using the appropriate array method.",
        scaffold: "",
        fieldId: "subj-3-3a",
        autoCheck: true,
        testFn: function(code) {
          try {
            var fullCode = "const colors = ['red', 'blue', 'green', 'yellow', 'purple'];\n" + code + "\nreturn colors;";
            var fn = new Function(fullCode);
            var result = fn();
            var expected = ["red", "blue", "green", "yellow", "purple", "orange"];
            if (JSON.stringify(result) === JSON.stringify(expected)) {
              return { pass: true };
            }
            return { pass: false, msg: "Expected <code>[\"red\", \"blue\", \"green\", \"yellow\", \"purple\", \"orange\"]</code> but got <code>" + JSON.stringify(result) + "</code>. Use the <code>push()</code> method." };
          } catch (e) {
            return { pass: false, msg: "Code error: " + e.message };
          }
        }
      },
      {
        label: "Part III(b)",
        marks: 3,
        text: "Remove the last element from the <code>colors</code> array using the appropriate array method.",
        scaffold: "",
        fieldId: "subj-3-3b",
        autoCheck: true,
        testFn: function(code) {
          try {
            var fullCode = "const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];\n" + code + "\nreturn colors;";
            var fn = new Function(fullCode);
            var result = fn();
            var expected = ["red", "blue", "green", "yellow", "purple"];
            if (JSON.stringify(result) === JSON.stringify(expected)) {
              return { pass: true };
            }
            return { pass: false, msg: "Expected <code>[\"red\", \"blue\", \"green\", \"yellow\", \"purple\"]</code> but got <code>" + JSON.stringify(result) + "</code>. Use the <code>pop()</code> method." };
          } catch (e) {
            return { pass: false, msg: "Code error: " + e.message };
          }
        }
      },
      {
        label: "Part III(c)",
        marks: 3,
        text: "Insert the string <code>\"pink\"</code> at the beginning of the <code>colors</code> array using the appropriate array method.",
        scaffold: "",
        fieldId: "subj-3-3c",
        autoCheck: true,
        testFn: function(code) {
          try {
            var fullCode = "const colors = ['red', 'blue', 'green', 'yellow', 'purple'];\n" + code + "\nreturn colors;";
            var fn = new Function(fullCode);
            var result = fn();
            var expected = ["pink", "red", "blue", "green", "yellow", "purple"];
            if (JSON.stringify(result) === JSON.stringify(expected)) {
              return { pass: true };
            }
            return { pass: false, msg: "Expected <code>[\"pink\", \"red\", \"blue\", \"green\", \"yellow\", \"purple\"]</code> but got <code>" + JSON.stringify(result) + "</code>. Use the <code>unshift()</code> method." };
          } catch (e) {
            return { pass: false, msg: "Code error: " + e.message };
          }
        }
      },
      {
        label: "Part III(d)",
        marks: 3,
        text: "Using <code>slice()</code>, extract the third and fourth elements of the modified <code>colors</code> array and print the result.",
        scaffold: "",
        fieldId: "subj-3-3d",
        autoCheck: true,
        testFn: function(code) {
          try {
            var logs = [];
            var mockConsole = { log: function(msg) { logs.push(msg); } };
            var fullCode = "const colors = ['pink', 'red', 'blue', 'green', 'yellow', 'purple'];\n" + code;
            var fn = new Function("console", fullCode);
            fn(mockConsole);
            var expected = ["blue", "green"];
            if (logs.length > 0 && JSON.stringify(logs[0]) === JSON.stringify(expected)) {
              return { pass: true };
            }
            return { pass: false, msg: "Expected output: <code>[\"blue\", \"green\"]</code> (the 3rd and 4th elements). Your output: <code>" + (logs.length > 0 ? JSON.stringify(logs[0]) : "(no output)") + "</code>. Use <code>colors.slice(2, 4)</code>." };
          } catch (e) {
            return { pass: false, msg: "Code error: " + e.message };
          }
        }
      }
    ]
  }
];

// ── STATE ──
var studentName = "";
var submitted = false;

// ── START EXAM ──
function startExam() {
  var input = document.getElementById("student-name");
  var name = input.value.trim();
  if (name.length === 0) {
    document.getElementById("name-error").textContent = "Please enter your name to continue.";
    return;
  }
  studentName = name;
  document.getElementById("name-screen").classList.add("hidden");
  document.getElementById("exam-screen").classList.remove("hidden");
  document.getElementById("header-name").textContent = studentName;
  renderMCQ();
  renderSubjective();
  attachSubjectiveListeners();
}

// allow Enter key to start
document.getElementById("student-name").addEventListener("keydown", function(e) {
  if (e.key === "Enter") startExam();
});

// ── RENDER MCQ ──
function renderMCQ() {
  var container = document.getElementById("mcq-container");
  var html = mcqQuestions.map(function(q) {
    var questionContent = '<div class="question-card" id="mcq-' + q.id + '">';
    questionContent += '<div class="q-number">Question ' + q.id + ' of 40 &bull; 1 Mark</div>';
    questionContent += '<div class="q-text">' + q.text + '</div>';

    if (q.code) {
      questionContent += '<div class="q-code-block">' + escapeHtml(q.code) + '</div>';
    }

    if (q.statements) {
      questionContent += '<div class="q-statements">';
      q.statements.forEach(function(s) {
        questionContent += s + '<br>';
      });
      questionContent += '</div>';
    }

    questionContent += '<div class="options">';
    q.options.forEach(function(opt) {
      questionContent += '<div class="option" onclick="selectOption(' + q.id + ', \'' + opt.key + '\')" id="opt-' + q.id + '-' + opt.key + '">';
      questionContent += '<input type="radio" name="q' + q.id + '" value="' + opt.key + '" id="radio-' + q.id + '-' + opt.key + '">';
      questionContent += '<label for="radio-' + q.id + '-' + opt.key + '">' + opt.key + '. ' + opt.text + '</label>';
      questionContent += '</div>';
    });
    questionContent += '</div>';

    questionContent += '<div class="feedback" id="feedback-' + q.id + '"></div>';
    questionContent += '</div>';
    return questionContent;
  }).join("");

  container.innerHTML = html;
}

// ── SELECT MCQ OPTION ──
function selectOption(qId, key) {
  if (submitted) return;

  var q = mcqQuestions.find(function(item) { return item.id === qId; });
  q.options.forEach(function(opt) {
    document.getElementById("opt-" + qId + "-" + opt.key).classList.remove("selected");
  });
  document.getElementById("opt-" + qId + "-" + key).classList.add("selected");
  document.getElementById("radio-" + qId + "-" + key).checked = true;
  document.getElementById("mcq-" + qId).classList.add("answered");

  updateProgress();
}

// ── UPDATE PROGRESS ──
function updateProgress() {
  var mcqAnswered = 0;
  mcqQuestions.forEach(function(q) {
    var card = document.getElementById("mcq-" + q.id);
    if (card && card.classList.contains("answered")) mcqAnswered++;
  });
  document.getElementById("progress-text").textContent = mcqAnswered + " / 40 answered";

  var subjFilled = 0;
  var subjTotal = 0;
  subjectiveQuestions.forEach(function(q) {
    q.parts.forEach(function(part) {
      subjTotal++;
      var textarea = document.getElementById(part.fieldId);
      if (textarea && textarea.value.trim().length > 0) subjFilled++;
    });
  });

  var totalItems = 40 + subjTotal;
  var totalFilled = mcqAnswered + subjFilled;
  var percent = Math.round((totalFilled / totalItems) * 100);
  document.getElementById("progress-bar").style.width = percent + "%";
}

// ── RENDER SUBJECTIVE ──
function renderSubjective() {
  var container = document.getElementById("subjective-container");
  var html = "";

  subjectiveQuestions.forEach(function(q) {
    html += '<div class="subjective-card" id="' + q.id + '">';
    html += '<div class="subj-header">' + q.title + ' (' + q.totalMarks + ' Marks)</div>';

    q.parts.forEach(function(part) {
      html += '<div class="sub-part" id="part-' + part.fieldId + '">';
      html += '<div class="sub-part-label">' + part.label + '</div>';
      html += '<div class="sub-part-marks">(' + part.marks + ' Marks)</div>';
      html += '<div class="sub-part-text">' + part.text + '</div>';

      if (part.scaffold) {
        html += '<div class="sub-part-scaffold">' + escapeHtml(part.scaffold) + '</div>';
      }

      html += '<textarea id="' + part.fieldId + '" placeholder="Write your answer here..."' + (submitted ? ' disabled' : '') + '></textarea>';
      html += '<div class="feedback" id="feedback-' + part.fieldId + '"></div>';
      html += '</div>';
    });

    html += '</div>';
  });

  container.innerHTML = html;
}

// ── SUBJECTIVE LISTENERS ──
function attachSubjectiveListeners() {
  subjectiveQuestions.forEach(function(q) {
    q.parts.forEach(function(part) {
      var textarea = document.getElementById(part.fieldId);
      if (textarea) {
        textarea.addEventListener("input", updateProgress);
      }
    });
  });
}

// ── SUBMIT EXAM ──
async function submitExam() {
  if (submitted) return;

  var unanswered = [];
  mcqQuestions.forEach(function(q) {
    var card = document.getElementById("mcq-" + q.id);
    if (!card.classList.contains("answered")) {
      unanswered.push(q.id);
    }
  });

  if (unanswered.length > 0) {
    var proceed = confirm("You have " + unanswered.length + " unanswered MCQ question(s). Are you sure you want to submit?");
    if (!proceed) return;
  }

  submitted = true;

  // Grade MCQ using hashed comparison
  var mcqScore = 0;
  for (var i = 0; i < mcqQuestions.length; i++) {
    var q = mcqQuestions[i];
    var selected = document.querySelector('input[name="q' + q.id + '"]:checked');
    var card = document.getElementById("mcq-" + q.id);
    var feedbackEl = document.getElementById("feedback-" + q.id);

    var correctKey = await findCorrectKey(q.id, q.answer);
    var isCorrect = false;

    if (selected) {
      var selectedHash = await hashAnswer(q.id, selected.value);
      isCorrect = selectedHash === q.answer;
    }

    if (isCorrect) {
      mcqScore++;
      card.classList.add("correct");
      feedbackEl.className = "feedback correct";
      feedbackEl.innerHTML = "Correct! " + q.explanation;
    } else {
      card.classList.add("incorrect");
      feedbackEl.className = "feedback incorrect";
      var yourAnswer = selected ? selected.value : "No answer";
      feedbackEl.innerHTML = "Incorrect. You chose: " + yourAnswer + ". Correct answer: " + correctKey + ". " + q.explanation;

      if (selected) {
        document.getElementById("opt-" + q.id + "-" + selected.value).classList.add("wrong-answer");
      }
      document.getElementById("opt-" + q.id + "-" + correctKey).classList.add("correct-answer");
    }

    q.options.forEach(function(opt) {
      var optEl = document.getElementById("opt-" + q.id + "-" + opt.key);
      optEl.style.cursor = "default";
      optEl.onclick = null;
    });
  }

  // Grade subjective (auto-check JS questions)
  subjectiveQuestions.forEach(function(q) {
    q.parts.forEach(function(part) {
      var textarea = document.getElementById(part.fieldId);
      textarea.disabled = true;
      var code = textarea.value.trim();

      if (part.autoCheck && part.testFn) {
        var feedbackEl = document.getElementById("feedback-" + part.fieldId);
        if (code.length === 0) {
          feedbackEl.className = "feedback incorrect";
          feedbackEl.innerHTML = "No answer provided.";
        } else {
          var result = part.testFn(code);
          if (result.pass) {
            feedbackEl.className = "feedback correct";
            feedbackEl.innerHTML = "Correct!";
          } else {
            feedbackEl.className = "feedback incorrect";
            feedbackEl.innerHTML = result.msg;
          }
        }
      }
    });
  });

  // Show results overlay
  document.getElementById("results-name").textContent = studentName;
  document.getElementById("score-number").textContent = mcqScore;
  document.getElementById("mcq-score").textContent = mcqScore;
  document.getElementById("results-overlay").classList.remove("hidden");

  // Hide submit button
  document.getElementById("submit-btn").style.display = "none";
}

// ── CLOSE RESULTS ──
function closeResults() {
  document.getElementById("results-overlay").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── UTILITY ──
function escapeHtml(text) {
  var div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
