# Noughts and Crosses
This website has been created for Project Portfolio 2.
Noughts and Crosses is a classic two player game played on a 3x3 grid and has the option for 1 or 2 players. 
The objective of the game is to be the first player to form a row, column or diagonal of 3 matching symbols but if the entire grid is filled and no matches are present, the game is declared a draw. It is typically a game of strategy and logic.

[Play Noughts & Crosses Here](https://meganw22.github.io/Project2/)

## UX Design

![AMIRESPONSIVE](https://github.com/meganw22/Project2/assets/141934888/e18db365-e21b-4e5e-aad9-f6370696bace)

### User Stories
* As a player, I want to enjoy a user-friendly and visually appealing website for a good gaming experience
* As a player, I want the option of playing against a computer or second individual.
* As a player, I want to have prompts and feedback about the game status
* As a player, I want to be able to see the current scores 
* As a player, I want to control the game using clearly labelled buttons
* As a player, I want the game to prevent further plays if the game has been completed

### Wireframes
Before commencing with creating the game, I designed some wireframes to show the general layout of the webpage.
#### New Game Overlay
![newgameoverlay](https://github.com/meganw22/Project2/assets/141934888/238c6548-a6a6-4c39-a664-0d3639c9b16c)
#### Main Game set up
![mainpage](https://github.com/meganw22/Project2/assets/141934888/def6a055-dc45-45b9-8839-bcaef1bc8f99)
#### New Game Overlay
![newgameoverlay](https://github.com/meganw22/Project2/assets/141934888/9fc067ad-2744-4f3f-a12b-a074fd45fa9f)

### Colour Scheme
I chose to keep my colour scheme simple and only chose a select few colours to design the webpage. The colours can clearly distinguish the different elements and provides a consistent look and feel which improves the overall design.

![colour scheme](https://github.com/meganw22/Project2/assets/141934888/9b439b88-68ad-477f-837c-6a25227ae781)

### Typography
Using Google fonts, I selected the font **Fredoka** to use throughout the game. I found it to be a simple yet fun font and ensured the font was shown in Semibold 600.

![Fredoka font](https://github.com/meganw22/Project2/assets/141934888/0d265c4a-2725-4345-91e2-635bcb1a2df8)

# Features

## Overlays
I have designed the game with overlays to draw the users attention which places the message front and centre so it is difficult to miss. Overlays also provide clarity by reducing the clutter from the webpage when the item is not currently in use.

### Initial Screen
When the user navigates to the webpage, an overlay with instructions for game play is covering the game area.

![start overlay](https://github.com/meganw22/Project2/assets/141934888/a863af54-851f-4754-8977-0cd5f85bafad)

After clicking the 'Let's Go' button, the overlay is removed and the webpage ready for player selection.

![pre game](https://github.com/meganw22/Project2/assets/141934888/165eb8b6-cf0e-419d-b910-353882c42dfa)

### New Game
When a game is finished, the overlay will cover the content of the game area only and provide a button to start the next game.

![new game overlay](https://github.com/meganw22/Project2/assets/141934888/4916bd5f-8d80-4484-9a0b-12f982afb7f7)

## Player Options
To begin the game, the user selects 1 or 2 players, and the button colour changes to reflect the choice throughout the game.

![1 player selected](https://github.com/meganw22/Project2/assets/141934888/c950e283-dcea-4702-a962-2230b562da70)

![2 player selected](https://github.com/meganw22/Project2/assets/141934888/6ffe0f2e-fa94-4142-b594-3cd3dbe81c1d)

## Game Board Area
After the player option is selected, the game board clears of text, enabling the user to make the first move. 

![pre game cleared 1player](https://github.com/meganw22/Project2/assets/141934888/3d8e1bb6-969d-40da-9a75-ac58713d5fcf)

## Game Status
The game status changes to indicate the next player.

![2 player status change o turn](https://github.com/meganw22/Project2/assets/141934888/fb554295-2d66-42e4-b69e-4bf43ceb5a7b)

The game provides feedback on the winner 

![player x win](https://github.com/meganw22/Project2/assets/141934888/6d72ff19-1d50-4c70-80f0-74c4c3cbbb16)

or if the game is a draw.

![its a draw and new game](https://github.com/meganw22/Project2/assets/141934888/13bed0ea-30b3-486a-9ec3-c82fd7ac856b)

## Score Area
The Score area shows the current game score and the overall winner. Scores increase for wins but not for draws.

![score increments](https://github.com/meganw22/Project2/assets/141934888/015a3015-9043-41b9-b75e-da2dab7cbbb1)

For two-player games, when selecting between 1 and 2 players, the text interchangeably changes between "Player O" and "Player X."

1 Player
![1 player score area](https://github.com/meganw22/Project2/assets/141934888/56eeb3fe-52e5-4686-945f-40ff2dc29280)

2 Player
![2 player score area](https://github.com/meganw22/Project2/assets/141934888/acc1bb1b-e0d0-446d-bf2d-b23938e30293)

## Favicon
The favicon was selected to represent a visual of the game in black and white.

![favicon](https://github.com/meganw22/Project2/assets/141934888/c719accc-21d6-4724-ae36-573d0d390276)

## Future Development
### Customisable symbols
Users can decide which symbol they would like to play against the computer as currently the computer will always play 'O'.

### Level of difficulty 
When playing against the Computer, there is a very likely chance of winning. I plan to improve the computers programming capability to block more than 2 matches in a row from the player. This will increase the challenge of winning against the computer. 

### Computer can make the first move
Currently, the computer always has the 2nd move of the game. Typically, the first move dictates the strategy of the game and can hugely increase the first players advantage and chance of winning. My plan is to allow the computer to place a move first to adjust the game play for more strategic gaming.

# Technologies Used
- GitHub, stores the main project with ability to deploy online 
- GitPod, the software used to build the HTML code and create CSS styles and create JS code
- HTML5, The current version of HTML used
- CSS, The style language used
- JS, code to enhance interactivity on webpages and create the game
- Google Chrome, primary viewing port for gitpod code, developer tools used for fault finding and further coding
- Samsung S23 for mobile view port and testing

# Testing
## HTML Validator
W3C Markup Validation Service was used to ensure no errors were found in the HTML of the website - No errors displayed

![html validator](https://github.com/meganw22/Project2/assets/141934888/9afc8de1-f798-4590-9fe1-1d0c54a5cd96)

## CSS Validator
W3C CSS Validation Service was used to ensure that all CSS code in the website is correct - No errors are displayed

![css validator](https://github.com/meganw22/Project2/assets/141934888/9d42b51c-d793-4536-9df7-04623f0f4603)

## JS Hint
JS Hint is a code quality tool used to check for any errors in the code - None found and no warnings present.

![jshint validation](https://github.com/meganw22/Project2/assets/141934888/7fd91131-4153-4710-8ace-864d6b51a4a8)

## Lighthouse
Lighthouse was used to check each page in the website for Performance, Accessibility, Best Practices and SEO

![lighthouse](https://github.com/meganw22/Project2/assets/141934888/882baf16-a613-4a39-9fe4-ae0084a389af)

## User Story Testing
| User story | Evidence | Result |
|--- | --- | --- | 
|As a player, I want to enjoy a user-friendly and visually appealing website for a good gaming experience | Easy, functional and clear to play. | Pass | 
|As a player, I want the option of playing against a computer or second individual. | ![2 player selected](https://github.com/meganw22/Project2/assets/141934888/f52da18a-26b0-457b-acc7-1bcecc62b628)| Pass |
|As a player, I want to have prompts and feedback about the game status|![draw game](https://github.com/meganw22/Project2/assets/141934888/586ecd7a-55dd-43a6-b599-aa43d456eb92)![player o turn](https://github.com/meganw22/Project2/assets/141934888/4dcc2fca-aff2-4b12-9402-9dc2be1635e2)![player x win](https://github.com/meganw22/Project2/assets/141934888/110ce650-3220-4162-9b5c-d50491b4cd4f)| Pass |
|As a player, I want to be able to see the current scores  | ![score increments](https://github.com/meganw22/Project2/assets/141934888/cd42a6d0-b505-422f-afd7-cc56f3c5912e)| Pass |
|As a player, I want to control the game using clearly labelled buttons | ![name game](https://github.com/meganw22/Project2/assets/141934888/0ea93437-f248-46a1-83da-e9315ee8b61c)![1 player selected](https://github.com/meganw22/Project2/assets/141934888/40c6069a-e8fc-4dae-89a2-0d7495db6533)![lets go](https://github.com/meganw22/Project2/assets/141934888/d3406da2-f542-4b17-99a6-28d61c0ea0f3)| Pass |
| As a player, I want the game to prevent further plays if the game has been completed| User cannot enter a new symbol when clicking on the game area after the game is completed.| Pass |

## Device Compatibility testing
| Device | Images |
|---|---|
|HP laptop | ![hp laptop](https://github.com/meganw22/Project2/assets/141934888/4884d79f-7894-4a90-acc7-98d6c23eb568) ![hp laptop new game](https://github.com/meganw22/Project2/assets/141934888/cfb43635-762b-4993-9a80-4fc368bb549b)|
| Samsung S23 | ![samsung start](https://github.com/meganw22/Project2/assets/141934888/4fecf18d-77ae-417b-891e-50b7a4711e6f)![samsung new game](https://github.com/meganw22/Project2/assets/141934888/0a08b4c8-8091-45dd-ab6a-98682d00395f) |

# Deployment
Deployment was done on GitHub by following these steps:

1. Login to GitHub and select the project file 'meganw22/Project2.'
2. Go to 'Settings' in the menu tab, navigate to 'Code and Automation,' and select 'Pages.'
3. Ensure 'Source' is set to 'Deploy from branch' with 'Branch' as 'main.'
4. Save the settings and wait a few minutes.
5. Access the deployed site from the 'code' tab or through this link: https://meganw22.github.io/Project2/.

# Credits
## For Content
- Draw.io for creation of wireframes (http://draw.io/ )
- Google Fonts to import 'Fredoka' to CSS
- Colour scheme shown using Coloors (https://coolors.co/)
- Favicon was created in Microsoft Word by myself.
  
##  For testing procedures:
- HTML Validator  (https://validator.w3.org/)
- CSS Validator (https://jigsaw.w3.org/css-validator/)
- JSHint Check (https://jshint.com/)
