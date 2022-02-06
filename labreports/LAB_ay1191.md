# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Your Name  
**GitHub Handle:** Your GitHub Handle  
**Repository:** Your Forked Repository  
___

# Step 1: Fork this repository
- The URL of my forked repository: ENTER URL HERE
- The accompanying diagram of what my fork precisely and conceptually represents...

![Fork Repository Diagram](/assets/ForkRepo.svg)

# Step 2: Clone your forked repository from the command line  
- My local file directory is...
- The command to navigate to the directory when I open up the command line is...

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "e34ecf0a-1917-4434-81df-378cbad9cfbb",
      "name": "Azianna Yang",
      "email": "ay1191@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
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
- 
  ![Branch Repository Diagram](/assets/Branch_Relationship.svg)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
```
This file contains all the configuration settings that are needed to deploy your cluster.
```

- What do the various sections on the config file do?  
   ```
   The Docker section is a list of the Docker images that are pulled
   from Docker Hub by the installer during the IBM Cloud Private-CE
   installation process. Essentially it is a library of pre-built images.

   Working directory is my repository.

   Without the checkout step, CircleCI doesn't have my code. Without the code, it can't run tests, complie my code, nor deploy my code.

   Restore cache step with the dependencies allow me to fall back on the latest cache.

   Yarn is an open-source package manager for JavaScript. The packages it installs can be cached. This could speed up and improvie CI build times and it also reduces errors related to network connectivity.

   Saving the cache make the jobs faster on CircleCI. It reuses the data from previous jobs and it also reduces the cost of fetch operations. Caching is about achieving balance between reliability and getting maximum performance. By adding a save_cache step in .circleci/config.yml file, it saves a cache of a file or directory.

   ```

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
 ```
 Successful CI means new code changes to an app are regulary built, tested, and merged to a shared repository.
 ```

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  

```
I would include validation parameters. I would also add security parameters.
```
   

# Step 6: Merging the feature branch
* The output of my git commit log
```
43cc63b (HEAD -> main, labreport) Continous Integration Lab
33ae69c Continuous Integration Lab
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
```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](/assets/circleci_success.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
