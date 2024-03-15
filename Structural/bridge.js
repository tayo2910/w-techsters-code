/*
Decouple an abstraction from its implementation so that the two can vary 
independently. 

The About and Careers classes represent different pages of a website. Each of these classes has a constructor that takes a theme object as a parameter.

Both About and Careers classes have a getContent method that returns the content of the page along with the color of the theme.

The DarkTheme, LightTheme, and AquaTheme classes implement the getColor method of the Theme interface, providing different colors for each theme.

The classes are structured in such a way that the About and Careers classes do not directly depend on the concrete implementations of the themes. Instead, they depend on the getColor method of the Theme interface, allowing them to vary independently.

Overall, this code demonstrates the Bridge design pattern, where the About and Careers classes act as abstractions, and the DarkTheme, LightTheme, and AquaTheme classes act as implementations. The Bridge pattern decouples the abstraction from its implementation, allowing them to vary independently.
 */

/*
Webpage interface :

constructor(theme)
getContent()
*/

class About{ 
    constructor(theme) {
        this.theme = theme
    }
    
    getContent() {
        return `About page in ${this.theme.getColor()}`
    }
}

class Careers{
   constructor(theme) {
       this.theme = theme
   }
   
   getContent() {
       return `Careers page in ${this.theme.getColor()}`
   } 
}

/*
Theme interface :

getColor()
*/

class DarkTheme{
    getColor() {
        return 'Dark Black'
    }
}
class LightTheme{
    getColor() {
        return 'Off white'
    }
}
class AquaTheme{
    getColor() {
        return 'Light blue'
    }
}

const darkTheme = new DarkTheme()

const about = new About(darkTheme)
const careers = new Careers(darkTheme)

console.log(about.getContent() )// "About page in Dark Black"
console.log(careers.getContent() )// "Careers page in Dark Black"