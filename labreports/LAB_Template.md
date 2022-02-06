# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2022
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Nathan Bowman  
**GitHub Handle:** bowman3239  
**Repository:** cis411_lab1_Cl  
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/bowman3239/cis411_lab1_CI.git
- The accompanying diagram of what my fork precisely and conceptually represents...
![USE CASE]https://docs.google.com/drawings/d/12_4hBbUqXxL1cuBdyxCAUHSa5nHzQ5Sm_kr3GL26QRk/edit?usp=sharing 
# Step 2: Clone your forked repository from the command line  
- My local file directory is ~/OneDrive/Desktop/GIT Files/cis411_lab1_CI (labreport)
- The command to navigate to the directory when I open up the command line is "cd"

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "d1f46287-f8a1-44f3-8d46-c0bd7f225c8a",
      "name": "Nathan Bowman",
      "email": "nb1298@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
9cf2c48 (HEAD -> labreport, origin/labreport) this is my commit and reference @CMcCuller1
8f5a45d (origin/main, origin/HEAD, main) Update LAB_Template.md
7490dcb (upstream/main) Add Links to Node in Instructions
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

```
- ![USECASE]https://docs.google.com/drawings/d/e/2PACX-1vScB4oZ6AWqAcG-ZRUNM7BFR8_ggm2JlwUDSWoqfHCanl3XjNLJl4OwGg6MWLb4o1zw08w_96LoxHid/pub?w=960&h=720 

# Step 5: Setup a Continuous Integration configuration
- **What is the .circleci/config.yml doing?**  
  It will outline what they container looks like and the steps that it is going to apply.

- **What do the various sections on the config file do?**
  The version in line 5 shows what version of the yml file is being used. In this case, it is version 2. The jobs secction shows what is currently being worked on. Build is one of the defined jobs that defines the docker container. The docker container is using natives of circleci and version 10.3 of node. The steps section is used to checkout the code, restore the cache within certain keys, checking dependencies, run yarn install, save the cache, turn off the node modules, and finally run the yarn test.

- **When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?**  
  This indicates that the build is proper. It can be accepted by anyone and anyone can modify it to fit their own standards. Practically, applications can be deployed at any point. Debugging is also easier when a CI build is successful.

- **If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?**  
  Conceptually, only necessary additions that are needed to push continuous delivery. These would be modifications to the past build, theoretically making it better. Conceptually, this would be like a video game devloper making minor changes from year to year, the game is practically still the same but only small modifications were made.    

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
![CircleCI Success](https://docs.google.com/drawings/d/e/2PACX-1vQSBeC_rCtkIYldlHDPqfg75fHtPJmPTBWQ_Ioqd4lfZesGm5FHMzMydsoVWyQ-kSnaACAsDqtc1JuX/pub?w=960&h=720))

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._
