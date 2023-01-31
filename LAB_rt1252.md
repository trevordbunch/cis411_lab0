# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Ray Truex 
**GitHub Handle:** rt1252  
**Repository:** https://github.com/rt1252/cis411_lab1_CI  
___

# Step 1: Fork this repository
- The URL of my forked repository: [rt1252 forked repo link](https://github.com/rt1252/cis411_lab1_CI)
- The accompanying diagram of what my fork precisely and conceptually represents the fact that I forked Trevor's purelab branch which means that my account now owns the same branch. The version control of whatever I do on my branch is different than what Trevor does on his branch until I make a pull request. 
 
![step_1_fork_diagram](/assets/step_1_fork_diagram.png)

# Step 2: Clone your forked repository from the command line  
- My local file directory is C:\Users\rayct\Documents\GitHub\cis411_lab1_CI
- The command to navigate to the directory when I open up the command line is cd Documents\GitHub\cis411_lab1_CI

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "71df1473-ae4f-4a6a-a2a9-f6d13d4048b7",
      "name": "Ray Truex",
      "email": "rt1252@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
6dad9f4 (HEAD -> labreport, origin/labreport) I am committing step 4 @trevordbunch
fa4fc85 (upstream/purelab, upstream/HEAD, origin/purelab, origin/HEAD, purelab) Update Instructions
f8513e0 Update Node links to Instructions
d4f22eb Update repo branch names
0e3ae4c Reset purelab
050b420 Merge pull request #2 from trevordbunch/main
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
62fb0a5 more progress
fe1937b more in the lab instructions
3e807fb first section
9ae6b83 remove LAB.md
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit

```
- The accompanying diagram of what my feature branch precisely and conceptually represents the fact that creating a new branch from the main branch copies the contents of the main branch into a new one. This allows  the developer to make experimental changes without affecting the main branch, this is helpful in case something goes wrong with the feature branch, it will not mess up the main branches contents. 
![step_4_relationship_diagram](/assets/step_4_relationship_diagram.png)

# Step 5: Setup a Continuous Integration configuration

Notes: circleci created a new branch, so I merged the circleci-project-setup branch into my labreport branch.

- What is the .circleci/config.yml doing?  

The config.yml file uses an orb which is a reusable CircleCI configuration that can be reused across projects, these include unit tests for node. When setting up CirclCI it asked what I was programming in, I selected node, so the orb contains the default test cases that it thinks that your code should be tested for if you are programming in node. 

The config.yml file uses that orb to find the use cases for node.js then creates a workflow named sample and a job named node/test. The config file allows you to change your version number and your package manager.

- What do the various sections on the config file do?  

This has changed slightly, but the unit tests that are derived from the orb are the following:

Spin up environment - CircleCI creates an environment on AWS to test the code in. If the environment is created correctly this unit test will pass. 

Preparing environment variables - CircleCI sets the environment variables such as the circle_build_url, the circle_project_name, the circle_project_username, circle_repository_url, circle_workflow_job_id, circle_working_directory, etc, etc. If the environment variables can be set this unit test will pass.

Checkout code - CircleCI clones the repo and counts and compresses the objects located in the code. Then CircleCI switches into the circleci-project-setup branch. If the objects can be found and located this unit test will pass.

Checking for package.json - CircleCI looks to see if you have package.json which is npm's configuration file, typically stored at the root of the project. If there is a package.json this unit test will pass.

Determine lockfile - CicleCI looks to see if there is a "package-lock.json" file. This file is important because when using a fresh install of nmp the lock file serves as a file that says exactly what versions of each dependency should be installed. If there is a lock file the unit test will pass.

Resolving cache - CircleCI checks three keys to see if a cache is found. If a cache is found it can be restored which uses saved dependencies which helps speed up build, this eliminates the need to re-download and re-install dependencies. If there are no caches or if they are restored this unit test will pass.

Installing NPM packages - I recognized this output right away, this is the same output that I saw when installing npm. This unit test runs 'npm install' which shows the output which could tell you that you are using oldlockfiles or have vulnerabilities. If npm is installed this unit test will pass.

Saving cache - CicleCI stores the cache so packages do not need to be re-downloaded or re-installed in the future. If the cache can be stored correctly this unit test will pass.

Run NPM tests - CIrcleCI runs the tests that are defined in the projects package.json file by using the command npm test. If the tests pass this unit test will pass.

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
  
When a CI build is successful it indicates that the build process was able to be completed error free. This means that the code that has been developed and is of high enough quality to pass the needed requirements. Practically this means that the code is ready to continue through the project pipeline. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
   
I would edit the package.json file to include specific unit tests for the project, these might be more specific to the project itself to ensure that the code is able to complete the task that it was designed to complete. 

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
