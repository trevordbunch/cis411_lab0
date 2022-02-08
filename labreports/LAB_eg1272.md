# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Elias Gregory
**GitHub Handle:** https://github.com/eg1272
**Repository:** https://github.com/eg1272/cis411_lab1_CI
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/eg1272/cis411_lab1_CI
![Use Case Diagram](/assets/sub.png)
- Whats unique about a fork in a DVCS is that the full repository is present on each client's computer.
  This is different than the Source Control Branch as each client has their own repository masters to 
  commit/push changes to while a simple Source Control Branch would require a strict Master.

# Step 2: Clone your forked repository from the command line  
- My local file directory is: (C:\Users\admin\Documents\GitHub\cis411_lab1_CI)
- The command to navigate to the directory when I open up the command line is: (CD C:\Users\admin\Documents\GitHub\cis411_lab1_CI)

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "1e007595-7072-45aa-be86-2cff3cec5a1b",
      "name": "Elias Gregory",
      "email": "eg1272@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
* commit dd0e47592ba7a32168dd232ca585f92879b0719f
| Author: eg1272 <98437256+eg1272@users.noreply.github.com>
| Date:   Tue Feb 8 16:07:54 2022 -0500
| 
|     Steps 1-3
| 
* commit dd5b35a0a070051adccf64abc516eaaedcad4eab
| Author: eg1272 <98437256+eg1272@users.noreply.github.com>
| Date:   Tue Feb 8 14:45:54 2022 -0500
| 
|     Created Lab Report
|     
|     @trevordbunch
|   
| * commit 1458fa437b1c6b5a4b19f81386cca1affce12f58
|/| Merge: 7490dcb 94b32d5
| | Author: eg1272 <98437256+eg1272@users.noreply.github.com>
| | Date:   Tue Feb 8 16:06:50 2022 -0500
| | 
| |     On main: !!GitHub_Desktop<main>
| | 
```
![Use Case Diagram](/assets/full.png)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing? 
	The current config.yml is determining the Version, directory, and dependencies in use. 
    Specificly, the checkout step is pulling one's code from the selected project into cricleci.


- What do the various sections on the config file do?
	The [docker] step determines the version/dependencies.
	The [working_directory] step finds the specfic directory or repo being used.
	[Checkout] grabs the code from github/the source used and saves this in cache.
	[run: yarn install] applies dependencies to the codebase.
	[save_cache] stores a cache in object storage.
	[run: yarn test] will run the script named test in one's package if one decides to define that.
   

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
	If the build was successful, CricleCI was able to grab all code from one's VCS software and compile & run that project with all it's dependencies, without running into a terminal error.
   

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)? 
	While having the build run sucessfully there is still a possibility that it is running with an unintended design/visual error. Before fully committing an actual human should take a look at the visual/execuatable output of what the project creates on the latest build that is about to be delivered.
   

# Step 6: Merging the feature branch
* The output of my git commit log
```
*   commit d274a2df55d9d80c3c7785cf39d09aca3b1802f7
|\  Merge: 7490dcb af2ea7a
| | Author: eg1272 <98437256+eg1272@users.noreply.github.com>
| | Date:   Tue Feb 8 16:43:31 2022 -0500
| | 
| |     Merge pull request #1 from eg1272/featurebranch
| |     
| |     Featurebranch
| | 
| * commit af2ea7a7304c6c42d062107646eeabacc48252d8
| | Author: eg1272 <98437256+eg1272@users.noreply.github.com>
| | Date:   Tue Feb 8 16:41:57 2022 -0500
| | 
| |     finalbeforemerge
| | 
| * commit 2e5e7f6a8275251f4b2186b057f2ec282401bc89
| | Author: eg1272 <98437256+eg1272@users.noreply.github.com>
| | Date:   Tue Feb 8 16:10:43 2022 -0500
| | 
| |     Create gitlog.txt
| | 
| * commit dd0e47592ba7a32168dd232ca585f92879b0719f
| | Author: eg1272 <98437256+eg1272@users.noreply.github.com>
| | Date:   Tue Feb 8 16:07:54 2022 -0500
| | 
| |     Steps 1-3
| | 
| * commit dd5b35a0a070051adccf64abc516eaaedcad4eab
|/  Author: eg1272 <98437256+eg1272@users.noreply.github.com>
|   Date:   Tue Feb 8 14:45:54 2022 -0500
|   
|       Created Lab Report
|       
|       @trevordbunch
| 
```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](/assets/circleci_success.png)