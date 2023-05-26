# About

This is a simplified "YouTube Clone" web application that allows users to view a list of predefined video thumbnails, click on a thumbnail to play the video, and see basic information about the video such as the title and description.

## Features

- Display a list of video thumbnails
- Play selected videos
- Show video details such as Title, Creator-Id, Counts and Description
- Pagination to navigate through the video list

## Technologies Used

- React.js: A JavaScript library for building user interfaces
- React Router: For handling routing and navigation within the application
- React Player: For video playback
- Styled Components & MUI - For CSS

## Getting Started

1: Clone the repository

```
git clone https://github.com/abhiiishek07/grocare_assignment.git
```

2: Navigate to project directory

```
cd grocare_assignment
```

3: Install the dependencies

```
npm install
```

4: Start the application

```
npm start
```

5: Open your browser and navigate to http://localhost:3000 to view the application.

## Live Demo

You can also check out the live version of the application [here](https://grocaretube.netlify.app/).

## API Pagination

The application fetches videos from an API using pagination. The API endpoint for fetching videos is:

```
https://internship-service.onrender.com/videos?page={page}
```

Replace {page} with the desired page number to retrieve the corresponding videos.

## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, please submit a pull request or open an issue.

## License

```
Make sure to replace `<repository-url>` in the "Getting Started" section with the actual URL of your repository.

Feel free to customize the README file further with additional sections or information relevant to your project.
```
