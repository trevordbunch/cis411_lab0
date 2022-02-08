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
| * commit 94b32d595c93d3cac889217b14b81e617375e6cb
|/  Author: eg1272 <98437256+eg1272@users.noreply.github.com>
|   Date:   Tue Feb 8 16:06:50 2022 -0500
|   
|       index on main: 7490dcb Add Links to Node in Instructions
| 
* commit 7490dcb72e4876693c0fac5236b17072897fd9ab
| Author: Trevor Bunch <38262261+trevordbunch@users.noreply.github.com>
| Date:   Wed Feb 17 17:00:15 2021 -0500
| 
|     Add Links to Node in Instructions
| 
* commit ecaaa53d74c0173e6890130407e79dfe3678e2bc
| Author: Trevor Bunch <38262261+trevordbunch@users.noreply.github.com>
| Date:   Wed Feb 17 09:27:41 2021 -0500
| 
|     Update branch terminology
|   
*   commit c552213d29a6bd24d835b77d3a7a9310bd344e29
|\  Merge: 1fe415c 78ede9f
| | Author: Trevor Bunch <38262261+trevordbunch@users.noreply.github.com>
| | Date:   Wed Feb 17 09:21:48 2021 -0500
| | 
| |     Merge pull request #3 from hallienicholas/main
| |     
| |     Error in instructions
| | 
| * commit 78ede9f664ad991f31a0860f95df94b0c17e2537
|/  Author: hallienicholas <57117680+hallienicholas@users.noreply.github.com>
|   Date:   Tue Feb 16 22:09:24 2021 -0500
|   
|       Corrected error
|   
| * commit fa4fc85daee4a43cc32b22eeb68c4bea8b76ad05
| | Author: Trevor Bunch <38262261+trevordbunch@users.noreply.github.com>
| | Date:   Thu Mar 4 19:40:45 2021 -0500
| | 
| |     Update Instructions
| | 
| * commit f8513e084de9b4533083ce998090aa69084f814e
| | Author: Trevor Bunch <38262261+trevordbunch@users.noreply.github.com>
| | Date:   Wed Feb 17 17:01:05 2021 -0500
| | 
| |     Update Node links to Instructions
| | 
| * commit d4f22eba0a615072459b2c3a1319db414e7a69e5
| | Author: Trevor Bunch <38262261+trevordbunch@users.noreply.github.com>
| | Date:   Wed Feb 17 09:26:17 2021 -0500
| | 
| |     Update repo branch names
| | 
| * commit 0e3ae4c5ad95f5ee092cd016d1d416063fb30b39
| | Author: Trevor Bunch <trevor.bunch@gmail.com>
| | Date:   Sun Feb 14 21:10:16 2021 -0500
| | 
| |     Reset purelab
| |   
| *   commit 050b420a29a90e7a2fb414c827207417bdd6eaf4
| |\  Merge: 0bd6244 1fe415c
| |/  Author: Trevor Bunch <38262261+trevordbunch@users.noreply.github.com>
|/|   Date:   Sun Feb 14 21:09:10 2021 -0500
| |   
| |       Merge pull request #2 from trevordbunch/main
| |       
| |       Push instructions into purelab
| |   
* |   commit 1fe415cfd1268df20600ada81ac76e91b7fd9c69
|\ \  Merge: 47e83cd 13e571f
| | | Author: Trevor Bunch <38262261+trevordbunch@users.noreply.github.com>
| | | Date:   Sun Feb 14 21:07:23 2021 -0500
| | | 
| | |     Merge pull request #1 from trevordbunch/labreport
| | |     
| | |     Refresh Lab Readme, Instructions and Template
| | | 
| * | commit 13e571fd053eda91ec500f3f46277846bd7bdc61
| | | Author: Trevor Bunch <trevor.bunch@gmail.com>
| | | Date:   Sun Feb 14 20:58:45 2021 -0500
| | | 
| | |     Update Lab readme, instructions and templates
| | | 
| * | commit eafe25381af1e6f0516799e8674266b413ceaf1d
|/ /  Author: Trevor Bunch <trevor.bunch@gmail.com>
| |   Date:   Sun Jan 24 16:26:33 2021 -0500
| |   
| |       Adjust submitting instructions
| | 
* | commit 47e83cd7fcbc261418be7cf14f345db995d67554
| | Author: Trevor Bunch <trevor.bunch@gmail.com>
| | Date:   Wed Sep 25 22:14:30 2019 -0400
| | 
| |     Add images to LabReport
| | 
* | commit ec187705cd0d1df05d0dd48b037788a74a047c19
| | Author: Trevor Bunch <trevor.bunch@gmail.com>
| | Date:   Wed Sep 25 22:04:10 2019 -0400
| | 
| |     Add Images
| | 
* | commit dbf826a1e8fba7c33732209db296d90311d6cdb2
| | Author: Trevor Bunch <trevor.bunch@gmail.com>
| | Date:   Wed Sep 25 21:54:57 2019 -0400
| | 
| |     Answer Step 4
| | 
* | commit a9c1de65ea284811523cb034b29c0700513a584e
| | Author: Trevor Bunch <trevor.bunch@gmail.com>
| | Date:   Wed Sep 25 21:15:28 2019 -0400
| | 
| |     Complete Step 1, 2 and 3 of LAB_TREVORDBUNCH
| | 
* | commit 1ead5433b5aea9aa3910f962a0683c562d887541
| | Author: Trevor Bunch <trevor.bunch@gmail.com>
| | Date:   Wed Sep 25 21:14:35 2019 -0400
| | 
| |     remove LAB.md
| | 
* | commit 8c386138ea1f5e6ce1fc45516dd6b63bb8e26d49
| | Author: Trevor Bunch <trevor.bunch@gmail.com>
| | Date:   Wed Sep 25 21:05:26 2019 -0400
| | 
| |     Initial commit of labreport with @tangollama
| |   
* |   commit dabceca472d4dce30bb6ede1b7fb4d177723ab02
|\ \  Merge: a4096db ce1fcea
| | | Author: Joel Worrall <tangollama@gmail.com>
| | | Date:   Fri Oct 5 08:33:49 2018 -0400
| | | 
| | |     Merge pull request #24 from tangollama/circleci
| | |     
| | |     Basic circleci config
| | | 
| * | commit ce1fceaedfea88160f91f14fe32883bb57dbd92c
| | | Author: Joel Worrall <jworrall@newrelic.com>
| | | Date:   Sat Sep 29 14:51:50 2018 -0400
| | | 
| | |     circleci default config
| | | 
| * | commit 80bbdbb9d411c2d46831e67485dfacbd27a12bdd
| | | Author: Joel Worrall <jworrall@newrelic.com>
| | | Date:   Sat Sep 29 14:46:26 2018 -0400
| | | 
| | |     circleci default config
| | | 
* | | commit a4096db370f8358eeccf61822e42cb6377b4c911
| | | Author: Joel Worrall <tangollama@gmail.com>
| | | Date:   Wed Oct 3 15:24:28 2018 -0400
| | | 
| | |     Create README.md
| | | 
* | | commit 2f01bf4ca5c8e1b68baf8b71d9e206bfe0de1f27
| | | Author: Joel Worrall <tangollama@gmail.com>
| | | Date:   Tue Oct 2 14:01:01 2018 -0400
| | | 
| | |     Update LAB_INSTRUCTIONS.md
| | | 
* | | commit 347bd503d23ef43d4c7c39f766f3b5202c56ea56
| | | Author: Joel Worrall <tangollama@gmail.com>
| | | Date:   Tue Oct 2 13:47:08 2018 -0400
| | | 
| | |     Update LAB_INSTRUCTIONS.md
| | | 
* | | commit 7aaa9f3dcd9f88e6d84652111e80eea2a7e7821a
| | | Author: Joel Worrall <tangollama@gmail.com>
| | | Date:   Tue Oct 2 13:46:00 2018 -0400
| | | 
| | |     Update LAB_INSTRUCTIONS.md
| | | 
* | | commit 37393aea1598afefe2bd26bce759a72d5505d667
| | | Author: Joel Worrall <tangollama@gmail.com>
| | | Date:   Tue Oct 2 13:38:13 2018 -0400
| | | 
| | |     Bug fixed
| | | 
* | | commit 1949d2a5bc52a56acf13a926f4a86a73b403f3bf
| | | Author: Joel Worrall <tangollama@gmail.com>
| | | Date:   Mon Oct 1 23:02:52 2018 -0400
| | | 
| | |     Update LAB_INSTRUCTIONS.md
| | | 
* | | commit d36ad9099983ba379737b07fe2c081915b369a88
| | | Author: Joel Worrall <tangollama@gmail.com>
| | | Date:   Mon Oct 1 23:01:41 2018 -0400
| | | 
| | |     Update LAB.md
| | | 
* | | commit 59ef18a7dc84b951342f55bb7b3284106566692a
| | | Author: Joel Worrall <tangollama@gmail.com>
| | | Date:   Mon Oct 1 23:01:04 2018 -0400
| | | 
| | |     Update LAB_INSTRUCTIONS.md
| | | 
* | | commit 37be3c8e14d10b0103e28adf49485a97e400e5b0
| | | Author: Joel Worrall <tangollama@gmail.com>
| | | Date:   Mon Oct 1 22:58:06 2018 -0400
| | | 
| | |     Update LAB_INSTRUCTIONS.md
| | | 
* | | commit 97da547c0458bf6809089e2389b346054a4f04be
| |/  Author: Joel Worrall <tangollama@gmail.com>
|/|   Date:   Mon Oct 1 22:55:44 2018 -0400
| |   
| |       Update LAB.md
| | 
* | commit 0bd6244c951fdeb7f5f3c008515912c317d27223
| | Author: Joel Worrall <jworrall@newrelic.com>
| | Date:   Sat Sep 29 23:47:47 2018 -0400
| | 
| |     updated Step 0 title
| | 
* | commit 4562cd8f8a1fa942e97a7cf4b434db3d777cd38a
| | Author: Joel Worrall <jworrall@newrelic.com>
| | Date:   Sat Sep 29 23:46:53 2018 -0400
| | 
| |     added npm and node install repreq
| | 
* | commit 255051e38e31db311ab45175d4e8f4a06b47b425
| | Author: Joel Worrall <jworrall@newrelic.com>
| | Date:   Sat Sep 29 23:21:55 2018 -0400
| | 
| |     adding template
| | 
* | commit 13a09b7283afae3ff7a1fa2ccd99f8d3c5bdc64a
| | Author: Joel Worrall <jworrall@newrelic.com>
| | Date:   Sat Sep 29 23:21:14 2018 -0400
| | 
| |     Adding the LAB.md and correcting some instructions.
| | 
* | commit d2ddea50da76734e3bc4ddb0c9da2edfed2e72fb
| | Author: Joel Worrall <jworrall@newrelic.com>
| | Date:   Sat Sep 29 22:59:28 2018 -0400
| | 
| |     Version 0.0.1 of the lab isntructions
| | 
* | commit ab312fc9557e323dbffeb0dca3440548800bacf8
| | Author: Joel Worrall <jworrall@newrelic.com>
| | Date:   Sat Sep 29 22:40:32 2018 -0400
| | 
| |     more progress
| | 
* | commit 62fb0a5d6dff3dba02d54ab8aa810f0e30989c3f
| | Author: Joel Worrall <jworrall@newrelic.com>
| | Date:   Sat Sep 29 22:11:32 2018 -0400
| | 
| |     more progress
| | 
* | commit fe1937baeb815e2713afa1d5dc429cd9bd617669
| | Author: Joel Worrall <jworrall@newrelic.com>
| | Date:   Sat Sep 29 19:30:09 2018 -0400
| | 
| |     more in the lab instructions
| | 
* | commit 3e807fb9856a2ed63c9111a72242d42ad349be35
| | Author: Joel Worrall <jworrall@newrelic.com>
| | Date:   Sat Sep 29 15:06:25 2018 -0400
| | 
| |     first section
| | 
* | commit 9ae6b831dd14e33850599b74fa04986a1429fe9e
| | Author: Joel Worrall <jworrall@newrelic.com>
| | Date:   Sat Sep 29 15:00:37 2018 -0400
| | 
| |     remove LAB.md
| | 
* | commit e429c1a21ba9d20831c832f10dabc47568f1db03
|/  Author: Joel Worrall <jworrall@newrelic.com>
|   Date:   Sat Sep 29 14:59:45 2018 -0400
|   
|       lab instructions
| 
* commit 968099e6a9a11711ef7bbb2e01eef584ba9af5eb
| Author: Joel Worrall <jworrall@newrelic.com>
| Date:   Sat Sep 29 14:39:37 2018 -0400
| 
|     remove test db
| 
* commit 7362cd15c6f3b1e3b8f32b1f1cd57074b279ee5f
| Author: Joel Worrall <jworrall@newrelic.com>
| Date:   Sat Sep 29 14:34:30 2018 -0400
| 
|     working
| 
* commit 44ce6aed5d8f0ca30ecc65c6062d02c98552b5fb
  Author: Joel Worrall <tangollama@gmail.com>
  Date:   Sat Sep 29 08:13:15 2018 -0400
  
      Initial commit

```
![Use Case Diagram](/assets/full.png)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing? 
	The current config.yml is determining the Version, directory, & dependencies used. Specificly
	the checkout step is pulling one's code from the project selected into cricleci.


- What do the various sections on the config file do?
	The docker step determines the version/dependencies.
	The working_directory step finds the specfic directory or repo being used.
	Checkout grabs the code from github/the source used and saves this in cache
	run: yarn install applies dependencies to the codebase
	save_cache stores a cache in object storage
	run: yarn test will run the script named test in one's package
   

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
	CricleCI was able to grab all code from one's VCS software, compile & run that project with all it's dependencies, without error.
   

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)? 
	While having the build sucessfully run there is still a possibility that it is running with an unintended design/visual error. Before fully committing an actual human should
	take a look at the visual/execuatable output of what the project executes on the latest build that is about to be delivered.
   

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



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
