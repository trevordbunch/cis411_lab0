# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Joshua Phillips  
**GitHub Handle:** jp1478  
**Repository:**  cis411_lab1_CI
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/jp1478/cis411_lab1_CI
- The accompanying diagram of what my fork precisely and conceptually represents...
  ![ForkDiagram](../assets/RepoDiagram.jpg)


# Step 2: Clone your forked repository from the command line  
- My local file directory is: C:\Users\gltig\OneDrive\Documents\GitHub\cis411_lab1_CI
- The command to navigate to the directory when I open up the command line is: cd OneDrive\Documents\GitHub\cis411_lab1_CI

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "516a02bd-9df3-417c-838d-325d24b04da7",
      "name": "Joshua Phillips",
      "email": "jp1478@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
553d88f (HEAD -> labreport, origin/labreport) first commit @trevordbunch
fa4fc85 (origin/purelab, origin/HEAD, purelab) Update Instructions
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
- The accompanying diagram of what my feature branch precisely and conceptually represents...
  ![BranchDiagram](../assets/BranchDiagram.jpg)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
    - It is defining a list of tests to perform on a project before sending it to production. 

- What do the various sections on the config file do?  
   - jobs
     - This section defines the jobs that CircleCI needs to run to make sure that the project is ready for production. 
     - It currently contains only the say-hello job
   - workflows
     - This section defines workflows, which are series of jobs. 
     - This is useful because it can simulate the progression of actions that would be performed in a certain use case. 

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
    - It means that there are no errors with the current build and it is ready for production. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
   - I would add more jobs and workflows to the config file to test as many aspects of the project as possible. 

# Step 6: Merging the feature branch
* The output of my git commit log
```
415cefe (HEAD -> main) Merge branch 'labreport' Preparing to submit
34def11 (labreport) Commit before log
3ff8f9e Commit 2
915d434 (origin/labreport) Created circleci folder and config
553d88f first commit @trevordbunch
fa4fc85 (origin/purelab, origin/HEAD, purelab) Update Instructions
f8513e0 Update Node links to Instructions
7490dcb (upstream/main) Add Links to Node in Instructions
ecaaa53 Update branch terminology
d4f22eb Update repo branch names
c552213 Merge pull request #3 from hallienicholas/main
78ede9f Corrected error
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
(END)
```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](../assets/circleCI.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
