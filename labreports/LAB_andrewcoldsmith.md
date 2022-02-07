# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Andrew Coldsmith  
**GitHub Handle:** andrewcoldsmith  
**Repository:** [andrewcoldsmith/cis411_lab1_CI](https://github.com/andrewcoldsmith/cis411_lab1_CI)  
___

# Step 1: Fork this repository
- The URL of a repository I starred: https://github.com/DS-Homebrew/TWiLightMenu
- The URL of my forked repository: https://github.com/andrewcoldsmith/cis411_lab1_CI
- The accompanying diagram of what my fork precisely and conceptually represents.
![Fork Diagram](/assets/repositoryForkDiagram.jpg)

# Step 2: Clone your forked repository from the command line  
- My local file directory is  
  C:\P\Documents\MessiahCourses\SystemAnalysis\cis411_lab1_CI
- The command to navigate to the directory when I open up the command line is   
  cd C:\P\Documents\MessiahCourses\SystemAnalysis\cis411_lab1_CI

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "648dd1bb-5c94-4935-8b34-ece0f5354ade",
      "name": "Andrew Coldsmith",
      "email": "ac1500@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
4501bf0 (HEAD -> labreport, origin/labreport) created feature branch @trevorbunch
7490dcb (origin/main, origin/HEAD, main) Add Links to Node in Instructions
ecaaa53 Update branch terminology
c552213 Merge pull request #3 from hallienicholas/main
78ede9f Corrected error
1fe415c Merge pull request #1 from trevordbunch/labreport
13e571f Update Lab readme, instructions and templates
eafe253 Adjust submitting instructions
47e83cd Add images to LabReport
ec18770 Add Images
dbf826a Answer Step 4
a9c1de6 Complete Step 1, 2 and 3 of LAB_TREVORDBUNCH
1ead543 remove LAB.md
8c38613 Initial commit of labreport with @tangollama
dabceca Merge pull request #24 from tangollama/circleci
a4096db Create README.md
2f01bf4 Update LAB_INSTRUCTIONS.md
347bd50 Update LAB_INSTRUCTIONS.md
7aaa9f3 Update LAB_INSTRUCTIONS.md
37393ae Bug fixed
1949d2a Update LAB_INSTRUCTIONS.md
d36ad90 Update LAB.md
59ef18a Update LAB_INSTRUCTIONS.md
37be3c8 Update LAB_INSTRUCTIONS.md
97da547 Update LAB.md
0bd6244 updated Step 0 title
4562cd8 added npm and node install repreq
255051e adding template
13a09b7 Adding the LAB.md and correcting some instructions.
```
- The accompanying diagram of what my feature branch precisely and conceptually represents.
![Branch Diagram](/assets/repositoryBranchDiagram.jpg)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing? 
   
  config.yml runs tests to ensure that new pushes do not break the code in the repository. It's like a bouncer preventing yourself and others from pushing changes that would ruin your files.

- What do the various sections on the config file do?  
   
  - **jobs** - Various tasks to be completed. The only job in this file is **build**.
  - **build** - Performs setup tasks and often proceeds sections like **test**.
  - **docker** - A closed environment where a docker image is used to execute code.
  - **steps** - An ordered list of directives to be run.
  - **checkout** - Retrieves the code from your repositiory.
  - **restore_cache** - If available, a previously stored cache is opened which means **yarn install** will only need to download new dependencies not old ones.
  - **run: yarn install** - A command that installs yarn, a package manager.
  - **save_cache** - Saves a cache with any new additions to yarn to be used next time **restore_cache** is called.
  - **run: yarn test** - Using yarn, all predefined tests for the repository are run.


- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
   
  When a CI build is successful all new additions and changes do not harm the pre-existing project. More precisely, all tests in config.yml run correctly.

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  

  Deployment jobs would need to be added that automatically upload the repository to clients.
   

# Step 6: Merging the feature branch
* The output of my git commit log
```
eca38bd (HEAD -> main, labreport) report mostly complete; preparing to merge branches
4501bf0 (origin/labreport) created feature branch @trevorbunch
7490dcb (origin/main, origin/HEAD) Add Links to Node in Instructions
ecaaa53 Update branch terminology
c552213 Merge pull request #3 from hallienicholas/main
78ede9f Corrected error
1fe415c Merge pull request #1 from trevordbunch/labreport
13e571f Update Lab readme, instructions and templates
eafe253 Adjust submitting instructions
47e83cd Add images to LabReport
ec18770 Add Images
dbf826a Answer Step 4
a9c1de6 Complete Step 1, 2 and 3 of LAB_TREVORDBUNCH
1ead543 remove LAB.md
8c38613 Initial commit of labreport with @tangollama
dabceca Merge pull request #24 from tangollama/circleci
a4096db Create README.md
2f01bf4 Update LAB_INSTRUCTIONS.md
347bd50 Update LAB_INSTRUCTIONS.md
7aaa9f3 Update LAB_INSTRUCTIONS.md
37393ae Bug fixed
1949d2a Update LAB_INSTRUCTIONS.md
d36ad90 Update LAB.md
59ef18a Update LAB_INSTRUCTIONS.md
37be3c8 Update LAB_INSTRUCTIONS.md
97da547 Update LAB.md
0bd6244 updated Step 0 title
4562cd8 added npm and node install repreq
255051e adding template
```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Jobs List](/assets/jobsScreenshot.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
