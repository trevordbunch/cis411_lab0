# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2023  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Tim Kratz  
**GitHub Handle:** timkratz  
**Repository:** https://github.com/timkratz/cis411_lab1_CI.git  
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/timkratz/cis411_lab1_CI.git
- The accompanying diagram of what my fork precisely and conceptually represents
  
![CircleCI Success](../assets/Image2.jpg)

# Step 2: Clone your forked repository from the command line  
- My local file directory is /Users/timkratz/cis411_lab1_CI 
- The command to navigate to the directory when I open up the command line is.
```
cd /Users/timkratz/cis411_lab1_CI
```

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "78c380bc-bee6-48fa-9d07-45e769de82fb",
      "name": "TIM KRATZ",
      "email": "tk1264@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
623ffde (HEAD -> labreport, origin/labreport) First Commit @trevordbunch
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
:
```
- The accompanying diagram of what my feature branch precisely and conceptually represents...
  
![CircleCI Success](../assets/Image3.jpg)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
  -It is specifying the steps going on in the code. It shows the things that need to be done when a change is pushed to the code.  


- What do the various sections on the config file do?  
  -The version section specifies the version of the file that you are using. The build section defines the job and the tasks that need to be executed with the job. 
   

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
  -This means that the code changes have been tested and passed all of the steps with no errors. Practically speaking, this means that all of the tests were passed without failing and that each subpart of the code is runnng. Philosophically speaking, this means that the team was able to work together to keep moving along in the build. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
  -I would try to cater the configuration more towards my project and make it specific to what I am doing. I would look to monitor the performance of the code and how it is doing. 
   

# Step 6: Merging the feature branch
* The output of my git commit log
```
60d538c (HEAD -> purelab) Merge branch 'labreport' into purelab
715ed0a (origin/purelab, origin/circleci-project-setup, origin/HEAD, circleci-project-setup) Add .circleci/config.yml
3890fab (origin/labreport, labreport) First try  @trevordbunch
94babae (upstream/purelab, upstream/HEAD) Merge pull request #59 from JeffSinsel/purelab
2e92bd8 Fixed typos and links in markdown files
fa4fc85 Update Instructions
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

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](../assets/Jobs.jpg)

