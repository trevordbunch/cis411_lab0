# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Corum McCuller  
**GitHub Handle:** Cmcculler1 
**Repository:** https://github.com/Cmcculler1/cis411_lab1_CI.git  
___

#  Fork this repository
- The URL of my forked repository: https://github.com/Cmcculler1/cis411_lab1_CI.git
- The accompanying diagram of what my fork precisely and conceptually represents...

![Use Case](https://docs.google.com/drawings/d/e/2PACX-1vSM21E6IrcEBCWQBCfFdIY3Kngd1a9Srk5YV8zVTyjsLpU3m6K3nM52SNMRf-j82rlTAui6_qznN01q/pub?w=1487&h=691)

#  Clone your forked repository from the command line  
- My local file directory is... /Users/cmcculler/Documents/GitHub_1
- The command to navigate to the directory when I open up the command line is...
"cd"

#  Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "f0fc27ef-1086-4025-908a-4f118ac88b60",
      "name": "Corum McCuller",
      "email": "cm1564@messiah.edu"
    }
  }
}
```

#  Creating a feature branch
- The output of my git commit log
```
ce0639e (HEAD -> labreport, origin/labreport) This is my commit @richard-pokrivka
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

```
- The accompanying diagram of what my feature branch precisely and conceptually represents...

![Use Case](https://docs.google.com/drawings/d/e/2PACX-1vRnNgh_VtCklmZyZ-v-hh268s5bQ6wPp-M60-avt5YfMlb57l2gcILTSmSC4kRhRgaaf0Gj7YN_p0pO/pub?w=960&h=720)

#  Setup a Continuous Integration configuration
- **What is the .circleci/config.yml doing?**  
It is outling what you are going to build, what the container will look like and the steps that it will actually apply.


- **What do the various sections on the config file do?**  
   The version section tells you what version of the yml file you are using. There is a section listing the jobs and the build section defienes the docker container. Which then connects to the native libarary ".circleci". The version of node also comes up in  the docker container. The steps starts with clearing the cache, checking the dependencies, it then runs the install and saves the cache, then runs the test.

- **When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?**
   If the CI build is successful, teammates can access and add to the build whenever and wherever, no matter what system they are on. All the work can be done quickly and efficently. 

- **If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?**  
In order for this project to be ready for continuous delievery, it must be certain that application changes can be released at any time and can reach every system that the project is on without any running errors.
   

#  Merging the feature branch
* The output of my git commit log
```
cd31e98 (HEAD -> main, labreport) my final commit @richard-pokrivka
3416a8b (origin/labreport) Update LAB_Cmcculler1.md
ce0639e This is my commit @richard-pokrivka
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
:


```

* A screenshot of the _Jobs_ list in CircleCI
![Use Case](https://docs.google.com/drawings/d/e/2PACX-1vSqOR4AHvXGmI3_6hbvw2TsUCShsTzLv6Wkw4bB5Hf1KR9p5yWdMjrnBRSpMpeEFVZZWddHFvSy9KHU/pub?w=960&h=720)
