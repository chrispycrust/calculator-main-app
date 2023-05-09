# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process - notes in progress

Calculator logic 

Initial idea: 
Set up final empty array (result) to store all values (store a succession of numbers and operators) 
I think I need multiple arrays, so one for complete numbers, temp stored in variable “number” Once an operator is clicked, all the numbers will be joined into a string and push into array result to prep for a final calculation to happen 
 When user presses “=“ join complete array and calculate final result 
Although the way a simple calculator works is that it calculates one operation at a time in the order that it’s performed. 

After examining calculator function on iOS
The way the calc on iOS works is that as soon as another operator is hit after choosing 2 operands and an operation, it’ll show the current calculation to date. You don’t have to press equals to calculate everything at once.  Besides, if I save all the operators and numbers in an array it’ll automatically apply precedence to operators. Equals works as any other operator in showing a final result after 2 numbers and operand is clicked 

So really a complete calculation is result = num1 operator num2 
A result is always displayed on screen 
When number is clicked, replace content of p with value of digit clicked, should do nothing if value is not a digit
If another operator is clicked, current result is stored into number1, result stays on screen while result variable is emptied to stage another operation, apply operator, wait for user to apply number2
currentNumber = [] 
If user clicks a whole bunch of numbers in succession, display each number on the screen and store number into currentNumber
If user clicks operator, join(“”) all numbers in array (gives complete string) and store into final number variable

My only problem is I’m not sure how to relate any operator user selects as an actual mathematical operation behind the screens with the strings 
Stack overflow suggested I can write simple functions for each operator
e.g. if button.value is:
“+”: result = +(‘num1’) + +(‘num2’); break;
“-“: result = +(‘num1’) - +(‘num2’)

Function add(num1, num2) 

At any point, the user might:
* click del to remove previous number
	* might experiment with using splice on array
	* if array is empty, return screen to default 0 
* Click reset to empty all variable and show default on screen as 0
* click “=“ to give final result 
  
⬜️ Extra useful functionality I've seen some calculators have and is in solution on odin project: 
- documenting each complete number and operator punched in calc at the top of the number being entered into the screen

⬜️ still not confident with appropriately naming the html elements and how to grab them with JS

⬜️ how to replace 0 with the number we click on
⬜️ how to deal with overflow of numbers
- overflow should be a complete long ling, and not awkwardly cutoff, ideally cut off per integer instead of a sliver of a number

⬜️ don't get why importing a font doesn't seem to work

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
