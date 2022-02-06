# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2022  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Logan Ossman  
**GitHub Handle:** loganossman 
**Repository:** https://github.com/loganossman/cis411_lab1_CI
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/loganossman/cis411_lab1_CI
- The accompanying diagram of what my fork precisely and conceptually represents...

[Forked Repository Graph](/assets/Git_Branch_v_Fork.png)

# Step 2: Clone your forked repository from the command line  
- My local file directory is /Users/loganossman/Downloads/cis411_lab1_CI
- The command to navigate to the directory when I open up the command line is... ``` cd /Users/loganossman/Downloads/cis411_lab1_CI ```

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "a43556c5-4a6d-44f5-9143-3694230b7f7d",
      "name": "LoganOssman",
      "email": "loganossman@gmail.com"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
  4444d86 (HEAD -> labreport, origin/labreport) My commit and reference to @trevordbunch in this message
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
- The accompanying diagram of what my feature branch precisely and conceptually represents...

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  

Circle CI is connecting itself to the working directory, then downloads and installs cache dependencies. It checks this by doing a test.

- What do the various sections on the config file do?  
   
All sections with a pound sign are comments, which helps to decypger each section. The jobs section holds all of the necessary actions needed to be completed by the config file. The particular job within, build, creates a docker, designates a working directory, and then downloads all of the cache dependencies. It checks the path to make sure it is clear at the end of the steps segment.

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  

Practically and precisely it means the code does not conflict with the main branch, and the code and files can be implemented without any errors. Philisophically it means you are on the right path, and you are verified for the skills that you've achieved. The build is a sturdy one, and it is strong enough for the main branch.

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  

I would likely have more tests than "does this connect to your repo". Specifically, I would make sure of spelling mistakes, and possibly ways to check for the code's validity. Can't let broken code ruin the main branch!

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
![CircleCI Success](/assets/SuccessfulBuild.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
