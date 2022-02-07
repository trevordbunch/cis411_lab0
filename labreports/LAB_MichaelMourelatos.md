# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2022  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Michael Mourelatos  
**GitHub Handle:** MichaelMourelatos  
**Person Following:** [Andrew Coldsmith](https://github.com/andrewcoldsmith)  
**Github Starred Repository:** [Michael Hermen](https://gist.github.com/mjhea0/5680216)  
**Repository:** [Michael Mourelatos Forked Repository](https://github.com/MichaelMourelatos/cis411_lab1_CI)
___

# Step 1: Fork this repository
- The URL of my forked repository: [Michael Mourelatos Forked Repository](https://github.com/MichaelMourelatos/cis411_lab1_CI)
- The accompanying diagram of what my fork precisely and conceptually represents: ![Fork Diagram](/assets/Fork_Diagram_2_6.jpg)

# Step 2: Clone your forked repository from the command line  
- My local file directory is: /Users/dev/Desktop/School/Junior\ Year/Spring\ Semester\ 2022/Systems\ Analysis\ and\ Design\ Concepts/cis411_lab1_Cl
- The command to navigate to the directory when I open up the command line is: cd /Users/dev/Desktop/School/Junior\ Year/Spring\ Semester\ 2022/Systems\ Analysis\ and\ Design\ Concepts/cis411_lab1_Cl

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project:
``` json
{
  "data": {
    "mutateAccount": {
      "id": "701e365b-29a3-4984-a46e-006c4d03382c",
      "name": "Michael Mourelatos",
      "email": "mm1682@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
0112c77 (HEAD -> labreport) Updates and AddingFork Diagram
9de2d6d Updates to Steps 1-3
f48041d (origin/labreport) First Commit. Updating prompt
```
- The accompanying diagram of what my feature branch precisely and conceptually represents: ![Branch Diagram](/assets/Branches_Diagram_2_6.jpg)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?
    - The config file is downloading Yarn, a package manager, and is then running Yarn to verify if all dependencies are installed on the given project. The cache aspect of the code is keeping memory of what was done in pervious runs so nothing has to be redownloaded.


- What do the various sections on the config file do?
    - Jobs is going through the necessary steps that runs the [execution environment](https://support.circleci.com/hc/en-us/articles/115015711148-What-is-a-job-#:~:text=A%20job%20is%20what%20runs,yml%20.).

    - Build is what establishes what will be used, tested, or run. In this example, we are using Yarn, so, Build sets up Yarn so it can be used.
  
    - Docker is a [platform that creates an isolated environment for running applications](https://www.jenkins.io/doc/book/installing/docker/). This allows the code as shown to be run, and being able to install Yarn.
    
    - The "image: circleci/node:10.3" is a docker image which entails it is the project/code selected to be scanned.
    
    - [The cache is what persists data between the same job in multiple workflow runs. Caching lets you reuse the data from expensive fetch operations from previous jobs](https://circleci.com/blog/persisting-data-in-workflows-when-to-use-caching-artifacts-and-workspaces/). Cache stores the memory of what was previously done so the user can essentially pick up where they last started.
    
    - The code reveals that there is a working repository.
    
    - Checkout is a [special step used to check out source code to the configured path](https://stackoverflow.com/questions/58025126/what-does-the-checkout-step-in-circle-ci-do). Basically ensuring that there is a clean connection within the configured path. This is the step where your code is being pulled in by checkout.
    
    - [The yarn install is used to install all dependencies for a project](https://stackoverflow.com/questions/59265231/what-is-the-difference-between-yarn-and-yarn-install#:~:text=yarn%20install%20is%20used%20to,you%20need%20to%20pick%20up.).
    
    - Finally the CircleCi test is conducted.
   

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?
    - In most scenarios when using CircleCI, there will be a set of requirements set in place to ensure the code is following certain guidelines. When a CI is successful, it means that everything is running properly and all the code follows the requirements set in place. CI scans the pipeline and creates a build signal and notifies the developers if there is anything that needs to be fixed. When using CI, it also makes sure that there are no damaging changes being made when executing new code.
   

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
    - To implement a system that takes on continuous delivery where software is updated automatically, something that should be implemented is a notification informing users that there have been changes made. If the software is going to be updated automatically, users should know about this so they can keep their system up to date with any sort of changes made.
   

# Step 6: Merging the feature branch
* The output of my git commit log
```
85d8b49 (HEAD -> main, origin/labreport, labreport) Final Commit
6b43af9 Adding diagrams
abef1db Editing some of the Steps
1c4ca2e Adding Logs
0112c77 Updates and AddingFork Diagram
9de2d6d Updates to Steps 1-3
f48041d First Commit. Updating prompt
```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](/assets/Screenshot_of_Jobs_List.png)

# Step 7: Submitting a Pull Request

Worked with [Grace-Schl](https://github.com/Grace-Schl) and [AndrewColdmith](https://github.com/andrewcoldsmith)


# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
