# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Adam Lenker    
**GitHub Handle:** al1412  
**Repository:** https://github.com/al1412/cis411_lab1_CI 
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/al1412/cis411_lab1_CI
- The accompanying diagram of what my fork precisely and conceptually represents...    
![Repository diagram](https://user-images.githubusercontent.com/97567307/152659491-7b8effd3-8fe3-4110-9eea-eecb96c7e7ec.jpg)


# Step 2: Clone your forked repository from the command line  
- My local file directory is ``` D:\Mario\Documents - Copy\cis411_lab1_CI ```    
- The command to navigate to the directory when I open up the command line is ``` cd cis411_lab1_CI ```

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "819dffa6-e008-496e-bfb4-2fbf5c00234e",
      "name": "Adam Lenker",
      "email": "al1412@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
069ff75 (HEAD -> labreport, origin/labreport) Lab report created @trevordbunch
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
![Branch Repository diagram](https://user-images.githubusercontent.com/97567307/152659449-932fd15e-0c4f-4902-b2d5-2d4dd1194d7e.jpg)


# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
   The config.yml file downloads and caches the dependencies, and defines the working directory and desired image being used for the process. If needed, the latest cache is installed if no exact match for certain dependencies is found. 

- What do the various sections on the config file do?  
  `version: 2` - indicates the version which will be used    
  `jobs:`- indicates what jobs need to be done    
     `build:` - indicates the build being implemented    
         `docker:` - indicates the docker container being used    
           `image: circleci/node:10.3` - indicates the desired version of image being used    
   
   `working_directory: ~/repo` - indicates the working directory that will be used for the process    

    `steps:` - indicates the steps needed to take to obtain and cache dependencies    
       `checkout`    
       `restore_cache:` - downloads and caches dependencies    
          `keys:`    
          `- v1-dependencies-{{ checksum "package.json" }}`    
          `# fallback to using the latest cache if no exact match is found`    
          `- v1-dependencies-`    
       `save_cache:` - saves the cached files    
          `paths:` - indicates the paths in which the cached files will be saved to    
            `node_modules`              
        `run: yarn test`, `run: yarn install` - run specified test(s)   
        

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
   If a CI (continuous integration) build is successful, it indicates that new code changes to an app are regularly built, tested and merged into a shared repository, allowing the build to receive all necessary changes to be considered as a "good" build.    

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
   To make the project ready for continuous delivery (CD), I would add several new lines of code which automate the CI process so that all changes can be released and deployed to the main repository.    

# Step 6: Merging the feature branch
* The output of my git commit log
```
4093dd4 (HEAD -> main, origin/labreport, labreport) Build success screenshot added
54f7bd7 Step 5 completed
9de8157 Fixed full file directory display
e8731cc Update LAB_al1412.md
7789346 Added Git log 1 output
f3700c6 Git log 1 added
0d3cb1a Syntax fixed
0f2f84f Update LAB_al1412.md
6690ec4 Added respective changes to first steps
069ff75 Lab report created @trevordbunch
7490dcb (upstream/main, origin/main, origin/HEAD) Add Links to Node in Instructions
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

* A screenshot of the _Jobs_ list in CircleCI
![buildsuccess](https://user-images.githubusercontent.com/97567307/152081886-8028f380-14d6-4011-913b-795b02b8342c.png)   


# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._    
Link to pull request: https://github.com/trevordbunch/cis411_lab1_CI/pull/33#issue-1125034638    


# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
