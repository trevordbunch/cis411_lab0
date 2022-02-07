# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2022  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Kylie Firestone  
**GitHub Handle:** kfirestone25  
**Starred Repository:** https://github.com/flutter/flutter  
**My Forked Repository:** https://github.com/kfirestone25/cis411_lab1_CI 
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/kfirestone25/cis411_lab1_CI 
- The accompanying diagram of what my fork precisely and conceptually represents...
  
![ForkDiagram](https://docs.google.com/drawings/d/e/2PACX-1vQjfCOIqMcQTjSUloU09xKnwXVVaqSUv2_cJQwweYv58J2xI3eJEv7GW2Jlm24WlJLtimy2xMQUFKRL/pub?w=962&h=634)

# Step 2: Clone your forked repository from the command line  
- My local file directory is... /c/GitHub
- The command to navigate to the directory when I open up the command line is... cd /c/GitHub/cis411_lab1_CI

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "4b365fa5-455f-43b9-bdf5-ad80ccaa689a",
      "name": "Kylie Firestone",
      "email": "kf1322@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
373ceb7 (HEAD -> labreport, origin/labreport) my second commit @trevorbunch
2348043 my first commit @trevordbunch
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

![FeatureBranchDiagram](https://docs.google.com/drawings/d/e/2PACX-1vSL97JQAMLUlNejXDhoUP0XDkepjnhPsfSJZl2ryzk_RSKXiVfvfciIPNWvBsxroD_868kL9HTlmMrR/pub?w=958&h=297)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
  - A standard CircleCi configuration file defines the workflows, jobs and commands for a given project. The version is also a crucial aspect that is normally listed. Our circleci/config.yml file defines the jobs and version for the cis411_lab1_CI project. It provides team members with clear-cut directions. 

- What do the various sections on the config file do?  
  - In our .circleci/config.yml file, "build" is the job name and "docker" is the executer. The working directory is then listed. The "steps" portion of the file is where we list all our commands, including run commands.  

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
   - Practically, a successful CI build shows that each subpart of the code is running without error. Therefore, the subparts can be implemented into the main code, ensuring it is ready for deplyoment into production.  Philosophically, it displays the strenght and compatibility of your team. Each one is working to a specific standard to ensure a successful build. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
   - Clear communication is most important when it comes to CI/CD. It would be helpful to outline a workflow in the configuration file. The workflow provides a straight-forward framework for the project, defining the role and interaction of each branch. Therefore, everyone is on the same page. A good workflow provides team members with direction for implementing and maintaining their individual portions of code. 

# Step 6: Merging the feature branch
* The output of my git commit log
```
24c30d8 (HEAD -> main, labreport) my final commit
373ceb7 (origin/labreport) my second commit @trevorbunch
2348043 my first commit @trevordbunch
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

```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCIScreenshot](https://docs.google.com/drawings/d/e/2PACX-1vTxdqrhBVxfVMzU-Qr25v2oTf5F0RbRoBSYc3Oxu9kqq2mZ3P-4lxohwfRI4GMbsV6xA5YdnS08zVZB/pub?w=959&h=407)
