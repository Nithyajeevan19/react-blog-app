In this project, let's perform **Fetch and Routing** by applying the concepts we have learned till now.

You’ll be provided with pre-filled code, including the basic React Code and the CSS styles.
 
Your task is to read the given code carefully and then complete the missing parts to achieve the expected output shown in the reference image.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/fetch-and-routing-practice-output.gif" alt="fetch and routing practice desktop output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/fetch-and-routing-practice-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/fetch-and-routing-practice-lg-blog-list-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Blog Item Details](https://assets.ccbp.in/frontend/content/react-js/fetch-and-routing-practice-lg-blog-item-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm run dev`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the app is opened, Home Route should be displayed
- When the Home Route is opened,

  - Make HTTP GET request to the **blogsApiUrl**
  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the list of blogs should be displayed

- When a blog item in Home Route is clicked,
  - Page should be navigated to the Blog Item Details Route with the URL `/blogs/:id`
- When the Blog Item Details Route is opened,
  - Make HTTP GET request to the **blogItemDetailsApiUrl** with the blog id to get the details of the blog
    - Example: `https://apis.ccbp.in/blogs/2`
  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the details of the blog should be displayed

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**blogsApiUrl**

#### API: `https://apis.ccbp.in/blogs`

#### Method: `GET`

#### Description:

Returns a response containing the list of all blogs

#### Response

```json
[
  {
    "id": 1,
    "title": "React v16.9.0 and the Roadmap Update",
    "image_url": "https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png",
    "avatar_url": "https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg",
    "author": "Dan Abramov,",
    "topic": "React.js"
  },
  ...
]
```

**blogItemDetailsApiUrl**

#### API: `https://apis.ccbp.in/blogs/:id`

#### Example: `https://apis.ccbp.in/blogs/2`

#### Method: `GET`

#### Description:

Returns a response containing the details of the specific blog

#### Response

```json
{
  "id": 2,
  "title": "React v16.7: No, This Is Not the One With Hooks",
  "image_url": "https://miro.medium.com/max/3158/1*kEPCQNY4dwVyaFuLEwJcNQ.png",
  "avatar_url": "https://avatars.githubusercontent.com/u/3624098?v=4",
  "author": "Andrew Clark",
  "content": "React follows semantic versioning. Typically, this means that we use patch versions for bugfixes, and minors for new (non-breaking) features. However, we reserve the option to release minor versions even if they do not include new features. The motivation is to reserve patches for changes that have a very low chance of breaking. Patches are the most important type of release because they sometimes contain critical bugfixes.",
  "topic": "React.js"
}
```

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/fetch-and-routing-practice-home-component-breakdown-structure.png" alt="fetch and routing practice home component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/fetch-and-routing-practice-blog-item-component-breakdown-structure.png" alt="fetch and routing practice blog item component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>
</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.jsx`
- `src/components/BlogList/index.jsx`
- `src/components/BlogItemDetails/index.jsx`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` route should consist of `/` in the URL path
- `About` route should consist of `/about` in the URL path
- `Contact` route should consist of `/contact` in the URL path
- `BlogItemDetails` route should consist of `/blogs/:id` in the URL path
- `NotFound` route should consists of `*` in the URL path, will be display if the URL is not valid
- No need to use the `BrowserRouter` in `App.jsx` as we have already included in `main.jsx` file
- Import `ClipLoader` component as shown below

```jsx
import {ClipLoader} from 'react-spinners'
```

- Wrap the `ClipLoader` component with an HTML container element and add the `data-testid` attribute value as `loader` to it as shown below

  ```jsx
  <div data-testid="loader">
    <ClipLoader color="#00bfff" size={50} />
  </div>
  ```

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #8e8e8e; width: 150px; padding: 10px; color: white">Hex: #8e8e8e</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #d3d3d3; width: 150px; padding: 10px; color: white">Hex: #d3d3d3</div>
<div style="background-color: #2f4f4f; width: 150px; padding: 10px; color: white">Hex: #2f4f4f</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
