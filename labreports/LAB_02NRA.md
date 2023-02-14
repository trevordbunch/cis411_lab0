# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Nason Allen  
**GitHub Handle:** 02NRA  
**Repository:** https://github.com/02NRA/cis411_lab1_CI
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/02NRA/cis411_lab1_CI
- The accompanying diagram of what my fork precisely and conceptually represents
![Lab Fork](../assets/Lab_Fork.png)

# Step 2: Clone your forked repository from the command line  
- My local file directory is Documents/GitHub/cis411_lab1_CI/

- The command to navigate to the directory when I open up the command line is

```
cd Documents/GitHub/cis411_lab1_CI/
```

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "5a3bd5c2-ff55-4e96-836b-6b638dfcbb46",
      "name": "Nason Allen",
      "email": "na1205@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log

(I accidentally closed the shell before copying, but had screenshots)

![CircleCI Success](../assets/Branch_create.png)

![CircleCI Success](../assets/Branch_create2.png)

- The accompanying diagram of what my feature branch precisely and conceptually represents
![Branches](../assets/Branch_and_features.png)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  

The config file allows circleci to create testing environments using Ubuntu, and testing cases (called jobs) specific to your application.

- What do the various sections on the config file do?  
   
There are comments inside the config file to explain itself, but 
- The file opens with a version of circleci, in a similar position to other files's import statements.
- Any number of jobs are described/defined, each with its own name, and step-by-step instructions.
- Each step can have a name and a set of commands.
- The file then descibes/defines a series of workflows, each of which is named and contains a set of jobs.

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
   
It means that the build (whatever code is being tested) has no critical errors/errors that are not handled, and that it is ready for deployment.

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
   
I would create more testing environments, all slightly different, to ensure that my project was stable in less planned and sterile contexts.

# Step 6: Merging the feature branch
* The output of my git commit log
```
 Nason@Kritchs-Blade MINGW64 ~/Documents/GitHub/cis411_lab1_CI (cis411_lab1_CI)
$ git log  --oneline
f3c2c1c (HEAD -> cis411_lab1_CI, origin/cis411_lab1_CI) Initial commit of labreport.md @trevordbunch
94babae (upstream/purelab, upstream/HEAD, origin/purelab, origin/HEAD, purelab) Merge pull request #59 from JeffSinsel/purelab
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

Nason@Kritchs-Blade MINGW64 ~/Documents/GitHub/cis411_lab1_CI (cis411_lab1_CI)
$ git log --oneline
2a522a3 (HEAD -> cis411_lab1_CI, origin/cis411_lab1_CI) Update config.yml
c5b08bb Update config.yml
28996ed Update config.yml
aa0cf15 Update config.yml
533d88b Update config.yml
b88cb62 Merge branch 'cis411_lab1_CI' of https://github.com/02NRA/cis411_lab1_CI into cis411_lab1_CI
b0675c0 Update config.yml
df183c3 YAML fix
32899ad Updated config.yml
452e710 Updated config.yml
df14610 Updated config.yml
4faeac0 Final Commit
c9a5ddf final commit
f3c2c1c Initial commit of labreport.md @trevordbunch
94babae (origin/purelab, origin/HEAD, purelab) Merge pull request #59 from JeffSinsel/purelab
2e92bd8 Fixed typos and links in markdown files
fa4fc85 Update Instructions
f8513e0 Update Node links to Instructions
d4f22eb Update repo branch names
0e3ae4c Reset purelab
050b420 Merge pull request #2 from trevordbunch/main
:...skipping...
2a522a3 (HEAD -> cis411_lab1_CI, origin/cis411_lab1_CI) Update config.yml
c5b08bb Update config.yml
28996ed Update config.yml
aa0cf15 Update config.yml
533d88b Update config.yml
b88cb62 Merge branch 'cis411_lab1_CI' of https://github.com/02NRA/cis411_lab1_CI into cis411_lab1_CI
b0675c0 Update config.yml
df183c3 YAML fix
32899ad Updated config.yml
452e710 Updated config.yml
df14610 Updated config.yml
4faeac0 Final Commit
c9a5ddf final commit
f3c2c1c Initial commit of labreport.md @trevordbunch
94babae (origin/purelab, origin/HEAD, purelab) Merge pull request #59 from JeffSinsel/purelab
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
:
2a522a3 (HEAD -> cis411_lab1_CI, origin/cis411_lab1_CI) Update config.yml
c5b08bb Update config.yml
28996ed Update config.yml
aa0cf15 Update config.yml
533d88b Update config.yml
b88cb62 Merge branch 'cis411_lab1_CI' of https://github.com/02NRA/cis411_lab1_CI into cis411_lab1_CI
b0675c0 Update config.yml
df183c3 YAML fix
32899ad Updated config.yml
452e710 Updated config.yml
df14610 Updated config.yml
4faeac0 Final Commit
c9a5ddf final commit
f3c2c1c Initial commit of labreport.md @trevordbunch
94babae (origin/purelab, origin/HEAD, purelab) Merge pull request #59 from JeffSinsel/purelab
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
![CircleCI Success](../assets/circleci_revised.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project