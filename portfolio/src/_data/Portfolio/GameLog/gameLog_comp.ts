import { containerTypes, PortfolioItemData, visualizationTypes } from "src/utils/portfolioSegmentTypes";
import { Roles, Sizes } from "src/components/Util/util";
import hero from './hero2.webp';
import addFlow from './GameLogAddFlow.webp';
import colorGuide from './GameLogColorGuide.webp';
import highFidelity from './GameLogHighFidelity.webp';
import primary from './GameLogPrimary.webp';
import sketches from './GameLogSketches.webp';
import typography from './GameLogTypography.webp';
import wireframes from './GameLogWireframes.webp';
import figma from '../../../media/figma.png'

export const gameLogData: PortfolioItemData = {
  banner: {
    image: hero,
    label: {
      "en": "GameLog Design Case Study",
      "ja": "GameLog Design Case Study"
    },
    tagline: {
      "en": "Exploring the design of an application for tracking one's video game collection",
      "ja": "Exploring the design of an application for tracking one's video game collection"
    }
  },
  content: {
    title: {
      "en": "GameLog - Collections in Retrospect",
      "ja": "GameLog - Collections in Retrospect"
    },
    roles: [ Roles.UI_UX ],
    summary: {
      "en": "While applications like Goodreads and Letterboxd have provided avid readers and movie lovers with ways to record their favorite stories, find new ones, and share their entertainment experiences with friends, such a platform is not so widely used within the gaming community. Here, I seek to create one that could change that, called GameLog.",
      "ja": "While applications like Goodreads and Letterboxd have provided avid readers and movie lovers with ways to record their favorite stories, find new ones, and share their entertainment experiences with friends, such a platform is not so widely used within the gaming community. Here, I seek to create one that could change that, called GameLog."
    },
    containers: [
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.IMAGE,
          image: primary,
          altText: "primaryImage",
        },
        padding: Sizes.MD
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.SUMMARY,
          paragraphs:[
            {
              "en": "Though I am accustomed to tracking my own media consumption habits and also enjoy playing video games across a variety of platforms, I had never tried doing the same for my games. After consulting with friends who are similarly invested in gaming as a hobby, I learned that the best option they had found for this purpose is the use of relatively bare-bones spreadsheets. Here, I saw an opportunity to create not just something for my personal use, but a solution to a problem faced by many people.",
              "ja": "Though I am accustomed to tracking my own media consumption habits and also enjoy playing video games across a variety of platforms, I had never tried doing the same for my games. After consulting with friends who are similarly invested in gaming as a hobby, I learned that the best option they had found for this purpose is the use of relatively bare-bones spreadsheets. Here, I saw an opportunity to create not just something for my personal use, but a solution to a problem faced by many people."
            }
          ]
        },
        heading: {
          "en": "Background",
          "ja": "Background"
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.SUMMARY,
          paragraphs:[
            {
              "en": "Video games are a hobby enjoyed by many people for many reasons. Deciding which services and features would be the most useful to the greatest number of people, in order to provide a system that is both usable and useful, is itself a challenge.",
              "ja": "Video games are a hobby enjoyed by many people for many reasons. Deciding which services and features would be the most useful to the greatest number of people, in order to provide a system that is both usable and useful, is itself a challenge."
            }
          ]
        },
        heading: {
          "en": "Problem",
          "ja": "Problem"
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.SUMMARY,
          paragraphs:[
            {
              "en": "There were two populations from whom I aimed to collect information for planning this application’s design - video game hobbyists, and users of existing media tracking services, regardless of if they play games or not. The former would give insight into what game-specific features I should include and prioritize in my designs, while the latter could inform me about successes and shortcomings of services that are publicly available today. ",
              "ja": "There were two populations from whom I aimed to collect information for planning this application’s design - video game hobbyists, and users of existing media tracking services, regardless of if they play games or not. The former would give insight into what game-specific features I should include and prioritize in my designs, while the latter could inform me about successes and shortcomings of services that are publicly available today. "
            }
          ]
        },
        heading: {
          "en": "User Research",
          "ja": "User Research"
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.LIST_AND_SUMMARY,
          list: [
            {
              "en": "Most importantly, prospective users want to visualize their collection and stay on top of upcoming releases, updates, and expansions",
              "ja": "Most importantly, prospective users want to visualize their collection and stay on top of upcoming releases, updates, and expansions"
            },
            {
              "en": "Game hobbyists can generally be divided into two primary groups - those focused on their own game completion metrics, and those interested in miscellaneous information beyond what they would track individually",
              "ja": "Game hobbyists can generally be divided into two primary groups - those focused on their own game completion metrics, and those interested in miscellaneous information beyond what they would track individually"
            },
            {
              "en": "Existing services such as Steam and HowLongToBeat provide good information, so matching their functionality or integrating with them would be important",
              "ja": "Existing services such as Steam and HowLongToBeat provide good information, so matching their functionality or integrating with them would be important"
            },
          ],
          summary:[
            {
              "en": "I surveyed and directly worked with a total of a few dozen individuals, and arrived at a number of key findings:",
              "ja": "I surveyed and directly worked with a total of a few dozen individuals, and arrived at a number of key findings:"
            }
          ],
          reverse: true
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.LIST_AND_SUMMARY,
          list: [
            {
              "en": "As I wanted to emulate physical game collection, prominently featuring box art was important",
              "ja": "As I wanted to emulate physical game collection, prominently featuring box art was important"
            },
            {
              "en": "The inspiration for this effort came from my friends who collect and play games from consoles across the history of gaming, so it was important to design such that recognizing dozens of platforms was possible",
              "ja": "The inspiration for this effort came from my friends who collect and play games from consoles across the history of gaming, so it was important to design such that recognizing dozens of platforms was possible"
            },
            {
              "en": "On the other hand, Steam as a platform is notorious for its users having dozens or even hundreds of games in their library. As such, having various inbuilt delineations and separations, as well as filters, might help prevent navigation of such collections from becoming tedious",
              "ja": "On the other hand, Steam as a platform is notorious for its users having dozens or even hundreds of games in their library. As such, having various inbuilt delineations and separations, as well as filters, might help prevent navigation of such collections from becoming tedious"
            },
          ],
          summary:[
            {
              "en": "First-pass designs for the application focused primarily on the core of the experience - the collection pages and their organization. A couple of points were in the forefront of my mind during this process:",
              "ja": "First-pass designs for the application focused primarily on the core of the experience - the collection pages and their organization. A couple of points were in the forefront of my mind during this process:"
            }
          ],
          reverse: true
        },
        heading: {
          "en": "Initial Design",
          "ja": "Initial Design"
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.SUMMARY,
          paragraphs:[
            {
              "en": "The inherent clashing of these items is apparent. Featuring game art prominently will naturally limit the number of items that can be shown on screen, and the possibility of both breadth and depth in collection means preparation for item quantity in multiple ways is paramount.",
              "ja": "The inherent clashing of these items is apparent. Featuring game art prominently will naturally limit the number of items that can be shown on screen, and the possibility of both breadth and depth in collection means preparation for item quantity in multiple ways is paramount. "
            }
          ]
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.IMAGE,
          image: sketches,
          altText: "sketches"
        },
        padding: Sizes.SM
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.SUMMARY,
          paragraphs:[
            {
              "en": "Ultimately, I was between scroll-able “shelves” and “tabs” for organization. Though shelves were closer to the initial theming I had in mind, for users with large collections on fewer platforms I felt that they would prove clumsy. Due to this, I decided to opt for tabs going forward in my designs. ",
              "ja": "Ultimately, I was between scroll-able “shelves” and “tabs” for organization. Though shelves were closer to the initial theming I had in mind, for users with large collections on fewer platforms I felt that they would prove clumsy. Due to this, I decided to opt for tabs going forward in my designs. "
            }
          ]
        },
        heading: {
          "en": "Thoughts",
          "ja": "Thoughts"
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.SUMMARY,
          paragraphs:[
            {
              "en": "From the decisions I made based on my initial designs, I iterated and created cleaner wireframe visualizations so that I and testers could better evaluate their intuitiveness. As part of this process, I also developed visualizations for an item add flow and game detail page. Users could navigate between the collection pages using a menu that would appear when clicking the placeholder profile icon in the top right.",
              "ja": "From the decisions I made based on my initial designs, I iterated and created cleaner wireframe visualizations so that I and testers could better evaluate their intuitiveness. As part of this process, I also developed visualizations for an item add flow and game detail page. Users could navigate between the collection pages using a menu that would appear when clicking the placeholder profile icon in the top right."
            }
          ]
        },
        heading: {
          "en": "Design Refinement",
          "ja": "Design Refinement"
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.IMAGE,
          image: wireframes,
          altText: "wireframe designs"
        },
        padding: Sizes.SM
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.LIST_AND_SUMMARY,
          list: [
            {
              "en": "The page name choices of “Collection”, “Radar”, and “Backlog” was confusing, and made their contents unclear to unfamiliar users",
              "ja": "The page name choices of “Collection”, “Radar”, and “Backlog” was confusing, and made their contents unclear to unfamiliar users"
            },
            {
              "en": "The HowLongToBeat section should specify hours to avoid confusion about the meaning of the numbers",
              "ja": "The HowLongToBeat section should specify hours to avoid confusion about the meaning of the numbers"
            },
            {
              "en": "Not all people found it intuitive to click the profile icon for navigation between pages",
              "ja": "Not all people found it intuitive to click the profile icon for navigation between pages"
            },
            {
              "en": "Using plain 1-10 numbers for game review score led to multiple people questioning their meaning",
              "ja": "Using plain 1-10 numbers for game review score led to multiple people questioning their meaning"
            },
            {
              "en": "Inclusion of a home page is warranted, to provide an overview & recommendations experience",
              "ja": "Inclusion of a home page is warranted, to provide an overview & recommendations experience"
            },
          ],
          summary:[
            {
              "en": "Preliminary testing with my wireframes uncovered a number of improvements that could be made. Examples include the following:",
              "ja": "Preliminary testing with my wireframes uncovered a number of improvements that could be made. Examples include the following:"
            }
          ],
          reverse: true
        },
        heading: {
          "en": "User Testing",
          "ja": "User Testing"
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.SUMMARY,
          paragraphs:[
            {
              "en": "With lessons learned from preliminary focus testing, I iterated on my wireframe layouts while also refining my designs to create a polished, complete-feeling experience. The resulting interfaces are straightforward and easy to understand, while also achieving the goal of properly representing a collection of games you have played over the course of years. Iconic cover art that players have on their shelves at home takes main stage in the interface, without distracting from information provided to the user.",
              "ja": "With lessons learned from preliminary focus testing, I iterated on my wireframe layouts while also refining my designs to create a polished, complete-feeling experience. The resulting interfaces are straightforward and easy to understand, while also achieving the goal of properly representing a collection of games you have played over the course of years. Iconic cover art that players have on their shelves at home takes main stage in the interface, without distracting from information provided to the user."
            }
          ]
        },
        heading: {
          "en": "High Fidelity",
          "ja": "High Fidelity"
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.IMAGE,
          image: highFidelity,
          altText: "high fidelity"
        },
        padding: Sizes.SM
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.SUMMARY,
          paragraphs:[
            {
              "en": "In addition, I spent time expanding on things like game search and quick-add flows, building out prototypes within Figma to test the front-to-back user journey.",
              "ja": "In addition, I spent time expanding on things like game search and quick-add flows, building out prototypes within Figma to test the front-to-back user journey."
            }
          ]
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.IMAGE,
          image: addFlow,
          altText: "add flow"
        },
        padding: Sizes.SM
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.SUMMARY,
          paragraphs:[
            {
              "en": "In order to continue building this design out, there are some features and design elements that I believe are required to present an experience that meets modern user expectations. Chief among these would be social features. This would include friends, social feeds (who among your friends has recently played what), and publicly viewable and rate-able game reviews. Additionally, at present the Game Info Page is relatively sparse in terms of information, which is especially noticeable in desktop view. Adding things like reviews and other social features would potentially help make this experience more robust.",
              "ja": "In order to continue building this design out, there are some features and design elements that I believe are required to present an experience that meets modern user expectations. Chief among these would be social features. This would include friends, social feeds (who among your friends has recently played what), and publicly viewable and rate-able game reviews. Additionally, at present the Game Info Page is relatively sparse in terms of information, which is especially noticeable in desktop view. Adding things like reviews and other social features would potentially help make this experience more robust."
            },
            {
              "en": "There are also some user experiences which I have not yet tackled, such as advanced filterable search and profile & settings screens. These would be on the short list of goals to tackle.",
              "ja": "There are also some user experiences which I have not yet tackled, such as advanced filterable search and profile & settings screens. These would be on the short list of goals to tackle."
            },
            {
              "en": "Lastly, some elements which I could stand to revisit from an aesthetic perspective. For instance, modern media tracking sites often have elements of varying opacity, image overlays, and other methods of breaking up single-color backgrounds. I have experimented with this idea for desktop renditions of the Collection pages - Ratings, Radar, and My Games - but want to pursue it further.",
              "ja": "Lastly, some elements which I could stand to revisit from an aesthetic perspective. For instance, modern media tracking sites often have elements of varying opacity, image overlays, and other methods of breaking up single-color backgrounds. I have experimented with this idea for desktop renditions of the Collection pages - Ratings, Radar, and My Games - but want to pursue it further."
            },
            {
              "en": "Setting aside these potential areas for improvement, I am pleased with the design that I have created for GameLog. I think that by and large its interface feels good to use, and I am interested in continuing to explore the concept.",
              "ja": "Setting aside these potential areas for improvement, I am pleased with the design that I have created for GameLog. I think that by and large its interface feels good to use, and I am interested in continuing to explore the concept."
            }
          ]
        },
        heading: {
          "en": "Looking Forward",
          "ja": "Looking Forward"
        },
        padding: Sizes.LG
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.IMAGE,
          image: colorGuide,
          altText: "color guide"
        },
        heading: {
          "en": "Style Guide",
          "ja": "Style Guide"
        },
        padding: Sizes.SM
      },
      {
        name: containerTypes.SINGLE_ITEM,
        child: {
          name: visualizationTypes.IMAGE,
          image: typography,
          altText: "typography guide"
        },
        padding: Sizes.SM
      },
    ]
  },
  icons: [figma],
  path: ""
}