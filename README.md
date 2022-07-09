# Data-Analyst

This Programming Project has the aim to create an Web Application to analyse sets of data in multiple forms.
The Data Analyst will be able to create Diagrams, Graphs, Tables.
Animations will help to visualize data.

---

# Installation

Before continuing, make sure to have python installed <br>

<details>
<summary>
Activate a virtual environment
</summary>

### This step keeps depencies inside the project<br>

Run in any folder where you want the project to be:

```
python -m venv
```

Activate the virtual environment, run:

```
.\.venv\Scripts\Activate.ps1
```

You should now see a (.venv) in front of your current directory in the terminal like this: `(.venv) PS D:\Programming\Projects\Data-Analyst> `

</details>

<details>
<summary>
Clone the git repository
</summary>

### This step downloads the Project from the Remote Repository to your local machine

Run in the parent folder of the virtual environment

```
git clone https://github.com/D4veDev/Data-Analyst.git
```

</details>

<details>
<summary>
Install Python Modules
</summary>

### This step installs all the Python Modules in the requirements.txt file

Change your directory into the Data_Analyst Folder

```
cd Data_Analyst
```

Install Modules

```
python -m pip install -r "requirements.txt"
```

</details>

<details>
<summary>
Install NodeJs (If already installed, skip this step)
</summary>

### Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

0. Check if your have NodeJs already installed by typing `node -v` into a CLI. If an error occurs, follow following steps.
1. Go to: https://nodejs.org/en/
2. Download executable that is suitable for your operating system
3. Execute file and follow instuctions until finished
4. Make sure NodeJS is located in your Path. If not, add: `C:\Program Files\nodejs\`

</details>

<details>
<summary>
Install Dependencies
</summary>

### This step installs all necessary dependencies into your virtual environment to make the project work

Change your directory to

```
cd .\Data_Analyst\frontend\
```

run following command:

```
npm install
```

It is possible that warnings and/or errors occur, in that case, try to find a solution online.

</details>

<details>
<summary>
Add a secret key to your project
</summary>

### A secret key is use for making hashes and has to be kept private

Change your directory to the Data_Analyst Folder, the same level as requirements.txt

create a `.env` file

copy following text into the file:

```
SECRET_KEY = 'YOUR SECRET KEY HERE`
```

go to https://django-secret-key-generator.netlify.app/ and copy the generated secret key

replace your secret key instead of `YOUR SECRET KEY HERE`

save the file

</details>

<details>
<summary>
Run the project
</summary>

### This step will create a devserver on your local machine

1. change your directory into the frontend folder, inside Data_Analyst

run the dev command, which is located inside `package.json` and bundles all files using webpack in development mode

```
npm run dev
```

2. change directory into the parent folder and run the following command:

```
python .\manage.py runserver
```

this will start a development server using Django

3. go to http://127.0.0.1:8000/

</details>

---

# Contributing

Anyone is welcome to contribute, before doing so, please contact me on Discord: `DaveDev#8042` and i'd love to have a chat with you.

---
