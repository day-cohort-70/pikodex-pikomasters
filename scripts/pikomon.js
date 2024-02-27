import { getPikomon } from "./database.js"



export const pikomonList = () => {
    // Invoke the function that you imported from the database module
    const pikomonArray = getPikomon()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="piko-list">'

    // Create HTML representations of each fish here
    for (const pikomon of pikomonArray) {

        // Why is there a backtick used for this string?
        //Backtick is used so that we can use variables inside the string.
        htmlString += `<section class="piko-card">
            <div><img  class="piko-img image--card" src="${pikomon.imageUrl}" width="500" height="400"/></div>
            <div class="piko-name">${pikomon.name}</div>
            <div class="piko-category">${pikomon.category}</div>
            <div class="piko-abilites">${pikomon.abilities}</div>
            <div class="piko-weakness">${pikomon.weakness}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}