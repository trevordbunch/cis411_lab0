# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Ryan Donat  
**GitHub Handle:** ryandonat
**Repository:** https://github.com/ryandonat/cis411_lab1_CI.git
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/ryandonat/cis411_lab1_CI.git
- The accompanying diagram of what my fork precisely and conceptually represents...

# Step 2: Clone your forked repository from the command line  
- My local file directory is: /Users/rd/Desktop/SAaDC/cis411_lab1_CI
- The command to navigate to the directory when I open up the command line is: cd /Users/rd/Desktop/SAaDC/cis411_lab1_CI

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "2a4179f1-1a7a-4b15-aacc-4020925b9f70",
      "name": "Ryan Donat",
      "email": "rydonat@gmail.com"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
1f846a0 (HEAD -> labreport, origin/labreport) committing after creating branch and adding new lab report @trevordbunch
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
```
- The accompanying diagram of what my feature branch precisely and conceptually represents...

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  

  .circleci/config.yml is the configuration file which provides an on-demand shell to run whatever is needed. This file outlines what the container will look like, and the steps on how it will be built. Conceptually, a Docker is a "container" which allows code to be run exactly the same in any enviornment. Dockers solve issues of compatability when working on code or project from different places and systems.

- What do the various sections on the config file do?  

  Line #1 indicates the version of the YAML file being used through a comment, also defined in line 5(In this case, 2.0) 

  Lines #6-16: The jobs level contains a collection of arbitrarily named children. build is the first named child in the jobs collection. These lines also defines the docker container, including the version of node. Here the repository is defined as the working directory

  Line #19-25: The steps collection is an ordered list of run directives. Each run directive is executed in the order in which it was declared. From here the configuration file is running whatever commands are inside. The code is checked out, the cache is cleared, dependencies are checked, yarn install is run.

  Line #37: As commented, there is a test to make sure everything works

  Credit to https://circleci.com/docs/2.0/config-intro/ for explaining the CircleCI and the config.yml file.

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  

  When the build is successful, it indicates that the continuous integration (the process of automatically building and testing your software on a regular basis) enviornment is working, and that there is now a docker container which makes packaging software easier.  

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  




   

# Step 6: Merging the feature branch
* The output of my git commit log
```
Trevors-MBP:cis411_lab0 trevorbunch$ git log --oneline
dbf826a (HEAD -> labreport, origin/labreport) Answer Step 4
a9c1de6 Complete Step 1, 2 and 3 of LAB_TREVORDBUNCH
1ead543 remove LAB.md
8c38613 Initial commit of labreport with @tangollama
dabceca (upstream/main, origin/main, origin/HEAD, main) Merge pull request #24 from tangollama/circleci
a4096db Create README.md
...
44ce6ae Initial commit
(END)
```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](../assets/circleci_success.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
