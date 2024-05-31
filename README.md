Wander Wise is your ultimate destination for all things wander. Whether you're a globetrotter, an avid explorer, or simply seeking inspiration for your next adventure, Wander Wise has got you covered. Share your wander tales, from exhilarating hikes to serene beach getaways, by uploading stunning photos accompanied by captivating stories. Connect with fellow wanderers, exchange tips and recommendations, and create meaningful connections with people who share your passion for exploration. With Wander Wise, your wander memories are beautifully organized, easily accessible, and ready to be shared with friends, family, and the global wander community. 

Join Wander Wise today and embark on a journey of discovery, connection, and endless wander inspiration.

![Mockup image](/docs/mockup.png) <br>
Developer: [Sandra Bergström](https://github.com/Noah-Samawi) <br>
[Live webapp](https://pp5-wander-wise-frontend-63919ac97d38.herokuapp.com/) <br>
[Repository](https://github.com/Noah-Samawi/pp5-wander-wise-frontend.git) <br>
[APi](https://pp5-apis-e3b849e62ff3.herokuapp.com/) <br>
[API Repository](https://github.com/Noah-Samawi/pp5-apis.git) <br>


## Table of Content

- [User Experience](#user-experience)
  * [Objective:](#objective-)
  * [Strategy](#strategy)
    + [Project Goals](#project-goals)
    + [User Goals](#user-goals)
    + [Site Owner Goals](#site-owner-goals)
    + [Target Audience](#target-audience)
    + [User Requirements and Expectations](#user-requirements-and-expectations)
  * [Scope](#scope)
    + [Features](#features)
    + [Future Features](#future-features)
    + [User Stories](#user-stories)
  * [Structure](#structure)
    + [Database](#database)
  * [Component Architecture and Reusability](#component-architecture-and-reusability)
    + [Core Components](#core-components)
    + [Component Pages](#component-pages)
    + [Component relation to User Story](#component-relation-to-user-story)
  * [Skeleton](#skeleton)
    + [Wireframes](#wireframes)
  * [Surface](#surface)
    + [Design Choices](#design-choices)
    + [Colour](#colour)
    + [Typography](#typography)
- [Technologies Used](#technologies-used)
  * [Languages](#languages)
  * [Frameworks.](#frameworks)
  * [Database](#database-1)
  * [Tools](#tools)
  * [Supporting Libraries and Packages](#supporting-libraries-and-packages)
- [Methodology](#methodology)
  * [Agile Project Management with GitHub Projects](#agile-project-management-with-github-projects)
  * [User Stories as GitHub Issues](#user-stories-as-github-issues)
  * [Commit and Issue Linking](#commit-and-issue-linking)
  * [Bug Tracking](#bug-tracking)
  * [Iterative Development Approach](#iterative-development-approach)
    + [Sprint 1 (June 13th - June 18th, 2023):](#sprint-1--june-13th---june-18th--2023--)
    + [Sprint 2 (June 19th - June 24th, 2023):](#sprint-2--june-19th---june-24th--2023--)
    + [Sprint 3 (June 25th - July 1st, 2023):](#sprint-3--june-25th---july-1st--2023--)
    + [Sprint 4 (July 2nd - July 7th, 2023):](#sprint-4--july-2nd---july-7th--2023--)
    + [Backlog](#backlog)
  * [Backlog and Subsequent Iterations](#backlog-and-subsequent-iterations)
- [Bugs](#bugs) 
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## User Experience
The wander memory platform is designed to cater to a diverse range of users who share a common interest in wander and creating and sharing wander memories. 

### Objective:
The objective of Wander Wise is to create a wander memory platform that caters to the needs and expectations of wander enthusiasts, adventure seekers, storytellers, wander planners, and members of the wander community.

### Strategy
#### Project Goals 
- **Create a Wander Memory Platform:** Develop a user-friendly web application that allows wanderers to save and share their wander memories in the form of text and pictures. Provide a seamless experience for users to upload photos, write accompanying stories, and organize their memories into albums. Enable users to create, read, comment, and vote/like on contents.<br>
  Mapped to User Story: [6,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/6) [7,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/7) [8,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/8) [9,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/9)

- **Build a Wanderers Community:** Foster a vibrant community of wanderers by enabling users to connect with each other, follow fellow wanderers, and like and comment on their wander experiences. Implement features that allow users to search, filter, and categorize content, enhancing the discoverability of wander stories and recommendations.<br>
  Mapped to User Story: [11,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/11) [12,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/12) [30,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/30) [14,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/14) [16,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/16) [17,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/17) [18,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/18) [31,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/31) [19,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/19) [10](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/10)

- **Offer Seamless Wander Exploration:** Implement features that enhance the wander exploration process, such as enable wanderers to search and filter content based on username, popularity, date created, title, content keywords, and category. Provide search functionality that allows users to easily find relevant content and resources.<br>
  Mapped to User Story: [11,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/11) [12](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/12) [24,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/24) [25](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/25)

- **Provide a Clean and Intuitive User Interface:** Design an aesthetically pleasing and user-friendly interface that reflects the essence of a wander journal. Ensure the application meets accessibility guidelines, follows UX design principles, and provides a set of user interactions that intuitively guide users through the platform. Implement responsive design to ensure the application is accessible and functional across different devices.<br>
  Mapped to all user stories.
  
- **Implement Advanced Features *(if time permits)*:** Explore the possibility of implementing additional features, such as a world map where users' wander photos are geographically marked, a trip creation functionality that provide users with destination-specific information, safety warnings, packing checklists, and reminders for passport expiration.and a countryside feature. Automatically create photo albums when a photo has a date that is within the time line of the created trip. A countryside feature that will allow users to add destinations and wander experiences discovered through content shared by other users to their personal list of aspirations. Provide users with the ability to curate and manage their countryside, making it a valuable tool for planning and tracking their wander goals.<br>
  Mapped to User Story: [28,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/28) [32,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/32) [26,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/26) [27,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/27) [33](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/33)

#### User Goals
- **Capture and Preserve Wander Memories:** Users want to save and preserve their wander memories, including photos, stories, and experiences, in a secure and organized manner.

- **Share wander Experiences:** Users aim to share their wander experiences with others, allowing them to inspire and connect with fellow wanderers.

- **Discover New Destinations:** Users are interested in exploring new destinations and discovering wander recommendations and tips shared by other community members.

- **Connect with Fellow Wanderers:** Users want to connect with like-minded wanderers, follow their journeys, and engage in meaningful discussions and interactions.

- **Plan Future Adventures:** Users seek inspiration and resources to plan their future wander adventures, including destination-specific information, safety guidelines, and packing checklists.

- **Curate a Personal Countryside:** Users aspire to create their own countryside of destinations and wander experiences they wish to explore in the future.

- **Access a User-Friendly Platform:** Users expect a user-friendly and intuitive platform that is easy to navigate, provides a seamless uploading and sharing experience, and offers search and filter functionalities for finding relevant content.

#### Site Owner Goals
- **Create a Vibrant Wander Community:** The site owner aims to establish a vibrant community of wanderers who actively engage, connect, and share their wander experiences and recommendations.

- **Facilitate Content Sharing:** The site owner intends to provide a platform where users can easily upload, organize, and share their wander memories, fostering a culture of storytelling and inspiration.

- **Drive User Engagement:** The site owner wants to encourage user engagement by implementing features such as likes, comments, and following functionalities, creating an interactive and supportive community.

- **Enhance User Experience:** The site owner strives to deliver a seamless and enjoyable user experience through an aesthetically pleasing design, intuitive navigation, and responsive interface across devices.

- **Promote Wander Exploration:** The site owner aims to facilitate wander exploration by offering features like search, filter, categorization, and destination-specific information, allowing users to discover new destinations and plan their adventures.

- **Monetization Opportunities:** The site owner may seek monetization opportunities through partnerships, advertising, or premium features, while ensuring they align with the overall user experience and add value to the community.

#### Target Audience
The target audience includes:

- **Wander Enthusiasts:** People who have a passion for wandering and want a platform to document and share their wander experiences.

- **Adventure Seekers:** Individuals who actively seek out new destinations, experiences, and adventures.

- **Storytellers:** Users who enjoy sharing their wander stories and inspiring others with their experiences and recommendations.

- **Wander Planners:** People who are in the process of planning their future trips and seek inspiration, tips, and resources.

- **Wander Community Members:** Individuals who value being part of a vibrant community of fellow wanderers and engaging in discussions and interactions.

#### User Requirements and Expectations
To meet the needs and expectations of the target audience, the wander memory platform should fulfill the following requirements:

- **User-Friendly Interface:** Users expect an intuitive and easy-to-navigate interface that allows them to quickly access features and functionalities.

- **Seamless Content Creation:** Users require a smooth and streamlined process for uploading photos, writing accompanying stories, and organizing their memories into albums.

- **Social Interaction:** Users expect the ability to connect with other wanderers, follow their journeys, like and comment on their content, and engage in discussions.

-  **Discoverability and Search:** Users want to easily search, filter, and discover relevant wander stories, destinations, and recommendations based on their interests and preferences.

- **Responsive Design:** Users anticipate a responsive design that adapts to different devices (e.g., desktop, tablet, mobile) for seamless access and functionality.

- **Accessibility:** Users with disabilities expect the platform to adhere to accessibility guidelines, enabling them to access and use the platform effectively.

By considering these user requirements and expectations, Wander Wise can provide a positive and fulfilling user experience, encouraging user engagement, and fostering a vibrant community of wanderers.

[Back up](#table-of-content)

### Scope
#### Features

##### User Account Management
- Registration: Users can register for an account on the Wander Wise platform to explore and share their wander memories.
- Login: Users can log in to their Wander Wise account using their registered email and password to access personalized features.
- Logout: Users can securely log out of their Wander Wise account to protect their account and maintain privacy.
- Profile Update: Users can update their profile information to reflect their current preferences and interests.

##### Post Management
- Create Memory Post: Users can upload a photo with accompanying text to create a memory post and share their wander experiences with others.
- View Posts: Users can view and read posts shared by other users to explore and discover wander stories.
- Update Posts: Users can edit or add content to their own posts to make changes or additions to their shared content.
- Delete Posts: Users can remove their own posts that are no longer relevant or desired.

##### Interactions and Engagement
- Search: Users can search for specific posts or users to discover new wander stories and connect with like-minded wanderers.
- Sorting: Users can sort posts based on criteria such as date, popularity, or relevance to find the most relevant and interesting content.
- Like Posts: Users can like posts shared by other users to show appreciation for inspiring content.
- Commenting: Users can comment on posts shared by other users to engage in discussions and interact with the wander community.
- View Comments: Users can view and read comments on posts to follow conversations and opinions shared by other users.
- Update Comments: Users can edit or correct their own comments to modify their shared opinions.
- Delete Comments: Users can remove their own comments to retract or remove their previous statements.
- Follow Users: Users can follow other users to stay updated on their wander journeys and experiences.
- Site Owner Administration: Account, Post, and Comment Management: Site owners can delete user accounts, posts, and comments to maintain a safe and high-quality user environment.

##### Navigation:
###### Universal Navigation:
Every page includes a prominent navigation bar at the top, offering accessible features across the platform. Interactive elements such as posts, wandering profiles, and comments are equipped with a recognizable icon displaying three vertically aligned dots, indicating an additional dropdown menu for user interaction. 

###### Unauthenticated Users:
Unauthenticated users are presented with a clean, intuitive navigation bar comprising a logo and links to essential pages including 'About', 'Login', and 'Sign Up'.

###### Authenticated Users:
Upon successful login, the navigation bar adapts to include exclusive features tailored for authenticated users. The 'Login' and 'Sign Up' links are replaced with additional options, namely 'Following', 'Countryside', 'Logout', and a direct link to their profile page.

###### Authenticated and Current Users:
For authenticated users viewing their own posts, comments, and profile, an additional layer of interactivity is provided. The recognizable icon displaying three dots reveals a dropdown menu when interacted with. This menu presents options to update or delete the corresponding content, providing users with full control over their own contributions to the platform.

##### Wander Memory Management
- Add to Countryside: Users will be able to add wander memories shared by others to their countryside on the Wander Wise platform, allowing them to save and revisit those memories later.

#### Future Features
- Multiple Photos per Post: Users will have the ability to upload several photos to a single post on the Wander Wise platform, enabling them to share a collection of images for a particular memory.
- Create Albums: Users will be able to create albums on the Wander Wise platform, providing them with the capability to organize and categorize their wander memories.
- Trip Creation and Auto-generated Photo Album: Users will be able to create a trip on the Wander Wise platform before embarking on a journey. An auto-generated photo album will be created, incorporating photos taken during the trip. This feature will make it convenient for users to capture and share their wander moments seamlessly.
- Trip Planning Resources: Users will have access to automated packing lists and information about destinations on the Wander Wise platform. This information will include weather forecasts, safety warnings, recommended vaccinations, and other relevant details, ensuring that users are well-prepared for their wander plans.
- Word Map with Photos: Users will have the option to display a word map on their profile, with photos spread out as pins representing the locations of their wander memories on the Wander Wise platform. This feature will allow users to visually showcase their wander experiences.

#### User Stories

##### Epic 1: User Account Management
- [As a first-time user, I can register for an account on the Wander Wise platform, so that I can start exploring and sharing my wander memories.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/2)
- [As a user, I can log in to the Wander Wise platform using my registered email and password, so that I can access my account and personalized features.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/3)
- [As a user, I can log out of the Wander Wise platform, so that I can secure my account and maintain privacy.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/4)
- [As a user, I can update my profile information on the Wander Wise platform, so that my profile reflects my current preferences and interests.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/5)

##### Epic 2: Post (CRUD) Management
- [As a user, I can upload a photo with accompanying text to create a memory post on the Wander Tickr platform, so that I can share my wander experiences with others.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/6)
- [As a user, I can view and read posts on the Wander Wise platform, so that I can explore and discover wander stories shared by other users.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/7)
- [As a user, I can update my own posts on the Wander Wise platform, so that I can make edits or additions to my shared content.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/8)
- [As a user, I can delete my own posts on the Wander Wise platform, so that I can remove content that is no longer relevant or desired.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/9)


##### Epic 3: Interactions and Engagement
- [As a user I can view the about page so that I can gain information about Wander Wise](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/10)
- [As a user, I can search for specific posts or users on the Wander Wise platform, so that I can discover new wander stories and connect with like-minded wanderers.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/11)
- [As a user, I can sort posts based on criteria such as date, popularity, or relevance, so that I can find the most relevant and interesting content.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/12)
- [As a user, I can like posts shared by other users on the Wander Wise platform, so that I can show appreciation for inspiring content.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/30)
- [As a user, I can comment on posts shared by other users on the Wander Wise platform, so that I can engage in discussions and interact with the wander community.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/14)
- [As a user, I can view and read comments on posts on the Wander Wise platform, so that I can follow the conversations and opinions shared by other users.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/15)
- [As a user, I can update my own comments on the Wander Wise platform, so that I can make edits or corrections to my shared opinions.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/16)
- [As a user, I can delete my own comments on the Wander Wise platform, so that I can remove or retract my previous statements.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/17)
- [As a user, I can follow other users on the Wander Wise platform, so that I can stay updated on their wander journeys and experiences.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/18)
- [As a user I can see which the most popular wanderers are so that I can get inspired by them](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/31)
- [As a user I can see other users profile so that I can learn more about them](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/19)


##### Epic 4: Site Owner Administration and Functionality
- [As a site owner, I can delete user accounts, posts, and comments on the Wander Wise platform, so that I can maintain a safe and high-quality user environment.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/20)
- [As the owner of the application, I want to improve the application's codebase and deployment process to ensure efficiency and maintainability.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/21)
- [As an owner, I want to create a 404 page to improve the user experience when users land on non-existent pages.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/22)
- [As a Project Owner, I can conduct thorough testing so that the application is robust, error-free, and provides a smooth user experience.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/23)


##### Epic 5: Memory Management
- [As a user, I can add wander memories shared by others to my countryside on the Wander Wise platform, so that I can save and revisit them later.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/24)
- [As a user, I can upload several photos to one post on the Wander Wise platform, so that I can share a collection of images for a particular memory.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/28)
- [As a user, I can create albums on the Wander Wise platform, so that I can organize and categorize my wander memories.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/32)
- [As a user, I can have a world map on my profile with photos spread out as pins, representing the locations of my wander memories on the Wander Wise platform, so that I can visually showcase my wander experiences.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/26)

##### Epic 6: Trip Planning and Information
- [As a user, I can create a trip on the Wander Wise platform before going on a journey, and an auto-generated photo album will be created with photos taken during the trip, so that I can easily capture and share my wander moments.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/27)
- [As a user, I can access automated packing lists and information about destinations such as weather forecasts, safety warnings, recommended vaccinations, and other relevant details on the Wander Wise platform, so that I can be well-prepared for my wander plans.](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/29)
- [As a user I can see a posts location so that I can know where the memory was made](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/25)

[Back up](#table-of-content)

### Structure
#### Database
For more detailed information about the database, kindly refer to [the API's](https://github.com/Noah-Samawi/pp5-apis.git) [README document](https://github.com/Noah-Samawi/pp5-apis/blob/main/README.md).

### Component Architecture and Reusability
Wander Wise is a social web application that empowers users to share wander experiences, explore new destinations, and interact with other wander enthusiasts. The app's architecture comprises several reusable components that streamline development and ensure a consistent user experience.

#### Core Components
- **Asset:** This component handles the display of a spinner or an image, along with an optional message. It's used across various parts of the application, such as NotFound, PostCreateForm, PostPage, PostsPage, PopularWanderers, and WandererPage, to provide visual feedback during data loading or to display specific images for information. 
- **Avatar:** This component displays user profile images. It's reused in the NavBar, Posts, Comments, and Wanderer sections to maintain consistency and personalization across the application.
- **MoreDropdown:** A general-purpose dropdown menu component reused in Comment, Post, and the Wanderer's profile page for various context-based actions.
- **NavBar:** A navigation bar component shown on all pages to ensure seamless navigation across the app.
- **NotFound:** A component shown when a requested resource is not found or a certain result does not exist.

#### Component Pages
Authentication:
- **LoginForm** & **SignupForm**: Components handling user authentication processes.

Comments:
- **Comment**: Used to display user comments.
- **CommentCreateForm** & **CommentEditForm**: Forms used for creating and editing comments.

Posts:
- **Post**: Component to display user posts.
- **PostCreateForm** & **PostEditForm**: Forms used for creating and editing posts.
- **PostPage**: Detailed view of a specific post.
- **PostsPage**: List view of posts. It serves as the homepage, 'Following' page where posts by followed users are shown, and the 'Countryside' page for displaying posts added to a user's countryside.

Wanderers:
- **PopularWanderer**s: This component shows the most followed wanderers. It's displayed on the PostsPage for both mobile and desktop views, and on the PostPage for larger screens.
- **Wanderer**: Component to show user profile details.
- **WandererEditForm**: Form for editing user profile.
- **WandererPage**: Combines the Wanderer component with a list of that wanderer's posts.
- **UsernameForm** & **UsernamePassword**: Forms for changing username and password.

Other:
- **AboutPage**: A component to display information about the application or any relevant context.

#### Component relation to User Story
| **Component** | **User Story** |
| ----------- | ----------- |
|LoginForm|[2,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/2) [3,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/3) [4,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/4)|
|SignupForm|[2](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/2)|
|Navbar|All user stories|
|Avatar|[5,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/5) [19](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/19)|
|WandererEditForm|[5](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/5)|
|PostCreateForm|[6,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/6) [27](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/27)|
|Post|[7,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/7) [8,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/8) [9,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/9) [24,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/24) [25](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/25)|
|PostEditForm|[8](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/8)|
|PostsPage|[7,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/7) [12,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/12) [24](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/24)|
|PostPage|[7,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/7) [15,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/15) [15](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/15)|
|Comment|[15,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/15) [16,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/16) [17](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/17)|
|CommentCreateForm|[21](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/14)|
|CommentEditForm|[16](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/16)|
|Wanderer|[31,](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/31) [19](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/19)|
|PopularWanderers|[31](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/31)|
|About Page|[10](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/10)|
|NotFound|[22](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/22)|

The use of the React library in the Wander Wise project has significantly contributed to enhancing the user experience. React's component-based architecture has helped create reusable components such as Asset, Avatar, MoreDropdown, NavBar, and others. These components not only ensure consistent look and feel across the application but also make the codebase more maintainable and easier to update or extend.

One particular feature where React has been instrumental is the implementation of infinite scrolling using the react-infinite-scroll-component. This feature greatly enhances user experience by loading data incrementally as the user scrolls, providing a seamless browsing experience without traditional pagination interruptions. Coupled with the axios library for asynchronous data fetching, the application is able to provide users with a non-blocking, smooth, and enjoyable browsing experience. The use of the react-router-dom also enhances navigation experience, allowing us to create a single-page application with multiple views that load instantly, providing a near-native user experience.

[Back up](#table-of-content)

### Skeleton
#### Wireframes
The wireframes provide a visual representation of the different pages and features of the web application. They serve as a blueprint for the design and layout of each page, helping to visualize the user interface and overall user experience. These wireframes were created using Balsamiq, a tool that enables quick and intuitive sketching of design ideas.

<details><summary>Home / Following / Countryside</summary>
<img src="/docs/">
</details>
<details><summary>About</summary>
<img src="/docs/">
</details>
<details><summary>Sign Up / Login</summary>
<img src="/docs/">
</details>
<details><summary>Wanderer Profile</summary>
<img src="/docs/">
</details>


### Surface

#### Design Choices
The design of Wander Wise embraces a minimalistic yet warm aesthetic, capturing the joy and tranquility we often experience during our wanders. The design aimed to mirror the exciting, yet peaceful experiences of exploration and global discovery. This balance was achieved by using clean lines, easy-to-read typography, and a color palette inspired by the Earth's diverse landscapes.

#### Colour

![Mockup image](/docs/colors.png)
The color palette was carefully chosen to represent the Earth and its multitude of natural wonders. A warm beige and dark brown color symbolize the earth and ground beneath our feet, bringing warmth and a sense of stability to the design. The contrasting color of a unique blend between dark green and dark blue represents the vast oceans and the lush greenery of nature, offering a refreshing counterpoint to the earthy tones. As the palette moves skyward, a light blue color encapsulates the expanse of the sky. To capture the ethereal beauty of a sunset, a contrasting pink tone has been included, mirroring the captivating hues that dance in the sky as day transitions into night. This comprehensive color palette harmoniously encapsulates the beauty of our planet, inviting users into a visually appealing and relatable space.

#### Typography
The typography chosen for Wander Wise is both Lato and Roboto, selected for their readability and clean aesthetics. Lato, a sans-serif typeface, offers a warm yet professional tone, while still embodying an unassuming simplicity. It's highly legible at small sizes, making it ideal for body text. In contrast, Roboto, with its wide letterforms and clean lines, is used for headers and subheaders to grab user attention while maintaining readability. The combination of these fonts provides an engaging user experience, with typography that's accessible and friendly, yet polished and professional.

[Back up](#table-of-content)

## Technologies Used

### Languages
- HTML
- CSS
- Python
- JSX (JavaScript XML)

### Frameworks.
- React: A JavaScript library for building user interfaces. It is commonly used for creating dynamic and interactive components in web applications.
- Cloudinary: A cloud-based media management platform used for storing and serving images in the Wander Wise project.
- Bootstrap and React-bootstrap: The widely used CSS framework adapted for React. Used for faster and easier web development.

### Database
- PostgreSQL database server. It is used as the database for the Wander Wise project, providing a reliable and scalable storage solution for the application's data.

### Tools
- Git: A distributed version control system used for tracking changes in the project's source code.
- GitHub: A web-based hosting service for version control repositories, used for storing and managing the project's source code.
- Gitpod: An online integrated development environment (IDE) used for developing and testing the Wander Wise project.
- Heroku: A cloud platform that enables deployment and hosting of web applications. Heroku was used for deploying the Wander Wise project to a live server.
- Balsamiq: A wireframing tool used for creating mockups and prototypes of the Wander Wise webapp.
- Google Fonts: A collection of free and open-source fonts used for typography on the Wander Wise webapp.
- Font Awesome: A library of icons used for adding scalable vector icons to the Wander Wise webapp.

### Supporting Libraries and Packages
- @testing-library/jest-dom, @testing-library/react, @testing-library/user-event: These libraries are part of the Testing Library, a lightweight solution for testing JavaScript and React code.
- axios: Promise-based HTTP client for making asynchronous HTTP requests in JavaScript.
- jwt-decode: A small browser library that helps decoding JWTs token which are Base64Url encoded.
- react-dom: Serves as the entry point to the DOM and server renderers for React.
- react-infinite-scroll-component: A component to implement 'infinite scroll' in a ReactJS application.
- react-router-dom: A routing library for React, it allows the application to have multiple 'pages' or views.
- react-scripts: Includes scripts and configuration used by Create React App.
- web-vitals: A library for measuring, reporting and analyzing web vital metrics.
- @babel/plugin-proposal-private-property-in-object (Dev): A Babel plugin transforming private properties in objects.
- msw (Dev): Mock Service Worker library used for mocking your REST and GraphQL APIs on both client and server side.

[Back up](#table-of-content)

## Methodology
The Wander Wise project has been developed using agile principles, enabling efficient collaboration, iterative development, and effective project management. The following methodology has been employed throughout the project:

### Agile Project Management with GitHub Projects
GitHub Projects has been utilized to facilitate agile project management. User stories and bugs have been organized as GitHub issues, allowing for a clear and structured approach to development. The project board in GitHub Projects serves as a Kanban board, providing an overview of the project's progress.

### User Stories as GitHub Issues
Each user story has been created as a GitHub issue, capturing the desired functionality from the user's perspective. The user stories are linked to their corresponding GitHub issues, allowing easy access to the acceptance criteria, tasks, and comments associated with each user story.

### Commit and Issue Linking
In the spirit of maintaining transparency and traceability in the project's development, commits associated with a user story or a bug have been linked directly to the corresponding GitHub issue. This feature of GitHub helps in providing a complete picture of the changes made to address each user story or fix each bug.

### Bug Tracking
Bugs encountered during the development process have also been logged as GitHub issues. These issues contain details about the specific bug, its impact, and steps to reproduce it. By linking the bugs in the README.md to their respective GitHub issues and commits, it's possible to gain insights into the bugs' resolution progress and view any additional comments.

### Iterative Development Approach
The Wander Wise project follows an iterative development approach, allowing for continuous improvement and progress while adhering to time constraints. The development process is structured into sprints, with each sprint typically lasting around 6 days.

To ensure efficient prioritization, the project employs the MuSCoW (Must have, Should have, Could have, Won't have) method. User stories critical to the app's success are categorized as Must-haves, followed by Should-haves, Could-haves, and Won't-haves. You can refer to the [Kanban board](https://github.com/users/Noah-Samawi/projects/13) to view the prioritization.

Within each sprint, a MoSCoW method is used to further prioritize user stories. They are classified as Must Do, Should Do, Could Do, and Won't Do, representing the remaining user stories that will not be included in the sprints. This approach ensures a clear differentiation between the overall project prioritization and the prioritization within each sprint, minimizing any potential confusion.

#### Sprint 1 (June 13th - June 18th, 2023): 
**Planning & Documentation**
* [x] Plan Sprint (Must do)
* [x] Create and write readme.md (Must do)
* [x] Design Database Schema (Should do)
* [x] Create the wireframes (Should do)
* [x] Plan Sprint 2 (Must do)

**PP5_api_Backend**
* [x] Create a repository for the api in Github (Must do)
* [x] Start a django project in Gitpod (Must do)
* [x] Install necessary libraries and dependencies (Must do)
* [x] Create an PostgreSQL database and connect it to the API (Must do)
* [x] Connect image uploads to Cloudinary (Must do)
* [x] Add filtering (Should do)
* [x] Deploy the Djano REST API (Should do)

**Create Apps and models for:** 
* [x] Wanderer (extension of the user) (Must do)
* [x] Posts (Must do)
* [x] Comements (Must do)
* [x] Likes (Must do)
* [x] Follower (Should do)
* [x] Countryside (Must do)
* [ ] Location (Should have) *- Moved to next sprint*

**Frontend**
* [x] Create a repository for the Wander Tickr (Should do)
* [x] Start a React project in Gitpod (Could do)
* [ ] Test deploy project on Heroku (Could do) *- Moved to next sprint*
* [ ] Install component library (Could do) *- Moved to next sprint*
* [ ] Design and implement navigation bar (Could do) *- Moved to next sprint*
* [ ] Do so navigation bar and authorization works (Could do) *- Moved to next sprint*
* [ ] Design and implement footer (Could do) *- Moved to next sprint*

**Sprint 1 recap:**
In sprint 1 I accomplished critical planning and documentation tasks, and successfully created the backend of the project including the creation of numerous apps and models. The initiation of the frontend was also embarked upon, though several elements have been postponed to the subsequent sprint.

#### Sprint 2 (June 19th - June 24th, 2023):
* [ ] Location (Must do)  *- Moved to next sprint and user story created*
* [x] Test deploy project on Heroku (Must do) 
* [x] Install component library (Must do) 
* [x] Design and implement navigation bar (Must do)
* [x] Do so navigation bar and authorization works (Must do)
* [ ] Design and implement footer (Must do)   *- Moved to next sprint*
* [x] [USER STORY: Registration](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/2)  (Must do) 
* [x] [USER STORY: Login](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/3) (Must do)
* [x] [USER STORY: Logout](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/4) (Must do)
* [ ] [USER STORY: Update profile](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/5) (Should do)  *- Moved to next sprint*
* [x] [USER STORY: Create a post/Memory](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/6) (Must do)
* [x] [USER STORY: View a post](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/7) (Must do) *- Moved to next sprint*
* [ ] [USER STORY: Update a post](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/8) (Should do) *- Moved to next sprint*
* [ ] [USER STORY: Delete a post](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/9) (Should do) *- Moved to next sprint*

* [ ] [USER STORY: Search Posts](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/11) (Should do) *- Moved to next sprint*
* [ ] [USER STORY: Sort Posts](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/12) (Could do) *- Moved to next sprint*
* [ ] [USER STORY: Like Posts](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/30) (Should do) *- Moved to next sprint*

* [ ] [USER STORY: Create a Comment](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/14) (Could do) *- Moved to next sprint*
* [ ] [USER STORY: View Comments](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/15) (Could do) *- Moved to next sprint*
* [ ] [USER STORY: Update Comment](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/16) (Could do) *- Moved to next sprint*
* [ ] [USER STORY: Delete Comment](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/17) (Could do) *- Moved to next sprint*
* [x] Plan Sprint 2 (Must do)

**Sprint 2 recap:**
During sprint 2 the focus was on the further development of the frontend, with significant progress made on the implementation of the navigation bar and authorization. Additionally, several crucial user stories pertaining to user registration, login, logout, and post creation and viewing were completed, while a few tasks and user stories have been transitioned to the next sprint.

#### Sprint 3 (June 25th - July 1st, 2023): 
* [ ] [USER STORY: About page](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/10) (Must do) *- Moved to next sprint*
* [x] [USER STORY: Profile page](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/19) (Must do)
* [x] [USER STORY: Update profile](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/5) (Must do)
* [x] [USER STORY: Popular Profiles](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/31) (Must do)
* [x] [USER STORY: View a post](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/7) (Must do)
* [x] [USER STORY: Update a post](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/8) (Must do)
* [x] [USER STORY: Delete a post](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/9) (Must do)

* [x] [USER STORY: Search Posts](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/11) (Must do)
* [x] [USER STORY: Sort Posts](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/12) (Must do)
* [x] [USER STORY: Like Posts](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/30) (Must do)
* [ ] [USER STORY: Location](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/25) (Should do) *- Moved to next sprint*

* [x] [USER STORY: Create a Comment](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/14) (Must do)
* [x] [USER STORY: View Comments](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/15) (Must do)
* [x] [USER STORY: Update Comment](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/16) (Must do)
* [x] [USER STORY: Delete Comment](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/17) (Must do)

* [x] [USER STORY: Follow Users](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/18) (Must do) 
* [x] [USER STORY: Maintain user enviornment](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/20) (Must do)
* [x] [USER STORY: Add Post to countryside](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/24) (Must do)

* [ ] [USER STORY: Upload multiple photos](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/28) (Should do) *- Moved to next sprint*
* [ ] [USER STORY: Photo Album](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/32) (Should do) *- Moved to next sprint*
* [ ] [USER STORY: Wander Map](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/26) (Could do) *- Moved to next sprint*
* [ ] [USER STORY: Create a trip](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/27) (Wont do) *- Moved to next sprint*
* [ ] [USER STORY: Countryside and info](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/33) (Wont do) *- Moved to next sprint*
* [ ] [USER STORY: Location](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/25) (Must do) *- Moved to next sprint*

**Sprint 3 recap:** Although I have decided to move the "Location" user story to the next sprint, we have successfully accomplished a significant portion of the planned tasks for Sprint 3. 

#### Sprint 4 (July 2nd - July 7th, 2023): 
* [x] [USER STORY: About page](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/10) (Must do) 
* [x] [USER STORY: Like comments](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/13) (Must do)
* [ ] [USER STORY: Upload multiple photos](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/28) (Should do) *- Moved to backlog*
* [ ] [USER STORY: Photo Album](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/32) (Could do) *- Moved to backlog*
* [ ] [USER STORY: Wander Map](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/26) (Could do) *- Moved to backlog*
* [ ] [USER STORY: Create a trip](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/27) (Wont do) *- Moved to backlog*
* [ ] [USER STORY: Packing list and info](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/33) (Wont do) *- Moved to backlog*
* [x] [USER STORY: Location](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/25) (Must do) 
* [x] Documentation (Must do)
* [x] [USER STORY: 404-page](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/22)
* [x] [USER STORY: Improve application and deployment](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/21) (Must do)
* [x] [USER STORY: Test application](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/23) (Must do)

#### Backlog
* [ ] [USER STORY: Upload multiple photos](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/28) 
* [ ] [USER STORY: Photo Album](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/32)
* [ ] [USER STORY: Wander Map](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/26)
* [ ] [USER STORY: Create a trip](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/27)
* [ ] [USER STORY: Packing list and info](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/29)

**Sprint 4 recap:** 
The focus was on finalizing the project and completing essential user stories. The About page, the ability to like comments, and the implementation of the location feature were successfully accomplished. Documentation, including the creation of a 404-page, and improving application deployment were also completed. While some user stories were moved to the backlog for future consideration, the application was thoroughly tested to ensure its functionality and quality.

### Backlog and Subsequent Iterations 
The user stories are tracked on the project board, and the "To do" column represents the backlog of user stories (also see above), indicating the tasks that will be addressed in subsequent iterations.

Please note that even though the project timeline has been accelerated, the iterative development approach allows for ongoing improvements and enhancements to meet the evolving needs of users.

For a comprehensive view of the project progress, user stories, and bug tracking, please see the [Kanban board](https://github.com/users/SandraBergstrom/projects/7).

[Back up](#table-of-content)

## Bugs

### Known bugs

| **Bug** | **Status** |
| ----------- | ----------- |
| [Wrong message when hover countryside as not logged in](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/34) |Due to current priorities and time constraints, this bug have been moved to the backlog and will be addressed as time allows.|


### Fixed bugs 
Here is a summary of the identified bugs along with brief descriptions of their fixes. For more detailed information, please follow the provided link to the corresponding GitHub issue, where you can track the entire process including the bug report, commits, and the steps taken to resolve the issue.
| **Bug** | **Fix** |
| ----------- | ----------- |
|[Npm teast , a error message](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues/35)|sont fixed jet|
|[Can't see the user profile](https://github.com/Noah-Samawi/pp5-wander-wise-frontend/issues)||

[Back up](#table-of-content)

## Testing
The testing phase indicates that the application is reliable, offering a smooth and comprehensive user experience. To view the complete testing details and results, please [click here](TESTING.md).

[Back up](#table-of-content)

## Deployment
The website was deployed using Heroku, following the steps below:

1. **Create a [Heroku](https://dashboard.heroku.com/) Account**: If you do not have a Heroku account already, create one. Heroku is a platform that enables developers to build, run, and operate applications entirely in the cloud.
2. **Prepare your Application**: Commit and push your code to your GitHub repository. Ensure that all necessary changes have been made and the latest version of the application is ready for deployment.
3. **Create a New Application on Heroku**: From your Heroku dashboard, create a new application. Choose an appropriate name for your application and select a region.
4. **Set Environment Variables**: Ensure the environmental variables are also added to your Heroku app settings under the Config Vars section. This is done to protect sensitive data and also to allow the services to communicate with your Heroku app.
5. **Deployment Process**: In the Heroku dashboard, navigate to the "Deploy" section of your application. Here, you will be able to link your GitHub repository to your Heroku app. Ensure that the repository and branch that contain the version of your app that you wish to deploy are selected. Finally, click "Deploy Branch" under the "Manual deploy" section.
6. **Verify Deployment**: After the deployment process completes, Heroku will provide a URL to the live application. Open this URL in your browser to ensure the application has been deployed successfully and is functioning as expected.

You can for fork the repository by following these steps:
1. Go to the GitHub repository
2. Click on Fork button in upper right hand corner
3. Wait for the forking process to complete. Once done, you will have a copy of the repository in your GitHub account.

You can clone the repository by following these steps:
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it 
3. Select your preferred method for cloning: HTTPS, SSH, or GitHub CLI, and click the copy button to copy the repository URL to your clipboard.
4. Open Git Bash (or your preferred terminal).
5. Change the current working directory to the location where you want the cloned directory to be created.
6. Type the command **'git clone'** followed by the URL you copied in step 3. The command should look like this: **git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY**.
7. Press Enter to create your local clone.

[Back up](#table-of-content)

## Credits
I would like to express my sincere gratitude to the following resources, which have been instrumental in the development of the Wander Wise
### Media
All images used in the webapp is from [Pexels](https://www.pexels.com/sv-se/) The images that are uploaded belong to the users except from the user Noah that is using images from Pexels. 

### Fonts
[Google Fonts](https://fonts.google.com/)

### Other
[API to fetch countries](https://restcountries.com/)

[Back up](#table-of-content)

## Acknowledgements
I would like to express my gratitude to Code Institute's project "Moments" as it served as a significant source of inspiration for my own project. I am also incredibly thankful to my mentor, Antonio Rodriguez, for providing guidance and valuable feedback throughout the development process. Additionally, I extend my appreciation to Kay Welfare for being readily available, offering support, and providing assistance whenever needed. I am also incredibly thankful to the Tutor Assistance Support for helping me fix the defective bugs in my project. Their contributions have been essential in the successful completion of this project.

[Back up](#table-of-content)