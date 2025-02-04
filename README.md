# About the project

This To Do App was created as a study case for GymBeam recruitment process for a **Junior React Developer** position.

In the app, user can add, edit and remove their tasks, mark them as completed and reopen them to get back to working on the tasks. The app uses a mockAPI endpoint, which can be found here:

- https://669a16149ba098ed61fe4298.mockapi.io/todo/api/v1/tasks

The app is responsive for all screen sizes.

The app has a dark / light mode toggle switch with the preferences saved in the local storage.

# How to install and start the project

To install and start the project, it is important to have Git and Node.js installed in your VSCode.

Then, please follow these steps:

**1. Clone the project from the GitHub Repository**

- https://github.com/suffle-girl/to-do-app

Fork the project and clone your version to your computer

Open VSCode terminal in the desired folder -> git clone {link_to_the_forked_repository.git}

**2. Install all dependencies**

VSCode terminal -> npm install

**3. Run the app on your local host**

VSCode terminal -> npm run dev

# App on Netlify

Alternatively, you can also find the App on Netlify:

- https://thetodoappapp.netlify.app/

# Known Issues

Due to the limited time allocated to working on the project, there has been a few issues I haven't manage to figure out yet.

**#1 Editing won't load priority, due date, or tag**

When editing the existing task, existing data for priority, due date and tag cannot be loaded back into the form. The user has to select them manually again.

**#2 No changes to the task name and description send out empty input fields**

When editing an existing task, if user won't make any changes to the task name or task description, the form sent out via the PUT method sends an empty input value to the API, instead of the already existing data.

Using the PATCH method might solve this problem, but the mockAPI won't allow me to use it.

**#3 The responsive design isn't ideal for the biggest screens**

Though I tested the design for different sizes of screens, when open on the bigger screens (more than 2150px), it still might need some adjustments.

Nonetheless, we can assume such an app would be primarily used on mobile and tablet devices, given the nature of to do lists in general.
