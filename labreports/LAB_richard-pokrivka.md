# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2022  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Richard Pokrivka  
**GitHub Handle:** richard-pokrivka  
**Repository:** https://github.com/richard-pokrivka/cis411_lab1_CI  
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/richard-pokrivka/cis411_lab1_CI.git
- The accompanying diagram of what my fork precisely and conceptually represents ![Use Case](https://docs.google.com/drawings/d/e/2PACX-1vTi2hj6AQPitETIL2UxzkO5_ITY9nqp80yArYDq-f11Z3Gmq8VRhIPJ86xYdgD-48N3gu9jBXHem6tC/pub?w=1672&h=644)

# Step 2: Clone your forked repository from the command line  
- My local file directory is *C:\GitHub\cis411_lab1_CI*
- The command to navigate to the directory when I open up the command line is *cd*

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "11b0ec7f-b755-448b-9ac1-8b39ceee21e6",
      "name": "richard pokrivka",
      "email": "rp1291@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
b0afadc (HEAD -> labreport, origin/labreport) Sup dawgie @Cmmculler1
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
```
- The accompanying diagram of what my feature branch precisely and conceptually represents

Precise Representation
![Use Case](https://docs.google.com/drawings/d/e/2PACX-1vTtY_I_fl5RGno1D-ajNwmo6R4v1Isr6lTCECPbG4sKb9v6thpKrWqerTGx5Pc6WAcEWGIlH1iJn4R8/pub?w=1401&h=730)

*Conceptual Representation*
- The main would the forked repository that is being accessed and worked on. The feature branch would essentially be where a new branch is created. For example, in this lab the feature branch would be the labreport branch created. That branch is seperate from the main and can be edited with no fear of losing the original. When finished, it is merged and then is back on the main. This is what the diagram represents.

# Step 5: Setup a Continuous Integration configuration
**What is the .circleci/config.yml doing?** 
- .circleci is the name of the directory where config.yml is stored.

- config.yml outlines how you will build and what the container looks like and the steps it is going to apply.

**What do the various sections on the config file do?**
```
Version- specifies the version being used
Build- a defined job with the docker container
Docker- the docker container is using a native language 
circleci with the specified version- node:10.3 
Steps-First it looks at the code(checkout), then clears 
out the cache, and checks the dependencies.
Run yarn install- yarn is a meta-language.
Save_cache- saves the cache
Run test- runs a test imbedded in the application
```


**When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?** 

 - It allows errors to be detected easily and quickly and because the changes are typically small and continuously being updated into the shared repository, pinpointing a specific change that may have created an issue can be easily detected.

**If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?**

In order for the project to be ready for continous delivery, some changes include making sure there is a team to be able to work on the project at all times in case errors arise when the repository is being delivered. This would ensure fast patches and fixes would happen following releases.
   

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



