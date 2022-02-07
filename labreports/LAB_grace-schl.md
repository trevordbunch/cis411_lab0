# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Grace Schlauder  
**GitHub Handle:** grace-schl  
**Repository:** [My Forked Repository](https://github.com/grace-schl/cis411_lab1_CI)  
**Starred Repository:** [My Starred Repo](https://github.com/alexfoxy/lax.js)
___

# Step 1: Fork this repository
- The URL of my forked repository: 
  - https://github.com/grace-schl/cis411_lab1_CI
- The accompanying diagram of what my fork precisely and conceptually represents...
  
![Fork Diagram](/assets/cis411_lab1_CI_forked.jpg)


# Step 2: Clone your forked repository from the command line  
- My local file directory is... 
  - /Users/graceschlauder/Documents/GitHub/cis411_lab1_CI
- The command to navigate to the directory when I open up the command line is... 
  - cd /Users/graceschlauder/Documents/GitHub/cis411_lab1_CI

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project:
``` json
{
  "data": {
    "mutateAccount": {
      "id": "5264da9a-eea2-451f-8141-ac4bcf999d12",
      "name": "Grace Schlauder",
      "email": "gs1241@messiah.edu"
    }
  }
}

```

# Step 4: Creating a feature branch
- The output of my git commit log

```
Graces-MacBook-Pro:cis411_lab1_CI graceschlauder$ git log --oneline
5b9bb3e (HEAD -> labreport, origin/labreport) First Commit @trevordbunch
7490dcb (upstream/main, origin/main, origin/HEAD, main) Add Links to Node in Instructions
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
d2ddea5 Version 0.0.1 of the lab isntructions
ab312fc more progress
```
- The accompanying diagram of what my feature branch precisely and conceptually represents...

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
  
  - The config file is grabbing (and in a sense cloning) your code so that the file can read it and is then checking the code for errors. It runs a test of the code through yarn which is a package manager, and replaces any errors with new code that edits out the error. 


- What do the various sections on the config file do?  
  
  - The first section, job, encompasses the series of steps that runs in an execution environment.  
  - Next is the build section which creates the environment for the rest of the file by determining what needs will be run and setting it up. In this instance yarn is being used, so it makes sure that yarn is set up before continuing.  
  - Docker is a container platform that allows for applications to be run in an isolated environment. In this step, the circleci image version that will be used is specified.   
  - The steps section contains the collection of commands that are actaully executed in order for the job of the file to be completed. Checkout is performed in this section which checks the code from your working_directory into the file so that it can be used. Without this, the file will not have access to your code. In this section, yarn is installed and then the code is run through yarn. 
  - Restore_cache downloads the most recent cache dependency.  
  - Save_cache determines the new path for the key.
   

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
  
  - When a CI build is successful, it indicates that the code has been fully checked for errors and all of the error files passed the check.  
  - This bascially means that the code you have is correct and should work properly without breaking.
   

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
  
  - In order to take this to the next step and ready this project for Continuous Delivery, I would make sure that there is a way for this file to run automatically at a specified interval (i.e. daily, weekly, etc.). I would also make sure there is a way for the code to be sent out after going through yarn so that any edited errors can addressed as soon as possible.
   

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
